function main() {
    accountList = [];
    loggedIn = false;
    currentAccount = "Not Logged In";
    userLevel = "none";
   
    console.log("Page Loaded, Ready.");
    loadData();
}

function loadData() {
    if (localStorage.getItem('users') == null) {
        var newAccount = {};

        // Adding some default accounts for now.  Will translate tino DB later.
        newAccount = { firstName: "Tiffany", lastName: "Hubbard", level: "employee", username: "tHubbard", password: "123abc"};
        accountList.push(newAccount);
        console.log("Employee Tiffany Added.");
        newAccount = { firstName: "Bryan", lastName: "Thomas", level: "manager", username: "bThomas", password: "abcdef" };
        accountList.push(newAccount);
        console.log("Manager Bryan Added.");
        newAccount = { firstName: "Frida", lastName: "Ayala Bojorquez", level: "employee", username: "fBojorquez", password: "123456" };
        accountList.push(newAccount);
        console.log("Employee Frida Added.");
        newAccount = { firstName: "Haseen", lastName: "Aman", level: "employee", username: "hAman", password: "acb123" };
        accountList.push(newAccount);
        console.log("Employee Haseen Added.");
        newAccount = { firstName: "Keelia", lastName: "Kwan", level: "manager", username: "kKwan", password: "a1c2b3" };
        accountList.push(newAccount);
        console.log("Manager Keelia Added.");
        newAccount = { firstName: "Test", lastName: "Employee", level: "employee", username: "employee", password: "employee123" };
        accountList.push(newAccount);
        console.log("Test Employee Added.");
        newAccount = { firstName: "Test", lastName: "Manager", level: "manager", username: "manager", password: "manager123" };
        accountList.push(newAccount);
        console.log("Test Manager Added.");
        newAccount = { firstName: "Test", lastName: "Admin", level: "admin", username: "admin", password: "admin123" };
        accountList.push(newAccount);
        console.log("Test Admin Added.");
        console.log(accountList);
        console.log("Created default users.");
        localStorage.setItem("users", JSON.stringify(accountList));
    }
    else {
        accountList = JSON.parse(localStorage.getItem("users"));
        console.log(accountList);
        console.log("Loaded users from Local Storage");
    }
}

function manageAccountsLink() {
    if (userLevel === "admin") { 
        document.location.href = "manage-accounts.html";
    }
    else if (userLevel === "employee" || userLevel === "manager") {
        document.location.href = "noPermissions.html";
    }
    else {
        document.location.href = "notLoggedIn.html";
    }
}

function enterFeedbackLink() {
    if (userLevel === "manager") { 
        document.location.href = "enterFeedback.html";
    }
    else if (userLevel === "employee" || userLevel === "admin") {
        document.location.href = "noPermissions.html";
    }
    else {
        document.location.href = "notLoggedIn.html";
    }
}

function dashboardLink() {
    if (loggedIn) { 
        document.location.href = "dashboard.html";
    }
    else {
        document.location.href = "notLoggedIn.html";
    }
}

function logoutLink() {
    loggedIn = false;
    currentAccount = "Not Logged In";
    userLevel = "none";
    document.location.href = "logout.html";
}


















function newAccount() {
    // This will be plugged into the UI for new account
    let firstName = "";
    let lastName = "";
    let manager = false;
    let password = "";
    let username = "";

    // Add code here to create new account
}

function login() {
    // Plug the input fields from login page to here
    let enteredUsername = "";
    let enteredPassword = "";

    // Find account and matching password in the accountlist.
    let accountFound = accountList.find(account => account.username === enteredUsername && account.password == enteredPassword);

    if (accountFound) {
        currentAccount = accountFound.firstName;
        loggedIn = true;
        userLevel = accountFound.level;
    }

    else {
        alert("Incorrect Login.  Please Try again");
    } 
}


$(document).ready(main);
