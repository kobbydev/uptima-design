function myFunction() {
	const x = document.getElementById("navbar-links");
	const navbar = document.getElementById("navbar");
	const menuIcon = document.querySelector(".fa fa-bars");
	const icon = document.querySelector(".icon");
	const logo2 = document.querySelector(".logo-2");
	const logo1 = document.querySelector(".logo-1");
	const closeIcon = document.getElementById("close-btn");

	if (x.style.display === "block") {
		x.style.display = "none";
		navbar.style.backgroundColor = "white";
	} else {
		logo1.style.display = "none";
		logo2.style.display = "block";
		x.style.display = "block";
		navbar.style.backgroundColor = "#5051db";
		icon.style.color = "#fff";
		closeIcon.setAttribute("class", "fa fa-close");
		menuIcon.style.display = "block";
	}

	logo1.style.display = "block";
	icon.style.color = "#5051db";
	closeIcon.style.display = "block";
	closeIcon.setAttribute("class", "fa fa-bars");
}
