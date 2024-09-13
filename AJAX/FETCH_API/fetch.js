import { consoleWithStyle } from "../../helper.js";



// Fetch GET Request

// (async function getRequest() {
//     const response = await fetch('https://reqres.in/api/users/2'); // Replace with your file or API URL
//     if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     consoleWithStyle("GET Response successfully: \n", JSON.stringify(data, null, 2));
// })()



// ==========================================================================================================



// Fetch GET Text File

// (async function getText() {
//     const response = await fetch('/public/ajax_info.txt'); // Replace with your file or API URL
//     if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//     }
    
//     const text = await response.text();
//     consoleWithStyle("Text response:\n", text);
// })()



// =====================================================================



// Fetch Handling Errors

// (async function handleErrors() {
//     try {
//         const response = await fetch('nonexistentfile.txt'); // This file doesn't exist
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const text = await response.text();
//         consoleWithStyle("Request successful:\n", text);
//     } catch (error) {
//         consoleWithStyle("Request failed with status:\n", error.message);
//     }
// })()



// ================================================================================



// Fetch POST Request with Data

// (async function postRequest() {
//     try {
//         const response = await fetch('https://reqres.in/api/users', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 "name": "Shaown",
//                 "job": "Software Engineer"
//             })
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         consoleWithStyle("POST Request successful:\n", JSON.stringify(data, null, 2));
//     } catch (error) {
//         consoleWithStyle("POST Request failed:\n", error.message);
//     }
// })



// =========================================================================




// Fetch PUT Request with Data

// (async function putRequest() {
//     try {
//         const response = await fetch('https://reqres.in/api/users/2', {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ key1: "newValue" })
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         consoleWithStyle("PUT Request successful:\n", JSON.stringify(data, null, 2));
//     } catch (error) {
//         consoleWithStyle("PUT Request failed:\n", error.message);
//     }
// })





// ==========================================================================================




// Fetch DELETE Request

// (async function deleteRequest() {
//     try {
//         const response = await fetch('https://reqres.in/api/users/2', {
//             method: 'DELETE'
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         consoleWithStyle("DELETE Request successful");
//     } catch (error) {
//         consoleWithStyle("DELETE Request failed:\n", error.message);
//     }
// })