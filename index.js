// 1. Write a js program to find maximum between two numbers.
// let a = 15
// let b = 25
// if(a<b){
//     console.log('b is greater than a ');
// }else{
//     console.log('a is greater than a ');
// }

// 2. Write a js program to find maximum between three numbers.
// let a = 15
// let b = 500
// let c = 35
// if(a>b && a>c){
//     console.log('a');
// }
// else if(b>a && b>c){
//     console.log('b');
// }
// else if(c>a && c>a){
//     console.log('b');
// }

// 3. Write a js program to check whether a number is negative, positive or zero.
// let a = -15
// if(a<0){
//     console.log('negative');
// }
// else if(a>0){
//     console.log('positive');
// }
// else if(a=0){
//     console.log('0');
// }

// 4. Write a js program to check whether a number is divisible by 5 and 11 or not.
// let a = 121
// if(a%5===0){
//     console.log('use 5');
// }
// else if(a%11===0){
//     console.log('use 11');
// }

// 5. Write a js program to check whether a number is even or odd.
// let a = 120
// if(a%2===0){
//     console.log('even');
// }
// else if(a%2!==0){
//     console.log('odd');
// }

// 6. Write a js program to check whether a year is leap year or not.
// let y = new Date()
// let year=y.getFullYear()
// if(year%4 === 0){
//     console.log('leap year');
// }
// else{
//     console.log('not a leap year');
// }

// 7. Write a js program to check whether a character is alphabet or not.
// function chart(digit) {
//   if (typeof 1 === typeof digit) {
//     console.log('number')
//   } else if (typeof 'a' === typeof digit) {
//     console.log('string')
//   }
// }
// chart('j')

// 8. Write a js program to input any alphabet and check whether it is vowel or consonant.
// var a = 'a'
// if ((a.match(/[aeiou]/gi))) {
//   console.log('vowels')
// }
// else if(a.match(/[^aeiou]/gi)){
//     console.log('cons');
// }

// 9. Write a js program to input any character and check whether it is alphabet, digit or special character.
// var a = 'a'
// if ((a.match(/[0-9a-zA-Z]/gi))) {
//   console.log('vowels & cons')
// }
// else{
//     console.log('special');
// }

// 10. Write a js program to check whether a character is uppercase or lowercase alphabet.
// var a = 'A'
// if(a == a.toUpperCase()){
//     console.log('upper');
// }
// else if(a == a.toLowerCase())
// {
//     console.log('lower');
// }

// 11. Write a js program to input week number and print week day
// var today = new Date()
// var starty = new Date(today.getFullYear(),0)
// var days = Math.ceil((today-starty)/(1000*60*60*24))
// console.log(days);
// var weekno = (days/7)
// console.log(weekno);
// var day =['sunday','monday','tuesday','wednesday','thusday','friday','saturday'][new Date().getDay()]
// console.log(day);

// 12. Write a js program to input month number and print number of days in that month.
// var today = new Date()
// console.log(today.getMonth() + 1)
// var getDaysInMonth = function (month, year) {
//   return new Date(year, month, 0).getDate()
// }
// console.log(getDaysInMonth(2, 2022))

// 13. Write a js program to count total number of notes in given amount.
// var aarray = [1,2,3,4,56,67,8]
// console.log(aarray.length);

// 14. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F
// let marks = (72+70+70+69+72)
// let avgmarks = (marks/5)
// console.log(avgmarks);

// if(avgmarks >=90 ){
//   console.log('Grade A');
// }
// else if(avgmarks >=80 ){
//   console.log('Grade B');
// }
// else if(avgmarks >=70 ){
//   console.log('Grade C');
// }
// else if(avgmarks >=60 ){
//   console.log('Grade C');
// }
// else if(avgmarks >=40 ){
//   console.log('Grade D')
// }
// else{
//   console.log('Grade F');
// }

// 15. Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
// var salary = 120000;
// if(salary <= 10000){
//   var HRA = salary*0.20
//   var DA = salary*0.80
//  console.log('Total HRA is '+(HRA));
//  console.log("Total DA is "+(DA));
//  console.log('Total Salary is ' + (HRA + DA));
// }
// else if(salary <= 20000){
//   var HRA = salary*0.25
//   var DA = salary*0.90
//  console.log('Total HRA is '+(HRA));
//  console.log("Total DA is "+(DA));
//  console.log('Total Salary is ' + (HRA + DA));
// }
// else if(salary > 20000){
//   var HRA = salary*0.30
//   var DA = salary*0.95
//  console.log('Total HRA is '+(HRA));
//  console.log("Total DA is "+(DA));
//  console.log('Total Salary is ' + (HRA + DA));
// }

// 16. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill
// var unit = 144
// var bill=''
//   if(unit <= 50){
//     var bill = unit*0.5
//   }
//   else if(unit <= 100){
//     var bill = 50*0.5 + (unit-50)*0.75
//   }
//   else if(unit <= 200){
//     var bill = 50*0.5 + 100*0.75 + (unit-150)*1.20
//   }
//   else if(unit <= 250){
//     var bill = 50*0.5 + 100*0.75 + 100*1.20 +(unit-250)*1.50
//   }
//   if(unit > 0){
//     var bill = bill+bill*0.20
//   }
//   console.log(bill);


// 25% is completeted