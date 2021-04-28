

function isBracketValidator(code) {
    
    const openersToClosers = {
        '(': ')',
        '[': ']',
        '{': '}',
    };

    const openers = new Set(['(', '[', '{']);
    const closers = new Set([')', ']', '}']);

    const openersStack = [];

    for (let i = 0; i < code.length; i++) {
        const char = code.charAt(i);

        if (openers.has(char)) {
            openersStack.push(char);
        } else if (closers.has(char)) {
          if (!openersStack.length) {
            return false;
          }

          const lastUnclosedOpener = openersStack.pop();

          // If this closer doesn't correspond to the most recently
          // seen unclosed opener, short-circuit, returning false
          if (openersToClosers[lastUnclosedOpener] !== char) {
            return false;
          }
        }
    }
    return openersStack.length === 0;
}

console.log(isBracketValidator("[],(),[],(}"));

/*Methods Used:

Set: The Set object lets you store unique values of any type, 
whether primitive values or object references.

.has(): The has() method returns a boolean indicating whether an element
with the specified value exists in a Set object or not.

.push(): The push() method adds one or more elements to the end
of an array and returns the new length of the array.

.pop(): The pop() method removes the last element from an array and
returns that element. This method changes the length of the array.

.charAt(): The String object's charAt() method returns a new string consisting
of the single UTF-16 code unit located at the specified offset into the string.

*/



/* 
https://www.interviewcake.com/question/javascript/bracket-validator

Solution
We iterate through our string, making sure that:

each closer corresponds to the most recently seen, unclosed opener
every opener and closer is in a pair
We use a stack ↴ to keep track of the most recently seen, unclosed opener. And if the stack is ever empty when we come to a closer, we know that closer doesn't have an opener.

So as we iterate:

If we see an opener, we push it onto the stack.
If we see a closer, we check to see if it is the closer for the opener at the top of the stack. If it is, we pop from the stack. If it isn't, or if the stack is empty, we return false.
If we finish iterating and our stack is empty, we know every opener was properly closed.




*/