import { fakerRU } from '@faker-js/faker'
import _ from 'lodash'
import { filters } from './paramsRefines.ts'
const statuses = ['Опубликована', 'На модерации', 'Отклонена']

export default function(i: Number, status = true) {
  return _.times(i, function(n){
      return {
        id: n+1,
        title: fakerRU.person.jobTitle(),
        company_name: fakerRU.company.name(),
        city: fakerRU.location.city(),
        salary_min: fakerRU.number.int({ min: 50000, max: 300000 }),
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
        category: _.sample(filters().category).name,
        work_format: _.map(_.sampleSize(filters().work_format, _.random(1,4)), (elem)=> elem.name),
        employment: _.map(_.sampleSize(filters().employment, _.random(1,4)), (elem)=> elem.name),
        schedule: _.map(_.sampleSize(filters().schedule, _.random(1,4)), (elem)=> elem.name),
        status: status ? statuses[0] : _.sample(statuses)
      }
    })

}