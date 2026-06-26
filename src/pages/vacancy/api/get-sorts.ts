import apiClient from '../../../../api/axios.ts'

export const getSorts = () => {
  return apiClient.get('/sorts')
}