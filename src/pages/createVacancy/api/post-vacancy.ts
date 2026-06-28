import apiClient from '@/shared/api/axios.ts'

export const postVacancy = (data) => {
  return apiClient.post(`/vacancies/`, { data })
}

