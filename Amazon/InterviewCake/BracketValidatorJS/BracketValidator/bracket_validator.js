

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

console.log(isBracketValidator("[],(),[],(}"));