//download form buttons events
$(".btn-download").click(function() {
	$(".album__form-wrapper").css("display", "block");
});

$(".album__download-form__close").click(function() {
	$(".album__form-wrapper").css("display", "none");
});

$("#dwnlInput").change(function(e) {
	//get file and user name
	var file = e.target.files[0];
	var userName = $(".menu__logout p").text();

	//create ref to firebase storage
	var storageRef = firebase.storage().ref(userName + "/" + file.name);

	//upload file
	var task = storageRef.put(file);

	//event when upload complete
	task.on("state_changed",
		function complete() {
			$(".album__form-wrapper").css("display", "none");

			$(".album__priview-img").css("display", "block");

			//load img for preview
			storageRef.getDownloadURL().then(function(url) {
				$(".album__priview-img__img-wrapper").append("<img src='" + url + "'>");
			});
		}
	);
});

//preview image form buttons events
$(".album__priview-img__close").click(function() {
	$(".album__priview-img").css("display", "none");
});

$(".btn-cancel").click(function() {
	$(".album__priview-img__input-wrapper input").val("");
});

$(".btn-ok").click(function() {
	$(".album__priview-img").css("display", "none");

	var imgAttr = $(".album__priview-img__input-wrapper input").val();
	$(".album__priview-img__img-wrapper > img").attr("alt", imgAttr);

	$(".album__img-wrapper").append("<span class='new'></span>");
	$(".album__priview-img__img-wrapper > img").detach().prependTo(".album__img-wrapper span.new");
	$(".album__img-wrapper span").removeAttr("class");
	$(".album__priview-img__input-wrapper input").val("");
});

//ping@ping.com