var p1 = document.getElementById('p1')
var p2 = document.getElementById('p2')
var p3 = document.getElementById('p3')
var p4 = document.getElementById('p4')
var range1 = document.getElementById('range1')
var range2 = document.getElementById('range2')
var range3 = document.getElementById('range3')
var hundred
var a
var b
// console.log(p1,p2,p3,range1,range2,range3);
var valueChanger = () => {
  p1.innerText = range1.value
  p2.innerText = range2.value
  p3.innerText = range3.value
  p4.innerText = `The Sum of ${range1.value} + ${range2.value} + ${
    range3.value
  } is = ${
    Number.parseInt(range1.value) +
    Number.parseInt(range2.value) +
    Number.parseInt(range3.value)
  }`
}
valueChanger()
var rangeone = () => {
  hundred = Number.parseFloat((100 - range1.value) / 2)
  a = Math.floor(hundred)
  b = Math.ceil(hundred)
  range2.value = a
  range3.value = b
  valueChanger()
}
var rangetwo = () => {
  hundred = Number.parseFloat((100 - range2.value) / 2)
  a = Math.floor(hundred)
  b = Math.ceil(hundred)
  range1.value = a
  range3.value = b
  valueChanger()
}
var rangethree = () => {
  hundred = Number.parseFloat((100 - range3.value) / 2)
  a = Math.floor(hundred)
  b = Math.ceil(hundred)
  range1.value = a
  range2.value = b
  valueChanger()
}