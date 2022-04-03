//DS1 must match DS2 or else its not valid (State  Farm).  Print true if valid else false.

import isEqual from 'lodash.isequal';



const db1 = [
  { year: "2000", state: "Rio", month: "November", number: 18 },
  { year: "2002", state: "Perambuco", month: "February", number: 64 },
  { year: "2001", state: "Mato Grasso", month: "March", number: 112 },
  { year: "2003", state: "Roraima", month: "January", number: 547 },
  { year: "2002", state: "Maranhoo", month: "July", number: 4 },
  { year: "2003", state: "Rio", month: "March", number: 9 },
  { year: "2000", state: "Roraima", month: "October", number: 25 },
  { year: "2001", state: "Paraiba", month: "January", number: 11 },
];

const db2 = [
  { year: "2002", number: 68 },
  { year: "2000", number: 43 },
  { year: "2003", number: 556 },
  { year: "2001", number: 123 },
];



//variable sumPerYear returns the sum per year summing up each month and returning it per month from db1.
const sumPerYear = db1.reduce((acc, cur) => {
  acc[cur.year] = acc[cur.year] + cur.number || cur.number; // increment or initialize to cur.number
  return acc;
}, {});

console.log(sumPerYear)

//check for equality between two array of {}s
const isItEqual = (sumPerYear, db2) => {
  if (sumPerYear.length !== db2.length) {
    return false;
  }
  const toStr = ({ year, number }) => `${year}-${number}`;
  const a1 = Array.from(sumPerYear, toStr);
  const a2 = Array.from(number, toStr);
  return a1.every((item) => a2.includes(item));
};


console.log(isItEqual(sumPerYear, db2));

//checking out lodash isEqual method
console.log(isEqual(sumPerYear, db2));