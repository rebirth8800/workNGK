
export const WorkFormatVacancy = {
  'remote': 'Удалённо',
  'office': 'Из офиса',
  'hybrid': 'Гибрид (офис + дом)',
  'on-road': 'Разъездной',

} as const;

export type WorkFormatVacancyType = keyof typeof WorkFormatVacancy;
