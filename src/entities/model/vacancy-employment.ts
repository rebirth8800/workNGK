
export const EmploymentVacancy = {
  'full-time': 'Полная занятость',
  'part-time': 'Частичная занятость',
  'internship': 'Стажировка',
  'project': 'Проектная работа / разовая',

} as const;


export type EmploymentVacancyType = keyof typeof EmploymentVacancy;

