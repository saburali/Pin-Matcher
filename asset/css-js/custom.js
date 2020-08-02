// Some Use Common Function
function emptyValue(id) {
    document.getElementById(id).value = '';
}

function emptyText(id) {
    document.getElementById(id).innerText = '';
}

function displayNone(id) {
    document.getElementById(id).style.display = "none";
}

function displayBlock(id) {
    document.getElementById(id).style.display = "block";
}

function shake(id) {
    var addClass = document.getElementById(id);
    addClass.classList.add('shake');
}
function play() {
    var audio = document.getElementById("audio");
    audio.play();
}