
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

function deleterow(){
    document.getElementById('table').deleteRow(0)
}

function eventTriggered(evtValue){
    console.log(`Triggered event is ${evtValue.value}`)
}

function eventButton(){
    console.log(`Button is clicked`)
}

function addCountry(){
    // Select the select box (target element to add)
    let selectElement = document.getElementById('country');

    // Create option element
    let newOption= document.createElement('option');
    newOption.innerText = document.getElementById('country-value').value;
    newOption.setAttribute('value', document.getElementById('country-value').value)

    selectElement.append(newOption);
    document.getElementById('country-value').value = "";
}

function removeCountry(){
    let selectElement = document.getElementById('country');
    selectElement.remove(selectElement.selectedIndex);
}


document.getElementsByTagName('ul')[0].setAttribute('id', 'unordered-list');
let ul = document.getElementById('unordered-list');
let li = document.createElement('li');
li.innerHTML = 'Contact Us';
ul.append(li);

// Retrieve First and Last Child
let firstElement = ul.firstElementChild.innerText;
let lastElement = ul.lastElementChild.innerText;
document.getElementById('appendData').innerHTML += (`First and Last ele is <b> ${firstElement} and ${lastElement} </b>`)


// QuerySelector
let divElementQuerySelector = document.querySelectorAll('.para');
console.log(divElementQuerySelector);


// setTimeout
setTimeout(() => {
    console.log('Executed after 3 seconds')
}, 3000);

//cleatTimeout
const timeout = () => {console.log("Executed after 5 seconds")}
const timer = setTimeout(timeout, 5000)

setTimeout(() => {
    clearTimeout(timer)
}, 7000);

// setInterval
const intervalTimer = setInterval(() => {
    console.log('Executed after 1 second')
}, 1000)

// clearInterval
setTimeout(() => {
    clearInterval(intervalTimer)
}, 5000);