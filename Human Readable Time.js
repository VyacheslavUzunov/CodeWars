/*Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.*/


function humanReadable (seconds) {
  let abc = new Array()
  abc.unshift (a = seconds % 60)
  abc.unshift (b = (seconds - a) / 60 % 60)
  abc.unshift (c = ((seconds - (seconds % 60) - b*60) / 3600))
  console.log(abc.length)
  for (let i = 0; i < abc.length; i++) {
     if (String(abc[i]).length == 1) {
      console.log('0'+abc[i])
      abc[i] = '0'+abc[i]
     }
  }
  return  abc.join(':')
}
