var start;
var a = 0;
var b = 0;
var wRot = 180;
if (myUrl.searchParams.get('rot') != null) {
  wRot = myUrl.searchParams.get('rot');
}
window.addEventListener("gamepaddisconnected", function(e) {
  gamepadInfo.innerHTML = "Waiting for gamepad.";
  cancelRequestAnimationFrame(start);
});

var interval;


if (!('ongamepadconnected' in window)) {
  // No gamepad events available, poll instead.
  gamepadInfo.innerHTML = "No gamepad available";
  interval = setInterval(pollGamepads, 500);
  exampleButton.style.opacity = "1";
}


function pollGamepads() {
  var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
  //console.log(gamepads);
  for (var i = 0; i < gamepads.length; i++) {
    var gp = gamepads[i];
    if (gp) {
      gamepadInfo.innerHTML = "Gamepad connected at index " + gp.index + ": " + gp.id +
        ". It has " + gp.buttons.length + " buttons and " + gp.axes.length + " axes.";
      exampleButton.style.opacity = "0";
      gameLoop();
      clearInterval(interval);
    }
  }
}

// dev info:
// wheelAxis0 = document.getElementById("axisState0");
// gasInfo = document.getElementById("gasInfo");
// brakeInfo = document.getElementById("brakeInfo");
// clutchInfo = document.getElementById("clutchInfo");

/////////////////////////////////////////// Select Mapping //////////////////////////////////////////////
var mappingButtons = new Array();
var mappingAxes = new Array();


/////////////// g27 mapping /////////////

