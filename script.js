const navbarIcon = document.querySelector("#navbar-icon");
navbarIcon.addEventListener("click", function () {
    const navbarGroup = document.querySelector("#navbar-group");
    navbarGroup.classList.toggle("navbar-group-close");
});