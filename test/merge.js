'use strict'

const expect = require('chai').expect
const should = require('chai').should()
const merge = require(__dirname + '/../index.js').merge

describe('Merge', () => {

  it("Empty", () => {
    // arrange / act
    let def = { order:'ASC', limit:-1}
    let given = { }
    // act
    merge(given, def)
    // assert
    expect(given).to.have.property('order', 'ASC')
    expect(given).to.have.property('limit', -1)
  })

  it("Partial", () => {
    // arrange
    let def = { order:'ASC', limit:-1 }
    let given = { limit:100 }
    // act
    merge(given, def)
    // assert
    expect(given).to.have.property('order', 'ASC')
    expect(given).to.have.property('limit', 100)
  })

  it("Full", () => {
    // arrange
    let def = { order:'ASC', limit:-1 }
    let given = { order:'DESC', limit:100 }
    // act
    merge(given, def)
    // assert
    expect(given).to.have.property('order', 'DESC')
    expect(given).to.have.property('limit', 100)
  })
})