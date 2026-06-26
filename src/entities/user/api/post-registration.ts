import apiClient from '../../../../api/axios.ts'

type EmployerType = {
  company: String,
  firstName: String,
  lastName: String,
  middleName: String,
  email: String,
  phone: String,
  password: String,
}

export const postRegistrationEmployer = (data: EmployerType) => {
  return apiClient.post('/profile/registration', { data })
}

export const postRegistrationStudent = (data: EmployerType) => {
  return apiClient.post('/profile/registration', { data })
}