import CategoryVacancyType from '@/entities/model';
import apiClient from '../../../../api/axios'


export type VacancyParams = {
  page: number;
  per_page: number;
  category?: CategoryVacancyType;
}


export const getVacancy = (params: VacancyParams) => {
  return apiClient.get('/vacancies', {
    params
  })
}