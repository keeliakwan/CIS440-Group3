

//import database from "./database.json" assert { type: 'json' };
var accountList = [];
let loggedIn = false;
let currentAccount = "Not Logged In";

function main() {
   // console.log(database);
    console.log("Page Loaded, Ready.");
    loadData();
}

function loadData() {
    let newAccount = {};

    // Adding some default accounts for now.  Will translate tino DB later.
    newAccount = { firstName: "Tiffany", lastName: "Hubbard", manager: false , username: "tHubbard", password: "123abc"};
    accountList.push(newAccount);
    console.log("Employee Tiffany Added.");
    console.log(accountList);
    newAccount = { firstName: "Bryan", lastName: "Thomas", manager: true, username: "bThomas", password: "abcdef" };
    accountList.push(newAccount);
    console.log("Employee Bryan Added.");
    console.log(accountList);
    newAccount = { firstName: "Frida", lastName: "Ayala Bojorquez", manager: false, username: "fBojorquez", password: "123456" };
    accountList.push(newAccount);
    console.log("Employee Frida Added.");
    console.log(accountList);
    newAccount = { firstName: "Haseen", lastName: "Aman", manager: false, username: "hAman", password: "acb123" };
    accountList.push(newAccount);
    console.log("Employee Haseen Added.");
    console.log(accountList);
    newAccount = { firstName: "Keelia", lastName: "Kwan", manager: true, username: "kKwan", password: "a1c2b3" };
    accountList.push(newAccount);
    console.log("Employee Keelia Added.");
    console.log(accountList);
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
    }

    else {
        alert("Incorrect Login.  Please Try again");
    } 
}

function logout() {
    currentAccount = "Not Logged In";
    loggedIn = false;
}

$(document).ready(main);
