function navToggle() {
  var navbar = document.getElementsById("nav");
  if (navbar.className === "nav") {
    navbar.className =+ " responsive";
  } else {
    navbar.className = "nav";
  }
}