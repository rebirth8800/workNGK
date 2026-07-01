import apiClient from '@/shared/api/axios'



export const putVacancy = (id: string, status: string) => {
  return apiClient.put(`/admin/vacancies/${id}`, status)
}