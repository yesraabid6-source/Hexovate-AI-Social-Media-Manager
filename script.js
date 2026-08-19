// ==================== SIDEBAR TOGGLE ====================
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (sidebar) {
        sidebar.classList.toggle('-translate-x-full');
    }
    if (overlay) {
        overlay.classList.toggle('hidden');
    }
}

// ==================== SAVE DRAFT HANDLER ====================
function handleSaveDraft() {
    const btn = document.getElementById('saveDraftBtn');
    const toast = document.getElementById('toast');

    if (btn) {
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin text-xs"></i> <span>Saving...</span>';
        btn.disabled = true;
    }

    setTimeout(() => {
        if (btn) {
            btn.innerHTML = '<i class="fa-solid fa-check text-xs text-emerald-600"></i> <span>Saved!</span>';
            setTimeout(() => {
                btn.innerHTML = '<i class="fa-regular fa-bookmark text-xs"></i> <span>Save draft</span>';
                btn.disabled = false;
            }, 1500);
        }

        if (toast) {
            toast.classList.remove('hidden');
            setTimeout(() => {
                toast.classList.add('hidden');
            }, 3000);
        }
    }, 500);
}

// ==================== LOGIN & SIGNUP HANDLERS ====================
let email = document.getElementById("email");
let password = document.getElementById("password");
let overview = document.getElementById("overview");
if (email && password && overview) {
    overview.addEventListener("click", () => {
        if (email.value === "" || password.value === "") {
            alert("Enter Email and Password");
        } else {
            window.location.href = "overview.html";
        }
    });
}

let username = document.getElementById("username");
let useremail = document.getElementById("useremail");
let userpassword = document.getElementById("userpassword");
let usersignupbtn = document.getElementById("usersignupbtn");

if (username && useremail && userpassword && usersignupbtn) {
    usersignupbtn.addEventListener("click", () => {
        if (username.value === "" || useremail.value === "" || userpassword.value === "") {
            alert("Enter the information!!!");
        } else {
            window.location.href = "overview.html";
        }
    });
}

// ==================== SETTINGS - DELETE ACCOUNT ====================
let deleteAccount = document.getElementById("deleteAccount"); 
if (deleteAccount) {
    deleteAccount.addEventListener("click", () => {
        let confirmDelete = confirm("Are You Sure You Want To Delete Your Account?");
        if (confirmDelete) {
            window.location.href = "signup.html";
        }
    });
}

// ==================== REACH AND LIKES ==================== 
let reach = 1200; 
let likes = 94; 

let reachElement = document.getElementById("reach"); 
let likesElement = document.getElementById("likes"); 

function updateEngagement() { 
    let newReach = Math.floor(Math.random() * 80) + 20; 
    let newLikes = Math.floor(Math.random() * 8) + 1; 

    reach = reach + newReach; 
    likes = likes + newLikes; 

    if (reachElement) { 
        if (reach >= 1000) { 
            reachElement.innerText = (reach / 1000).toFixed(1) + "k"; 
        } else { 
            reachElement.innerText = reach; 
        } 
    } 

    if (likesElement) { 
        likesElement.innerText = likes; 
    } 
} 
setInterval(updateEngagement, 3000); 

// ==================== WEBSITE STATS ==================== 
let currentTeams = 0; 
let currentPosts = 0; 
let currentRating = 0; 

let teamsElement = document.getElementById("teams"); 
let postsElement = document.getElementById("posts"); 
let ratingElement = document.getElementById("rating"); 

let statsInterval = setInterval(() => { 
    currentTeams += 100; 
    currentPosts += 8000; 
    currentRating += 0.2; 

    if (teamsElement) { 
        teamsElement.innerText = Math.min(currentTeams, 2400).toLocaleString() + "+"; 
    } 

    if (postsElement) { 
        postsElement.innerText = Math.min(currentPosts, 180000) >= 1000 
            ? Math.floor(Math.min(currentPosts, 180000) / 1000) + "k+" 
            : currentPosts + "+"; 
    } 

    if (ratingElement) { 
        ratingElement.innerText = Math.min(currentRating, 4.8).toFixed(1) + "/5"; 
    } 

    if (currentTeams >= 2400) { 
        clearInterval(statsInterval); 
    } 
}, 100); 

// ==================== PLATFORM PERFORMANCE (OVERVIEW) ==================== 
let instagramValue = document.getElementById("instagramValue"); 
let instagramBar = document.getElementById("instagramBar"); 
let facebookValue = document.getElementById("facebookValue"); 
let facebookBar = document.getElementById("facebookBar"); 
let linkedinValue = document.getElementById("linkedinValue"); 
let linkedinBar = document.getElementById("linkedinBar"); 

