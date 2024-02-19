function main() {
    accountList = [];
    // console.log("Page Loaded, Ready.");
    checkLoginStatus();
    // console.log("Checked login status!")
    loadAccounts();


    if (window.location.href.includes("manageAccounts.html")) {
        console.log("Current Page: Manage Accounts");
        // manageAccountsPage();
    }
    else if (window.location.href.includes("newAccount.html")) {
        console.log("Current Page: New Account");
    }
    else if (window.location.href.includes("feedback.html")) {
        console.log("Current Page: Feedback");
        loadFeedback();
        createFeedbackList();
    }
    else if (window.location.href.includes("newFeedback.html")) {
        console.log("Current Page: Enter New Feedback");
        loadFeedback();
        newFeedbackInfo();
    }
    else {
        console.log("Current Page: The Void. How are you seeing this text?");
    }

}

function loadAccounts() {
    if (localStorage.getItem('users') == null) {
        var newAccount = {};

        newAccount = { firstName: "Tiffany", lastName: "Hubbard", level: "employee", username: "tHubbard", password: "123abc"};
        accountList.push(newAccount);
        newAccount = { firstName: "Bryan", lastName: "Thomas", level: "manager", username: "bThomas", password: "abcdef" };
        accountList.push(newAccount);
        newAccount = { firstName: "Frida", lastName: "Ayala Bojorquez", level: "employee", username: "fBojorquez", password: "123456" };
        accountList.push(newAccount);
        newAccount = { firstName: "Haseen", lastName: "Aman", level: "employee", username: "hAman", password: "acb123" };
        accountList.push(newAccount);
        newAccount = { firstName: "Keelia", lastName: "Kwan", level: "manager", username: "kKwan", password: "a1c2b3" };
        accountList.push(newAccount);
        newAccount = { firstName: "TestEmployee", lastName: "Employee", level: "employee", username: "employee", password: "employee123" };
        accountList.push(newAccount);
        newAccount = { firstName: "TestManager", lastName: "Manager", level: "manager", username: "manager", password: "manager123" };
        accountList.push(newAccount);
        newAccount = { firstName: "TestAdmin", lastName: "Admin", level: "admin", username: "admin", password: "admin123" };
        accountList.push(newAccount);
        console.log("Created default users.");
        console.log("Account List:");
        console.log(accountList);
        localStorage.setItem("users", JSON.stringify(accountList));
    }
    else {
        accountList = JSON.parse(localStorage.getItem("users"));
        console.log("Loaded Accounts List from Local Storage");
        console.log("Account List:");
        console.log(accountList);
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
        document.location.href = "feedback.html";
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
    let enteredPassword = document.getElementById('password').value;

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

function newAccountPage() {
    document.location.href = "newAccount.html";
}

function createNewAccount() {
    var newAccount = {};
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let accountType = document.getElementById('accountTypes').value;

    newAccount = { firstName: firstName, lastName: lastName, level: accountType, username: username, password: password };
    accountList.push(newAccount);
    localStorage.setItem("users", JSON.stringify(accountList));
}

function newFeedbackPage() {
    document.location.href = "newFeedback.html";
}

function loadFeedback() {
    feedbackList = [];

    if (localStorage.getItem('feedbacks') == null) {
        var feedback = { entryManager: "", employee: "", date: "", department: "", feedback: ""};

        feedback = { entryManager: "Keelia", employee: "Tiffany", date: "2024.01.01", department: "HR", feedback: "There needs to be more office parties."};
        feedbackList.push(feedback);
        feedback = { entryManager: "Keelia", employee: "Tiffany", date: "2024.01.08", department: "Accounting", feedback: "Employees should have more freedom with business expenses."};
        feedbackList.push(feedback);
        feedback = { entryManager: "Keelia", employee: "Tiffany", date: "2023.12.12", department: "Sales", feedback: "The benchmark sales figures are unrealistic."};
        feedbackList.push(feedback);
        feedback = { entryManager: "Keelia", employee: "Frida", date: "2024.02.05", department: "Sales", feedback: "Need more Customer Support."};
        feedbackList.push(feedback);
        feedback = { entryManager: "Keelia", employee: "Frida", date: "2024.01.12", department: "Sales", feedback: "Sales incentives need to be increased."};
        feedbackList.push(feedback);
        feedback = { entryManager: "Bryan", employee: "Haseen", date: "2023.12.15", department: "HR", feedback: "Our manager always comes into the office late, but write us up if we do."};
        feedbackList.push(feedback);
        feedback = { entryManager: "Bryan", employee: "Haseen", date: "2024.01.06", department: "HR", feedback: "Actual coffee instead of instant coffee is needed."};
        feedbackList.push(feedback);
        feedback = { entryManager: "Bryan", employee: "Haseen", date: "2024.02.13", department: "Development", feedback: "We need more time off after weeks of grinding."};
        feedbackList.push(feedback);
        feedback = { entryManager: "Bryan", employee: "Haseen", date: "2024.01.20", department: "Accounting", feedback: "Larger pay raises are need to combat market."};
        feedbackList.push(feedback);

        console.log("Created default feedback.");
        console.log("Feedback List:");
        console.log(feedbackList);
        localStorage.setItem("feedbacks", JSON.stringify(feedbackList));;
    }
    else {
        feedbackList = JSON.parse(localStorage.getItem("feedbacks"));
        console.log("Loaded existing feedback from Local Storage");
        console.log("Feedback List:");
        console.log(feedbackList);
    }
}

function createFeedbackList() {
    var feedbackCount = feedbackList.length
    console.log("Number of feedback: " + feedbackCount);
    currentIndex = 0;

    var sortedFeedback = feedbackList.toSorted( compare );

    function compare( a, b ) {
        if ( a.date < b.date ){
          return 1;
        }
        if ( a.date > b.date ){
          return -1;
        }
        return 0;
      }

    while (currentIndex < feedbackCount) {
        let row = feedbackTable.insertRow(-1);
        let dateCell = row.insertCell(0);
        dateCell.innerHTML = sortedFeedback[currentIndex].date;
        let employeeCell = row.insertCell(1);
        employeeCell.innerHTML = sortedFeedback[currentIndex].employee;
        let managerCell = row.insertCell(2);
        managerCell.innerHTML = sortedFeedback[currentIndex].entryManager;
        let departmentCell = row.insertCell(3);
        departmentCell.innerHTML = sortedFeedback[currentIndex].department;
        let feedbackCell = row.insertCell(4);
        feedbackCell.innerHTML = sortedFeedback[currentIndex].feedback;
        currentIndex++;
    }
}

function newFeedbackInfo() {
    const todaysDate = new Date();
    let year = todaysDate.getFullYear();
    let month = String(todaysDate.getMonth() + 1).padStart(2,"0");
    let day = String(todaysDate.getDate()).padStart(2,"0");
    let formattedDate = year + "." + month + "." + day;
    currentDate.innerHTML = formattedDate;

    let storedUser = JSON.parse(sessionStorage.getItem("storedUser"));
    manager.innerHTML = storedUser.currentAccount;

    var numberOfAccounts = accountList.length;
    var currentIndex = 0;
    var selectedMenu = document.getElementById("employee");
    while ( currentIndex < numberOfAccounts ) {
        if (accountList[currentIndex].level == "employee") {
            var option = document.createElement('option');
            option.text = option.value = accountList[currentIndex].firstName;
            selectedMenu.add(option, -1)
        }
        else {
        }
        currentIndex++;
    }
}

function createNewFeedback() {
    var newFeedback = {};
    let date = document.getElementById('currentDate').textContent;
    let manager = document.getElementById('manager').textContent;
    let employee = document.getElementById('employee').value;
    let department = document.getElementById('department').value;
    let feedback = document.getElementById('feedbackArea').value;

    newFeedback = { entryManager: manager, employee: employee, date: date, department: department, feedback: feedback};
    feedbackList.push(newFeedback);
    localStorage.setItem("feedbacks", JSON.stringify(feedbackList));
}

$(document).ready(main);