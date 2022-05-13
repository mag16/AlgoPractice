/* 
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""


*/

// complete the function
function solution(string) {
  
  let newStr = "";
  
  for(let i = 0; i < string.length; i++){
    let x = string[i].toUpperCase();
    
    if(string[i] === x ){
      newStr += string[i].replace(/[A-Z]/g, ' $&');
    } else {
      newStr += string[i]
    }
  }
  
  return newStr;
    
}