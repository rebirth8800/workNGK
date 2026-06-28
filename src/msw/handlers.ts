import { http, HttpResponse } from 'msw'
import {
  getVacancy,
  getVacancies,
  getNewVacancies,
  getOtcliki,
  getVacancyEmployer,
  postVacancy,
  getAdminVacancy,
} from '@/msw/date/vacancies.ts'
import { filters, sorts } from '@/msw/date/paramsRefines'
import {
  getAdminEmployers,
  GetData,
  Login,
  Logout,
  PutUser,
  RegisterEmployer,
} from '@/msw/date/auth.ts'


const getUrl = (url: string) => {
  //TODO Проверки слеша в начале
  return `https://api.ngk-rabota.ru/v1/${url}`
}

export const handlers = [
  http.get(getUrl('vacancies'), ({ request }) => {
    const url = new URL(request.url)
    return HttpResponse.json(
      getVacancies(
        url.searchParams.get('page'),
        url.searchParams.get('per_page'),
        url.searchParams.get('category'),
        url.searchParams.get('schedule'),
        url.searchParams.get('work_format'),
        url.searchParams.get('employment'),
        url.searchParams.get('salary_min'),
        url.searchParams.get('salary_max'),
        url.searchParams.get('sort'),
        url.searchParams.get('search'),
      ),
    )
  }),
  http.get('https://api.ngk-rabota.ru/v1/filters', () => {
    return HttpResponse.json(filters())
  }),
  http.get('https://api.ngk-rabota.ru/v1/sorts', () => {
    return HttpResponse.json(sorts())
  }),
  http.get('https://api.ngk-rabota.ru/v1/vacancies/new', () => {
    return HttpResponse.json(getNewVacancies())
  }),
  http.get('https://api.ngk-rabota.ru/v1/vacancies/:id', ({ params }) => {
    const { id } = params
    return HttpResponse.json(getVacancy(id))
  }),
  http.post('https://api.ngk-rabota.ru/v1/profile/registration', async ({ request }) => {
    const { data } = await request.json()
    return HttpResponse.json(RegisterEmployer(data))
  }),
  http.post('https://api.ngk-rabota.ru/v1/profile/login', async ({ request }) => {
    const { data } = await request.json()
    return Login(data)
  }),
  http.get('https://api.ngk-rabota.ru/v1/profile/me', async ({ request }) => {
    const cookie = request.headers.get('Cookie')
    return GetData(cookie)
  }),
  http.get('https://api.ngk-rabota.ru/v1/profile/student/:id/vacancies', ({request, params}) => {
    const { id } = params
    const url = new URL(request.url)
    return HttpResponse.json(getOtcliki(url.searchParams.get('page'), url.searchParams.get('per_page')))
  }),
  http.put('https://api.ngk-rabota.ru/v1/profile/user/:id', async ({request, params}) => {
    const { id } = params
    const body = await request.json()
    return PutUser(id, body)
  }),
  http.post('https://api.ngk-rabota.ru/v1/profile/logout',  async () => {
    return Logout()
  }),
  http.get('https://api.ngk-rabota.ru/v1/profile/employer/:id/vacancies', ({request, params}) => {
    const { id } = params
    const url = new URL(request.url)
    return HttpResponse.json(getVacancyEmployer(id, url.searchParams.get('page'), url.searchParams.get('per_page')))
  }),
  http.post('https://api.ngk-rabota.ru/v1/vacancies', async ({ request }) => {
    const { data } = await request.json()
    console.log(data)
    return HttpResponse.json(postVacancy(data))
  }),
  http.get('https://api.ngk-rabota.ru/v1/admin/vacancies', ({request}) => {
    const url = new URL(request.url)
    return HttpResponse.json(getAdminVacancy(url.searchParams.get('page'), url.searchParams.get('per_page')))
  }),
  http.get('https://api.ngk-rabota.ru/v1/admin/employers', ({request}) => {
    const url = new URL(request.url)
    return HttpResponse.json(getAdminEmployers(url.searchParams.get('page'), url.searchParams.get('per_page')))
  }),



  http.get('https://api.ngk-rabota.ru/v1/admin/profiles', () => {
    return HttpResponse.json(RegisterEmployer())
  }),

]
