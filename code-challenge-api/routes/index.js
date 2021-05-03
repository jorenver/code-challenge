const express = require('express')
const router = express.Router()
const { reverseText, isPalindromo } = require('../util/util')
/**
 * @typedef Error
 * @property {string} error.required
 */

router.get('/', (req, res, next) => {
  res.send({
    name: 'Code Challenge API',
    version: '1.0.0'
  })
})

/**
 * @typedef IechoReponse
 * @property {string} text.required
 * @property {boolean} palindromo.required
 */

/**
 * This function comment is parsed by doctrine
 * @route GET /iecho
 * @group Operations about user
 * @param {string} text.query.required - text- eg: hola mundo
 * @returns {object} 200 - IechoReponse Model
 * @returns {Error}  400 -  Error Model
 * @returns {Error}  500 -  Error Model
 */
router.get('/iecho', (req, res, next) => {
  const { text } = req.query
  if (!text || text === '') {
    res.status(400).send({
      error: 'no text'
    })
  } else {
    const resultText = reverseText(text)
    res.status(200).send({
      text: resultText,
      palindromo: isPalindromo(text)
    })
  }
})

module.exports = router
