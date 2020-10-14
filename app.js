function validation() {
let userName = document.getElementById('username').value;
let lastname = document.getElementById('lName').value;
let Mobile_Number = document.getElementById('mobile-no').value;
let Email = document.getElementById('email').value;
let Password = document.getElementById('passW1').value;
let Confirm_Password = document.getElementById('confPass').value;

let res = "true";

// firstname validation
if(userName == ""){
    document.getElementById('usr').innerHTML = " **Please fillup the firstname field!";
    return false;
} else {
    document.getElementById('usr').innerHTML = "";
}

if(!isNaN(userName)) {
    document.getElementById('usr').innerHTML = " firstname must be contain alphabat!";
    return false;
} else {
    document.getElementById('usr').innerHTML = "";
}

if(userName.length <= 2 || userName.length > 20) {
    document.getElementById('usr').innerHTML = " firstname must be contain between 2 and 20 character!";
    return false;
} else {
    document.getElementById('usr').innerHTML = "";
}


// lastname validation
if(lastname == ""){
    document.getElementById('lastname').innerHTML = " **Please fillup the lastname field!";
    return false;
} else {
    document.getElementById('lastname').innerHTML = "";
}

if(!isNaN(lastname)) {
    document.getElementById('lastname').innerHTML = " lastname must be contain alphabat!";
    return false;
} else {
    document.getElementById('lastname').innerHTML = "";
    }

if(lastname.length <= 2 || lastname.length >= 20) {
    document.getElementById('lastname').innerHTML = " lastname must be between 2 and 20 character!";
    return false;
} else {
    document.getElementById('lastname').innerHTML = "";
}

// Mobile number validation
if(Mobile_Number == ""){
    document.getElementById('mobile-num').innerHTML = " **Please fillup the mobile_number field!";
    return false;
} else {
    document.getElementById('mobile-num').innerHTML = "";
}

if(isNaN(Mobile_Number)) {
    document.getElementById('mobile-num').innerHTML = " Only enter a digits!";
    return false;
} else {
    document.getElementById('mobile-num').innerHTML = "";
}

if(Mobile_Number.length !=10 || Mobile_Number.length > 10) {
    document.getElementById('mobile-num').innerHTML = " Mobile number must be contain 10 digits!";
    return false;
} else {
    document.getElementById('mobile-num').innerHTML = "";
    
}

// Email validation
if(Email == ""){
    document.getElementById('mail').innerHTML = " **Please fillup the Email field!";
    return false;
} else {
    document.getElementById('mail').innerHTML = "";
}

if(Email.indexOf('@') <= 0) {
    document.getElementById('mail').innerHTML = "Please set '@' at the correct position!";
    return false;
} else {
    document.getElementById('mail').innerHTML = "";
    
}

if((Email.charAt(Email.length - 4) != '.') && (Email.charAt(Email.length - 4) != '.')) {
    document.getElementById('mail').innerHTML = "Invalid position of '.' ";
    return false;
} else {
    document.getElementById('mail').innerHTML = "";
    
}


// password validation


if(Password == "") {
    document.getElementById('psw1').innerHTML = " **Please fillup the password feild";
    return false;
} else {
    document.getElementById('psw1').innerHTML = "";
}

if (Password.match(/[a-z]/g) && Password.match( 
    /[A-Z]/g) && Password.match( 
    /[0-9]/g) && Password.match( 
    /[^a-zA-Z\d]/g) && Password.length >= 8) {
        res;
    } else {
        document.getElementById('psw1').innerHTML = "Please enter valid pattern of password!";
        return false;
    }


if(Confirm_Password == "") {
    document.getElementById('confpsw').innerHTML = " **Please fillup the password feild";
    return false;
} else {
    document.getElementById('confpsw').innerHTML = "";
}
   
if (Confirm_Password.match(/[a-z]/g) && Confirm_Password.match( 
    /[A-Z]/g) && Confirm_Password.match( 
    /[0-9]/g) && Confirm_Password.match( 
    /[^a-zA-Z\d]/g) && Confirm_Password.length >= 8) {
        res;
    } else {
        document.getElementById('confpsw').innerHTML = "Please enter valid pattern of password!";
        return false;
    }

if(Password != Confirm_Password) {
    document.getElementById('confpsw').innerHTML = " Password are not matching!";
    return false;
} else {
    document.getElementById('confpsw').innerHTML = "";
    }
}


