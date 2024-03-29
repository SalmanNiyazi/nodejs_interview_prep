/* Implement File Operations:
Write a function that reads a file asynchronously using Node.js's fs module and logs the contents to the console.
How would you modify this function to write data to a file?
*/

import { promises as fs } from 'fs'

async function readFileAsync(){
const data = await fs.readFile('/home/salmanniyazi/bookmarks.html', 'utf8');
return Buffer.from(data)
};

const readData = await readFileAsync();
console.log(readData);