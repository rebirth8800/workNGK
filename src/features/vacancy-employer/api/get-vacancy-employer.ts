import apiClient from '@/shared/api/axios'

type Params = {
  page: Number,
  per_page: Number,
}

export const getVacancyEmployer = (params: Params) => {
  return apiClient.get('/profile/employer/vacancies', {params: params})
}