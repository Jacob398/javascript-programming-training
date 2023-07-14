//explain why's and how's in comments
//this is my first javascript code!

//console.log('Hello World');
//let name = 'Jacob';
//console.log(name);

//variable rules
//cannot be a reserved keyword
//should be meaningful
//cannot start with a number (1name)
//cannot contain a space or hyphen(-)
//are case-sensitive
//dynamic and static languages are different. Dynamic languages like javascript, a type of a variable can change at runtime.

let firstName = 'Jacob '; //string literal
let lastName = 'Brown';

//let age = 20; //number literal
let isApproved = true; //boolean literal
let hello; //undefined literal
let hello1 = undefined;
let goodbye = null;
//we us null in situations where we want to clear the value of a variable 
let selectedColors = ['red', 'blue'];
console.log(selectedColors);
selectedColors[2] = 'green';
console.log(selectedColors[0]);
console.log(selectedColors);
//in javascript we can store different types in an array
selectedColors[3] = 22;
console.log(selectedColors);
//Here you can see that the array has added 22 into the list of items it contains
console.log(selectedColors.length);
// this property returns the number of items or elements in the array

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);
console.log(firstName);
console.log(typeof firstName)
//let name = firstName + lastName


let person = {
    name: 'Jacob',
    age: 30
};



//Dot Notation
person.name = 'John';
//Dot notation is cleaner and easier to use.

//Bracket notation
person['name'] = 'Mary';


//console.log(name)
//console.log(person);
console.log(person.name)
//performing a task
function greet(name, lastName) {
   console.log('Hello ' + name + ' ' + lastName);
}

//function that calculates a value
function square(number){
    return number * number;
}

let number = square(2);

console.log(square(2));

console.log(number)

greet('John', 'Smith');
greet('Mary', 'Jane');

console.log(typeof interestRate)



//learn the difference between parameter and argument
//A parameter is the input at the time of declaration, and the argument is the actual value with supply for parameter
//So in this case, the parameter would be "name" in 'function greet(name)' and the argument would be John
//Seperate arguments using a comma ","
console.log(person)

//~~object oriented programming lesson~~
//!!encapsulation!!
//setting up a basic function, also know as procedure code
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate){//the issue with procedure code, you end up getting a lot of parameters such as "baseSalary, overtime, and rate"
    return baseSalary + (overtime * rate);
}
//this is the object Oriented format below. It is the same as above, but way better
let employee = {// there are no parameters. "The best functions are those with no parameters"
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function(){
        return this.baseSalary + (this.overtime * this.rate);
    }
};
employee.getWage()

//I am going to go off on a tangent and do a little bit of code I learned from chatGpt
//I'm going to be doing a switch/case... thing... I'm not sure if it's a function or not, but it's something
let fruit = "apple";

switch (fruit){
    case "banana":
        console.log("I am a banana.");
        break;
    case "apfel":
        console.log("I am an apple");
        break;
        default:
            console.log("Ich bin nicht weder eine banane noch ein apfel")
//in this example, the cases did not pass therefore the default message was what was logged to the console.
};
// the previous code and this next one was copied from chatGpt to help me learn and understand a bit more of Switch/Cases

// let day = new Date().getDay();

// switch (day){
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
// }


//ctrl + / after highlighting will comment out large sections of code

let day = new Date().getDay();
let dayName;

switch (day){
    case 0:
        dayName = "Sunday";
        break;
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
}

document.getElementById('dayOfWeek').textContent = dayName;

//let's try using the knowledge that I know to make another code that rest of code such as date and time



function updateTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = ("0" + now.getMinutes()).slice(-2);
    let seconds = ("0" + now.getSeconds()).slice(-2); //These add a leading zero if needed

    let time = hours + ":" + minutes + ":" + seconds
    document.getElementById('localTimeDisplay').textContent = time;
}
// Call updateTime immediately to set the initial time
updateTime();
// Then call updateTime every 1000 milliseconds (1 second)
setInterval(updateTime, 1000);

function updateDate(){
    let now = new Date();
    let day = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();

    let date = day + "/" + month + "/" + year
    document.getElementById('localDateDisplay').textContent = date;
}
updateDate();
setInterval(updateDate, 1000 * 60);

document.getElementById('mainButton').onclick = ()=>{
    window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0")
}
