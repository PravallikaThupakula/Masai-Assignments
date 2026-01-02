import { db } from "../lib/firebase"
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore"

const todosRef = collection(db, "todos")

export const createTodo = (userId, title) => {
  return addDoc(todosRef, {
    title,
    completed: false,
    userId,
    createdAt: new Date(),
  })
}

export const getTodos = async (userId) => {
  const q = query(todosRef, where("userId", "==", userId))
  const snapshot = await getDocs(q)

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
}

export const updateTodo = (id, title) => {
  return updateDoc(doc(db, "todos", id), { title })
}

export const toggleTodo = (id, completed) => {
  return updateDoc(doc(db, "todos", id), { completed })
}

export const deleteTodo = (id) => {
  return deleteDoc(doc(db, "todos", id))
}

