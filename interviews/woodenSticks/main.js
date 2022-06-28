/* 
Microsoft codility Q1

There are two wooden sticks of lengths A and B respectively.
Each of them can be cut into shorter sticks of interger lengths.  
Our goal is to construct the largest possible square.  In order to do this,
we want to cut the sticks in such a way as to achieve four sticks of the same
length (note gthat there can be some leftover pieces).  What is the longest
side of the square that we can achieve?

Write a function:
    function solution(A,B);

that, given two integers A,B, returns trhe side of the length
of the largest square that we can obtain.  If its not possible to create
any square, the function should return 0.

Examples:
1. Given A = 10, B = 21, the function should return 7. We can split
the second stick into three sticks of length 7 and shorten the first stick by 3.

2. Given A = 13, B = 11, the function should return 5.  We can cut two sticks of length
5 from each of the sticks.

3. Given A = 2, B = 1, the function should return 0. It is not possible to make any square from the given sticks.

4.Given A = 1, B = 8, the function should return 2.  We can cut the stick B into four parts.

Write an efficient algorithm for the following assumptions:
    * A and B are integers within the range [1.. 1,000,000,000]
*/

function solution(A, B) {
    
    let answer = 0;
    if (A + B < 4) return answer;
    const big = A >= B ? A : B;
    const small = A <= B ? A : B;
    //   console.log({ big, small });
    if (small > 1 && big / Math.trunc(small / 2) >= 2) {
      answer = Math.trunc(small / 2);
    }

    for (let idx = 2; idx < 5; idx++) {
      const half = Math.trunc(big / idx);
      const bigCount = Math.trunc(big / half);
      const smallCount = Math.trunc(small / half);
      // console.log({ bigCount, smallCount });
      if (bigCount + smallCount < 4) continue;
      // console.log({ half });
      answer = Math.max(answer, half);
    }

    return answer;
}

//console.log(solution(1, 8))

function solution2(A, B) {
  // determine shorter and longer
  const [shorter, longer] = [A, B].sort((a, b) => a - b);
  //console.log(shorter,longer)
  // notice: if there's a stick that's at least 4 times as long as the next one, you could return the length of the longer one divided by 4;
  if (longer / shorter >= 4) {
    return Math.floor(longer / 4);
  }

  // if there's a stick that's at least 3 times as long as the next one, you could return the length of the shorter one.
  if (longer / shorter >= 3) {
    return Math.floor(shorter);
  }

  // if larger stick is at least 1.5 times as long as the shorter, we can divide the larger one into 3 parts and cut the excess from the shorter one.
  if (longer / shorter >= 1.5) {
    return Math.floor(longer / 3);
  }

  // Lastly, if larger is 1-1.5 times as long as the shorter,
  // Return half the length of the shorter stick.
  return Math.floor(shorter / 2);
}

console.log(solution2(2,1));