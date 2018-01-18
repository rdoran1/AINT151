var mySound = new Audio("button.wav");
var mySoundOne = new Audio("wakeup.wav");
var mySoundTwo = new Audio("scream.wav");
var mySoundThree = new Audio("endOne.wav");

function OnLoad()
{
	SelectRoom(0)

}

function SelectRoom(roomIndex)
{
	if (roomIndex != 0){
		mySound.play();
	}
 	if (roomIndex == 0) {
		mySoundOne.play();
	}
	if (roomIndex == 12){
		mySoundTwo.play();
	}
	if (roomIndex == 14) {
		mySoundThree.play();
	}
	document.getElementById('roomChoices').innerHTML = "";
	document.getElementById('roomTitle').innerHTML = roomArray[roomIndex].title;
	document.getElementById('roomText').innerHTML = roomArray[roomIndex].text;
	for (var i = 0; i < roomArray[roomIndex].choices.length; i++) {
		var roomChoices = "<button type='button' onClick=SelectRoom(" + roomArray[roomIndex].choices[i].index + ")>" + roomArray[roomIndex].choices[i].text + "</button>";
		document.getElementById("roomChoices").innerHTML += roomChoices;
	}
}
