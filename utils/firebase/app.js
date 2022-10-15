import config from 'config/firebase'
import { initializeApp, getApps } from 'firebase/app'
import { initializeAnalytics } from 'firebase/analytics'

let firebaseApp

if (getApps().length) {
  firebaseApp = getApps()[0]
} else {
  firebaseApp = initializeApp(config)

  if (config.measurementId) {
    initializeAnalytics(firebaseApp, {
      send_page_view: true,
      page_title: window.location.pathname,
      page_location: window.location.pathname,
    })
  }
}

export const app = firebaseApp
