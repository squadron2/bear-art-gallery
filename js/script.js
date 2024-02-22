// Functions to show/hide page content
function removeHome() {
    document.getElementById("sec_home").style.display = "none";
}

function restoreHome() {
    document.getElementById("sec_home").style.display = "block";
}

function removeGallery() {
    document.getElementById("sec_gallery").style.display = "none";
}

function restoreGallery() {
    document.getElementById("sec_gallery").style.display = "block";
}

function removeAbout() {
    document.getElementById("sec_about").style.display = "none";
}

function restoreAbout() {
    document.getElementById("sec_about").style.display = "block";
}

function removeBearLogo() {
    document.getElementById("header_logo").style.display = "none";
}

function restoreBearLogo() {
    document.getElementById("header_logo").style.display = "block";
}

function removeBearLogoBarbie() {
    document.getElementById("header_logo_barbie").style.display = "none";
}

function restoreBearLogoBarbie() {
    document.getElementById("header_logo_barbie").style.display = "block";
}

// Code to activate themes

window.onload = selectStyle;

// Barbie audio
const audio = new Audio("img/barbieclip.mp3");

function applyStylesheet(sheet) {
    document.getElementById("styles").setAttribute("href", sheet);  
}

function selectStyle() {
    var originalTheme = document.getElementById("originalTheme");
    var darkTheme = document.getElementById("darkTheme");
    var barbieTheme = document.getElementById("barbieTheme");

    originalTheme.onclick = function() { applyStylesheet("css/main.css"), removeBearLogoBarbie(), restoreBearLogo() };
    darkTheme.onclick = function() { applyStylesheet("css/dark.css"), removeBearLogoBarbie(), restoreBearLogo() };
    barbieTheme.onclick = function() { applyStylesheet("css/barbie.css"), audio.play(), removeBearLogo(), restoreBearLogoBarbie() };
}