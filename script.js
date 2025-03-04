const loginScreen = document.getElementById("login-screen");
const registerScreen = document.getElementById("register-screen");
const dashboardScreen = document.getElementById("dashboard");

const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const logoutButton = document.getElementById("logout-btn");

const showRegisterLink = document.getElementById("show-register");
const showLoginLink = document.getElementById("show-login");

// Show login form
showRegisterLink.addEventListener("click", (e) => {
    e.preventDefault();
    loginScreen.style.display = "none";
    registerScreen.style.display = "block";
});

// Show register form
showLoginLink.addEventListener("click", (e) => {
    e.preventDefault();
    registerScreen.style.display = "none";
    loginScreen.style.display = "block";
});

// Handle Register
registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    try {
        const response = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();
        if (response.ok) {
            alert("User registered successfully!");
            registerScreen.style.display = "none";
            loginScreen.style.display = "block";
        } else {
            alert(result.error);
        }
    } catch (error) {
        alert("Error: " + error.message);
    }
});

// Handle Login
loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    try {
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();
        if (response.ok) {
            localStorage.setItem('authToken', result.token); // Store JWT token
            loginScreen.style.display = "none";
            dashboardScreen.style.display = "block";
        } else {
            alert(result.error);
        }
    } catch (error) {
        alert("Error: " + error.message);
    }
});

// Handle Logout
logoutButton.addEventListener("click", () => {
    localStorage.removeItem('authToken');
    dashboardScreen.style.display = "none";
    loginScreen.style.display = "block";
});
