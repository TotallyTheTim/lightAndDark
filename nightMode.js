function checkDarkTheme() {
    if(localStorage.getItem("Darktheme") == null){
        document.body.classList.remove("Dark");
        document.getElementById("darkTxt").innerText = "Light mode"
        // checkbox.checked = false;
    } else {
        document.body.classList.add("Dark");
        document.getElementById("darkTxt").innerText = "Dark mode"
        // checkbox.checked = true;
    }
}

function turnOnDark() {
    localStorage.setItem('Darktheme', true);
    checkDarkTheme()
}
function turnOffDark() {
    localStorage.removeItem('Darktheme');
    checkDarkTheme()
}

function switchDark() {
    if(localStorage.getItem("Darktheme") == null){
        // switching from light TO dark
        turnOnDark();
    } else  {
        // Switching from dark TO light
        turnOffDark();
    }
}

document.onload = checkDarkTheme();
document.getElementById('darktheme').onclick = function () {
    switchDark();
};
