import apiClient from '../../../../api/axios'

export const getSorts = () => {
  return apiClient.get('/sorts')
}