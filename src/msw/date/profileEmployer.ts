import {fakerRU } from '@faker-js/faker'
import _  from 'lodash'
const statuses = ['Одобрен', 'На модерации']

export default function(i, status = true) {
    return _.times(i, function(n){
        return {
            id: n+1,
            company_name: fakerRU.company.name(),
            contact_first_name: fakerRU.person.firstName(),
            contact_last_name: fakerRU.person.lastName(),
            contact_middle_name: fakerRU.person.middleName(),
            position: fakerRU.person.jobTitle(),
            email: fakerRU.internet.email(),
            phone: '+7'+fakerRU.phone.number('(###) ###-##-##'),
            created_at: fakerRU.date.past({ years: 2 }).toISOString().split('T')[0],
            status: status ? statuses[0] : statuses[1]
        }
    })

}