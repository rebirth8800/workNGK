import { fakerRU } from '@faker-js/faker'
import _ from 'lodash'
import { filters } from './paramsRefines.ts'

export default function() {
  return _.times(3, function(n){
    return {
      id: n+1,
      title: fakerRU.person.jobTitle(),
      company_name: fakerRU.company.name(),
      city: fakerRU.location.city(),
      salary_min: fakerRU.number.int({ min: 50000, max: 300000 }),
      svg: _.sample(filters().category).svg,
      employment: _.sample(filters().employment).name,
    }
  })

}