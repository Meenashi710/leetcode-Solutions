//With String conversion


let isPalindrome = function(x) {
    const str= x.toString()
    const reverseStr= str.split('').reverse().join('')
    return str===reverseStr
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome("010"));
