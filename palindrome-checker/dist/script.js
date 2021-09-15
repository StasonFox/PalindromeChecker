function palindrome(str) {
  let alphanum = str.replace(/[^0-9a-z]/gi, '');
  let lower = alphanum.toLowerCase();
  let revStr = lower.split("").reverse().join("");
  
  if (lower == revStr) {
    return true;
  }
  else {
    return false;
  }
}

palindrome("Racecar!");