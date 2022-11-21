import { useEffect, useCallback, useState } from 'react'
import { getFirebaseAuth } from 'utils/firebase'

import { useAuth } from '..'
import { handlePromptResponse } from './utils/handle-prompt-response'

const CLIENT_ID = process.env.NEXT_PUBLIC_FIREBASE_CLIENT_ID

const useGoogleProvider = () => {
  const { isAuthenticated, isLoadingInitial } = useAuth()
  const [isGoogleLoaded, setIsGoogleLoaded] = useState(false)

  const promptOneTapLogin = useCallback(() => {
    if (!isGoogleLoaded || isAuthenticated || isLoadingInitial) return
    google.accounts.id.prompt(handlePromptResponse)
  }, [isAuthenticated, isLoadingInitial, isGoogleLoaded])

  const cancelOneTapLogin = useCallback(() => google.accounts.id.cancel(), [])

  useEffect(() => {
    promptOneTapLogin()
  }, [isAuthenticated, isLoadingInitial, isGoogleLoaded, promptOneTapLogin])

  useEffect(() => {
    if (isAuthenticated && isGoogleLoaded) cancelOneTapLogin()
  }, [isAuthenticated, isGoogleLoaded, cancelOneTapLogin])

  // Response handler for one tap login
  const handleCredentialResponse = useCallback(
    async ({ credential: idToken }) => {
      const { auth, GoogleAuthProvider, signInWithCredential } =
        await getFirebaseAuth()

      try {
        const credential = GoogleAuthProvider.credential(idToken)
        await signInWithCredential(auth, credential)
      } catch (error) {
        GoogleAuthProvider.credentialFromError(error)
        console.error('Failed to sign in user with Google one tap: ', error)
      }
    },
    []
  )

  useEffect(() => {
    try {
      window.onGoogleLibraryLoad = () => {
        google.accounts.id.initialize({
          client_id: CLIENT_ID,
          callback: handleCredentialResponse,
        })
        setIsGoogleLoaded(true)
      }
    } catch (error) {
      console.error(error)
    }
  }, [handleCredentialResponse])

  // Redirect user to Google for login.
  const onSignInWithRedirect = useCallback(async () => {
    if (isLoadingInitial || isAuthenticated) return

    try {
      cancelOneTapLogin()
      const { auth, GoogleAuthProvider, signInWithRedirect } =
        await getFirebaseAuth()
      const provider = new GoogleAuthProvider()
      await signInWithRedirect(auth, provider)
    } catch (error) {
      console.error('Failed to sign in with redirect: ', error)
    }
  }, [isLoadingInitial, cancelOneTapLogin, isAuthenticated])

  return {
    onSignInWithRedirect,
  }
}

export default useGoogleProvider
