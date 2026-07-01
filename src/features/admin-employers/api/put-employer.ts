import apiClient from '@/shared/api/axios'



export const putEmployer = (id: string, status: string) => {
  return apiClient.put(`/admin/employers/${id}`, status)
}