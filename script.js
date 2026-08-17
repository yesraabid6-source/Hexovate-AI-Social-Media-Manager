///login page mein log in button ko overview ke sath connect krna 
 let email = document.getElementById("email");
 let password = document.getElementById("password");
 let overview = document.getElementById("overview");
 if(email && password && overview) {
    overview.addEventListener("click", () => {
        if (email.value === "" || password.value === "") {
            alert("Enter Email and Password");
        } else {
            window.location.href = "overview.html";
        }
    });
 }
 //signup button ko overview sath connect krna
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

 // setting wale part s aaccount delte krna
let deleteAccount = document.getElementById("deleteAccount"); 
 
if(deleteAccount) {
    deleteAccount.addEventListener("click", () => {
        let confirmDelete = confirm("Are You Sure You Want To Delete Your Account?");
        if(confirmDelete) {
            window.location.href = "signup.html";
        }
    });
}
 
// Reach and Likes Counter 
 
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
 
 
// Stats Elements 
 
let teamsElement = document.getElementById("teams"); 
let postsElement = document.getElementById("posts"); 
let ratingElement = document.getElementById("rating"); 
 
 
// Fast Animation 
 
let statsInterval = setInterval(() => { 
 
 
    currentTeams += 100; 
    currentPosts += 8000; 
    currentRating += 0.2; 
 
 
    if (teamsElement) { 
 
        teamsElement.innerText = 
            Math.min(currentTeams, 2400).toLocaleString() + "+"; 
 
    } 
 
 
    if (postsElement) { 
 
        postsElement.innerText = 
            Math.min(currentPosts, 180000) >= 1000 
                ? Math.floor(Math.min(currentPosts, 180000) / 1000) + "k+" 
                : currentPosts + "+"; 
 
    } 
 
 
    if (ratingElement) { 
 
        ratingElement.innerText = 
            Math.min(currentRating, 4.8).toFixed(1) + "/5"; 
 
    } 
 
 
    if (currentTeams >= 2400) { 
        clearInterval(statsInterval); 
    } 
 
 
}, 100); 
 
 
 
// ==================== PLATFORM PERFORMANCE ==================== 
 
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
 
 
    // Instagram 
 
    if (instagramValue && instagramBar) { 
 
        instagramValue.innerText = instagram + "%"; 
 
        instagramBar.style.width = 
            (instagram * 10) + "%"; 
 
    } 
 
 
    // Facebook 
 
    if (facebookValue && facebookBar) { 
 
        facebookValue.innerText = facebook + "%"; 
 
        facebookBar.style.width = 
            (facebook * 10) + "%"; 
 
    } 
 
 
    // LinkedIn 
 
    if (linkedinValue && linkedinBar) { 
 
        linkedinValue.innerText = linkedin + "%"; 
 
        linkedinBar.style.width = 
            (linkedin * 10) + "%"; 
 
    } 
 
} 
 
 
setInterval(updatePerformance, 2000); 
 
 
//analytic page ke graphs ko handle kiya hai  
// Analytics page stats 
 
let likees = 3240; 
let comments = 412; 
let reachs = 18400; 
let engagement = 6.2; 
 
 
let likeesElement = document.getElementById("likees"); 
let commentsElement = document.getElementById("comments"); 
let reachsElement = document.getElementById("reachs"); 
let engagementElement = document.getElementById("engagement"); 
 
 
// Change analytics numbers 
 
function updateAnalytics() { 
 
    likees += Math.floor(Math.random() * 20) + 5; 
    comments += Math.floor(Math.random() * 5) + 1; 
    reachs += Math.floor(Math.random() * 100) + 20; 
    engagement += (Math.random() * 0.1); 
 
     
    if (likeesElement) { 
        likeesElement.innerText = likees.toLocaleString(); 
    } 
 
    if (commentsElement) { 
        commentsElement.innerText = comments; 
    } 
 
    if (reachsElement) { 
        reachsElement.innerText = 
            (reachs / 1000).toFixed(1) + "k"; 
    } 
 
    if (engagementElement) { 
        engagementElement.innerText = 
            engagement.toFixed(1) + "%"; 
    } 
 
} 
 
 
setInterval(updateAnalytics, 3000); 
 
 
// Platform performance bars 
 
