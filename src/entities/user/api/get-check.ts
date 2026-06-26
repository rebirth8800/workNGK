import apiClient from '../../../../api/axios'


export const getCheck = () => {
  return apiClient.get('/profile/me')
}