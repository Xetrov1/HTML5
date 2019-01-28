/*var pc = prompt("Its been awhile since i've seen anyone out here, What is your name lost one?");

hp==20; mentalhp==20;
confirm("Ah nice to meet ya" + pc);
alert("Do you want to come with me or are you staying here?");
confirm("Ah then come let us go");*/
Game();
var hp = 20; 
var mentalhp = 20; 
var viruslvl = 0;
function Game() {
    alert("The Gate!");
    
    var playerName = prompt("What is your name?");
    
    alert("Welcome to "+playerName);

    Awake();
}
function Awake() {
    var awake = prompt("Cyropod Deactivated...Running dianostics..Health-good...unidentfied energy..... /n - Look Around, /n - Open Door, /n - Wait").toLowerCase();
    if (awake == "wait") {
        var wait = prompt("As you sit there and wait you see a man pull the release latch and the door swings down and exits. He looks around before locking eyes with you and asks if you want to leave with him. /n - Open the door, /n - Refuse, /n - Wait").toLowerCase();
        if (wait == "wait") {
            var ait = prompt("As you just sit there thinking you hear a low murmur and look out of the pod. The man is staring at someone who is coming close. Hey do you want to leave with me?!, Oh god. You see a women who's flesh is rotting off rush and grab the man and takes a bite of him before consuming his right arm before your eyes. /n - open the door, /n - crouch down");  mentalhp = mentalhp - 1;
        }
    }
    else if (awake == "Look" || awake == "look around"){
        var look = prompt("As you look around you hear a noise coming down the hallway to your right and hear gunfire with yelling")
    }
    else {
        prompt("you dead fool.");
    }
}