let instagramBars = document.getElementById("instagramBars"); 
let facebookBars = document.getElementById("facebookBars"); 
let linkedinBars = document.getElementById("linkedinBars"); 
let xBars = document.getElementById("xBars"); 
 
 
function updatePlatformBars() { 
 
    let instagram = Math.floor(Math.random() * 60) + 60; 
    let facebook = Math.floor(Math.random() * 50) + 40; 
    let linkedin = Math.floor(Math.random() * 35) + 25; 
    let x = Math.floor(Math.random() * 40) + 25; 
 
 
    if (instagramBars) { 
        instagramBars.style.height = instagram + "px"; 
    } 
 
    if (facebookBars) { 
        facebookBars.style.height = facebook + "px"; 
    } 
 
    if (linkedinBars) { 
        linkedinBars.style.height = linkedin + "px"; 
    } 
 
    if (xBars) { 
        xBars.style.height = x + "px"; 
    } 
 
} 
 
 
setInterval(updatePlatformBars, 2500); 
 
 
 
// Reach graph 
 
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
            `90,${point1} 
             150,${point2} 
             200,${point3} 
             255,${point4} 
             310,${point5} 
             360,${point6} 
             420,${point7}` 
        ); 
 
    } 
 
} 
 
 
setInterval(updateReachGraph, 2500); 
 
 
 
 
// Calendar month and year 
 
let currentMonth = 7; 
let currentYear = 2026; 
 
let monthTitle = document.getElementById("monthTitle"); 
let prevMonth = document.getElementById("prevMonth"); 
let nextMonth = document.getElementById("nextMonth"); 
let calendar = document.getElementById("calendar"); 
 
 
// Posts for different days 
 
let posts = { 
    "2026-7-1": "IG · 6pm", 
    "2026-7-3": "IG · 11am", 
    "2026-7-5": "LI · 10am", 
    "2026-7-8": "X · 1pm", 
    "2026-7-10": "FB · 2pm", 
    "2026-7-12": "IG · 9am", 
    "2026-7-20": "IG · 7pm", 
    "2026-7-21": "FB · 2pm", 
    "2026-7-24": "LI · 10am", 
    "2026-7-25": "X · 5:30pm", 
    "2026-7-27": "IG · 11am" 
}; 
 
 
// Month names 
 
let months = [ 
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December" 
]; 
 
 
// Create calendar 
 
function createCalendar() { 
 
    calendar.innerHTML = ""; 
 
    monthTitle.innerText = months[currentMonth] + " " + currentYear; 
 
 
    // First day of month 
 
    let firstDay = new Date(currentYear, currentMonth, 1).getDay(); 
 
    // Total days 
 
    let totalDays = new Date(currentYear, currentMonth + 1, 0).getDate(); 
 
 
    // Empty boxes before day 1 
 
    for (let i = 0; i < firstDay; i++) { 
 
        let emptyBox = document.createElement("div"); 
 
        emptyBox.className = "h-[65px] sm:h-[76px]"; 
 
        calendar.appendChild(emptyBox); 
    } 
 
 
    // Create days 
 
    for (let day = 1; day <= totalDays; day++) { 
 
        let dayBox = document.createElement("div"); 
 
        dayBox.className = 
            "bg-white border border-[#DDE8D5] rounded-lg p-1.5 h-[65px] sm:h-[76px] overflow-hidden"; 
 
 
        // Day number 
 
        let dayNumber = document.createElement("span"); 
 
        dayNumber.className = 
            "text-[10px] sm:text-[11px] text-[#5C6B58]"; 
 
        dayNumber.innerText = day; 
 
        dayBox.appendChild(dayNumber); 
 
 
        // Check today's date 
 
        if ( 
            day === 16 && 
            currentMonth === 7 && 
            currentYear === 2026 
        ) { 
 
            dayBox.className = 
                "bg-white border-[1.5px] border-[#2F5D50] rounded-lg p-1.5 h-[65px] sm:h-[76px] overflow-hidden"; 
 
 
            let today = document.createElement("span"); 
 
            today.className = 
                "float-right bg-[#2F5D50] text-white text-[7px] sm:text-[8px] px-1.5 py-0.5 rounded"; 
 
            today.innerText = "Today"; 
 
            dayBox.appendChild(today); 
        } 
 
 
        // Post key 
 
        let postKey = 
            currentYear + "-" + currentMonth + "-" + day; 
 
 
        // Check if post exists 
 
        if (posts[postKey]) { 
 
            let post = document.createElement("div"); 
 
            post.className = 
                "bg-[#DDE8D5] text-[#2F5D50] text-[8px] sm:text-[9px] px-1.5 py-0.5 rounded-md mt-1 truncate"; 
 
            post.innerText = posts[postKey]; 
 
            dayBox.appendChild(post); 
        } 
 
 
        calendar.appendChild(dayBox); 
    } 
} 
 
 
// Previous month 
 
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


    createCalendar();
}