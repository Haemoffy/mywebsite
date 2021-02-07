function navFunction() {
    var navtoggle = document.getElementById("pageNav");
    if (navtoggle.style.display === "none") {
        navtoggle.style.display = "flex";
    } else {
        navtoggle.style.display = "none";
    }
}

function navAlert() {
    alert("There is nothing here.\n\n               YET");
}

function mobileMenu() {
    var mainNavToggle = document.getElementById("main-nav");
    if (mainNavToggle.style.display === "none") {
        mainNavToggle.style.display = "block";
    } else {
        mainNavToggle.style.display = "none";
    }
}