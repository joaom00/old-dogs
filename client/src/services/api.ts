import axios, { AxiosError } from 'axios'

const token = localStorage.getItem('@Dogs:token')

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization: `Bearer ${token}`
  }
})

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const invalidJWT = error.response?.data.message === 'Invalid JWT token'
    if (error.response?.status === 401 && invalidJWT) {
      localStorage.removeItem('@Dogs:token')
      return Promise.reject(error)
    }
    return Promise.reject(error)
  }
)

export default api
