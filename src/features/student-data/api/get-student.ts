import apiClient from '../../../../api/axios'

type Params = {
  id:Number,
}

export const getStudent = (params: Params) => {
  return apiClient.get('/profile/student/data', {params: params})
}