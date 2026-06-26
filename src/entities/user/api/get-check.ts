import apiClient from '../../../../api/axios.ts'


export const getCheck = () => {
  return apiClient.get('/profile/me')
}