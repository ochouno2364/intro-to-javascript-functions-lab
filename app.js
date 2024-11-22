// Alert("Java is running")

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

  const isAdult = (number) => {
    if (number >= 18) {
        return "Adult";
    } else {
        return "Minor";
    }
  }
  console.log('Exercise 2 Result:', isAdult(21));
  console.log('Exercise 2 Alternative Result :', isAdult(16));


  const isCharAVowel = (character) => {
    if (character == "a" || character == "e" || character == "i" || character == "o" || character == "u") {
        return "true";
    } else {
        return "false";
    }
  }
  console.log('Exercise 3 Result:', isCharAVowel("a"));
console.log('Exercise 3 Alternative Result :', isCharAVowel("p"));

const generateEmail = (username, example) => {
    return username + example
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));
console.log('Exercise 4 Alternative Result:', generateEmail("ochouno2364", "example.com"));


const greetUser = (name, timeOfDay) => {
    if (timeOfDay == "morning") {
        return `Good morning, ${name}`;
    } else if (timeOfDay == "afternoon") {
        return `Good afternoon, ${name}`; 
    } else if ( timeOfDay == "evening") {
        return `Good evening, ${name}`;
    } else {
        return  `Good night, ${name}`;
    }
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));
console.log('Exercise 5 Alternative Result:', greetUser("Ochodd", " 10:30 p.m"));


const maxOfThree = (a, b, c) => {
    if (a >= b) {
        return a;
    } else if ( a >= c) {
        return c
    } else if ( c >= b) {
        return c
    } else {
        return b
    }
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));
console.log('Exercise 6 Alternative Result:', maxOfThree(500, 10, 8));
console.log('Exercise 6 Alternative Result 2:', maxOfThree(5, 10, 800));


const calculateTip = (billAmount, tipPer) => {
    return  billAmount * (tipPer/100)
}
console.log('Exercise 7 Result:', calculateTip(50, 20));
console.log('Exercise 7 Alternative Result:', calculateTip(100, 20));
console.log('Exercise 7 Alternative Result 2:', calculateTip(1065, 10));

const convertTemperature = (temperature, scale) => {
    if (scale === "F") {
        return (temperature - 32) * 5/9 + "(Celsius)";
    } else if (scale === "C") {
        return (temperature * 9/5) + 32 + "(Farenheit)"
    } else {
        return temperature + " " + "(Farenheit)"
    }
}
        
console.log('Exercise 8 Result:', convertTemperature(32, "C"));
console.log('Exercise 8 Alternative Result:', convertTemperature(32, "F"));
console.log('Exercise 8 Alternative Result 2:', convertTemperature(100, "C"));

const basicCalculator = (numOne, numTwo, operation) => {
    if ( operation == "add") {
        return numOne + numTwo;
    } else if (operation == "subtract") {
        return numOne - numTwo;
    } else if (operation == "multiply") {
        return numOne * numTwo;
    } else if (operation == "divide") {
        return numOne/numTwo
    } else {
        return numOne , numTwo
    }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5 , "divide"));
console.log('Exercise 9 Alternative Result:', basicCalculator(10, 15 , "add"));
console.log('Exercise 9 Alternative Result 2:', basicCalculator(10, 5 , "subtract"));