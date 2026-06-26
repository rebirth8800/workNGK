import apiClient from '@/shared/api/axios.ts'

type LoginType = {
  email: String,
  password: String,
}

export const login = (data: LoginType) => {
  return apiClient.post('/profile/login', { data })
}
