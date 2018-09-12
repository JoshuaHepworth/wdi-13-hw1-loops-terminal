console.log('Welcome');

// Question 1. The difference between an Interpolation is using 
// variables in a console.log vs not using them.

// Concatenation - console.log('Hello' + ' Good' + ' Morning');
	
//Interpolation 	
// const word = "wonderful";
// console.log('What a ' + word + ' day');

//Question 2. DRY stand for "Don't Repeat Yourself".
//We should pay attention to it to prevent clutter
//and have nicer code. The tools we learned to write DRY code
//are creating loops as opposed to repeating a console.log


//Quesstion 3.  The difference bettween declaring a variable
//and assigning a value to a variable is as simple as
//const variable; (declaring a variable)
//const variable = 10; (assigning value to a variable)
//When you "define" a variable it is the same as assigning
//a value to it. (const variable = 10;)


// Question 4.  We should use "const" when we don't want
//to change the value of our variable.
//We will use "let" when we are creating loops to 
//accomodate multiple changes. Let is easily changeable.


// Question 5.  The parent directory is directory above
//the current directory you are working in.


// Question 6.  The Unix Command for help is "man (command)"

// Question 7.  Tab completion auto-fills the command you are
//attempting to do.

// Question 8. 

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';


//   a __ b;
console.log(a < b);
// c __ d;
console.log(c > d);
// 'Name' __ 'Name';
console.log('Name' == 'Name');
// a __ b __ c;
console.log(a + b == c);
// a __ a __ d;
console.log(a * a == d);
// e __ 'Kevin';
console.log(e >= "Kevin");
// 48 __ '48';
console.log(48 == '48');


//  Infinite Loops 1

//The code provided is an infinite loops


// Infinite Loops 2

//Not and infinite loop, because the variable is to
//only run while its "true". The variable is false
//after the first console.log


// Reading code

//declaring a variable and assigning a value "A"
let letters = "A";
//declaring another variable and assigning a value "0"
let i = 0;
// created while loop "while the value of i less than 20"
while (i < 20) {
//while i is less than 20 add another "A"	
	letters += "A";
//plus one to the value of i	
	i++;
}

console.log(letters);
//console.log will output AAAAAAAAAAAAAAAAAAA



//Part 4. Loops!

// 1.  A for loop will provide a more concise code.
//They both repeat code and have similar syntax

//Basic for loop

for(let i = 0; i <= 999; i++) {
	console.log(i);
}


//Mechanics of a for loop

//The first part of the control statement is: Declaration
//The second part of the control statement is: Boolean expression
//The third part of the control statement is: Postfix Operater



//For loop in reverse!

for (let i = 999; i >= 0; i--) {
	console.log(i);
}

//More counting

for (let i = 1; i <= 10; i++) {
	console.log(`The value of i is: ${i} of 10`);
}






