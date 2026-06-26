import apiClient from '../../../../api/axios.ts'

export const getFilters = () => {
  return apiClient.get('/filters')
}