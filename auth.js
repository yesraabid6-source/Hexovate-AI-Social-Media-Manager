// ==========================================
// 1. SUPABASE INITIALIZATION
// ==========================================
const SUPABASE_URL = "https://zlwsshehdgivusybauun.supabase.co"; // <-- Apni actual URL dalein
const SUPABASE_ANON_KEY = "sb_publishable_3WovYfWHSW4n_N6t8UZJhw_CEb0A_od";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


// ==========================================
// 2. SIGN UP LOGIC (signup.html)
// ==========================================
const username = document.getElementById("username");
const useremail = document.getElementById("useremail");
const userpassword = document.getElementById("userpassword");
const usersignupbtn = document.getElementById("usersignupbtn");

if (usersignupbtn && useremail && userpassword) {
    usersignupbtn.addEventListener("click", async (e) => {
        e.preventDefault();

        const nameVal = username ? username.value.trim() : "";
        const emailVal = useremail.value.trim();
        const passVal = userpassword.value;

        if (emailVal === "" || passVal === "") {
            alert("Please enter Email and Password!");
            return;
        }

        usersignupbtn.disabled = true;
        usersignupbtn.innerText = "Creating account...";

        const { data, error } = await supabaseClient.auth.signUp({
            email: emailVal,
            password: passVal,
            options: {
                data: { display_name: nameVal }
            }
        });

        if (error) {
            alert("Sign Up Error: " + error.message);
            usersignupbtn.disabled = false;
            usersignupbtn.innerText = "Create account";
        } else {
            alert("Account created successfully! Now redirecting to Login page...");
            window.location.href = "login.html";
        }
    });
}


// ==========================================
// 3. LOGIN LOGIC (login.html)
// ==========================================
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn") || document.getElementById("overview");
const loginForm = document.getElementById("loginForm");
const messageBox = document.getElementById("messageBox");

// Message show helper
function showLoginMessage(msg, isError = false) {
    if (messageBox) {
        messageBox.textContent = msg;
        messageBox.className = "text-xs p-2.5 rounded-lg mb-4 text-center font-medium block";
        if (isError) {
            messageBox.classList.add("bg-red-100", "text-red-700", "border", "border-red-200");
        } else {
            messageBox.classList.add("bg-green-100", "text-green-700", "border", "border-green-200");
        }
    } else {
        alert(msg);
    }
}

// Function to handle login
async function handleLoginSubmit(e) {
    if (e) e.preventDefault();

    const emailVal = email ? email.value.trim() : "";
    const passVal = password ? password.value : "";

    if (emailVal === "" || passVal === "") {
        showLoginMessage("Please enter both Email and Password!", true);
        return;
    }

    if (loginBtn) {
        loginBtn.disabled = true;
        loginBtn.innerText = "Logging in...";
    }

    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: emailVal,
        password: passVal,
    });

    if (error) {
        showLoginMessage("Login Error: " + error.message, true);
        if (loginBtn) {
            loginBtn.disabled = false;
            loginBtn.innerText = "Log in";
        }
    } else {
        showLoginMessage("Login Successful! Redirecting...", false);
        setTimeout(() => {
            window.location.href = "overview.html";
        }, 1000);
    }
}

// Listen to Form Submit or Button Click
if (loginForm) {
    loginForm.addEventListener("submit", handleLoginSubmit);
} else if (loginBtn) {
    loginBtn.addEventListener("click", handleLoginSubmit);
}