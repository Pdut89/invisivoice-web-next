import { useCallback } from 'react'
import { getFirestoreMethods } from 'utils/firebase/firestore'

const useFirestoreMethods = () => {
  const addData = useCallback(async (collectionName, data) => {
    const { addDoc, db, collection } = await getFirestoreMethods()
    await addDoc(collection(db, collectionName), data)
  }, [])
  const getData = useCallback(async (collectionName) => {
    const fetchAndExtract = async () => {
      const { getDocs, db, collection } = await getFirestoreMethods()
      const { empty, metadata, size, docs } = await getDocs(
        collection(db, collectionName)
      )
      return {
        data: docs.map((doc) => doc.data()),
        count: size,
        isEmpty: empty,
        metadata,
      }
    }
    return await fetchAndExtract()
  }, [])
  return { addData, getData }
}

export default useFirestoreMethods
