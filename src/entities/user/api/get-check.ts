import apiClient from '@/shared/api/axios.ts'


export const getCheck = () => {
  return apiClient.get('/profile/me')
}