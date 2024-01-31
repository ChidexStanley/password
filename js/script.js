//  for the theme button

// remainber to edit the button image
// selecting tha tags and ids thet will change
var themeBtn = document.getElementById("darkmode");
var pardlockImg = document.getElementById("padlock");
var bodyColor = document.querySelector('body');
var mainColor = document.querySelector('main');
var inputBackground = document.querySelector('input');
var mainBtn = document.querySelector('button');
var forgetLink = document.querySelector('#forgetpword');

// calling the function
themeBtn.addEventListener('click', themeButton);

// the strings of the scr of the image to be change
var source = [
    "public/lightbutton.png",
    "public/darkbutton.png",
    "public/padlockLight.png",
    "public/padlockDark.png"
]
// the button for theme change
function themeButton() {
    if (themeBtn.src.endsWith("lightbutton.png")) {
        // dark theme 
        themeBtn.src = source[1];
        pardlockImg.src = source[3];
        bodyColor.style.backgroundColor = "#111111";
        bodyColor.style.color = "white";
        mainColor.style.backgroundColor = "#333333";
        mainColor.style.boxShadow = "none"
        inputBackground.style.backgroundColor = "#111111";
        inputBackground.style.color = "white";
        mainBtn.style.color = "white";
        forgetLink.style.color = "white";
    } else {
        // light theme
        themeBtn.src = source[0];
        pardlockImg.src = source[2];
        bodyColor.style.backgroundColor = "rgb(231, 229, 222)";
        bodyColor.style.color = "black";
        mainColor.style.backgroundColor = "white";
        inputBackground.style.backgroundColor = "white"
        inputBackground.style.color = "black"
        mainBtn.style.color = "black";
        forgetLink.style.color = "black";
    }
}

