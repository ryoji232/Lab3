// Cart button: alert when clicked
document.getElementById("cartBtn").addEventListener("click", function () {
  alert("Your Cart is empty!");
});

// Cookie banner: hide when I Accept is clicked
document.getElementById("acceptBtn").addEventListener("click", function () {
  document.getElementById("cookieBanner").style.display = "none";
});