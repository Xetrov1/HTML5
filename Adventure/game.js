
Game();
function Game() {
    
    var gameName = ["The Gate","The Wall","The ∞-'¢¡"];
    alert("Welcome to "+gameName[1]);
    var name = prompt("Hello there mind telling your name before you go into cryostasis").toLowerCase();
    Facility();
}
/*
var Player = {
 hp = 20; // out 0f 10
 var mentalhp = 20; // out of 10
 var viruslvl = 0; // out of 80, 0 = 0, 1 = 20, 2 = 40, 3 = 60, 4 = 80;
}
var playerInjuries = {
    headInjury:0,
    chestInjury:0,
    leftArm:0,
    rightArm:0,
    leftHand:0,
    rightHand:0,
    leftLeg:0,
    rightLeg:0,
    leftFoot:0,
    rightFoot:0;

    
}
*/

var zombielvl = 1; // out of 100(affects zombies hp and regen and affects there mutation rate)

var health = CalculateOverallHealth();

function Facility() {             
        
        var thing = prompt("As you wake up you hear a cold robotic voice say Cyropod Deactivated...Running dianostics..Health-good...Hunger 69%...Thirst 40%...Unidentified Energy Fluxuations Initilizing Scan..You slowly open your eyes and wipe away a cold liquid from them before you hear the voice from the outside of the pod you are in...Sector 47 is 67% infected by unknown infection. /n - Look Around, /n - Open Door, /n - Wait").toLowerCase(); //break;
         if (thing = "wait" || (thing = "Wait")) {
   var wait = prompt("As you sit there and wait you start to get bored before you see a man across from you in a pod pull the release latch and the door swings down and exits. He looks around before locking eyes with you and asks if you want to leave with him. /n - Go, /n - Refuse, /n - Wait").toLowerCase(); 
         if(wait = "go") {
            var pew = prompt("Kay lets go right, You have arrived in an elevator room. Well ships wait here i'll go turn on the generator. /n wait. /n follow him").toLowerCase();
             if (pew == "wait" || pew == "refuse") {
                 alert("He comes back and you both leave, he is cradiling his arm. Commander your still alive! Wait commander whats wrong, You see the man before your slowly turning paler his eyes turn red and he bites you before killing the rest of the group. You are now a part of the Zombie faction welcome second leader. Congrats you have survived");
             }
             else {
                alert("As you follow him he walks into the generator room, he turns it on right as he is about to leave though a zombie jumps out at him, You rush out and tackle the zombie before he stabs it with a knife, Didn't i tell you to wait, oh well thanks for the save now lets get out of here. As you both climb up the elevator into the light you see the military, 'Commander your still alive?', Yes all thanks to this gentle person now give me a gin and lets get out of here. CONGRATS YOU HAVE SURVIVED");
             }
         } }
         if (wait ="Wait"  || (wait ="wait")) {
            var ait = prompt("So I guess I'll be off then. /n Leave" ).toLowerCase();
             if(ait != "leave") {
                 alert("You decide to spend eternity in the cold. You have died");
             } // end ait if
         } // end wiat if
        else if (awake == "Look" || awake == "look around" || ait == "leave"){
        var look = prompt("Outside of the pod you see that most of the pods vital signs are all straight lines, except for three of them. It is also a little dark outside of the pod and you notice its very quiet before you hear a loud boom and see the pod next to you in line break open and you see a young girl come out and you hear moaning and see on the left a female lady come out though its looks like her flesh is rotting off and is slowly drawing close to the crying girl. /n - open door, / n - wait, /n - save").toLowerCase();
    } if(look == "save") {
        alert("As you jump out the pod you hit the zombie with the door when you open it causing the zombie to die, As you aproach the girl you hear I'm so hungry, before you see the girl change into a zombie right before your eyes and bite you. YOU HAVE DIED!! /n /n or did you?");
        Game()
    }
    else {
        var direction = prompt("All along this hall your in, are cyropods just like yours all of them are empty except for a few bodies of course. /n - Go Right, /n - Go Left").toLowerCase();
    }
    if (direction == "go right") {
        prompt("You arrive back inside of an elevator room. It appears to have no power /n try elevator, /n go back");
    }
    else {
        var things = prompt("You are inside of a generator room currently you hear groaning sounds from an closet. /n look inside, /n turn on");
        if (things == "turn on"){
            var hings = prompt("You turn on the generator and you hear slight moaning sounds from a closest. /n go back, /n wait").toLowerCase();
                   if(hings = "go back") {
              var up = prompt("You just keep running into the next room, This room is an elevator it has power now, /n go up").toLowerCase();
            }
            if (up = "go up"){
                alert("As you go up you see a heavily armored squad, Hey its a survivor. CAREFUL they could of gotten bitten lets take a look then lets go, You have survived!");
            }
                   else ("You look inside the closet and a zombie jumps out and tears you into to shreds. YOU HAVE DIED!");
        }
    }
    } // end function Facility 

