const { fakerRU } = require('@faker-js/faker')
const _ = require('lodash')
const {filters} = require('./paramsRefines.js')
const statuses = ['Опубликована', 'На модерации', 'Отклонена']

module.exports = function(i, status = true) {
  return _.times(i, function(n){
      return {
        id: n+1,
        title: fakerRU.person.jobTitle(),
        company_name: fakerRU.company.name(),
        city: fakerRU.location.city(),
        salary_min: fakerRU.number.int({ min: 50000, max: 300000 }),
        description: fakerRU.lorem.paragraph(),
        requirements: fakerRU.lorem.sentences(2),
        contact_email: fakerRU.internet.email(),
        contact_phone: fakerRU.phone.number('+7 (###) ###-##-##'),
        contact_person: fakerRU.person.fullName(),
        category: _.sample(filters().category).name,
        work_format: _.map(_.sampleSize(filters().work_format, _.random(1,4)), (elem)=> elem.name),
        employment: _.map(_.sampleSize(filters().employment, _.random(1,4)), (elem)=> elem.name),
        schedule: _.map(_.sampleSize(filters().schedule, _.random(1,4)), (elem)=> elem.name),
        status: status ? statuses[0] : _.sample(statuses)
      }
    })

}