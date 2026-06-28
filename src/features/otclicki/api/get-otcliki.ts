import apiClient from '@/shared/api/axios'

type Params = {
  page: Number,
  per_page: Number,
}

export const getOtcliki = (id: string, params: Params) => {
  return apiClient.get(`/profile/student/${id}/vacancies`, {params: params})
}