@@ -0,0 +1,71 @@
// Local storage to hold user data
const usersDB = JSON.parse(localStorage.getItem("usersDB")) || [];

// DOM Elements
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
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    // Check if user already exists
    if (usersDB.find(user => user.username === username)) {
        alert("User already exists!");
    } else {
        usersDB.push({ username, password });
        localStorage.setItem("usersDB", JSON.stringify(usersDB));
        alert("User registered successfully!");
        registerScreen.style.display = "none";
        loginScreen.style.display = "block";
    }
});

// Handle Login
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    // Validate user
    const user = usersDB.find(user => user.username === username && user.password === password);

    if (user) {
        loginScreen.style.display = "none";
        dashboardScreen.style.display = "block";
    } else {
        alert("Invalid credentials!");
    }
});

// Handle Logout
logoutButton.addEventListener("click", () => {
    dashboardScreen.style.display = "none";
    loginScreen.style.display = "block";
});