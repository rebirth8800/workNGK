import apiClient from '@/shared/api/axios.ts'

type Token = {
  accessToken: string
}

export const getCheck = (data: Token) => {
  return apiClient.get('/profile/me', { params: { data } })
}