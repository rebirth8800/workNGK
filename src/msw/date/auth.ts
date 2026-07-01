import { generateAdmin, generateEmployer, generateStudent} from '@/msw/date/generateUsers.ts'
import { generateJWT } from '@/msw/date/auth/token.ts'
import { setHttpOnlyCookie } from '@/msw/date/auth/cookies.ts'
import { HttpResponse } from 'msw'
import { filters } from '@/msw/date/paramsRefines.ts'

export const Employers = generateEmployer(5)

let users = []
users.push(...generateStudent((3)))
users.push(...Employers)
users.push(generateAdmin())

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

  console.log(user.role !== data.role)
  if (user.role !== data.role){
    if (user.role !== 'admin'){
      return HttpResponse.json(
        { success: false, message: 'Неверный email или пароль' },
        { status: 401 },
      )
    }

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
      token: accessToken,
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

export const GetData = (token)=>{
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

    const {password, ...userWithoutPassword} = user
    return HttpResponse.json({
      success: true,
      user: {...userWithoutPassword},
    }, { status: 200 });

  } catch (error) {
    return HttpResponse.json({
      success: false,
      message: 'Невалидный токен',
    }, { status: 401 });
  }
}

export const PutUser = (id, body)=>{
  let data = {}
  users.forEach((user, index)=>{
    if (user.id == id){
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

export const Logout = ()=>{
  return HttpResponse.json({
    success: true,
    message: 'Успешный выход'
  }, { status: 200 });
}

export const getAdminEmployers = (page, per_page)=>{
  const responce = users.filter(elem => elem.role == 'employer' && elem.status == 'На модерации')
  return {
    len: responce.length,
    items: responce.slice(+page*+per_page-+per_page, +per_page*+page)

  }
}

export const putAdminEmployer = (id: string, status)=>{
  users.forEach((item, index)=>{
    if (item.id == id){
      users[index].status = status
    }
  })

  return {
    message: 'Аккаунт работодателя успешно одобрен'
  }
}

export const deleteAdminEmployer = (id: string)=>{
  users.forEach((item, index)=>{
    if (item.id == id){
      users.splice(index, 1)
    }
  })
  return {
    message: 'Аккаунт работодателя успешно отклонен'
  }
}