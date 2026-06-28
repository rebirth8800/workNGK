import apiClient from '@/shared/api/axios'

type Params = {
  page: Number,
  per_page: Number,
}

export const getAdminVacancy = (params: Params) => {
  return apiClient.get(`/admin/vacancies`, {params: params})
}