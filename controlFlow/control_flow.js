let userRole = "admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;
let userType = "subscriber";
let userCategory;
let personRole = "enrolledMember";
let dietAccess;
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated";


if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

if (personRole === "employee") {
    dietAccess = "Authorized to access Dietary Services";
} else if (personRole === "enrolledMember") {
    dietAccess = "Authorized to access Dietary Services and one-to-one interaction with dietician";
} else if (personRole === "subscriber") {
    dietAccess = "Partial access to Dietary Services";
} 
else {
    dietAccess = "Please subscribe first to access facility";
}

console.log("Access Level:", accessLevel);
console.log("User Message:", userMessage);
console.log("User Category:", userCategory);
console.log("Authentication Status:", authenticationStatus);
console.log("Eligibility:", dietAccess);