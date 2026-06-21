const CategoryVacancy = {
  'it': 'IT и программирование',
  'education': 'Педагогика и образование',
  'economics': 'Экономика и бухгалтерия',
  'logistics': 'Логистика и торговля',
  'law': 'Юриспруденция',
  'records': 'Документооборот и архив',

} as const;

export type CategoryVacancyType = keyof typeof CategoryVacancy;

