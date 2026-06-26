import apiClient from '@/shared/api/axios.ts'

export const getFilters = () => {
  return apiClient.get('/filters')
}