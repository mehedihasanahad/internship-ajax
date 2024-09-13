import { consoleWithStyle } from '../../helper.js';

// open(method, url, async)
// method: the type of request: GET or POST
// url: the server (file) location
// async: true (asynchronous) or false (synchronous)


// send()
// Sends the request to the server (used for GET)

// send(string)
// Sends the request to the server (used for POST)

// =========================================================================================================
// =========================================================================================================











// Simple GET API request with XHR

function reqListener() {
    // consoleWithStyle('API Response: ', this.responseText);
    consoleWithStyle('Parsed API Response: ', JSON.parse(this.responseText));
}
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://jsonplaceholder.typicode.com/todos");
  req.send();



// ==============================================================================



// Set request header

// function reqListener() {
//     consoleWithStyle('API Response: ', JSON.parse(this.responseText));
// }
  
// const req = new XMLHttpRequest();
// req.addEventListener("load", reqListener);
// req.open("GET", "https://jsonplaceholder.typicode.com/todos");
// req.setRequestHeader('new_header', 'new_header_value');
// req.setRequestHeader('new_header2', 'new_header_value 2');
// req.send();

// console.log("After request");



// ===============================================================================



// Synchronous Request

// function reqListener() {
//     consoleWithStyle('API Response: ', JSON.parse(this.responseText));
// }
  
// const req = new XMLHttpRequest();
// req.addEventListener("load", reqListener);
// req.open("GET", "https://jsonplaceholder.typicode.com/todos");
// // req.open("GET", "https://jsonplaceholder.typicode.com/todos", false);
// req.send();

// console.log("After request");




// ==================================================================================


// Monitoring progress

// function handleEvent(e) {
//   consoleWithStyle(`${e.type}`, `${e.loaded} bytes transferred\n`);
// }

// function addListeners(xhr) {
//   xhr.addEventListener("loadstart", handleEvent);
//   xhr.addEventListener("load", handleEvent);
//   xhr.addEventListener("loadend", handleEvent);
//   xhr.addEventListener("progress", handleEvent);
//   xhr.addEventListener("error", handleEvent);
//   xhr.addEventListener("abort", handleEvent);
// }

// function runXHR(url) {
//   const xhr = new XMLHttpRequest();
//   addListeners(xhr);
//   xhr.open("GET", url);
//   xhr.send();
// }

// runXHR(
//   "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
// );




