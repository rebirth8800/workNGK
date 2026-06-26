import apiClient from '../../../../api/axios.ts'

export const getNewVacancy = () => {
  return apiClient.get('/vacancies/new')
}