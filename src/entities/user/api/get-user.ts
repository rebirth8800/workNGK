import apiClient from '@/shared/api/axios.ts'

type Params = {
  id: Number,
}

export const getUser = (params: Params) => {
  return apiClient.get('/profile/user', {params: params})
}