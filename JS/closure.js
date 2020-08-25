/* 
 At its simplest definition, it's a nested function that has access to at least three levels of scopes
(it's own scope, the parent scope, and the global scope)

The child() function is a closure and it has access to
its own const, the parent const, and the global const.



*/




const interview = "I need this badly";

function parent() {
    const firstName = "marco";
    // child function is a closure, having access to its
    //own const, its parent const and its global const
  return function child() {
    const lastName = "guzman";
    console.log(interview, firstName, lastName);
  };
}

const me = parent();

me();
