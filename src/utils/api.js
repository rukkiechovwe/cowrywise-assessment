import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Accept-Version': 'v1',
    Authorization: `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`
  }
})

api.interceptors.request.use((config) => {
  return config
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export const get = async (url) => {
  try {
    const response = await api.get(url)
    console.log(response.data)
    return { data: response.data }
  } catch (error) {
    console.log(error)

    return { error }
  }
}

export default api
