// import { useQuery } from "@tanstack/react-query"
import apiUsers from "../api/pruebaUsers"

// const addUser = async (user) => {
//   try {
//     await apiUsers.post('/', user)
//   } catch (err) {
//     console.log(err)
//   }
// }
export const createUser = async (user) => apiUsers.post('/', user)