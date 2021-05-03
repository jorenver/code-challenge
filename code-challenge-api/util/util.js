const reverseText = (text) => {
  return text.split('').reverse().join('')
}

const isPalindromo = (text) => {
  const rText = text.replace(/[^a-zA-Z]/g, '').toLowerCase().split('').reverse().join('')
  const oText = text.replace(/[^a-zA-Z]/g, '').toLowerCase()
  return rText === oText
}

module.exports = {
  reverseText,
  isPalindromo
}
