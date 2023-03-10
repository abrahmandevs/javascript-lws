/* 
A regular expression is a sequence of characters that forms a search pattern.
The search pattern can be used for text search and text replace operations.

A regular expression is a sequence of characters that forms a search pattern.
When you search for data in a text, you can use this search pattern to describe what you are searching for.
A regular expression can be a single character, or a more complicated pattern.
Regular expressions can be used to perform all types of text search and text replace operations.

string method 
string.search()
string.replace()

pattern.test()
/e/.exec()


*/

let text = 'rahman is a student Sed ut perspiciatis unde rahman iste natus error rahman voluptatem accusantium rahman laudantium, rahman rem aperiam, eaque rahman quae ab illo inventore veritatis et quasi architecto rahman vitae dicta sunt rahman.';
let newText = text.replace(/rahman/im, 'robin');
document.getElementById('div1').innerHTML = text;
document.getElementById('div2').innerHTML = newText;
