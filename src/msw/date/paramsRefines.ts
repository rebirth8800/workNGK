export const sorts = () =>{
  return [
    { name: "По дате (новые)", value: "date_desc" },
    { name: "По дате (старые)", value: "date_asc" },
    { name: "По зарплате (высокие)", value: "salary_desc" },
    { name: "По зарплате (низкие)", value: "salary_asc" }
  ]
}

export const filters = () =>{
  return {
    category: [
        { name: "IT и программирование", value: "it", svg: 'it'},
        { name: "Педагогика и образование", value: "education", svg: 'teacher' },
        { name: "Экономика и бухгалтерия", value: "economics", svg: 'buchalter' },
        { name: "Логистика и торговля", value: "logistics", svg: 'logist' },
        { name: "Юриспруденция", value: "law", svg: 'lawyer' },
        { name: "Документооборот и архив", value: "records", svg: 'document' }
    ],
    schedule: [
      {name: "5/2 (пятидневка)", value: "5/2"},
      {name: "2/2 (сменный)", value: "2/2"},
      {name: "Свободный (гибкий)", value: "0/0"},
      {name: "6/1 (шестидневка)", value: "6/1"},
      {name: "1/1 (сутки через сутки)", value: "1/1"}
    ],
    employment: [
      { name: "Полная занятость", value: "full-time" },
      { name: "Частичная занятость", value: "part-time" },
      { name: "Стажировка", value: "internship" },
      { name: "Проектная работа / разовая", value: "project" }
    ],
    work_format: [
      { name: "Удалённо", value: "remote" },
      { name: "Из офиса", value: "office" },
      { name: "Гибрид (офис + дом)", value: "hybrid" },
      { name: "Разъездной", value: "on-road" }
    ]
  }
}