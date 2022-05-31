
let storedHTML = document.getElementById("para");

let htmlData = storedHTML.innerHTML;
let textData = storedHTML.innerText;

console.log(htmlData);
console.log(textData);

document.getElementById("name").innerHTML = '<span> XXX </span>';
document.getElementById("age").innerHTML = '<span> 35 </span>';
document.getElementById("email").innerHTML = 'xx@gmail.com';

// Apply style
document.body.style.fontFamily = 'Arial';
storedHTML.style.color = 'pink';

// Create element and append
// Element 1
let imageElement = document.createElement('img');
imageElement.src = "nature.jpeg";
imageElement.height = 300;
imageElement.width = 300;

// Element 2
let divElement = document.createElement('div');
divElement.innerText = "Sunrise"

// Append created elements
// document.body.append(imageElement, divElement);
// document.body.appendChild(imageElement);

// Select Elements by Class Name and Tag Name
let pTags = document.getElementsByTagName('p');
let paraClass = document.getElementsByClassName('para');

pTags[1].innerText = "Hello Guys..."

function addrow(){
    let tableElement = document.getElementById('table');
    let row = tableElement.insertRow();
    let td1 = row.insertCell();
    td1.innerText = "CCC";
    let td2 = row.insertCell();
    td2.innerText = "28";
}

