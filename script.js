function login() {
    var keyInput = document.getElementById("keyInput").value;
    
    // You can add logic here to validate the key, make an API call, etc.
    
    if (keyInput === "SUJOY") {
        // Redirect to home page or API.php
        window.location.href = "SJR.php";
    } else {
        alert("Invalid key. Please try again.");
    }
}
