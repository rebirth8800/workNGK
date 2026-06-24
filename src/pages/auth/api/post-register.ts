import apiClient from '../../../../api/axios'

type EmployerType = {
  company: String,
  firstName: String,
  lastName: String,
  middleName: String,
  email: String,
  phone: String,
  password: String,
}

export const postRegisterEmployer = (data: EmployerType) => {
  return apiClient.post('/profile', { data })
}

export const postRegisterStudent = (data: EmployerType) => {
  return apiClient.post('/profile', { data })
}