import Leap from 'leapjs';

// Store frame for motion functions
var previousFrame = null;
// Setup Leap loop with frame callback function
var controllerOptions = {enableGestures: true};

Leap.loop(controllerOptions, function(frame) {
  if(previousFrame && previousFrame.valid) {
    var rotationAxis = frame.rotationAxis(previousFrame);
    var rotationAngle = frame.rotationAngle(previousFrame);
    var frameString = "Rotation axis: " + vectorToString(rotationAxis, 2) + "<br />";
    document.getElementById('content').innerHTML = "<div>"+frameString+"</div>";
  }
  previousFrame = frame;
});

function vectorToString(vector, digits) {
  if (typeof digits === "undefined") {
    digits = 1;
  }
  return "(" + vector[0].toFixed(digits) + ", "
  + vector[1].toFixed(digits) + ", "
  + vector[2].toFixed(digits) + ")";
}

