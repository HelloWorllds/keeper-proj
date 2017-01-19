function userIdGenerator() {
	var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
	var uniqId = randLetter + Date.now();
	return uniqId;
}

function regNewUser(userId, email, password) {
	firebase.database().ref('users/' + userId).set({
		email: email,
		password : password
	});
}