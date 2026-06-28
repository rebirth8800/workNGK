import { fakerRU } from '@faker-js/faker'
import _ from 'lodash'
import {filters} from './paramsRefines.ts'
const statuses = ['Одобрен', 'На модерации']
let id = 1
export const generateStudent = (i)=> {
    return _.times(i, function(){
        return {
            email: 'email'+id+'@gmail.com',
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

export const generateEmployer = (i)=> {
  return _.times(i, function(){
    return {
      email: 'email'+id+'@gmail.com',
      password: 'password'+id,
      id: id++,
      company_name: fakerRU.company.name(),
      first_name: fakerRU.person.firstName(),
      last_name: fakerRU.person.lastName(),
      middle_name: fakerRU.person.middleName(),
      phone: '+7'+fakerRU.phone.number('(###) ###-##-##'),
      status: _.sample(statuses),
      role: 'employer'
    }
  })

}
export const generateAdmin = ()=> {
  return {
    email: 'admin@gmail.com',
    id: id++,
    password: 'admin1',
    role: 'admin'
  }
}