
function reverseString(str) {
    if (str.length <=1) {
        return str;
    }
    return str.charAt(str.length - 1) + reverseString(str.slice(0, -1));
}
console.log(reverseString("testing")); 
console.log(reverseString("L"));
console.log(reverseString(""));
console.log(reverseString("one last time"));
