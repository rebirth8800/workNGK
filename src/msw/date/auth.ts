import {generateEmployer, generateStudent} from '@/msw/date/generateUsers.ts'
import { generateJWT } from '@/msw/date/auth/token.ts'
import { setHttpOnlyCookie } from '@/msw/date/auth/cookies.ts'
import { HttpResponse } from 'msw'
import { filters } from '@/msw/date/paramsRefines.ts'

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

  const accessToken = generateJWT({
    id: user.id,
    email: user.email,
    role: user.role,
  });
  const { password, ...userWithoutPassword } = user
  const response = new HttpResponse(
    JSON.stringify({
      success: true,
      message: 'Вход выполнен успешно!',
      user: {...userWithoutPassword},
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Set-Cookie': [setHttpOnlyCookie(accessToken, 'access_token')],
      },
    },
  )
  return response
}

export const GetData = (cookie)=>{
  console.log(cookie)
  if (!cookie) {
    return HttpResponse.json({
      success: false,
      message: 'Не авторизован',
    }, { status: 401 });
  }

  // Парсим cookie
  const cookies = cookie.split('; ').reduce((acc: any, item) => {
    const [key, value] = item.split('=');
    acc[key] = value;
    return acc;
  }, {});

  const token = cookies['access_token'];
  if (!token) {
    return HttpResponse.json({
      success: false,
      message: 'Не авторизован',
    }, { status: 401 });
  }

  try {
    // Проверяем токен
    const parts = token.split('.');
    if (parts.length !== 3) {
      return HttpResponse.json({
        success: false,
        message: 'Невалидный токен',
      }, { status: 401 });
    }

    const payload = JSON.parse(atob(parts[1]));
    const user = users.find(u => u.id === payload.id);

    if (!user) {
      return HttpResponse.json({
        success: false,
        message: 'Пользователь не найден',
      }, { status: 404 });
    }

    return HttpResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        lastname: user.lastname,
        role: user.role,
        company: user.company || null,
        university: user.university || null,
      }
    }, { status: 200 });

  } catch (error) {
    return HttpResponse.json({
      success: false,
      message: 'Невалидный токен',
    }, { status: 401 });
  }
}

export const PutUser = (body)=>{
  let data = {}
  users.forEach((user, index)=>{
    if (user.id === body.id){
      for (const key in body){
        if (key === 'phone'){
          const phone = body[key].replaceAll(' ', '');
          if (user[key] !== phone){
            console.log(user[key], phone)
            users[index][key] = phone;
            data[key] = phone;
          }
        }else if(key === 'category'){
          const category = filters().category.find(item => item.value === body[key])?.name;
          if (user[key] !== category){
            users[index][key] = category;
            data[key] = category;
          }
        }
        else if (user[key] != body[key]){
          users[index][key] = body[key];
          data[key] = body[key];
        }
      }

    }

  })
  return HttpResponse.json({
    success: true,
    data: data,
    message: 'Данные успешно обновлены'
  }, { status: 200 });
}