function Stats(hp,mentalhp,viruslvl) {
 var virustest;

    alert("Hp is at: " + hp );
    alert("Mental Health is at: " + mentalhp);
    alert("Virus Level is at: " + viruslvl);  
  // sees what lvl the players virus level is at.
   if(viruslvl == 0 ) {
       virustest = 0;
   }
   else if(viruslvl == 1) {
   virustest = 20;
   }
   else if(viruslvl == 2) {
       virustest = 40;
   }
    else if(viruslvl == 3) {
       virustest = 60;
   }
    else if(viruslvl == 4) {
       virustest = 80;
   }
    if (viruslvl <= 5) {
        virustest = 0;
        }
 var overallhealth = (hp / 2) + (mentalhp / 2) + virustest;
    alert("Overall Health is at: "+ overallhealth);
} 
/*
var inventory = {
    painkillers:0, // increases health
    ammo:0, // how many shots you have
    knife:0, // can stab things with it
    huntingRifle:0, // uses ammo
    pistol:0, // uses ammo 
    pipe:0, // can break bones with this
    water:0, // Living requirement
    food:0, // Living Requirment
    antidote:0, // Helps against virus lvl
    book:0, // can restore mental health
    money:0, // can use to start a fire 
    lighter:0, // can use to catch something flamable on fires
    
}
*/
/*
var zombielvl1 = {
    ehp = 10; // zombies hp
    speed = .50; // how fast the zombie moves / attacks
    head:1, // how many does the zombie have can insta-kill zombie
    body:1, // deals dmg
    arms:random(0,2), // zombie cant attack with arms if 0
    legs:random(0,2), // zombie can't move very fast with out legs and must stand still to attack if 0
}
*/
/*
function Inventory() {
    var inventory = prompt(" - take, - use, - take, - what ").toLowerCase();
    switch(inventory)
        case "take":
        prompt("What do you want to take? ").toLowerCase();
        break;
        case "use":
        prompt("What do you want to use? " + "/n What do you want to use it on? ");
        break;
        case "take":
        prompt("What do you want to take? ").toLowerCase();
        break;
        case "what":
        var item = prompt("What item do you want to know about? ").toLowerCase();
        switch (item) {
        case "painkillers":
                alert("Painkillers can give an increase in hp and or add hp to the value.");
        break;
    case "ammo": alert("Ammo is used to fire firearms or trade for food and such."); break;
    case "knife": alert("Knife is used to harvest food from animals skin or flesh and also to sever zombie's arms and legs and also the head."); break;
    case "huntingRifle":  alert("The Hunting Rifle is used to hunt either animals or zombies or other people, a hunting rifle uses 2 ammo per shot and has farther range than the pistol."); break;
    case "pistol": alert("The pistol can be used for rapid fire it uses one ammo per shot and doesn't have as much range."); break;
    case "pipe":  alert("The pipe can be used to break bones or to bash down open wooden boards."); break;
    case "water": // water or Water
    case "Water":  alert("Water is a basic necesity you can choose when to drink it or have it auto be done."); break;
    case "food": 
    case "Food": alert("Food is a basic necesity you can choose when to eat it or have it auto be done."); break;        
    case "antidote":
    case "Antidote":
        alert("Antidotes your best friend they can help fight off the infection if you get bitten or inflicted by any infected thing ");
    break;
    case "book":
    case "B":
                alert("Ah a book your friend to take a rest from all the crazy mayhem it will restore mental health");
    break;
              }
*/



// Alien Language
     /* A = !
        B = @
        C = #
        D = $
        E = %
        F = ^
        G = &
        H = *
        I = -
        J = =
        K = _
        L = +
        M = <
        N = >
        O = :
        P = ;
        Q = '
        R = "
        S = ¡
        T = £
        U = ¢
        V = ∞
        W = §
        X = ¶
        Y = •
        Z = ~ */
        function room() {
                
                switch (rooms) 
                    {
                        case 1:
                            
                            
                        break;
                            
                        case 2:
                            
                            
                        break;
                            
                        case 3:
                            
                            
                        break;
                    }
                
        }
/*         _________________  __________________________________________   __________
    //     |               |__|                                        |___|        |
    //     | Generator Room __          Cyrostasis Room                 ___ Elevator|
    //     |               |  |                                        |   |  Room  |
    //     |_______________|  |________________________________________|   |________|
    
    
    
    */