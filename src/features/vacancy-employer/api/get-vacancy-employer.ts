import apiClient from '@/shared/api/axios'

type Params = {
  page: Number,
  per_page: Number,
}

export const getVacancyEmployer = (id:string, params: Params) => {
  return apiClient.get(`/profile/employer/${id}/vacancies`, {params: params})
}