import apiClient from '../../../../api/axios'

export const getFilters = () => {
  return apiClient.get('/filters')
}