if (myUrl.searchParams.get('wt') == "g27") {
  mappingButtons[0] = "sb0";
  mappingButtons[1] = "sb1";
  mappingButtons[2] = "sb2";
  mappingButtons[3] = "sb3";
  mappingButtons[4] = "ushift";
  mappingButtons[5] = "dshift";
  mappingButtons[6] = "circle";
  mappingButtons[7] = "square";
  mappingButtons[8] = "g1";
  mappingButtons[9] = "g2";
  mappingButtons[10] = "g3";
  mappingButtons[11] = "g4";
  mappingButtons[12] = "g5";
  mappingButtons[13] = "g6";
  mappingButtons[14] = "gr";
  mappingButtons[15] = "striangle";
  mappingButtons[16] = "ssquare";
  mappingButtons[17] = "sx";
  mappingButtons[18] = "scircle";
  mappingButtons[19] = "r2";
  mappingButtons[20] = "l2";
  mappingButtons[21] = "r3";
  mappingButtons[22] = "l3";

  mappingAxes[0] = "wheel";
  mappingAxes[1] = "";
  mappingAxes[2] = "gas";
  mappingAxes[3] = "";
  mappingAxes[4] = "";
  mappingAxes[5] = "brake";
  mappingAxes[6] = "clutch";
  mappingAxes[7] = "";
  mappingAxes[8] = "";
  mappingAxes[9] = "arrows";
}
else if (myUrl.searchParams.get('wt') == "g29" || myUrl.searchParams.get('wt') == "g923") { /////////////// g29 mapping /////////////
  mappingButtons[0] = "x";
  mappingButtons[1] = "square";
  mappingButtons[2] = "circle";
  mappingButtons[3] = "triangle";
  mappingButtons[4] = "ushift";
  mappingButtons[5] = "dshift";
  mappingButtons[6] = "r2";
  mappingButtons[7] = "l2";
  mappingButtons[8] = "share";
  mappingButtons[9] = "option";
  mappingButtons[10] = "r3";
  mappingButtons[11] = "l3";
  mappingButtons[12] = "g1";
  mappingButtons[13] = "g2";
  mappingButtons[14] = "g3";
  mappingButtons[15] = "g4";
  mappingButtons[16] = "g5";
  mappingButtons[17] = "g6";
  mappingButtons[18] = "gr";
  mappingButtons[19] = "plus";
  mappingButtons[20] = "minus";
  mappingButtons[21] = "dialright";
  mappingButtons[22] = "dialleft";
  mappingButtons[23] = "return";

  mappingAxes[0] = "wheel";
  mappingAxes[1] = "clutch";
  mappingAxes[2] = "gas";
  mappingAxes[3] = "";
  mappingAxes[4] = "";
  mappingAxes[5] = "brake";
  mappingAxes[6] = "";
  mappingAxes[7] = "";
  mappingAxes[8] = "";
  mappingAxes[9] = "arrows";
}
else if (myUrl.searchParams.get('wt') == "g920") { /////////////// g920 mapping /////////////
  mappingButtons[0] = "x";
  mappingButtons[1] = "square";
  mappingButtons[2] = "circle";
  mappingButtons[3] = "triangle";
  mappingButtons[4] = "ushift";
  mappingButtons[5] = "dshift";
  mappingButtons[6] = "r2";
  mappingButtons[7] = "l2";
  mappingButtons[8] = "r3";
  mappingButtons[9] = "l3";
  mappingButtons[10] = "ps";
  mappingButtons[11] = "gr";
  mappingButtons[12] = "g1";
  mappingButtons[13] = "g2";
  mappingButtons[14] = "g3";
  mappingButtons[15] = "g4";
  mappingButtons[16] = "g5";
  mappingButtons[17] = "g6";

  mappingAxes[0] = "wheel";
  mappingAxes[1] = "gas";
  mappingAxes[2] = "brake";
  mappingAxes[3] = "";
  mappingAxes[4] = "";
  mappingAxes[5] = "clutch";
  mappingAxes[6] = "";
  mappingAxes[7] = "";
  mappingAxes[8] = "";
  mappingAxes[9] = "arrows";
}
else if (myUrl.searchParams.get('wt') == "t150") { /////////////// t150 mapping /////////////
  mappingButtons[0] = "dshift";
  mappingButtons[1] = "ushift";
  mappingButtons[2] = "triangle";
  mappingButtons[3] = "square";
  mappingButtons[4] = "circle";
  mappingButtons[5] = "x";
  mappingButtons[6] = "l3";
  mappingButtons[7] = "r3";
  mappingButtons[8] = "r2";
  mappingButtons[9] = "l2";
  mappingButtons[10] = "sb0";
  mappingButtons[11] = "sb1";
  mappingButtons[12] = "ps";
  mappingButtons[13] = "g2";
  mappingButtons[14] = "g3";
  mappingButtons[15] = "g4";
  mappingButtons[16] = "g5";
  mappingButtons[17] = "g6";

  mappingAxes[0] = "wheel";
  mappingAxes[1] = "";
  mappingAxes[2] = "";
  mappingAxes[3] = "";
  mappingAxes[4] = "brake";
  mappingAxes[5] = "gas";
  mappingAxes[6] = "clutch";
  mappingAxes[7] = "";
  mappingAxes[8] = "";
  mappingAxes[9] = "arrows";
}
else if (myUrl.searchParams.get('wt') == "t300") { /////////////// t300 mapping /////////////
  mappingButtons[0] = "dshift";
  mappingButtons[1] = "ushift";
  mappingButtons[2] = "triangle";
  mappingButtons[3] = "square";
  mappingButtons[4] = "circle";
  mappingButtons[5] = "x";
  mappingButtons[6] = "l3";
  mappingButtons[7] = "r3";
  mappingButtons[8] = "r2";
  mappingButtons[9] = "l2";
  mappingButtons[10] = "sb0";
  mappingButtons[11] = "sb1";
  mappingButtons[12] = "ps";
  mappingButtons[13] = "g2";
  mappingButtons[14] = "g3";
  mappingButtons[15] = "g4";
  mappingButtons[16] = "g5";
  mappingButtons[17] = "g6";

  mappingAxes[0] = "wheel";
  mappingAxes[1] = "brake";
  mappingAxes[2] = "";
  mappingAxes[3] = "";
  mappingAxes[4] = "";
  mappingAxes[5] = "gas";
  mappingAxes[6] = "clutch";
  mappingAxes[7] = "";
  mappingAxes[8] = "";
  mappingAxes[9] = "arrows";
}
else if (myUrl.searchParams.get('wt') == "custom-overlay") {   // custom mapping
  setCustomMapping();
}


