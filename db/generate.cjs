const _ = require('lodash')
const { fakerRU } = require('@faker-js/faker')
const vacation = require("./date/vacancies.cjs")
const refines = require('./date/refines.cjs')
const profile_employer = require('./date/profileEmployer.cjs')
const profile_student = require('./date/profileStudent.cjs')


module.exports = function() {
  return {
    vacancies: vacation(100),
    refines: refines(),
    profile_student_vacation: vacation(10),
    profile_employer_vacation: vacation(10, false),
    profile_employer: profile_employer(1),
    profile_student: profile_student(1),
    admin_vacations: vacation(10),
    admin_profiles: profile_employer(10, false),
    }
}
