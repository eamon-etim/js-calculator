JAVASCRIPT METHODS: These are functions written to make your work faster.
STRING METHODS:
**Note that the indices are in zero, so your first character is always counted as zero, the next one is 1


- charAt(): Used to get the element at a certain position in a string.
- concat(): Used to join strings:
let greeting = "Hello";
let space = " ";
let personName = "Mike";
// let firstEl = greeting[0];
let greetingPerson = greeting.concat(space, personName);
- indexOf(): this states the position of a character in a string.
let text = "Hello, how are you?";
let firstOccurence = text.indexOf('e'); //1
let otherOccurence = text.indexOf('e', 5);
 
[the '5' in the indexOf() above is to tell you where to start the 'searching' for the 'e' from. After it finds the 'e' from that position, it returns to the begining and tells you how far out in the string is that 'e' from the begining. Note that the indices are in zero, so your first character is always counted as zero, the next one is 1]

- lastIndexOf(): this tells us the last index of a character
let text = "Hello, how are you have you eaten?";
// let lastOccurence = text.lastIndexOf('e'); 
let otherOccurence = text.lastIndexOf('e',24);

console.log(otherOccurence);
(the '24', in the lastIndexOf() above says that it should start counting from the position 24, but then backwards until you find the first character 'e' in the javascript expression. After it does, then it goes to the begining of the string to determine how far is that character from the begining of the string. This distance from the begining is what it prints for you.)

- Replace():
let text = "Hello, how are you have you eaten. If you haven't eaten, come and eat";
let newGreeting = text.replace('eaten', 'taken a shower');
let replaceAllInstance = text.replace(/eaten/g, 'taken a shower');

console.log(replaceAllInstance);