function updatePerformance() { 
    let instagram = (Math.random() * 4 + 5).toFixed(1); 
    let facebook = (Math.random() * 3 + 3).toFixed(1); 
    let linkedin = (Math.random() * 3 + 2).toFixed(1); 

    if (instagramValue && instagramBar) { 
        instagramValue.innerText = instagram + "%"; 
        instagramBar.style.width = (instagram * 10) + "%"; 
    } 
    if (facebookValue && facebookBar) { 
        facebookValue.innerText = facebook + "%"; 
        facebookBar.style.width = (facebook * 10) + "%"; 
    } 
    if (linkedinValue && linkedinBar) { 
        linkedinValue.innerText = linkedin + "%"; 
        linkedinBar.style.width = (linkedin * 10) + "%"; 
    } 
} 
setInterval(updatePerformance, 2000); 

// ==================== ANALYTICS STATS ==================== 
let likees = 3240; 
let comments = 412; 
let reachs = 18400; 
let engagement = 6.2; 

let likeesElement = document.getElementById("likees"); 
let commentsElement = document.getElementById("comments"); 
let reachsElement = document.getElementById("reachs"); 
let engagementElement = document.getElementById("engagement"); 

function updateAnalytics() { 
    likees += Math.floor(Math.random() * 20) + 5; 
    comments += Math.floor(Math.random() * 5) + 1; 
    reachs += Math.floor(Math.random() * 100) + 20; 
    engagement += (Math.random() * 0.1); 

    if (likeesElement) { likeesElement.innerText = likees.toLocaleString(); } 
    if (commentsElement) { commentsElement.innerText = comments; } 
    if (reachsElement) { reachsElement.innerText = (reachs / 1000).toFixed(1) + "k"; } 
    if (engagementElement) { engagementElement.innerText = engagement.toFixed(1) + "%"; } 
} 
setInterval(updateAnalytics, 3000); 

// Platform performance bars (Analytics page)
let instagramBars = document.getElementById("instagramBars"); 
let facebookBars = document.getElementById("facebookBars"); 
let linkedinBars = document.getElementById("linkedinBars"); 
let xBars = document.getElementById("xBars"); 

function updatePlatformBars() { 
    let instagram = Math.floor(Math.random() * 60) + 60; 
    let facebook = Math.floor(Math.random() * 50) + 40; 
    let linkedin = Math.floor(Math.random() * 35) + 25; 
    let x = Math.floor(Math.random() * 40) + 25; 

    if (instagramBars) { instagramBars.style.height = instagram + "px"; } 
    if (facebookBars) { facebookBars.style.height = facebook + "px"; } 
    if (linkedinBars) { linkedinBars.style.height = linkedin + "px"; } 
    if (xBars) { xBars.style.height = x + "px"; } 
} 
setInterval(updatePlatformBars, 2500); 

// Reach graph (Analytics SVG)
let reachLine = document.getElementById("reachLine"); 
function updateReachGraph() { 
    let point1 = Math.floor(Math.random() * 30) + 90; 
    let point2 = Math.floor(Math.random() * 30) + 70; 
    let point3 = Math.floor(Math.random() * 30) + 90; 
    let point4 = Math.floor(Math.random() * 30) + 55; 
    let point5 = Math.floor(Math.random() * 30) + 65; 
    let point6 = Math.floor(Math.random() * 30) + 25; 
    let point7 = Math.floor(Math.random() * 20) + 20; 

    if (reachLine) { 
        reachLine.setAttribute( 
            "points", 
            `90,${point1} 150,${point2} 200,${point3} 255,${point4} 310,${point5} 360,${point6} 420,${point7}` 
        ); 
    } 
} 
setInterval(updateReachGraph, 2500); 


// ==================== VISUAL CONTENT CALENDAR (WITH IMAGES) ==================== 
let currentMonth = 7; // August (0-indexed)
let currentYear = 2026; 

let monthTitle = document.getElementById("monthTitle"); 
let prevMonth = document.getElementById("prevMonth"); 
let nextMonth = document.getElementById("nextMonth"); 
let calendar = document.getElementById("calendar"); 

