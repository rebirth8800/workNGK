import apiClient from '@/shared/api/axios.ts'

export const getSorts = () => {
  return apiClient.get('/sorts')
}