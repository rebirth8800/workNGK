import apiClient from '@/shared/api/axios'



export const deleteEmployer = (id: string) => {
  return apiClient.delete(`/admin/employers/${id}`)
}