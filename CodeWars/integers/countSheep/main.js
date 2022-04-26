/* 
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, 
return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
Input will always be valid, i.e. no negative integers.
*/

var countSheep = function (num) {
  //your code here
  let MySheep = "";

  for (let i = 1; i <= num; i++) {
    MySheep += i + " sheep...";
  }

  return MySheep;
};

/*
describe("Fixed tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(countSheep(0), "");
    assert.strictEqual(countSheep(1), "1 sheep...");
    assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
    assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");
  });
});
*/