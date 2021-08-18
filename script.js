const myUrl = new URL(window.location.href);

// op.innerHTML = window.location.href;
// window.onload = setTimeout(function () {
//     myUrl.searchParams.set('ss', 'ws');
// }, 100)

function wheelInput() {
    myUrl.searchParams.set('wt', document.forms['wheelInfo'].elements['wt'].value)
    myUrl.searchParams.delete('skin');
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
document.getElementById("skinType").selectedIndex = -1;


function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);
    myform.style.display = "none";
    wheelLocation.style.display = "block";
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
if (myUrl.searchParams.get('wt') == "custom-overlay") {
    swapStyleSheet("customstyle.css")
}

if (myUrl.searchParams.get('wt') == null && myUrl.searchParams.get('sloc') != null) {
    window.location.replace("https://tr0mi.github.io/Universal-Wheel-Overlay/"); 
}
else if (myUrl.searchParams.get('wt') == null && myUrl.searchParams.get('rot') != null) {
    window.location.replace("https://tr0mi.github.io/Universal-Wheel-Overlay/"); 
}


function outputBox() {
    linkOutput.style.height = "auto";
}

function dataSource(){
    var myData =  document.getElementById("dSource");
    var myData2 =  document.getElementById("dSource2");
    var myNewDataSource = window.location.href + '?' + myUrl.searchParams.toString();
    myData.setAttribute("data", myNewDataSource);
    myData2.setAttribute("data", myNewDataSource);
    console.log('Data location set');
    if (document.forms['wheelInfo'].elements['wt'].value == "custom-overlay") {
        myCal.style.opacity = 1;
        postCal.style.opacity = 1;
        myPreview.style.opacity = 0;
    } 
    else {
        myCal.style.opacity = 0;
        postCal.style.opacity = 0;
        myPreview.style.opacity = 1;
        postCal.style.display = 'none';
        showCSS.style.display = "none";
    }
}

function getCSS() {
    postCal.style.display = "none";
    showCSS.style.display = "block";
}
function getCssText() {
    var copyText = document.getElementById('myCssText').textContent;
    console.log(copyText);
    navigator.clipboard.writeText(copyText)
}

function checkSkinOption() {
    if (document.forms['skinForm'].elements['skinType'].value == 'upload-own') {
        cssButton.style.display = "block";
        myUrl.searchParams.delete('skin');
        myUrl.searchParams.delete('wt');
        myUrl.searchParams.set('wt', 'custom-overlay')
        console.log('custom')
        op.innerHTML = window.location.href + "?" + myUrl.searchParams.toString();  
        skinMessage.style.display = "none";
    }
    else {
        console.log('preset')
        cssButton.style.display = "none";
        myUrl.searchParams.set('skin', 'true')
        myUrl.searchParams.delete('wt');
        myUrl.searchParams.set('wt', document.forms['skinForm'].elements['skinType'].value)
        op.innerHTML = window.location.href + "?" + myUrl.searchParams.toString();  
        skinMessage.style.display = "block";
    }   
}
