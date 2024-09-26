const appID = "loader"; // Your application name
const apiKey = "0c6305c0343753fff17844a2f2219abe8cc0df416c7e1b8e0efa62bab3971437"; // Your API key
const apiUrl = "https://api.allorigins.win/get?url=" + encodeURIComponent("https://keyauth.com/api/"); // All Origins Proxy

async function validateKey() {
    const keyToValidate = document.getElementById('keyInput').value;
    
    const response = await fetch(apiUrl + "validate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": apiKey // Your API key for authorization
        },
        body: JSON.stringify({
            key: keyToValidate,
            appid: appID // Include your application ID here
        })
    });

    const result = await response.json();
    const messageElement = document.getElementById('result');
    if (result.success) {
        messageElement.textContent = 'Valid';
        messageElement.className = 'message valid'; // Class for valid key
    } else {
        messageElement.textContent = 'Invalid';
        messageElement.className = 'message invalid'; // Class for invalid key
    }
}
