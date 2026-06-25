import {generateEmployer, generateStudent} from '@/msw/date/generateUsers.ts'
import { generateToken } from '@/msw/date/auth/token.ts'
import { setCookie } from '@/msw/date/auth/cookies.ts'
import { HttpResponse } from 'msw'

let users = []
users.push(...generateStudent((3)))
users.push(...generateEmployer(3))

export const RegisterEmployer = (data)=>{

  for(let user of users){
    if (user.email === data.email){
      return {
        success: false, message: 'Пользователь с таким email уже существует'
      }
    }
  }

  const id = users.at(-1).id + 1
  data.id = id
  data.status = 'На модерации'
  users.push(data)
  return {
    success: true,
    message: "Заявка на регистрацию успешно отправлена, ожидайте её рассмотрения"
  }
}
export const RegisterStudent = (data)=>{
  const id = users.at(-1).id + 1
}

export const Login = (data)=>{
  const user = users.find(x=>x.email === data.email)

  if (!user || user.password !== data.password){
    return HttpResponse.json(
      { success: false, message: 'Неверный email или пароль' },
      { status: 401 },
    )
  }

  const token = generateToken({email: user.email, password: user.password, role: user.role})
  const cookie = setCookie('token', token)
  const response = new HttpResponse(
    JSON.stringify({
      success: true,
      message: 'Успешная авторизация',
      user: {
        id: user.id,
        email: user.email,
        name: user.first_name,
        lastname: user.last_name,
        role: user.role,
      }
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Set-Cookie': cookie
      }
    }
  )
  return response
}