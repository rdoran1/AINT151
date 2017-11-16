function CreatePlayer()
{

var name = document.getElementById('playername').value;


var color = document.getElementById('playercolour').value;


var health = document.getElementById('playerhealth').value;
var weaponvalue = document.getElementById('playerweapon').value;
var weapon = ""


if (weaponvalue == 1) {
 weapon = 'Crossbow Of Much Hurting'
}
else if (weaponvalue == 2) {
 weapon = 'Broadsword Of Much Slicing'
}
else if (weaponvalue == 3) {
 weapon = 'Wand Of Amaze Magic'
}


document.getElementById('name').innerHTML = name;
document.getElementById('colour').style.backgroundColor = color;
document.getElementById('health').innerHTML = health;
document.getElementById('weapon').innerHTML = weapon;

}
