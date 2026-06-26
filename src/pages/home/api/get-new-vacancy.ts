import apiClient from '@/shared/api/axios.ts'

export const getNewVacancy = () => {
  return apiClient.get('/vacancies/new')
}