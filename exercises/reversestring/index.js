// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // My solution
  // let result = ""
  // for (let i = str.length - 1; i >= 0; i--) {
  //   result += str[i]
  // }
  // return result

  // Solution #1
  return str.split('').reverse().join('')
}

module.exports = reverse;
