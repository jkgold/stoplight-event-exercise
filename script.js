/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

var button = document.getElementById("stopButton");
button.addEventListener('click', function () {
document.getElementById('stopLight').style.backgroundColor = 'red';
});


var button = document.getElementById("slowButton");
button.addEventListener('click', function () {
document.getElementById('slowLight').style.backgroundColor = 'yellow';
});


var button = document.getElementById("goButton");
button.addEventListener('click', function () {
document.getElementById('goLight').style.backgroundColor = 'green';
});
//
// // var stopButton = document.getElementById("stopButton");
//   if (stopButton.firstChild.nodeValue = "stopButton") {
//     document.getElementById("stoplight").style.backgroundColor = "red";
