import { fakerRU } from '@faker-js/faker'
import _ from 'lodash'
import { filters } from './paramsRefines.ts'

const zapoln = ()=>{
  return _.times(67, function(n){
    const category = _.sample(filters().category)
    return {
      id: n+1,
      title: fakerRU.person.jobTitle(),
      company_name: fakerRU.company.name(),
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
      contact_email: fakerRU.internet.email(),
      contact_phone: '+7'+fakerRU.phone.number('(###) ###-##-##'),
      contact_person: fakerRU.person.fullName(),
      category: category.name,
      work_format: _.map(_.sampleSize(filters().work_format, _.random(1,4)), (elem)=> elem.name),
      employment: _.map(_.sampleSize(filters().employment, _.random(1,4)), (elem)=> elem.name),
      schedule: _.map(_.sampleSize(filters().schedule, _.random(1,4)), (elem)=> elem.name),
      svg: category.svg,
      date: fakerRU.date.past({ years: 1 }).toISOString().split('T')[0],
    }
  })
}

const vacancies = zapoln()

export default function(page, per_page, category, schedule, work_format, employment, salary_min, salary_max, sort) {
  let response = []
  console.log(sort)
  schedule = schedule.split(',')
  const schedule_list = schedule.map(elem => filters().schedule.find(item => item.value === elem)?.name)

  work_format = work_format.split(',')
  const work_format_list = work_format.map(elem => filters().schedule.find(item => item.value === elem)?.name)

  employment = employment.split(',')
  const employment_list = employment.map(elem => filters().schedule.find(item => item.value === elem)?.name)


  for (let item of vacancies) {
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