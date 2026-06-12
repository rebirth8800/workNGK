const {filters, sorts} = require('./paramsRefines.js')


module.exports =  function() {
     return {
         filters: filters(),
         sorts: sorts(),
     }
}