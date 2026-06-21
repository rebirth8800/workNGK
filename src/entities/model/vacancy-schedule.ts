
export const ScheduleVacancy = {
  '5/2': '5/2 (пятидневка)',
  '2/2': '2/2 (сменный)',
  '0/0': '6/1 (шестидневка)',
  '1/1': '1/1 (сутки через сутки)',

} as const;

export type ScheduleVacancyType = keyof typeof ScheduleVacancy;
