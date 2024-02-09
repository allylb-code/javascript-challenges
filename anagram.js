// Given two strings s1 & s2
// Check to see if they are anagrams (if two words contain the same letters)

// Examples: “danger” and “garden”
// Output: boolean (true or false)



 function isAnagram(s1, s2) {
    if (s1.length !== s2.length) {
        return "false";
    }
    let s1array = s1.toLowerCase().split("").sort();
    let s2array = s2.toLowerCase().split("").sort();
    for (let i=0; i < s1array.length; i++) {
        if(s1array[i].includes(s2array[i])) {
            return "true";
        } else {
            return "false";
        }
    }
 }


 console.log(isAnagram("danger", "garden"));
 console.log(isAnagram("Car", "arc"));
 console.log(isAnagram("lego", "leggo"));
 console.log(isAnagram("PaRt", "TRAP"));
 console.log(isAnagram("BULL", "dog"));