import { fakerRU } from '@faker-js/faker'
import _ from 'lodash'
import { filters } from './paramsRefines.ts'
import { Employers } from '@/msw/date/auth.ts'
import category from '@/pages/vacancy/ui/Category.vue'
const statuses = ['Опубликована', 'На модерации', 'Отклонена']

const curent_employers = Employers.filter(item =>{
  return item.status === 'Одобрен'
})
let n = 0

const zapoln = (i, status)=>{
  return _.times(i, function(){
    const category = _.sample(filters().category)
    const employer = _.sample(curent_employers)
    n++
    return {
      id: n+1,
      title: fakerRU.person.jobTitle(),
      company_name: employer.company_name || '',
      city: fakerRU.location.city(),
      salary: fakerRU.number.int({ min: 15000, max: 300000 }),
      responsibilities: _.times(_.random(1,4), function(){
        return fakerRU.lorem.sentence()
      }),
      requirements: _.times(_.random(1,4), function(){
        return fakerRU.lorem.sentence()
      }),
      conditions: _.times(_.random(1,4), function(){
        return fakerRU.lorem.sentence()
      }),
      contact_email: employer.email,
      contact_phone: employer.phone,
      contact_person: employer.last_name+ ' '+ employer.first_name+' '+ employer.middle_name,
      category: category.name,
      work_format: _.map(_.sampleSize(filters().work_format, _.random(1,4)), (elem)=> elem.name),
      employment: _.map(_.sampleSize(filters().employment, _.random(1,4)), (elem)=> elem.name),
      schedule: _.map(_.sampleSize(filters().schedule, _.random(1,4)), (elem)=> elem.name),
      svg: category.svg,
      date: fakerRU.date.past({ years: 1 }).toISOString().split('T')[0],
      status: status,
    }
  })
}
const vacancies = []
vacancies.push(...zapoln(67, 'Опубликована'))
vacancies.push(...zapoln(10, 'На модерации'))
vacancies.push(...zapoln(10, 'Отклонена'))


const profileVacancy = _.sampleSize(vacancies.filter(item=> item.status === 'Опубликована'), 5)

export const getVacancy = (id) => {
  for (let item of vacancies) {
    if(item.id == id) return item
  }
}

export const getVacancies = (page, per_page, category, schedule, work_format, employment, salary_min, salary_max, sort, search) => {
  let response = []
  schedule = schedule.split(',')
  const schedule_list = schedule.map(elem => filters().schedule.find(item => item.value === elem)?.name)

  work_format = work_format.split(',')
  const work_format_list = work_format.map(elem => filters().work_format.find(item => item.value === elem)?.name)

  employment = employment.split(',')
  const employment_list = employment.map(elem => filters().employment.find(item => item.value === elem)?.name)


  for (let item of vacancies) {

    if (item.status !== 'Опубликована'){
      continue
    }

    const search_param = item.title+'_'+item.company_name
    if (!search_param.toLowerCase().includes(search.toLowerCase())) {
      continue
    }

    if (category && item.category != filters().category.find(item => item.value === category)?.name) {
      continue
    }
    if (schedule[0] != '' && !item.schedule.some(i => schedule_list.includes(i))){
      continue
    }
    if (work_format[0] && !item.work_format.some(i => work_format_list.includes(i))){

      continue
    }
    if (employment[0] && !item.employment.some(i => employment_list.includes(i))){

      continue
    }
    if (+salary_min !=0 && item.salary < +salary_min) {
      continue
    }
    if (+salary_max != 0 && item.salary > +salary_max) {
      continue
    }

    response.push(item)


  }
  if (sort !== ''){
    if (sort === 'salary_asc'){
      response.sort((a, b) => a.salary - b.salary)
    } else if (sort === 'salary_desc'){
      response.sort((a, b) => b.salary - a.salary)
    } else if (sort === 'date_asc'){
      response.sort((a, b) => new Date(a.date) - new Date(b.date))
    } else if (sort === 'date_desc'){
      response.sort((a, b) => new Date(b.date) - new Date(a.date))
    }

  }
  return {
    len: response.length,
    items: response.slice(+page*+per_page-+per_page, +per_page*+page),
  }


}

export const getNewVacancies = ()=>{
  const response = vacancies.toSorted((a, b) => new Date(b.date) - new Date(a.date))
  return response.slice(0, 3)

}

export const getOtcliki = (page, per_page)=>{
  return {
    len: profileVacancy.length,
    items: profileVacancy.slice(+page*+per_page-+per_page, +per_page*+page)
  }
}

export const getVacancyEmployer = (id, page, per_page)=>{
  const user = Employers.find(item=>item.id == id)
  const responce = vacancies.filter(item=>item.contact_email == user.email)
  return {
    len: responce.length,
    items: responce.slice(+page*+per_page-+per_page, +per_page*+page)
  }
}

export const postVacancy = (data)=>{
  const id = vacancies.at(-1).id+1
  data.id = id
  data.category = filters().category.find(item => item.value === data.category)?.name
  data.work_format = data.work_format.map(elem => filters().work_format.find(item => item.value === elem)?.name)
  data.schedule = data.schedule.map(elem => filters().schedule.find(item => item.value === elem)?.name)
  data.employment = data.employment.map(elem => filters().employment.find(item => item.value === elem)?.name)
  console.log(data)
  vacancies.push(data)
  return {
    message: "Вакансия успешно создана"
  }
}

export const getAdminVacancy = (page, per_page)=>{
  const responce = vacancies.filter(elem => elem.status == 'На модерации')

  return {
    len: responce.length,
    items: responce.slice(+page*+per_page-+per_page, +per_page*+page)

  }
}

export const putAdminVacancy = (id, status)=>{
  vacancies.forEach((item, index)=>{
    if (item.id == id){
      vacancies[index].status = status
    }
  })

  if (status == 'Опубликована'){
    return {
      message: 'Вакансия успешно опубликована'
    }
  } else {
    return {
      message: 'Вакансия успешно отклонена'
    }
  }
}