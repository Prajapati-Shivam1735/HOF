const linkedInProfileRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[\w-]+\/?$/;

function validateLinkedInUrl(url) {
    if (linkedInProfileRegex.test(url)) {
        return "Valid LinkedIn profile URL.";
    } else {
        return "Invalid LinkedIn profile URL.";
    }
}

// Example usage:
const inputUrl1 = "https://www.linkedin.com/in/johndoe123";
const inputUrl2 = "https://www.linkedin.com/in/mary-smith_567";
const inputUrl3 = "https://www.linkedin.com/in/invalid!profile";

console.log(validateLinkedInUrl(inputUrl1)); 
console.log(validateLinkedInUrl(inputUrl2)); 
console.log(validateLinkedInUrl(inputUrl3)); 
