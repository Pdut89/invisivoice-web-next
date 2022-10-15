import {
  createContext,
  useEffect,
  useContext,
  useState,
  useCallback,
} from 'react'
import { getFirebaseAuth } from 'utils/firebase'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [isLoadingInitial, setIsLoadingInitial] = useState(true)
  const [user, setUser] = useState(null)

  const handleAuthStateChange = useCallback(async (user) => {
    try {
      if (user) {
        const { uid, email, emailVerified } = user
        setUser({ uid, email, emailVerified })
      } else {
        setUser(null)
      }
    } catch (error) {
      console.error('Firebase auth state change error: ', error)
    } finally {
      setIsLoadingInitial(false)
    }
  }, [])

  useEffect(() => {
    let unsubscriber
    const loadFirebase = async () => {
      try {
        const { auth, onAuthStateChanged } = await getFirebaseAuth()
        unsubscriber = onAuthStateChanged(auth, handleAuthStateChange)
      } catch (error) {
        console.error('Failed to load Firebase: ', error)
      }
    }
    loadFirebase()

    return () => unsubscriber && unsubscriber()
  }, [handleAuthStateChange])

  return (
    <AuthContext.Provider
      value={{ isLoadingInitial, user, isAuthenticated: !!user?.uid }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider

AuthProvider.defaultProps = {
  config: {},
}
