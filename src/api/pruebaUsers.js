import axios from 'axios'

const apiUsers = axios.create({
  baseURL: 'http://localhost:3000/users'
})

export default apiUsers