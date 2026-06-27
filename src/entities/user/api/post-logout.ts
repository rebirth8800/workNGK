import apiClient from '@/shared/api/axios.ts'


export const logout = () => {
  return apiClient.post('/profile/logout')
}
