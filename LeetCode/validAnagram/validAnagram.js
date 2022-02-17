/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

*/

function isAnagram(s, t) {
    s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(); // clear the string.
    t = t.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(); //clear t input string.

    return sortString(s) === sortString(t);
}

//cb to sort and compare each str.
function sortString(str) {
    return str.split('').sort().join('');
}


console.log(isAnagram("lame", "male"));