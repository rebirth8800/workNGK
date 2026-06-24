import { fakerRU } from '@faker-js/faker'
import _ from 'lodash'
import {filters} from './paramsRefines.ts'
const statuses = ['Одобрен', 'На модерации']
let id = 1
export const generateStudent = (i)=> {
    return _.times(i, function(){
        return {
            email: 'email'+id,
            password: 'password'+id,
            id: id++,
            first_name: fakerRU.person.firstName(),
            last_name: fakerRU.person.lastName(),
            middle_name: fakerRU.person.middleName(),
            phone: '+7'+fakerRU.phone.number('(###) ###-##-##'),
            course: _.random(1, 4),
            category: _.sample(filters().category).name,
            role: 'student'
        }
    })
}

export const generateEmployer = (i, status = true)=> {
  return _.times(i, function(){
    return {
      email: 'email'+id,
      password: 'password'+id,
      id: id++,
      company_name: fakerRU.company.name(),
      contact_first_name: fakerRU.person.firstName(),
      contact_last_name: fakerRU.person.lastName(),
      contact_middle_name: fakerRU.person.middleName(),
      position: fakerRU.person.jobTitle(),
      phone: '+7'+fakerRU.phone.number('(###) ###-##-##'),
      status: _.sample(statuses),
      role: 'employer'
    }
  })

}