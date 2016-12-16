if (sessionStorage.loggedInUserName == undefined) {
	sessionStorage.loggedInUserName = "Horst Peter";
	sessionStorage.loggedInUserMatNr = "&nbsp;&nbsp;&nbsp;1231234";
	sessionStorage.loggedInUserTelNr = "+436991234567";
	sessionStorage.loggedInUserMail = "horst@peter.de";
	sessionStorage.loggedInUserAdd = "Ich bin der tollste, beste, sonst alles überhaupt!";
}

document.getElementById("loggedInUserName").value = sessionStorage.loggedInUserName;
document.getElementById("loggedInUserMail").value = sessionStorage.loggedInUserMail;
document.getElementById("loggedInUserTelNr").value = sessionStorage.loggedInUserTelNr;