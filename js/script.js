window.onscroll = function() {scrollFunctionNavbar()};

function scrollFunctionNavbar() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector("nav").style.padding = "0";
    } else {
        document.querySelector("nav").style.padding = "1vh";
    }
}

let navMenu = document.getElementById("nav-list-mobile");
let bgDark = document.getElementById("darken");

function navMobile() {
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
        bgDark.style.display = "none";
    }
    else {
        navMenu.style.display = "block";
        bgDark.style.display = "block";
    }
}

function navMobileClose() {
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
        bgDark.style.display = "none";
    }
    else {
        navMenu.style.display = "block";
        bgDark.style.display = "block";
    }
}