// POSTS DATA WITH IMAGES & STATUS
let posts = { 
    "2026-7-1":  { text: "IG · 6pm",    status: "published", img: "./images/coffeepost.avif" }, 
    "2026-7-3":  { text: "IG · 11am",   status: "published", img: "./images/coffeepost.avif" }, 
    "2026-7-5":  { text: "LI · 10am",   status: "published", img: "./images/coffeelogo.avif" }, 
    "2026-7-8":  { text: "X · 1pm",     status: "published", img: "./images/coffeeimglogo2.avif" }, 
    "2026-7-10": { text: "FB · 2pm",    status: "published", img: "./images/coffeepost.avif" }, 
    "2026-7-12": { text: "IG · 9am",    status: "published", img: "./images/coffeeimglogo.avif" }, 
    "2026-7-20": { text: "IG · 7pm",    status: "scheduled", img: "./images/salethumbnail.jpg" }, 
    "2026-7-21": { text: "FB · 2pm",    status: "scheduled", img: "./images/pastry.jpg"}, 
    "2026-7-24": { text: "LI · 10am",   status: "scheduled", img: "./images/coffeelogo.avif" }, 
    "2026-7-25": { text: "X · 5:30pm",  status: "scheduled", img: "./images/hiringthumbnail.jpg" }, 
    "2026-7-27": { text: "IG · 11am",   status: "scheduled", img: "./images/celebration.avif" } 
}; 

let months = [ 
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December" 
]; 

// Create calendar dynamically with images
function createCalendar() { 
    if (!calendar || !monthTitle) return;

    calendar.innerHTML = ""; 
    monthTitle.innerText = months[currentMonth] + " " + currentYear; 

    let firstDay = new Date(currentYear, currentMonth, 1).getDay(); 
    let totalDays = new Date(currentYear, currentMonth + 1, 0).getDate(); 

    // Empty boxes before day 1 
    for (let i = 0; i < firstDay; i++) { 
        let emptyBox = document.createElement("div"); 
        emptyBox.className = "h-[70px] sm:h-[82px]"; 
        calendar.appendChild(emptyBox); 
    } 

    // Create days 
    for (let day = 1; day <= totalDays; day++) { 
        let dayBox = document.createElement("div"); 
        dayBox.className = "bg-white border border-[#DDE8D5] rounded-xl p-1.5 h-[70px] sm:h-[82px] overflow-hidden flex flex-col justify-between shadow-xs transition hover:border-[#2F5D50]"; 

        // Header inside dayBox (Day number + Today badge)
        let headerDiv = document.createElement("div");
        headerDiv.className = "flex justify-between items-start";

        let dayNumber = document.createElement("span"); 
        dayNumber.className = "text-[10px] sm:text-[11px] text-[#5C6B58] font-bold"; 
        dayNumber.innerText = day; 
        headerDiv.appendChild(dayNumber);

        // Check if today (16 August 2026)
        if (day === 16 && currentMonth === 7 && currentYear === 2026) { 
            dayBox.className = "bg-white border-2 border-[#2F5D50] rounded-xl p-1.5 h-[70px] sm:h-[82px] overflow-hidden flex flex-col justify-between shadow-sm"; 
            dayNumber.className = "text-[10px] sm:text-[11px] text-[#2F5D50] font-black";

            let today = document.createElement("span"); 
            today.className = "bg-[#2F5D50] text-white text-[7px] sm:text-[8px] px-1.5 py-0.5 rounded font-bold"; 
            today.innerText = "Today"; 
            headerDiv.appendChild(today); 
        } 
        dayBox.appendChild(headerDiv);

        // Post key 
        let postKey = currentYear + "-" + currentMonth + "-" + day; 

        // Check if post exists & render with Image
        if (posts[postKey]) { 
            let postData = posts[postKey];
            let postChip = document.createElement("div"); 

            // Check if published or scheduled styling
            if (postData.status === "scheduled") {
                postChip.className = "bg-[#F0E6C8] text-[#8A6D1F] text-[8px] sm:text-[9px] p-1 rounded-md flex items-center gap-1.5 truncate";
            } else {
                postChip.className = "bg-[#DDE8D5] text-[#2F5D50] text-[8px] sm:text-[9px] p-1 rounded-md flex items-center gap-1.5 truncate";
            }

            // Image Thumbnail
            let img = document.createElement("img");
            img.src = postData.img;
            img.className = "w-4 h-4 rounded object-cover shrink-0";
            img.alt = "thumb";

            let textSpan = document.createElement("span");
            textSpan.className = "font-bold truncate";
            textSpan.innerText = postData.text;

            postChip.appendChild(img);
            postChip.appendChild(textSpan);
            dayBox.appendChild(postChip); 
        } 

        calendar.appendChild(dayBox); 
    } 
} 

