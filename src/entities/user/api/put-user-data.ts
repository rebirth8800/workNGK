import apiClient from '@/shared/api/axios.ts'

type Params = {
  first_name: string,
  last_name: string,
  middle_name: string,
  phone: string,
  category?: string,
  course?: number,
  company_name?: string,
  position?: string,
}

export const putUserData = (id: string, data: Params) => {
  return apiClient.put(`/profile/user/${id}`, data)
}