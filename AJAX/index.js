import { consoleWithStyle } from './../helper.js';
// import './XML_REQUEST/xhr.js';
import './XML_REQUEST/xhrRequest.js';
// import './XML_REQUEST/xhrResponse.js';


// Introduction

// Read data from a web server - after the page has loaded
// Update a web page without reloading the page
// Send data to a web server - in the background

// There is two way
// 1) XHR
// 2) Fetch


// Basic API call with XHR

// function loadDoc() {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onload = function() {
//         consoleWithStyle('XHR Response:', this.response);
//         // document.getElementById("demo").innerHTML = this.responseText;
//     }
//     xhttp.open("GET", "/public/ajax_info.txt", true);
//     xhttp.send();
// }

// loadDoc();


// Basic API call with Fetch

// function loadDocThoughFetch() {
//     const request = new Request("/public/ajax_info.txt", {
//         method: "GET",
//         // body: JSON.stringify({ username: "example" }),
//       });
//     fetch(request)
//     .then(async (response) => {
//         const textResponse = await response.text();
//         consoleWithStyle('Fetch Response:', textResponse);
//     });
// }

// loadDocThoughFetch();


