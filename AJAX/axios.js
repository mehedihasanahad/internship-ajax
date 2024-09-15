import { consoleWithStyle } from "../helper.js";



// 1. GET Request

// axios.get('https://reqres.in/api/users/2')
// .then(response => {
//     consoleWithStyle('Response :\n', JSON.stringify(response.data.data, null, 2));
// })
// .catch(error => {
//     console.error(error);
// });



// =============================================================================



// 2. POST Request

// axios.post('https://reqres.in/api/users', {
//     "name": "Shaown",
//     "job": "Software Engineer"
//   })
//   .then(response => {
//     consoleWithStyle('Response :\n', JSON.stringify(response.data, null, 2));
//   })
//   .catch(error => {
//     console.error(error);
//   });





// ===================================================================================




// 3. PUT Request

// axios.put('https://reqres.in/api/users/2', {
//     name: 'Jane Doe',
//     email: 'jane.doe@example.com'
// })
// .then(response => {
//     consoleWithStyle('Response :\n', JSON.stringify(response.data, null, 2));
// })
// .catch(error => {
//     console.error(error);
// });




// ===========================================================================



// 4. PATCH Request

// axios.patch('https://reqres.in/api/users/2', {
//     email: 'jane.doe@example.com'
// })
// .then(response => {
//     consoleWithStyle('Response :\n', JSON.stringify(response.data, null, 2));
// })
// .catch(error => {
//     console.error(error);
// });





// =========================================================================




// 5. DELETE Request

// axios.delete('https://reqres.in/api/users/2')
//   .then(response => {
//     consoleWithStyle('Record deleted successfully');
//   })
//   .catch(error => {
//     console.error(error);
//   });




// ========================================================================





// 6. Sending Headers

// axios.get('https://reqres.in/api/users/2', {
//     headers: {
//         'key_new': 'value22222222222222222222'
//     }
// })
// .then(response => {
//     consoleWithStyle('Response :\n', JSON.stringify(response.data, null, 2));
// })
// .catch(error => {
//     console.error(error);
// });