//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
  let newArr = ""
  let sign = ['!', '?', ',', '.']
  str = str.split(" ")
  for (let i = 0; i < str.length; i++ ) {
    if (sign.includes(str[i])) {
      newArr += str[i] + ' '
    } else {
      newArr += str[i].slice(1) + str[i].slice(0, 1) + 'ay' + ' ';
    }
  }
  return newArr.slice(0, -1)
}
