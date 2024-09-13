import { consoleWithStyle } from '../../helper.js';
import { readyStateDetails } from '../../public/readyStateDetails.js';



// XMLHttpRequest: readyState property

// The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in. 
// An XHR client exists in one of the following states:

// console.table(readyStateDetails);


// const xhr = new XMLHttpRequest();
// consoleWithStyle("UNSENT", xhr.readyState); // readyState will be 0

// xhr.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
// consoleWithStyle("OPENED", xhr.readyState); // readyState will be 1

// xhr.onprogress = () => {
//   consoleWithStyle("LOADING", xhr.readyState); // readyState will be 3
// };

// xhr.onload = () => {
//   consoleWithStyle("DONE", xhr.readyState); // readyState will be 4
// };

// xhr.send();





// ==================================================================================




// XMLHttpRequest: status property

// The read-only XMLHttpRequest.status property returns 
// the numerical HTTP status code of the XMLHttpRequest's response.


// const xhr = new XMLHttpRequest();
// console.log("UNSENT: ", xhr.status);

// xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");
// console.log("OPENED: ", xhr.status);

// xhr.onprogress = () => {
//   console.log("LOADING: ", xhr.status);
// };

// xhr.onload = () => {
//   console.log("DONE: ", xhr.status);
// };

// xhr.send();




// ==================================================================================



// XMLHttpRequest: response property

// The XMLHttpRequest response property returns the response's body content as a Blob, 
// a Document, a JavaScript Object, or a string, depending on the value of the request's 
// responseType property.


// const url = "https://jsonplaceholder.typicode.com/todos";

// (function load(url, callback) {
//     const xhr = new XMLHttpRequest();
  
//     xhr.onreadystatechange = () => {
//       if (xhr.readyState === 4) {  // 4 => onload event call
//         callback(xhr.response);
//       }
//     };
  
//     xhr.open("GET", url, true);
//     xhr.send("");

//     xhr.responseType = 'json';
//     // xhr.responseType = 'text';  (default)
//     // xhr.responseType = 'blob';

// })(url, (response) => {
//     consoleWithStyle('Response', response)
// });




// ===================================================================================




// XMLHttpRequest: responseText property

// The responseText returns A string which contains either the textual data received using the 
// XMLHttpRequest or "" if the request failed or if no content has been received yet.


// const xhr = new XMLHttpRequest();

// xhr.open("GET", "https://jsonplaceholder.typicode.com/todos", true);

// // If specified, responseType must be empty string or "text"
// // xhr.responseType = "json";

// xhr.onload = () => {
//   if (xhr.readyState === xhr.DONE) {
//     if (xhr.status === 200) {
//         consoleWithStyle('Response', xhr.response);
//         consoleWithStyle('Response Text', xhr.responseText);
//     }
//   }
// };

// xhr.send();






// =================================================================================






// XMLHttpRequest: responseXML property


// const xhr = new XMLHttpRequest();
// xhr.open("GET", "/public/hello.xml");

// // If specified, responseType must be empty string or "document"
// xhr.responseType = "document";

// xhr.onload = () => {
//   if (xhr.readyState === xhr.DONE && xhr.status === 200) {
//     consoleWithStyle('Response property', xhr.response);
//     consoleWithStyle('XML Response property', xhr.responseXML);
//   }
// };

// xhr.send();






