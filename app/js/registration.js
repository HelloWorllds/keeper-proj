
//btn registration
$("#btnReg").click(function(e) {
	//Registration fields
	var txtEmailReg = $("#lNameReg").val();
	var txtPassReg = $("#passwReg").val();

	var auth = firebase.auth();
	var promise = auth.createUserWithEmailAndPassword(txtEmailReg, txtPassReg);
	promise.catch(function(e) {
		console.log(e.message)
	});

	$("#lNameReg").val("").css("border", 0);
	$("#passwReg").val("").css("border", 0);
	$("#rePasswReg").val("").css("border", 0);
});

//btn authorization
var txtEmailLogin;
$("#btnLogin").click(function(e) {
	//Authorization fields
	txtEmailLogin = $("#lNameLogin").val();
	var txtPassLogin = $("#passwLogin").val();

	var auth = firebase.auth();
	var promise = auth.signInWithEmailAndPassword(txtEmailLogin, txtPassLogin);
	promise.catch(function(e) {
		console.log(e.message)
	});

	$("#lNameLogin").val("").css("border", 0);
	$("#passwLogin").val("").css("border", 0);
});

firebase.auth().onAuthStateChanged(function(firebaseUser) {
	if (firebaseUser) {
		var showBlock = "block";
		var hideBlock = "none";

		$(".main-page").css("display", hideBlock);
		$(".authorization").css("display", hideBlock);
		$(".album").css("display", showBlock);
		$(".slider").css("display", hideBlock);

		localStorage.setItem("main-page", hideBlock);
		localStorage.setItem("authorization", hideBlock);
		localStorage.setItem("album", showBlock);
		localStorage.setItem("slider", hideBlock);

		var inlineBlock = "inline-block";
		$(".menu__auth").css("display", hideBlock);
		$(".menu__logout").css("display", inlineBlock);
		$(".menu__logout p").text(txtEmailLogin);

		localStorage.setItem("menu__auth", hideBlock);
		localStorage.setItem("menu__logout", inlineBlock);
		console.log(firebaseUser);
	} else {
		console.log("not work");
	}
})

//btn logout
$(".menu__auth__logout").click(function(e) {
	firebase.auth().signOut();
	var inlineBlock = "inline-block";
	var hideBlock = "none";

	$(".menu__logout").css("display", hideBlock);
	$(".menu__logout p").text("");
	$(".menu__auth").css("display", inlineBlock);

	localStorage.setItem("menu__auth", inlineBlock);
	localStorage.setItem("menu__logout", hideBlock);

	$(".menu__logo").click();
});