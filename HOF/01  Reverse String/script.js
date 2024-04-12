let input = "Hello";

function reverseString(str) {
    return str.split("").reverse().join("");
}

function reverseAfterDelay(str) {
    setTimeout(function() {
        let reversed = reverseString(str);
        console.log("Reversed string:", reversed);
    }, 2000); 
}

reverseAfterDelay(input);