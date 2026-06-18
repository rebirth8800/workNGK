import { http, HttpResponse } from 'msw'
import vacancies from '@/msw/date/vacancies.ts'
import {filters, sorts} from '@/msw/date/paramsRefines'
import profileStudent from '@/msw/date/profileStudent.ts'
import profileEmployer from '@/msw/date/profileEmployer.ts'
import newVacancies from '@/msw/date/newVacancies.ts'

export const handlers = [
  http.get('https://api.ngk-rabota.ru/v1/vacancies', () => {
    return HttpResponse.json(vacancies(50))
  }),
  http.get('https://api.ngk-rabota.ru/v1/filters', () => {
    return HttpResponse.json(filters())
  }),
  http.get('https://api.ngk-rabota.ru/v1/sorts', () => {
    return HttpResponse.json(sorts())
  }),
  http.get('https://api.ngk-rabota.ru/v1/profile/student/vacancies', () => {
    return HttpResponse.json(vacancies(10))
  }),
  http.get('https://api.ngk-rabota.ru/v1/profile/employer/vacancies', () => {
    return HttpResponse.json(vacancies(10, false))
  }),
  http.get('https://api.ngk-rabota.ru/v1/profile/student', () => {
    return HttpResponse.json(profileStudent(1))
  }),
  http.get('https://api.ngk-rabota.ru/v1/profile/employer', () => {
    return HttpResponse.json(profileEmployer(1))
  }),
  http.get('https://api.ngk-rabota.ru/v1/admin/vacancies', () => {
    return HttpResponse.json(vacancies(10, false))
  }),
  http.get('https://api.ngk-rabota.ru/v1/admin/profiles', () => {
    return HttpResponse.json(profileEmployer(10, false))
  }),
  http.get('https://api.ngk-rabota.ru/v1/vacancies/new', () => {
    return HttpResponse.json(newVacancies())
  }),
]