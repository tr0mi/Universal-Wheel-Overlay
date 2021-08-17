const myUrl = new URL(window.location.href);

// op.innerHTML = window.location.href;
// window.onload = setTimeout(function () {
//     myUrl.searchParams.set('ss', 'ws');
// }, 100)

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
    myform.style.opacity = "0";
    wheelLocation.style.opacity = "1";
    myHeader.innerHTML = "";  
    console.log("stylesheet set to " + sheet)
}


if (myUrl.searchParams.get('sloc') == "right") {
    shiftArea.className = "shiftArea Right";
}
if (myUrl.searchParams.get('sloc') == "none") {
    shiftArea.className = "shiftArea gone";
}
if (myUrl.searchParams.get('wt') == "g29") {
    swapStyleSheet("g29style.css")
}
if (myUrl.searchParams.get('wt') == "g27") {
    swapStyleSheet("g27style.css")
}
if (myUrl.searchParams.get('wt') == "t150") {
    swapStyleSheet("t150style.css")
}
if (myUrl.searchParams.get('wt') == "t300") {
    swapStyleSheet("t150style.css")
}
if (myUrl.searchParams.get('wt') == "g920") {
    swapStyleSheet("g920style.css")
}
if (myUrl.searchParams.get('wt') == "g923") {
    swapStyleSheet("g923style.css")
}