function setCustomMapping() {                   // convert url params to custom mapping
  var myParams = myUrl.searchParams.toString();
  var nameParam = "";
  var valueParam = -1;
  splitParams = myParams.split('&');
  for (i = 0; i < splitParams.length; i++) {
    indiParams = splitParams[i].split('=');
    nameParam = indiParams[0];
    valueParam = indiParams[1];
    if (nameParam != "wt" && nameParam != "rot" && nameParam != "sloc" && nameParam != "wheel") {
      mappingButtons[valueParam] = nameParam;
      console.log("new mapping: " + mappingButtons);
    } else if (nameParam == "wheel" || nameParam == "gas" || nameParam == "brake" || nameParam == "clutch") {
      mappingAxes[valueParam] = nameParam;
    }

  }
}

function endCal() {
  myCal.style.opacity = 0;
  myUrl.searchParams.set('show-key', 'true')
  op.innerHTML = window.location.href + "?" + myUrl.searchParams.toString();   
}



////////////////////////////

function buttonPressed(b) {
  if (typeof(b) == "object") {
    return b.pressed;
  }
  return b == 1.0;
}


var currentButton = -1;
var askedPress = 'dshift';
var currentAxis = -1;
var askedAxis = 'wheel';

// Gamepad Loop

function gameLoop() {
  var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
  if (!gamepads) {
    return;
  }



  var calInit = false; //////// initialise calibration ////////////
  if (document.forms['wheelInfo'].elements['wt'].value == 'custom-overlay') {
    calInit = true;
  }
  else {
    calInit = false;
  }
  
  var gp = gamepads[0];

  for (i = 0; i < gp.buttons.length; i++) {
    var val = gp.buttons[i];
    if (val.value == true) {
      customMapPressed.innerHTML = mappingButtons[i];
    }
  }

  if (calInit == true) {  
    myCalHeader.innerHTML = "Calibration";
    myCalMain.innerHTML = "Welcome to custom wheel calibration, here you will allocate your buttons to the button names shown. <br>After each button-press, the next button will appear. <br>Begin by turning your wheel to full lock in both directions.";
    buttonPressTitle.innerHTML = "Button " + currentButton + " is assigned to:   " + mappingButtons[currentButton];
    axisPressTitle.innerHTML = "Axis " + currentAxis + " is assigned to:   " + mappingAxes[currentAxis];
    if (gp) {
      myCalInfo.innerHTML = "Gamepad connected at index " + gp.index + ": " + gp.id +
        ". It has " + gp.buttons.length + " buttons and " + gp.axes.length + " axes.";
    } else {
      myCalHeader.innerHTML = "Connect your wheel and refresh page to continue";
    }


    
    /////////////////////////// START OF CALIBRATION ///////////////////////////
    // Cycle through buttons
    for (i = 0; i < gp.buttons.length; i++) {
      var val = gp.buttons[i];
      if (val.value == true && i != currentButton) {
        currentButton = i;      // set current button to the button pressed     
        buttonPressTitle.style.opacity = 0.7;    
        if (mappingButtons[currentButton] == undefined && mappingAxes.indexOf('wheel') != -1) {
          mappingButtons[currentButton] = askedPress;  // map the current button to the button asked for
          myUrl.searchParams.set(askedPress, currentButton);
          op.innerHTML = window.location.href + "?" + myUrl.searchParams.toString();   
          myCalSecond.innerHTML = "";
        } else {
          myCalSecond.innerHTML = "Button " + currentButton + " is already assigned to " + mappingButtons[currentButton] + ", choose a new button to assign " + askedPress + " to."
          console.log("try again")
        }   
      }
    }
    
    // Cycle through axes
    for (i = 0; i < gp.axes.length; i++) {
      var val = gp.axes[i];
      if (val == -1 && i != currentAxis) {
        currentAxis = i;
        myCalMain.style.fontSize = "x-large";
        axisPressTitle.style.opacity = 0.7;  
        console.log(i);
        if (mappingAxes[currentAxis] == undefined) {
          mappingAxes[currentAxis] = askedAxis;
          myCalSecond.innerHTML = "";
          myUrl.searchParams.set(askedAxis, currentAxis);
          op.innerHTML = window.location.href + "?" + myUrl.searchParams.toString();   
        } else {
          myCalSecond.innerHTML = "Axis " + currentAxis + " is already assigned to " + mappingAxes[currentAxis] + ", choose a new button to assign " + askedAxis + " to."
          console.log("try again")
        }   
      }
      
    }

    if (mappingAxes.indexOf('wheel') != -1) {   // if a button has been set, move on
      myCalMain.innerHTML = "Now press downshift";
      askedPress = 'dshift';
      if (mappingButtons.indexOf('dshift') != -1) {     
        myCalMain.innerHTML = "Now press upshift";
        askedPress = 'ushift';
        if (mappingButtons.indexOf('ushift') != -1) {
          myCalMain.innerHTML = "Now press Square";
          askedPress = 'square';
          if (mappingButtons.indexOf('square') != -1) {
            myCalMain.innerHTML = "Now press x";
            askedPress = 'x';
            if (mappingButtons.indexOf('x') != -1) {
              myCalMain.innerHTML = "Now press Circle";
              askedPress = 'circle';
              if (mappingButtons.indexOf('circle') != -1) {
                myCalMain.innerHTML = "Now press Triangle";
                askedPress = 'triangle';
                if (mappingButtons.indexOf('triangle') != -1) {
                  myCalMain.innerHTML = "Now press L2";
                  askedPress = 'l2';
                  if (mappingButtons.indexOf('l2') != -1) {
                    myCalMain.innerHTML = "Now press R2";
                    askedPress = 'r2';
                    if (mappingButtons.indexOf('r2') != -1) {
                      myCalMain.innerHTML = "Now press L3";
                      askedPress = 'l3';
                      if (mappingButtons.indexOf('l3') != -1) {
                        myCalMain.innerHTML = "Now press R3";
                        askedPress = 'r3';
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    

  }


///////////////////////// Preview Header ///////////////////////////////
  if (gp) {
    myPrevHeader.innerHTML = "Live Preview";
  } else {
    myPrevHeader.innerHTML = "Connect Your Wheel for Live Preview";
  }

  

  /////////////////////////////////////////// Wheel Buttons //////////////////////////////////////////////
  if (buttonPressed(gp.buttons[mappingButtons.indexOf('dshift')])) {downShift.style.opacity = "1";} else {downShift.style.opacity = "0";}
  if (buttonPressed(gp.buttons[mappingButtons.indexOf('ushift')])) {upShift.style.opacity = "1";} else {upShift.style.opacity = "0";}
  if (buttonPressed(gp.buttons[mappingButtons.indexOf('x')])) {x.style.opacity = "1";} else {x.style.opacity = "0";}
  if (buttonPressed(gp.buttons[mappingButtons.indexOf('square')])) {square.style.opacity = "1";} else {square.style.opacity = "0";}
  if (buttonPressed(gp.buttons[mappingButtons.indexOf('triangle')])) {triangle.style.opacity = "1";} else {triangle.style.opacity = "0";}
  if (buttonPressed(gp.buttons[mappingButtons.indexOf('circle')])) {circle.style.opacity = "1";} else {circle.style.opacity = "0";}
  if (buttonPressed(gp.buttons[mappingButtons.indexOf('l2')])) {l2.style.opacity = "1";} else {l2.style.opacity = "0";}
  if (buttonPressed(gp.buttons[mappingButtons.indexOf('l3')])) {l3.style.opacity = "1";} else {l3.style.opacity = "0";}
  if (buttonPressed(gp.buttons[mappingButtons.indexOf('r2')])) {r2.style.opacity = "1";} else {r2.style.opacity = "0";}
  if (buttonPressed(gp.buttons[mappingButtons.indexOf('r3')])) {r3.style.opacity = "1";} else {r3.style.opacity = "0";}
  if (buttonPressed(gp.buttons[mappingButtons.indexOf('plus')])) {plus.style.opacity = "1";} else {plus.style.opacity = "0";}
  if (buttonPressed(gp.buttons[mappingButtons.indexOf('minus')])) {minus.style.opacity = "1";} else {minus.style.opacity = "0";}
  if (buttonPressed(gp.buttons[mappingButtons.indexOf('return')])) {returnBut.style.opacity = "1";} else {returnBut.style.opacity = "0";}


  /////////////////////////////////////////// Wheel Rotation /////////////////////////////////////////////
  if (gp.axes[mappingAxes.indexOf('wheel')] >= -1 || gp.axes[mappingAxes.indexOf('wheel')] <= 1) {
    var wheelAngle = gp.axes[mappingAxes.indexOf('wheel')] * wRot;
    wheelArea.style.transform = 'rotate(' + wheelAngle + 'deg)';
  }


  /////////////////////////////////////////// Pedals /////////////////////////////////////////////
  if (gp.axes[mappingAxes.indexOf('gas')] >= -1 || gp.axes[mappingAxes.indexOf('gas')] <= 1) {
    var gasPos = (gp.axes[mappingAxes.indexOf('gas')] - 1) * -50;
    // gasInfo.innerHTML = gasPos;
    gas.style.transform = 'translateY(' + gasPos + 'px)';
  }
  if (gp.axes[mappingAxes.indexOf('brake')] >= -1 || gp.axes[mappingAxes.indexOf('brake')] <= 1) {
    var brakePos = (gp.axes[mappingAxes.indexOf('brake')] - 1) * -50;
    // brakeInfo.innerHTML = brakePos;
    brake.style.transform = 'translateY(' + brakePos + 'px)';
  }
  if (gp.axes[mappingAxes.indexOf('clutch')] >= -1 || gp.axes[mappingAxes.indexOf('clutch')] <= 1) {
    var clutchPos = (gp.axes[mappingAxes.indexOf('clutch')] - 1) * -50;
    // clutchInfo.innerHTML = clutchPos;
    clutch.style.transform = 'translateY(' + clutchPos + 'px)';
  }


  /////////////////////////////////////////// Shifter Gears /////////////////////////////////////////////
  switch(true){
    case buttonPressed(gp.buttons[mappingButtons.indexOf('g1')]): shifter.style.transform = 'translate(-60px, -50px)'; shifter.style.transitionDuration = "100ms"; break;
    case buttonPressed(gp.buttons[mappingButtons.indexOf('g2')]): shifter.style.transform = 'translate(-60px, 50px)'; shifter.style.transitionDuration = "100ms"; break;
    case buttonPressed(gp.buttons[mappingButtons.indexOf('g3')]): shifter.style.transform = 'translate(0px, -50px)'; shifter.style.transitionDuration = "100ms"; break;
    case buttonPressed(gp.buttons[mappingButtons.indexOf('g4')]): shifter.style.transform = 'translate(0px, 50px)'; shifter.style.transitionDuration = "100ms"; break;
    case buttonPressed(gp.buttons[mappingButtons.indexOf('g5')]): shifter.style.transform = 'translate(60px, -50px)'; shifter.style.transitionDuration = "100ms"; break;
    case buttonPressed(gp.buttons[mappingButtons.indexOf('g6')]): shifter.style.transform = 'translate(60px, 50px)'; shifter.style.transitionDuration = "100ms"; break;
    case buttonPressed(gp.buttons[mappingButtons.indexOf('gr')]): shifter.style.transform = 'translate(60px, 50px)'; shifter.style.transitionDuration = "100ms"; shifter.style.backgroundSize = '90px'; break;
    default: shifter.style.transform = 'translate(0px, 0px)'; shifter.style.backgroundSize = '120px'; shifter.style.transitionDuration = "300ms"; break;
  }


  /////////////////////////////////////////// Shifter Buttons /////////////////////////////////////////////  
  if (buttonPressed(gp.buttons[mappingButtons.indexOf('sb0')])) {button0.style.opacity = "1";} else {button0.style.opacity = "0";}
  if (buttonPressed(gp.buttons[mappingButtons.indexOf('sb1')])) {button1.style.opacity = "1";} else {button1.style.opacity = "0";}
  if (buttonPressed(gp.buttons[mappingButtons.indexOf('sb2')])) {button2.style.opacity = "1";} else {button2.style.opacity = "0";}
  if (buttonPressed(gp.buttons[mappingButtons.indexOf('sb3')])) {button3.style.opacity = "1";} else {button3.style.opacity = "0";}
  if (buttonPressed(gp.buttons[mappingButtons.indexOf('striangle')])) {striangle.style.opacity = "1";} else {striangle.style.opacity = "0";}
  if (buttonPressed(gp.buttons[mappingButtons.indexOf('ssquare')])) {ssquare.style.opacity = "1";} else {ssquare.style.opacity = "0";}
  if (buttonPressed(gp.buttons[mappingButtons.indexOf('sx')])) {sx.style.opacity = "1";} else {sx.style.opacity = "0";}
  if (buttonPressed(gp.buttons[mappingButtons.indexOf('scircle')])) {scircle.style.opacity = "1";} else {scircle.style.opacity = "0";}


  /////////////////////////////////////////// D-pad /////////////////////////////////////////////  
  var arrowVal = Math.floor(gp.axes[mappingAxes.indexOf('arrows')] * 100);

  switch(arrowVal) {
    case -100: arrow1.style.opacity = "1"; wup.style.opacity = "1"; break;
    case 71: arrow2.style.opacity = "1"; wleft.style.opacity = "1"; break;
    case 14: arrow3.style.opacity = "1"; wdown.style.opacity = "1"; break;
    case -43: arrow4.style.opacity = "1"; wright.style.opacity = "1"; break;
    default: arrow1.style.opacity = "0"; arrow2.style.opacity = "0"; arrow3.style.opacity = "0"; arrow4.style.opacity = "0";  wup.style.opacity = "0"; wleft.style.opacity = "0"; wdown.style.opacity = "0"; wright.style.opacity = "0"; break;
  }

  start = requestAnimationFrame(gameLoop);
}



/////////////////////////////////////////// Functionality Example //////////////////////////////////////////////
function wheelLoading() {
  setTimeout(function(){ button0.style.opacity = "1"; }, 100);
  setTimeout(function(){ button1.style.opacity = "1"; }, 200);
  setTimeout(function(){ button2.style.opacity = "1"; }, 300);
  setTimeout(function(){ button3.style.opacity = "1"; }, 400);
  setTimeout(function(){ button0.style.opacity = "0"; }, 500);
  setTimeout(function(){ button1.style.opacity = "0"; }, 600);
  setTimeout(function(){ button2.style.opacity = "0"; }, 700);
  setTimeout(function(){ button3.style.opacity = "0"; }, 800);
  setTimeout(function(){ arrow1.style.opacity = "1"; }, 900);
  setTimeout(function(){ arrow2.style.opacity = "1"; }, 1000);
  setTimeout(function(){ arrow3.style.opacity = "1"; }, 1100);
  setTimeout(function(){ arrow4.style.opacity = "1"; }, 1200);
  setTimeout(function(){ arrow1.style.opacity = "0"; }, 1300);
  setTimeout(function(){ arrow2.style.opacity = "0"; }, 1400);
  setTimeout(function(){ arrow3.style.opacity = "0"; }, 1500);
  setTimeout(function(){ arrow4.style.opacity = "0"; }, 1600);
  setTimeout(function(){ striangle.style.opacity = "1"; }, 1700);
  setTimeout(function(){ ssquare.style.opacity = "1"; }, 1800);
  setTimeout(function(){ sx.style.opacity = "1"; }, 1900);
  setTimeout(function(){ scircle.style.opacity = "1"; }, 2000);
  setTimeout(function(){ striangle.style.opacity = "0"; }, 2100);
  setTimeout(function(){ ssquare.style.opacity = "0"; }, 2200);
  setTimeout(function(){ sx.style.opacity = "0"; }, 2300);
  setTimeout(function(){ scircle.style.opacity = "0"; }, 2400);

  setTimeout(function(){ downShift.style.opacity = "1"; }, 2500);
  setTimeout(function(){ downShift.style.opacity = "0"; }, 2800);
  setTimeout(function(){ upShift.style.opacity = "1"; }, 3000);
  setTimeout(function(){ upShift.style.opacity = "0"; }, 3300);

  setTimeout(function(){ x.style.opacity = "1"; }, 3500);
  setTimeout(function(){ square.style.opacity = "1"; }, 3600);
  setTimeout(function(){ triangle.style.opacity = "1"; }, 3700);

  
  setTimeout(function(){ x.style.opacity = "0"; }, 3800);
  setTimeout(function(){ square.style.opacity = "0"; }, 3900);
  setTimeout(function(){ triangle.style.opacity = "0"; }, 4000);

  setTimeout(function(){ circle.style.opacity = "1"; }, 4100);
  setTimeout(function(){ l2.style.opacity = "1"; }, 4200);
  setTimeout(function(){ l3.style.opacity = "1"; }, 4300);

  
  setTimeout(function(){ circle.style.opacity = "0"; }, 4400);
  setTimeout(function(){ l2.style.opacity = "0"; }, 4500);
  setTimeout(function(){ l3.style.opacity = "0"; }, 4600);

  setTimeout(function(){ wheelArea.style.transitionDuration = "500ms"; }, 4800);
  setTimeout(function(){ wheelArea.style.transform = 'rotate(' + -wRot + 'deg)'; }, 4800);
  setTimeout(function(){ wheelArea.style.transform = 'rotate(0deg)'; }, 5500);
  setTimeout(function(){ wheelArea.style.transform = 'rotate(' + wRot + 'deg)'; }, 6200);
  setTimeout(function(){ wheelArea.style.transform = 'rotate(0deg)'; }, 6900);
  setTimeout(function(){ wheelArea.style.transitionDuration = "0ms"; }, 7400);

  setTimeout(function(){ gas.style.transitionDuration = "500ms"; }, 7500);
  setTimeout(function(){ gas.style.transform = 'translateY(100px)'; }, 7500);
  setTimeout(function(){ gas.style.transform = 'translateY(0px)'; }, 8100);
  setTimeout(function(){ gas.style.transitionDuration = "0ms"; }, 8700);
  setTimeout(function(){ brake.style.transitionDuration = "500ms"; }, 8700);
  setTimeout(function(){ brake.style.transform = 'translateY(100px)'; }, 8700);
  setTimeout(function(){ brake.style.transform = 'translateY(0px)'; }, 9300);
  setTimeout(function(){ brake.style.transitionDuration = "0ms"; }, 9900);

  setTimeout(function(){ clutch.style.transitionDuration = "500ms"; }, 9900);
  setTimeout(function(){ clutch.style.transform = 'translateY(100px)'; }, 9900);

  setTimeout(function(){ shifter.style.transitionDuration = "100ms"; }, 10500);
  setTimeout(function(){ shifter.style.transform = 'translate(-60px, -50px)'; }, 10600);
  setTimeout(function(){ shifter.style.transform = 'translate(-60px, 50px)'; }, 11000);
  setTimeout(function(){ shifter.style.transform = 'translate(0px, -50px)'; }, 11400);
  setTimeout(function(){ shifter.style.transform = 'translate(0px, 50px)'; }, 11800);
  setTimeout(function(){ shifter.style.transform = 'translate(60px, -50px)'; }, 12200);
  setTimeout(function(){ shifter.style.transform = 'translate(60px, 50px)'; }, 12600);
  setTimeout(function(){ shifter.style.transitionDuration = "300ms"; }, 13000);
  setTimeout(function(){ shifter.style.transform = 'translate(0px, 0px)'; }, 13000);
  setTimeout(function(){ shifter.style.transitionDuration = "100ms"; }, 13700);
  setTimeout(function(){ shifter.style.transform = 'translate(60px, 50px)'; }, 13700);
  setTimeout(function(){ shifter.style.backgroundSize = '90px'; }, 13700);
  setTimeout(function(){ shifter.style.transitionDuration = "300ms"; }, 13900);
  setTimeout(function(){ shifter.style.transform = 'translate(0px, 0px)'; }, 14000);
  setTimeout(function(){ shifter.style.backgroundSize = '120px'; }, 14000);
  
  setTimeout(function(){ clutch.style.transform = 'translateY(0px)'; }, 14500);
  setTimeout(function(){ clutch.style.transitionDuration = "0ms"; }, 15000);


}