const expect = require('chai').expect
const should = require('chai').should()
const set = require(__dirname + '/../index.js').set
const settings = require(__dirname + '/../index.js').settings

describe('Settings', () => {

  it("One level", () => {
    // arrange / act
    set('name', 'Alice')
    set('age', 16)
    // assert
    expect(settings.name).to.equal('Alice')
    expect(settings.age).to.equal(16)
  })

  it("Two Levels", () => {
    // arrange / act
    set('book.title', 'Through the Looking-Glass')
    // assert
    expect(settings.book.title).to.equal('Through the Looking-Glass')
  })

  it("Several Items at the same level", () => {
    // arrange
    set('book.author', 'Lewis Carroll')
    set('book.published', 1871)
    // assert
    expect(settings.book.author).to.equal('Lewis Carroll')
    expect(settings.book.published).to.equal(1871)
  })
})