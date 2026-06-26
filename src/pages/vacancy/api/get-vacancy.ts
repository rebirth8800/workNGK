import type {  ScheduleVacancyType, WorkFormatVacancyType, EmploymentVacancyType, CategoryVacancyType } from '@/entities/model'


import apiClient from '../../../../api/axios.ts'


type VacancyParams = {
  page: number;
  per_page: number;
  category: CategoryVacancyType;
  schedule: ScheduleVacancyType;
  work_format: WorkFormatVacancyType;
  employment: EmploymentVacancyType;
}

export const getVacancy = (params: VacancyParams) => {
  return apiClient.get('/vacancies', {
    params:params
  })
}