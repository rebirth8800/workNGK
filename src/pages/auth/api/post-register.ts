import apiClient from '../../../../api/axios'

type RegistorType = {
  company: String,
  firstName: String,
  lastName: String,
  middleName: String,
  email: String,
  phone: String,
  password: String,
}

export const postRegister = (data: RegistorType) => {
  return apiClient.post('/profile', { data })
}