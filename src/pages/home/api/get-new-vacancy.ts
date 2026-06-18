import apiClient from '../../../../api/axios'

export const getNewVacancy = () => {
  return apiClient.get('/vacancies/new')
}