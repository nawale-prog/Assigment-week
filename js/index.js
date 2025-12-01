let userName = "Naash";
let userAge = 22;
console.log("2. let Variable:", userName, "is", userAge, "years old.");

userAge = 25;
console.log("   Reassigned Age:", userAge);

const appName = "CodeDay1";
const piValue = 3.14159;
console.log("3. const Variable:", appName);

let myString = "hi";
let myNumber = 20;
let myBoolean = true;
let myArray = [1, 2, 3];
let myObject = { key: "value" };
let myUndefined;
let myNull = null; 

console.log("4 & 9. Typeof Checks:");
console.log("   String type:", typeof myString);     
console.log("   Number type:", typeof myNumber);     
console.log("   Boolean type:", typeof myBoolean);    
console.log("   Array type:", typeof myArray);       
console.log("   Object type:", typeof myObject);      
console.log("   Undefined type:", typeof myUndefined);  
console.log("   typeof null:", typeof myNull);      

let firstName = "Nasa";
let lastName = "Awale";

let fullName = firstName + " " + lastName;

let upperCaseName = fullName.toUpperCase();

console.log("5. String Concatenation:", fullName);
console.log("   String Manipulation (Uppercase):", upperCaseName);

let num1 = 10;
let num2 = 5;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log("6. Number Arithmetic:");
console.log("   Sum (10 + 5):", sum);
console.log("   Difference (10 - 5):", difference);
console.log("   Product (10 * 5):", product);
console.log("   Quotient (10 / 5):", quotient);

let isAdult = userAge >= 18; 
let hasPermission = false;

let canAccess = isAdult && hasPermission; 

console.log("7. Boolean Logic:");
console.log("   isAdult:", isAdult);
console.log("   Can Access (isAdult AND hasPermission):", canAccess);

let declaredButNotSet; 

let explicitlyEmpty = null;

console.log("8. Undefined vs Null:");
console.log("   Declared but not set (undefined):", declaredButNotSet);
console.log("   Explicitly set to null:", explicitlyEmpty);

console.log("   undefined === null:", declaredButNotSet === explicitlyEmpty); // false
console.log("   undefined == null:", declaredButNotSet == explicitlyEmpty);   // true (Loose equality is often discouraged)

console.log("10. Console.log() Practice: All messages above were displayed using console.log().");