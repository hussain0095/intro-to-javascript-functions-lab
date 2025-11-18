const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
};

console.log("Exercise 1 Result:", maxOfTwoNumbers(3, 9));

function isAdult(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
}

console.log("Exercise 2 Result:", isAdult(21));

function isCharAVowel(char) {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(char.toLowerCase());
}

console.log("Exercise 3 Result:", isCharAVowel("a"));

function generateEmail(name, domain) {
  return `${name}@${domain}`;
}

console.log("Exercise 4 Result:", generateEmail("johnsmith", "example.com"));

function greetUser(name, timeOfDay) {
  return `Good ${timeOfDay}, ${name}!`;
}

console.log("Exercise 5 Result:", greetUser("Sam", "morning"));

function maxOfThree(a, b, c) {
  return Math.max(a, b, c);
}

console.log("Exercise 6 Result:", maxOfThree(5, 10, 8));

function calculateTip(billAmount, tipPercent) {
  return billAmount * (tipPercent / 100);
}

console.log("Exercise 7 Result:", calculateTip(50, 20));

function convertTemperature(temp, scale) {
  if (scale.toUpperCase() === "C") {
    return temp * (9 / 5) + 32;
  } else if (scale.toUpperCase() === "F") {
    return (temp - 32) * (5 / 9);
  } else {
    return NaN;
  }
}

console.log("Exercise 8 Result:", convertTemperature(32, "C"));

function basicCalculator(numA, numB, operation) {
  switch (operation) {
    case "add":
      return numA + numB;
    case "subtract":
      return numA - numB;
    case "multiply":
      return numA * numB;
    case "divide":
      return numA / numB;
    default:
      return NaN;
  }
}

console.log("Exercise 9 Result:", basicCalculator(10, 5, "subtract"));

function calculateGrade(score) {
  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log("Exercise 10 Result:", calculateGrade(85));
