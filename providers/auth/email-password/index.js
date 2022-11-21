import { useCallback } from 'react'
import { getFirebaseAuth } from 'utils/firebase'

const useEmailPasswordProvider = () => {
  const onCreateUser = useCallback(async ({ email, password }) => {
    const { auth, createUserWithEmailAndPassword, sendEmailVerification } =
      await getFirebaseAuth()

    await createUserWithEmailAndPassword(auth, email, password)

    const actionCodeSettings = {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}?email=` + email,
    }

    await sendEmailVerification(auth.currentUser, actionCodeSettings)
  }, [])

  const onSignIn = useCallback(async ({ email, password }) => {
    const { auth, signInWithEmailAndPassword } = await getFirebaseAuth()
    return signInWithEmailAndPassword(auth, email, password)
  }, [])

  const onSignOut = useCallback(async () => {
    const { auth, signOut } = await getFirebaseAuth()
    return signOut(auth)
  }, [])

  const onSendResetLink = useCallback(async (email) => {
    const { auth, sendPasswordResetEmail } = await getFirebaseAuth()
    const actionCodeSettings = {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/?email=` + email,
    }
    await sendPasswordResetEmail(auth, email, actionCodeSettings)
  }, [])

  return {
    onSignIn,
    onSignOut,
    onCreateUser,
    onSendResetLink,
  }
}

export default useEmailPasswordProvider
