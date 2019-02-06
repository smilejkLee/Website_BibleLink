/* When the user scrolls down, hide the menu-wrapper. When the user scrolls up, show the menu-wrapper */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementsById("header").style.top = "0";
    } else {
        document.getElementsById("header")
    }
    prevScrollpos = currentScrollPos;
    console.log("hi!");
}