// // Syntax for creating an XMLHttpRequest object:
// variable = new XMLHttpRequest();


// // Define a Callback Function
// xhttp.onload = function() {
//     // What to do when the response is ready
// }
  
// // Send a Request
// xhttp.open("GET", "ajax_info.txt");
// xhttp.send();

// The onload Property
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demo").innerHTML = this.responseText;
    }
    xhttp.open("GET", "ajax_info.txt");
    xhttp.send();
}
  
// Different type of requests (POST, GET, PUT, DELETE)
function showResponse(message) {
    document.getElementById("response").textContent = message;
}

// GET Request
function getRequest() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/users/2", true);
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            showResponse("GET Request successful:\n" + xhr.responseText);
        } else {
            showResponse("GET Request failed:\n" + xhr.statusText);
        }
    };
    xhr.onerror = function() {
        showResponse("Request error.");
    };
    xhr.send();
}

// GET Text File
function getText() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "ajax_info.txt", true);
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            showResponse("Text response:\n" + xhr.responseText);
        } else {
            showResponse("Request failed:\n" + xhr.statusText);
        }
    };
    xhr.onerror = function() {
        showResponse("Request error.");
    };
    xhr.send();
}

// Handle Errors
function handleErrors() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "nonexistentfile.txt", true);
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            showResponse("Request successful:\n" + xhr.responseText);
        } else {
            showResponse("Request failed with status:\n" + xhr.status + " " + xhr.statusText);
        }
    };
    xhr.onerror = function() {
        showResponse("Request error.");
    };
    xhr.send();
}

// POST Request
function postRequest() {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://reqres.in/api/users", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            showResponse("POST Request successful:\n" + xhr.responseText);
        } else {
            showResponse("POST Request failed:\n" + xhr.statusText);
        }
    };
    xhr.onerror = function() {
        showResponse("Request error.");
    };
    xhr.send(JSON.stringify({
        "name": "Shaown",
        "job": "Software Engineer"
    }));
}

// PUT Request
function putRequest() {
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", "https://reqres.in/api/users/524", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            showResponse("PUT Request successful:\n" + xhr.responseText);
        } else {
            showResponse("PUT Request failed:\n" + xhr.statusText);
        }
    };
    xhr.onerror = function() {
        showResponse("Request error.");
    };
    xhr.send(JSON.stringify({
        "name": "Shaown",
        "job": "Junior software engineer"
    }));
}

// DELETE Request
function deleteRequest() {
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", "https://reqres.in/api/users/2", true);
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            showResponse("DELETE Request successful:\n" + xhr.responseText);
        } else {
            showResponse("DELETE Request failed:\n" + xhr.statusText);
        }
    };
    xhr.onerror = function() {
        showResponse("Request error.");
    };
    xhr.send();
}
