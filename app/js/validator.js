function validateEmail(input) {
	var reg = /^(\w+\.?\+?)*@([a-z0-9]{2,})\.(\w{2,4})$/;
	return reg.test(input);
}

function validatePass(input) {
	var reg = /(\w([#?!@$%^&*-])?){6,40}/;
	return reg.test(input);
}

function checkInput(flag, inputId) {
	if (!flag) {
		$("#" + inputId).css("border", "2px solid #c70000");
	} else {
		$("#" + inputId).css("border", "2px solid #339933");
	}
}


