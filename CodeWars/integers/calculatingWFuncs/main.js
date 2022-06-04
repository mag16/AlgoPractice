/* 
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));

(tests)
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(seven(times(five())), 35);
Test.assertEquals(four(plus(nine())), 13);
Test.assertEquals(eight(minus(three())), 5);
Test.assertEquals(six(dividedBy(two())), 3);
  });
});
*/

const exp = ((num, op) => !op ? num : op(num))

function zero(op) { return exp(0,op)}
function one(op) { return exp(1,op);}
function two(op) { return exp(2,op)}
function three(op) { return exp(3,op)}
function four(op) { return exp(4,op)}
function five(op) { return exp(5,op)}
function six(op) { return exp(6,op)}
function seven(op) { return exp(7,op)}
function eight(op) {return exp(8,op)}
function nine(op) { return exp(9,op)}

function plus(a){return function(b){ return b + a}};
function minus(a){return function(b){ return b - a}};
function times(a){return function(b){ return b * a}};
function dividedBy(a){return function(b){ return Math.floor(b / a)}};