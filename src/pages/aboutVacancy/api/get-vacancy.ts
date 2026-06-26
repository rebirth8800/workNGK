import apiClient from '@/shared/api/axios.ts'

export const getVacancy = (id) => {
  return apiClient.get(`/vacancies/${id}`)
}