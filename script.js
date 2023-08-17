function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    console.log(cleanStr);
    const reverseStr = cleanStr.split('').reverse().join(''); //split the text into arrays and reverse them by reverse method and join method is used for joining them
    console.log(reverseStr);
    return cleanStr === reverseStr;
}

function palindromeChecker() {
    const inputText = document.getElementById('inputText');
    const result = document.getElementById('result');

    if (isPalindrome(inputText.value)) {
        result.textContent = `"${inputText.value}" is a Palindrome`; //entered text by us is visible by this line
    } else {
       result.textContent = `"${inputText.value}" is not a Palindrome`;
    }
    result.classList.add('fadeIn');
    inputText.value = '';
}
document
    .getElementById('checkButton').addEventListener("click", palindromeChecker);
