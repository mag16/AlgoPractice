

function nbYear(p0, percent, aug, p) {
  // your code
  let years = 0;
  let result = p0;

  let decimal = percent / 100;

  while (result < p) {
    result = Math.floor(result+result * decimal + aug);
    years++;
  }

  return years;
}


// Function Export
module.exports = nbYear