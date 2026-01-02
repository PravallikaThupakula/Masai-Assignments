import { auth } from "../lib/firebase"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"

export const signupUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}

export const logoutUser = () => {
  return signOut(auth)
}
