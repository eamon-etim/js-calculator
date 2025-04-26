/*A string variable tagList has the value "js, css, html, js". How would you write the code to find the index of the last time "js" appears?*/


let tagList = "js, css, html, js";
let lastOccurence = tagList.lastIndexOf('js');

/*Given two string variables, street with the value "Main St." and number with the value "123", how would you write the code to combine them with a space in between to get "Main St. 123"?*/

let street = "Main St."
let number = "123"
let streetnumber = street + "" + number

/*A string variable animal has the value "Elephant". How would you write the code to get the character at index 3?*/

let animal = "Elephant"
let firstEl = animal[3]

/*A sentence description has the value "It is a blue car, it is fast". How would you write the code to change only the first occurrence of "is" to "was"?*/

SentenceDescription = "It is a blue car, it Is fast"

let NewSentenceDescription = SentenceDescription.replace(/is/g, 'was')




/*Given the string data with the value "id=123&amp;name=abc&amp;id=456", how would you write the code to find the index of the first '&' character?*/


data = "id=123&amp;name=abc&amp;id=456"
index = data.lastIndexOf('&')
console.log(index)


/*A string variable version has the value "v2.1.5". How would you write the code to find the index of the last '.' character?*/




let veersion = "v2.1.5";
let versionnew = veersion.lastIndexOf('.')

/*Given three string variables, partA with the value "Alpha", partB with the value "Beta", and partC with the value "Gamma", how would you write the code to combine them with spaces in between to get "Alpha Beta Gamma"?*/



let partA = "Alpha";
let partB = "Beta";
let partC = "Gamma";

let combinedString = partA + " " + partB + " " + partC;
