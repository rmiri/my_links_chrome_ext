
var linkTo = document.getElementById('link');
var theInput = document.getElementById('theInput')

linkTo.onclick = function() {
theInput.select();
document.execCommand("copy");

}





