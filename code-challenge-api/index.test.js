const request = require('supertest')
const expect = require('chai').expect
const { reverseText, isPalindromo } = require('./util/util')
const app = require('./app')

describe('reverseText', () => {
  it('CASE 1: test ', () => {
    const text = 'test'
    const result = reverseText(text)
    expect(result).to.eq('tset')
  })
  it('CASE 2: hola mundo ', () => {
    const text = 'hola mundo'
    const result = reverseText(text)
    expect(result).to.eq('odnum aloh')
  })
  it('CASE 3: a la manuela dale una mala ', () => {
    const text = 'a la manuela dale una mala'
    const result = reverseText(text)
    expect(result).to.eq('alam anu elad aleunam al a')
  })
})

describe('isPalindromo', () => {
  it('CASE 1: test ', () => {
    const text = 'test'
    const result = isPalindromo(text)
    expect(result).to.eq(false)
  })
  it('CASE 2: hola mundo ', () => {
    const text = 'hola mundo'
    const result = isPalindromo(text)
    expect(result).to.eq(false)
  })
  it('CASE 3: a la manuela dale una mala ', () => {
    const text = 'a la manuela dale una mala'
    const result = isPalindromo(text)
    expect(result).to.eq(true)
  })
  it('CASE 3: yo soy', () => {
    const text = 'yo soy'
    const result = isPalindromo(text)
    expect(result).to.eq(true)
  })
})

describe('GET 200 /iecho', () => {
  it('return reverse not palindromo text', async () => {
    const text = 'test'
    const response = await request(app).get(`/iecho?text=${text}`)

    expect(response.status).to.eql(200)
    expect(response.body.text).to.eql('tset')
    expect(response.body.palindromo).to.eql(false)
  })

  it('return reverse palindromo text ', async () => {
    const text = 'yo soy'
    const response = await request(app).get(`/iecho?text=${text}`)

    expect(response.status).to.eql(200)
    expect(response.body.text).to.eql('yos oy')
    expect(response.body.palindromo).to.eql(true)
  })
})

describe('GET 400 /iecho', () => {
  it('no text error', async () => {
    const response = await request(app).get('/iecho')

    expect(response.status).to.eql(400)
    expect(response.body.error).to.eql('no text')
  })
})
