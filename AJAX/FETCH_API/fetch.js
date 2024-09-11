function showResponse(message) {
    document.getElementById("response").textContent = message;
}

// Fetch GET Request
async function getRequest() {
    try {
        const response = await fetch('https://reqres.in/api/users/2'); // Replace with your file or API URL
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        showResponse("GET Request successful:\n" + JSON.stringify(data, null, 2));
    } catch (error) {
        showResponse("GET Request failed:\n" + error.message);
    }
}

// Fetch GET Text File
async function getText() {
    try {
        const response = await fetch('ajax_info.txt'); // Replace with your file or API URL
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const text = await response.text();
        showResponse("Text response:\n" + text);
    } catch (error) {
        showResponse("Request failed:\n" + error.message);
    }
}

// Fetch Handling Errors
async function handleErrors() {
    try {
        const response = await fetch('nonexistentfile.txt'); // This file doesn't exist
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const text = await response.text();
        showResponse("Request successful:\n" + text);
    } catch (error) {
        showResponse("Request failed with status:\n" + error.message);
    }
}

// Fetch POST Request with Data
async function postRequest() {
    try {
        const response = await fetch('https://reqres.in/api/users', { // Replace with your endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": "Shaown",
                "job": "Software Engineer"
            })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        showResponse("POST Request successful:\n" + JSON.stringify(data, null, 2));
    } catch (error) {
        showResponse("POST Request failed:\n" + error.message);
    }
}

// Fetch PUT Request with Data
async function putRequest() {
    try {
        const response = await fetch('https://reqres.in/api/users/2', { // Replace with your endpoint
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ key1: "newValue" })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        showResponse("PUT Request successful:\n" + JSON.stringify(data, null, 2));
    } catch (error) {
        showResponse("PUT Request failed:\n" + error.message);
    }
}

// Fetch DELETE Request
async function deleteRequest() {
    try {
        const response = await fetch('https://reqres.in/api/users/2', { // Replace with your endpoint
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const text = await response.text();
        showResponse("DELETE Request successful:\n" + text);
    } catch (error) {
        showResponse("DELETE Request failed:\n" + error.message);
    }
}