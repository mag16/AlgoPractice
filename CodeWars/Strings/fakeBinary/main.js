/* 
Fake Binary
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string




*/



function fakeBin(x) {
  let indx = [];

  //let num = [...x + ''].map(Number)
  let toNums = x.split("").map(Number);
  for (let i = 0; i < toNums.length; i++) {
    if (toNums[i] <= 4) {
      //newStr.replace(/[0-4]/g,'0')
      //newStr+="0"
      indx.push(0);
    } else {
      //newStr.replace(/[5-9]/g,'1')
      //newStr+="1"
      indx.push(1);
    }
  }

  return indx.join("").toString();
}