// Calendar Month Navigation
if (prevMonth && nextMonth && calendar && monthTitle) {
    prevMonth.addEventListener("click", function () {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        createCalendar();
    });

    nextMonth.addEventListener("click", function () {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        createCalendar();
    });

    // Initialize calendar on page load
    createCalendar();
}


// ==================== SETTINGS PAGE FUNCTIONALITY ====================

// 1. CHANGE & UPLOAD PROFILE PHOTO (Live Preview)
const avatarInput = document.getElementById('avatarInput');
const changePhotoBtn = document.getElementById('changePhotoBtn');
const removePhotoBtn = document.getElementById('removePhotoBtn');
const profileImg = document.getElementById('profileImg');
const sidebarAvatar = document.getElementById('sidebarAvatar');

if (changePhotoBtn && avatarInput) {
    changePhotoBtn.addEventListener('click', () => {
        avatarInput.click();
    });

    avatarInput.addEventListener('change', function (e) {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = function (event) {
                if (profileImg) profileImg.src = event.target.result;
                if (sidebarAvatar) sidebarAvatar.src = event.target.result;
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    });
}

// 2. REMOVE PHOTO (Reset to Default)
if (removePhotoBtn) {
    removePhotoBtn.addEventListener('click', () => {
        const defaultAvatar = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80";
        if (profileImg) profileImg.src = defaultAvatar;
        if (sidebarAvatar) sidebarAvatar.src = defaultAvatar;
        alert("Profile photo reset to default!");
    });
}

// 3. SAVE CHANGES WITH TOAST NOTIFICATION
const saveSettingsBtn = document.getElementById('saveSettingsBtn');
const settingsToast = document.getElementById('settingsToast');
const settingFullName = document.getElementById('settingFullName');
const sidebarUsername = document.getElementById('sidebarUsername');

if (saveSettingsBtn) {
    saveSettingsBtn.addEventListener('click', () => {
        saveSettingsBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin text-xs"></i> <span>Saving...</span>';
        saveSettingsBtn.disabled = true;

        setTimeout(() => {
            // Update username in sidebar live
            if (settingFullName && sidebarUsername) {
                sidebarUsername.innerText = settingFullName.value;
            }

            saveSettingsBtn.innerHTML = '<i class="fa-solid fa-check text-xs text-emerald-600"></i> <span>Saved!</span>';

            // Show Toast Alert
            if (settingsToast) {
                settingsToast.classList.remove('hidden');
                setTimeout(() => {
                    settingsToast.classList.add('hidden');
                }, 3000);
            }

            setTimeout(() => {
                saveSettingsBtn.innerHTML = '<i class="fa-solid fa-check text-xs"></i> <span>Save changes</span>';
                saveSettingsBtn.disabled = false;
            }, 1500);
        }, 500);
    });
}

// 4. NOTIFICATION TOGGLE SWITCHES (ON / OFF)
function toggleNotification(btn) {
    const circle = btn.querySelector('span');
    if (btn.classList.contains('bg-[#2F5D50]')) {
        // Switch to OFF (Gray)
        btn.classList.remove('bg-[#2F5D50]');
        btn.classList.add('bg-[#DDE8D5]');
        circle.classList.remove('right-[3px]');
        circle.classList.add('left-[3px]');
    } else {
        // Switch to ON (Green)
        btn.classList.remove('bg-[#DDE8D5]');
        btn.classList.add('bg-[#2F5D50]');
        circle.classList.remove('left-[3px]');
        circle.classList.add('right-[3px]');
    }
}

// 5. CONNECT / DISCONNECT SOCIAL ACCOUNTS
function toggleConnect(btn, platform) {
    if (btn.innerText.trim() === "Connect") {
        btn.innerText = "Connected";
        btn.className = "bg-[#DDE8D5] text-[#2F5D50] text-[11px] px-3 py-1 rounded-full font-bold cursor-pointer transition";
    } else {
        btn.innerText = "Connect";
        btn.className = "border border-[#DDE8D5] bg-white text-[#2F5D50] text-[11px] px-3 py-1 rounded-full font-bold hover:bg-[#F5F8F1] cursor-pointer transition shadow-xs";
    }
}

// 6. MANAGE PLAN MODAL / POPUP
const managePlanBtn = document.getElementById('managePlanBtn');
if (managePlanBtn) {
    managePlanBtn.addEventListener('click', () => {
        alert("✨ Hexovate Growth Plan ($29/month)\n\n• Unlimited scheduled posts\n• 4 Connected social channels\n• Advanced AI caption & analytics\n\nNext Billing Date: September 1, 2026\nTo upgrade or cancel, contact billing@hexovate.com");
    });
}