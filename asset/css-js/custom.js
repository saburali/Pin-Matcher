// Generate Pin Button
function randomNumFun() {
    var randomNumber = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('generateNum').value = randomNumber;
    document.getElementById('textMessage').innerText = "Press & Submit the Pin Code";
    shake('textMessage');
    emptyValue('inputPin');
    audio.play();
}


// Input Number Value
function btnKey(id) {
    let prevValue = document.getElementById('inputPin').value;
    let key = document.getElementById(id).innerHTML;
    document.getElementById('inputPin').value = prevValue + key;

    audio.play();
}


// Clean Value (Bonus)
function clean() {
    document.getElementById('inputPin').value = "";
    play();
}

// Clean Last Value (Bonus)
function cleanLast() {
    var inputResult = document.getElementById('inputPin').value;
    var removeValue = inputResult.slice(0, inputResult.length - 1);
    document.getElementById('inputPin').value = removeValue;

    play();
}


// Matchig Pin - Submit Button Condition
function submitBtn() {
    var randomNum = document.getElementById('generateNum').value;
    var typeNum = document.getElementById('inputPin').value;

    if (randomNum.length == 0) {
        document.getElementById('generateMessage').innerText = "Please Generate Random Number First";
        shake('generateMessage');
    }
}


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