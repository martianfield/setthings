'use strict'

const merge = (given, template) => {
  given = given === undefined ? {} : given
  for(let prop in template) {
    if(template.hasOwnProperty(prop)) {
      given[prop] = given[prop] === undefined ? template[prop] : given[prop]
    }
  }
  return given
}

module.exports = merge