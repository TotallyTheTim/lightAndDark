function checkColor() {
    document.body.removeAttribute("class");
    if (localStorage.getItem("color") === "0") {
        localStorage.removeItem("color");
    } else
    if (localStorage.getItem("color") === "1") {
        document.body.classList.add('themeOne');
    } else
    if(localStorage.getItem("color") === "2"){
        document.body.classList.add('themeTwo');
    } else
    if(localStorage.getItem("color") === "3"){
        document.body.classList.add('themeThree');
    }
}

function setColor(int){
        localStorage.setItem('color', int);
    checkColor();
}

document.onload = checkColor();
document.getElementById("colorNone").onclick = function(){setColor(0)};
document.getElementById("colorOneB").onclick = function(){setColor(1)};
document.getElementById("colorTwoB").onclick = function(){setColor(2)};
document.getElementById("colorThreeB").onclick = function(){setColor(3)};
