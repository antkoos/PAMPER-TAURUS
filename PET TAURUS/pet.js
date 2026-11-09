function startGame() {
    document.body.innerHTML =
        '<div onclick="taurusClick()">\
<img id="taurus" style = "width: 400px; height: auto;" src="Images/taurus_stage1.png">\
	</div>\
    <div>\
<button onclick="grabBottle()">Feed!</button>\
		<p>Times Fed: <span id="timesfed"> </span></p>\
        		<p>Times Petted: <span id="timespet"> </span></p>\
	</div>';
}


startGame();


let hand = "none";
let timesFed = 0;
let timesPet = 0;
let taurusStage = 1;
let taurusCurrentAction = null;


// Setup
document.getElementById('timesfed').innerHTML = timesFed;
document.getElementById('timespet').innerHTML = timesPet;

function grabBottle() {
    hand = "bottle";
    document.body.style.cursor = "url('Images/bottle.png'), grab";
}

function bottleFeed() {
    taurusCurrentAction = "feeding";
    hand = "none";
    document.body.style.cursor = 'default';
    document.getElementById('taurus').src = 'Images/taurus_stage1_feeding.png';
    setTimeout(() => { document.getElementById('taurus').src = 'Images/taurus_stage1.png'; taurusCurrentAction = null; }, 3000);
    timesFed++;
    document.getElementById('timesfed').innerHTML = timesFed;
}


function taurusPet() {
    taurusCurrentAction = "petting";
    document.getElementById('taurus').src = 'Images/taurus_stage1_pet.gif';
    timesPet++;
    setTimeout(() => { document.getElementById('taurus').src = 'Images/taurus_stage1.png'; taurusCurrentAction = null; }, 2000);
    document.getElementById('timespet').innerHTML = timesPet;
}

function taurusClick() {

    if (hand === "bottle") {
        bottleFeed();
    }

    else if (taurusCurrentAction === null && hand === "none") {
        taurusPet();
    }
}
