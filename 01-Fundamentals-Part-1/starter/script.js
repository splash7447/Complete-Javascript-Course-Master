/* let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "DT";

let job1 = "programmer";
let job2 = "DT";

console.log(myFirstJob);

let country = "Taichung City";
let continent = "Wuri District";
let poplation = "7.507";

console.log(country);
console.log(continent);
console.log(poplation);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jona');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);
console.log(typeof lastName);
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(ageJonas, ageSarah);

console.log(ageJona * 2, ageJona / 10, 2 ** 3);
const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assigment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


let Mark_Mass = 78;
let Mark_Height = 1.69;
let John_Mass = 92;
let John_Height = 1.95;
let BMIofMark = Mark_Mass / Mark_Height ** 2;
console.log(BMIofMark);
let BMIofJohn = John_Mass / John_Height ** 2;
console.log(BMIofJohn);
let MarkHeightBMI = BMIofMark > BMIofJohn;
console.log(MarkHeightBMI);


Mark_Mass = 95;
Mark_Height = 1.88;
John_Mass = 85;
John_Height = 1.76;
BMIofMark = Mark_Mass / Mark_Height ** 2;
console.log(BMIofMark);
BMIofJohn = John_Mass / John_Height ** 2;
console.log(BMIofJohn);
MarkHeightBMI = BMIofMark > BMIofJohn;
console.log(MarkHeightBMI);


const firstName = 'Aiden';
const job = 'DT at google';
const birthYear = 1990;
const year = 2024;

const aiden = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(aiden);

const aidenNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(aidenNew);

console.log(`Just a regular string...`)

console.log(`String with \n\
multiple \n\
lines`);

console.log(`String
multiple
lines`);


const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years : )`);
}


const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}


// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Aiden'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coerction
console.log('I am ' + 23 + ' year old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // 11
n = n - 1;
console.log(n);


// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Aiden'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height;
if (height) {
  console.log('YAY! Heught is defined');
} else {
  console.log('Height is UNDEFINED');
}


const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));

console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 23 === 23
  console.log('Cool! 23 is an amzaing number!');
} else if (favourite === 7) { // 7 === 7
  console.log('7 is also a cool number');
} else {
  console.log('Number is not 23 or 7');
}

if (favourite !== 23) console.log("Why not 23?");


const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasDriversLicense) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

const isTired = true; // C
console.log(hasDriversLicense && hasDriversLicense && isTired);

if (hasDriversLicense && hasDriversLicense && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}


const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy');
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
  console.log('Koalas win the trophy');
} else {
  console.log('no team wins the trophy 😭')
}


const day = prompt("What's the today?");

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}

const age = 35;
//age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink milk 🥛')

const drink = age >= 18 ? 'wine 🍷' : 'milk 🥛';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'milk 🥛';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'milk 🥛'}`);


const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)
*/
