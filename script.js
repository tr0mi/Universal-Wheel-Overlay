const myUrl = new URL(window.location.href);

// op.innerHTML = window.location.href;
window.onload = setTimeout(function () {
    myUrl.searchParams.set('ss', 'ws');
}, 100)

function wheelInput() {
    myUrl.searchParams.set('wt', document.forms['wheelInfo'].elements['wt'].value)
    console.log("new params: " + myUrl.searchParams.toString())
}
function rotInput() {
    myUrl.searchParams.set('rot', document.forms['wheelInfo'].elements['rot'].value)
    console.log("new params: " + myUrl.searchParams.toString())
}
function shifterInputLeft() {
    myUrl.searchParams.set('sloc', document.forms['wheelInfo'].elements['left'].value)
    console.log("new params: " + myUrl.searchParams.toString())
}
function shifterInputRight() {
    myUrl.searchParams.set('sloc', document.forms['wheelInfo'].elements['right'].value)
    console.log("new params: " + myUrl.searchParams.toString())
}
function shifterInputNone() {
    myUrl.searchParams.set('sloc', document.forms['wheelInfo'].elements['none'].value)
    console.log("new params: " + myUrl.searchParams.toString())
}


function getText() {
    var copyText = document.forms['wheelInfo'].elements['op'].value;
    console.log(copyText);
    navigator.clipboard.writeText(copyText)

  }

document.getElementById("wt").selectedIndex = -1;


function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}


if (myUrl.searchParams.get('ss') == "ws") {
    console.log("stylesheet set to wheelstyle")
    swapStyleSheet("wheelstyle.css")
    myform.style.opacity = "0";
    wheelLocation.style.opacity = "1";
    myHeader.innerHTML = "";
}
if (myUrl.searchParams.get('sloc') == "right") {
    shifterBase.className = "shifterBaseRight";
    button0.className = "shifterButtonsRight";
    button1.className = "shifterButtonsRight";
    button2.className = "shifterButtonsRight";
    button3.className = "shifterButtonsRight";
    button15.className = "shifterButtonsRight";
    button16.className = "shifterButtonsRight";
    button17.className = "shifterButtonsRight";
    button18.className = "shifterButtonsRight";
    arrow1.className = "shifterButtonsRight";
    arrow2.className = "shifterButtonsRight";
    arrow3.className = "shifterButtonsRight";
    arrow4.className = "shifterButtonsRight";
    shifter.className = "ShifterRight";
}
if (myUrl.searchParams.get('sloc') == "none") {
    shifterBase.style.opacity = "0";
    button0.style.opacity = "0";
    button1.style.opacity = "0";
    button2.style.opacity = "0";
    button3.style.opacity = "0";
    button15.style.opacity = "0";
    button16.style.opacity = "0";
    button17.style.opacity = "0";
    button18.style.opacity = "0";
    arrow1.style.opacity = "0";
    arrow2.style.opacity = "0";
    arrow3.style.opacity = "0";
    arrow4.style.opacity = "0";
    shifter.style.opacity = "0";
}
if (myUrl.searchParams.get('wt') == "g29") {
    wheel.src = "./images/g29wheel.png";
    shifterBase.src = "./images/g29shifterbase.png"
}

