import apiClient from '../../../../api/axios'

type Params = {
  page: Number,
  per_page: Number,
}

export const getOtcliki = (params: Params) => {
  return apiClient.get('/profile/student/vacancies', {params: params})
}