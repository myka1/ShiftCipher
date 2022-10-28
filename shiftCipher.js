/* 
    A shift cipher takes a plain text message and shifts each letter forward in the alphabet by a given number. For example, a shift cipher with a shift of 1 would turn the string 'hello' to 'ifmmp'.

    encrypt: takes a plain text string and returns a capitalized string with each letter shifted forward in the alphabet based on the set shift value.
    decrypt: takes an encrypted message and returns a lower case string with each letter shifted back in the alphabet based on the set shift value.
    In both methods, any character outside the alphabet should remain the same.
    But if a character is shifted outside the alphabet in either direction it should be wrapped around to the other side. For example, encrypting a y with a shift of 4 results in C and decrypting an A with a shift of 1 result in z. 
*/

class ShiftCipher {
  constructor(number) {
    this.number = number;
  }
  
  encrypt(string) {
    let newString = '';
    for (const char of string) {
      if((char.charCodeAt() >= 97 && char.charCodeAt() <= 122) || ((char.charCodeAt() >= 65 && char.charCodeAt() <= 90))) {

        let upChar = char.toUpperCase();
        let atChar = upChar.charCodeAt() + this.number;

        if(atChar > 90) {
          atChar = 64 + (atChar - 90);
          newString += String.fromCharCode(atChar);
        } else {
            newString += String.fromCharCode(atChar);
          }

      } else {
          newString += char;
        }
    } return newString;
  }
  
  decrypt(string) {
    let newString = '';
    for (const char of string) {
      if((char.charCodeAt() >= 97 && char.charCodeAt() <= 122) || ((char.charCodeAt() >= 65 && char.charCodeAt() <= 90))) {

        let downChar = char.toLowerCase();
        let atChar = downChar.charCodeAt() - this.number;

        if(atChar < 97) {
          atChar = 123 - (97 - atChar);
          newString += String.fromCharCode(atChar);
        } else {
            newString += String.fromCharCode(atChar);
          }
          
      } else {
          newString += char;
        }   
    } return newString;
  }
}
  
const cipher = new ShiftCipher(2);

console.log(cipher.encrypt('I love to code!')); // returns 'K NQXG VQ EQFG!'   
console.log(cipher.decrypt('K <3 OA RWRRA')); // returns 'i <3 my puppy'