import Script from 'next/script'
import {
  createContext,
  useEffect,
  useContext,
  useState,
  useCallback,
  useMemo,
} from 'react'
import { getFirebaseAuth } from 'utils/firebase'

const AuthContext = createContext({})

export const AuthProvider = ({ children, config: { providers = {} } }) => {
  const [isLoadingInitial, setIsLoadingInitial] = useState(true)
  const [user, setUser] = useState(null)

  const withGoogle = providers.google?.clientId

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

  const GoogleScript = useMemo(() => {
    if (!withGoogle) return null
    return (
      <Script
        id="google-one-tap-script"
        strategy="afterInteractive"
        src="https://accounts.google.com/gsi/client"
        onError={(error) => {
          console.error('Google one tap script failed to load: ', error)
        }}
      />
    )
  }, [withGoogle])

  return (
    <AuthContext.Provider
      value={{
        isLoadingInitial,
        user,
        isAuthenticated: !!user?.uid,
      }}
    >
      {GoogleScript}
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider

AuthProvider.defaultProps = {
  config: {},
}
