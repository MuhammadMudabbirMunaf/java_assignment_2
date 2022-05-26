alert("Q.1 check number is divible by 3 or not");
var a ;
a = prompt("Enter a number between 1-10");
if (a === "3" || a === "6" || a === "9") {
      alert("divisible by 3");
}
else if (a !== "3" || a !== "6" || a !== "9") {
      alert("not divisible by 3");
}

alert("Q.2 check number is even or odd");
var b ;
b = prompt("Enter a number between 1-10");
if (b === "2" || b === "4" || b === "6" || b === "8" || b === "10") {
  alert("it is an even number");
}
else if (b === "1" || b === "3" || b === "5" || b === "7" || b === "9") {
  alert("it is an odd number");
}

alert("Q.3 age check");
var age ;
age = prompt("enter your age");
if (age >= 18) {
  alert("Old Enough");
}
else if (age < 18) {
  alert("Too Young");
}

alert("Q.4 Name identification");
var names ;
names = prompt("Enter your first name");
if (names === "mudabbir" || names === "Mudabbir" || names === "MUDABBIR") {
  alert("Hello Mudabbir! How are you doing today!");
}

alert("Q.5 check given number is divisible by 3 or not");
var n ;
n = prompt("Enter a number between 1-10");
if (n === "3" || n === "6" || n === "9") {
      alert("divisible by 3");
}
else if (n !== "3" || n !== "6" || n !== "9") {
      alert("not divisible by 3");
}
                                                              // Q 6 and 7
alert("Q.8 Time and Part of day");
var time ;
time = prompt("enter time in 1900 format to know part of day");
if (time >= "0500" && time < "1200") {
  alert("Good Morning");
}
else if (time >= "1200" && time < "1700") {
  alert("Good Afternoon");
}
else if (time >= "1700" && time < "2100") {
  alert("Good Evening");
}
else {
  alert("Good Night");
}

alert("Q.9 birth year is leap year or not");
var year ;
year = prompt("enter your birth year to check if it's leap year or not");
if (year === "2000" || year === "2004" || year === "2008" || year === "2012" || year === "2016" || year === "2020") {
  alert("You are born in leap year");
}
else {
  alert("You are not born in any leap year")
}

alert("Q.10 password recheck");
var password ;
password = prompt("Please enter your password");
if (password === "mudabbirhandsome123") {
  alert("Correct! The password you entered matches the original password");
}
else {
  alert("Incorrect password")
}

alert("Q.11 Name Identification");
var nameIden ;
nameIden = prompt("Enter your name");
if (nameIden === "Fahad" || "fahad" || "FAHAD") {
  alert("Hello Fahad!");
}
else {
  alert("You are not Fahad");
}

alert("Q.12 Error correction");
var hour;
hour = prompt("Enter time according to 24-hour format");
if (hour < 18) {
 alert("Good day");
}
else {
alert("Good evening");
}

alert("Q.13 Identify which number is bigger");
var numbOne ;
var numbTwo ;
numbOne = prompt("Enter first number");
if (numbOne > 10) {
  alert("first number is bigger");
}
else if (numbOne === "10") {
  alert("both numbers are equal");
}
else {
  alert("first number is smaller");
}
numbTwo = prompt("Enter second number");
if (numbTwo > 10) {
  alert("second number is bigger");
}
else if (numbTwo === "10") {
  alert("both numbers are equal");
}
else {
  alert("second number is smaller");
}

alert("Q.14 Identify number is positive,negative or neutral.");
var negPos ;
negPos = prompt("Enter a number positive, negative, neutral.");
if (negPos > 0) {
  alert("Number is positive");
}
else if (negPos === "0") {
  alert("Number is neutral");
}
else {
  alert("Number is negative");
}

alert("Q.15 Some food times");
var eatTime ;
eatTime = prompt("Enter time of the day in 24-hour format.");
if (eatTime > "6" && eatTime < "9") {
  alert("Breakfast is served");
}
else if (eatTime > "11" && eatTime < "13") {
  alert("Time for lunch");
}
else if (eatTime > "17" && eatTime < "20") {
  alert("It's dinner");
}
else {
  alert("Sorry, you'll have to wait, or go get a snack");
}

alert("Q.16 Identify among string, numbers, boolean, undefined.");
var variable ;
variable = prompt("Enter any character or word.");
if (variable >= "0") {
  alert("It is a number");
}
else if (variable === "true" || variable === "false" || variable === "yes" || variable === "no") {
  alert("It is a boolean");
}
else if (variable === "") {
  alert("It is a string");
}
else {
  alert("It is an undefined character or action");
}

alert("Q.17 Identify that alphabet is vowel or not");
var vowel ;
vowel = prompt("Enter an alphabet");
if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u") {
  alert("It is a vowel");
}
else {
  alert("It is not a vowel");
}

alert("Q.18 true or not");
var trueNo ;
if ("10" !== "8") {
  alert("true");
}

alert("Q.19 Name of month according to their s.no")
var month ;
month = prompt("Enter any number from 1-12 for getting month name");
if (month === "1") {
  alert("JANUARY");
}
else if (month === "2") {
  alert("FEBRUARY");
}
else if (month === "3") {
  alert("MARCH");
}
else if (month === "4") {
  alert("APRIL");
}
else if (month === "5") {
  alert("MAY");
}
else if (month === "6") {
  alert("JUNE");
}
else if (month === "7") {
  alert("JULY");
}
else if (month === "8") {
  alert("AUGUST");
}
else if (month === "9") {
  alert("SEPTEMBER");
}
else if (month === "10") {
  alert("OCTOBER");
}
else if (month === "11") {
  alert("NOVEMBER");
}
else if (month === "12") {
  alert("DECEMBER");
}
else {
  alert("Invalid Number");
}

alert("Q.20 age check according to operator");
var age ;
age = prompt("enter your age");
if (age >= 18) {
  alert("Old Enough");
}
else if (age < 18) {
  alert("Too Young");
}