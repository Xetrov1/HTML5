/*var pc = prompt("Its been awhile since i've seen anyone out here, What is your name lost one?");

hp==20; mentalhp==20;
confirm("Ah nice to meet ya" + pc);
alert("Do you want to come with me or are you staying here?");
confirm("Ah then come let us go");*/
Game();
var hp = 20; // out of 10
var mentalhp = 20; // out of 10
var viruslvl = 0; // out of 80

var zombielvl = 1; // out of 100(affects zombies hp and regen and affects there mutation rate)

var health = CalculateOverallHealth();
function Game() {
    alert("The Gate!");    
    var playerName = prompt("What is your name?");
    
    alert("Welcome to The Gate"+playerName);

    Awake()
}
function Facility() {
    var awake = prompt("As you wake up you hear a cold robotic voice say Cyropod Deactivated...Running dianostics..Health-good...Hunger 69%...Thirst 40%...Unidentified Energy Fluxuations Initilizing Scan..You slowly open your eyes and wipe away a cold liquid from them before you hear the voice from the outside of the pod you are in...Sector 47 is 67% infected by unknown infection. /n - Look Around, /n - Open Door, /n - Wait").toLowerCase();
    if (awake == "wait") {
        var wait = prompt("As you sit there and wait you start to get bored before you see a man across from you in a pod pull the release latch and the door swings down and exits. He looks around before locking eyes with you and asks if you want to leave with him. /n - Open the door, /n - Refuse, /n - Wait").toLowerCase();
        if (wait == "wait") {
            var ait = prompt("As you just sit there thinking you hear a low murmur and look out of the pod. The man is staring at someone who is coming close. Hey do you want to leave with me?!, Oh god. You see a women who's flesh is rotting off rush and grab the man and takes a bite of his right arm before your eyes. The man then is screaming and the girl bites his head off. /n - open the door, /n - crouch down");  mentalhp--;
            if (ait == "crouch down") {
                
            }
        }
    }
    else if (awake == "Look" || awake == "look around"){
        var look = prompt("outside of the pod you see that most of the pods vital signs are all straight lines, exepect for three of them. It is also a little dark outside of the pod and you notice its very quiet before you hear a loud boom and see the pod next to you in line break open and you see a young girl come out and you hear moaning and see on the left a female lady come out though its looks like her flesh is rotting off and is slowly drawing close to the crying girl . /n - open door, / n - wait");
    }
    else {
        prompt("As you pull down the door you see a man across from you open his pod door. ");
    }
}
function Stats() {
    alert("Hp is at: " + hp );
    alert("Mental Health is at: " + mentalhp);
    alert("Virus Level is at: " + viruslvl);
   CalculateOverallHealth();
    
}
function CalculateOverallHealth(hp,mentalhp,viruslvl) {
   var virustest;
   if(viruslvl == 0 || viruslvl == 1) {
       virustest = 80;
   }
   else if(viruslvl == 2) {
       virustest = 60;
   }
    else if(viruslvl == 3) {
       virustest = 40;
   }
    else if(viruslvl == 4) {
       virustest = 20;
   }
    if (viruslvl <= 5) {
        virustest = 0;
        }
 var overallhealth = (hp / 2) + (mentalhp / 2) + virustest;
    alert("Overall Health is at: "+ overallhealth);
}
function Inventory() {
    var doStuff;
    
}

// <> >< () )( {} }{ /\ \/  º–º •_• –_– ¶–¶