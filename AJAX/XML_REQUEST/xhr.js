import { consoleWithStyle } from '../../helper.js';
// The keystone of AJAX is the XMLHttpRequest object.

// 1) Create an XMLHttpRequest object
// 2) Define a callback function
// 3) Open the XMLHttpRequest object
// 4) Send a Request to a server



// Create an XMLHttpRequest Object

const XHRInstance = new XMLHttpRequest();
// consoleWithStyle('XHR instance:', XHRInstance);


// =============================================================


// Define a Callback Function

XHRInstance.onload = function() {
    consoleWithStyle('Response:', this.response);
    // What to do when the response is ready
}


// ===========================================================

// Send a Request
const URL = "/public/ajax_info.txt";

XHRInstance.open("GET", URL);
XHRInstance.send();

consoleWithStyle('The Line after request');
