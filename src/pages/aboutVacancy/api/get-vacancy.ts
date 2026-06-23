import apiClient from '../../../../api/axios'

export const getVacancy = (id) => {
  return apiClient.get(`/vacancies/${id}`)
}