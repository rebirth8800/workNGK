const { fakerRU } = require('@faker-js/faker')
const _ = require('lodash')
const {filters} = require('./paramsRefines.js')

module.exports = function(i) {
    return _.times(i, function(n){
        return {
            id: n+1,
            first_name: fakerRU.person.firstName(),
            last_name: fakerRU.person.lastName(),
            middle_name: fakerRU.person.middleName(),
            phone: '+7'+fakerRU.phone.number('(###) ###-##-##'),
            email: fakerRU.internet.email(),
            course: _.random(1, 4),
            category: _.sample(filters().category).name
        }
    })

}