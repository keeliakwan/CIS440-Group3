function main() {
    accountList = [];
    console.log("Page Loaded, Ready.");
    checkLoginStatus();
    console.log("Checked login status!")
    loadAccounts();

    if (window.location.href.includes("manageAccounts.html")) {
        console.log("Current Page: Manage Accounts");
        manageAccountsPage();
    }
    else {
        console.log("Current Page: The Void. How are you seeing this text?");
    }

}

function loadAccounts() {
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
        console.log("Loaded Accounts List from Local Storage");
    }
}

function manageAccountsLink() {
    if (userLevel === "admin") { 
        document.location.href = "manageAccounts.html";
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
    currentUser = { currentAccount: "Not Logged In", loggedIn: false, userLevel: "none"};
    console.log(currentUser);
    sessionStorage.setItem("storedUser", JSON.stringify(currentUser));
    document.location.href = "logout.html";
}

function login() {
    console.log(accountList);
    let enteredUsername = document.getElementById('username').value;
    // console.log("Entered Username is " + enteredUsername);
    let enteredPassword = document.getElementById('password').value;
    // console.log("Entered Password is " + enteredPassword);

    let accountFound = accountList.find(account => account.username === enteredUsername && account.password === enteredPassword);

    if (accountFound != null) {
        currentUser = { currentAccount: accountFound.firstName, loggedIn: true, userLevel: accountFound.level};
        console.log(currentUser);
        sessionStorage.setItem("storedUser", JSON.stringify(currentUser));
        alert("You have been logged in as " + accountFound.username);
    }
    else {
        alert("Incorrect Login.  Please Try again");
    } 
}

function checkLoginStatus() {
    let storedUser = JSON.parse(sessionStorage.getItem("storedUser"));

    if (storedUser == null || storedUser.currentAccount == "Not Logged In") {
        loggedIn = false;
        currentAccount = "Not Logged In";
        userLevel = "none";
    }
    else {
        loggedIn = true;
        currentAccount = storedUser.currentAccount;
        userLevel = storedUser.userLevel;
    }
    console.log("Current User from Session Storage: " + currentAccount + " " + userLevel + " " + loggedIn);
}




function manageAccountsPage() {
    /*
    accountCount = accountList.length
    console.log(accountCount);
    itemCount = 0;

    tempAccountList = JSON.stringify(accountList)
    console.log(tempAccountList)

    var accountsTable = document.getElementById("accountsTable");


    tempAccountList.forEach(addTableRow);
    function addTableRow() {
        for (const [key, value] of Object.entries(tempAccountList)) {
            console.log(key, value);
            var row = accountsTable.insertRow(-1);
            var usernameCell = row.insertCell(0);
            usernameCell.innerHTML = value;
            //var firstNameCell
            //var lastNameCell
            //var accountTypeCell
            listIndex += 1;
        }
    }

    for (const [key, value] of Object.entries(accountList)) {
        console.log(key, value);
        var row = accountsTable.insertRow(-1);
        var usernameCell = row.insertCell(0);
        usernameCell.innerHTML = value;
        //var firstNameCell
        //var lastNameCell
        //var accountTypeCell
    }

   // This is on the right track!
    do {
        console.log(tempAccountList[itemCount]);
        itemCount++;
    } while (itemCount < accountCount);
    */
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



$(document).ready(main);
