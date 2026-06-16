export const CategoryVacancy = {
  'it': 'IT и программирование',
  'ped': 'Педагогика и образование',
} as const;

export type CategoryVacancyType = keyof typeof CategoryVacancy;
