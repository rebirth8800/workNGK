import {generateEmployer, generateStudent} from '@/msw/date/generateUsers.ts'

let users = []
users.push(...generateStudent((3)))
users.push(...generateEmployer(3))

export const RegisterEmployer = (data)=>{
  const id = users.at(-1).id + 1
  data.id = id
  data.status = 'На модерации'
  users.push(data)
  return {
    message: "Заявка на регистрацию успешно отправлена, ожидайте её рассмотрения"
  }
}