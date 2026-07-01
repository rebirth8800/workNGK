import apiClient from '@/shared/api/axios.ts'

type LoginType = {
  email: String,
  password: String,
}

export const login = (data: LoginType) => {
  console.log(data)
  return apiClient.post('/profile/login', { data })
}
