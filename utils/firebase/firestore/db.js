export { addDoc, getDocs, collection, query } from 'firebase/firestore'

import { getFirestore } from 'firebase/firestore'
import { app } from '../app'
export const db = getFirestore(app)
