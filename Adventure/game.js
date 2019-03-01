
Game();
function Game() {
    
    var gameName = ["The Gate","The Wall","The ∞-'¢¡"];
    alert("Welcome to "+gameName[1]);
    var name = prompt("Hello there mind telling your name before you go into cryostasis").toLowerCase();
    while(!confirm("Are you sure you want " + name + " as your name?")){
        name = prompt("What name do you want?");
    }
    Facility();
}
bossHp = 5;
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
   var wait = prompt("As you sit there and wait you start to get bored before you see a man across from you in a pod pull the release latch and the door swings down and exits. He looks around before locking eyes with you and asks if you want to leave with him. /n - Go, /n - Refuse, /n - Wait").toLowerCase(); }
    if (wait =="refuse") {
        alert("You decide to never leave the cyropod you starved to death. You have Died!");
    }
         if(wait = "go") {
            var pew = prompt("Kay lets go right, You have arrived in an elevator room. Well ships wait here i'll go turn on the generator. /n wait. /n follow him").toLowerCase();
             if (pew == "wait" || pew == "refuse") {
                var hunt = prompt("He comes back and you both leave, he is cradling his arm. Commander your still alive! Wait commander whats wrong, You see the man before your slowly turning paler; his eyes turn red and he bites you before killing the rest of the group. You are now a part of the Zombie faction welcome Primal Leader. /n Hunt,/n Look").toLowerCase(); viruslvl = 10; 
                if(hunt = "look") {
                     var a = prompt("As you look around you see a door to your left and a door straight infront of you. So Primal Leader, Your mission is to hunt the remaining people on this floor I will head down and make sure everyone down there is dead. /n hunt");
                 }
                    if (hunt == "hunt" || a == "hunt") {
                        var b = prompt("You smell a sweet scent from the door to your east and hear a grinding noise infront of you. /n east, /n north or front")
                        if (b == "east" || b == "e") {
                            var c = prompt("You walk inside of a main office, there is a table and chairs. You hear faint crying noise from below the table. /n table") }
                            if (c = "table")
                                var ikill = prompt("You see a young girl she is crying amd curled into a ball, /n kill, /n infect /n leave");
                                if (ikill = "infect") {
                                    prompt("You bite the little girl she turns paler and stares at you with blue eyes there appears to be sparks coming out of them. You: You are now Arcane Leader. /n leave(when you leave you also go to the north"); }
                                    
                                       if(p == "north" || p == "n") {
                                       var leave = prompt ("You walk into the room and smell the fresh dead air, The girl follows you . The door is now open /n leave");}
                                           else {
                                               alert("You walk out holding hands with the girl you don't know if you want to be infected but you know you don't want others to. YOU have won"); Game();                         
                                    } // infected lil girl and leave // ou won
                                
                              if (ikill = "kill") {
                                    var p = prompt("As your leave you know that the child will make no more sound. {u monster u} /n north");
                                    if(p == "north" || p == "n") {
                                       var leave = prompt ("You walk into the room and smell the fresh dead air. The door is now open /n leave, /n wait");
                                    }
                                    if (leave = "leave") {
                                        alert("You have won")
                                    }
                                }
                            else {
                                var t = prompt("I thought i told you to kill everyone you see goodbye primal leader, /n fight, /n accept fate")
                               if(t = "fight"){
                                   var e = prompt("/n Attack, /n accept fate");
                                   if (e = "attack") { 
                                       alert("You slash him with your claws");  bossHp--; e = null; }
                                   else {alert("After fighting a bit you give up");}
                                   while(bossHp > 1)
                                   alert("As he is about to deliver the final blow. your head makes faint cracking noises in your head and a wave of pure energy blasts out from you and kills him. You feel the infection leave your body. You have won as a survivor"); 
                                   Game();
                               }
                                else 
                                    alert("You have lost")
                            }
                            
                        }
                        
                    
             }
             else {
              var choice = prompt("As you follow him he walks into the generator room, he turns it on right as he is about to leave though a zombie jumps out at him, You rush out and tackle the zombie before he stabs it with a knife, Didn't i tell you to wait, oh well thanks for the save now lets get out of here. As you both climb up the elevator into the light you see the military, 'Commander your still alive?', Yes all thanks to this kind person now give me a gun and lets get out of here. /n follow group, go alone").toLowerCase(); pistol++; ammo=50;
                 if (choice == "follow group") {
                     prompt("Well I just realized I never asked ya your name my name is Grofdin. What is your name? /n tell name, /n refuse to tell name(refuse)").toLowerCase;
             }
                 else {
                     var q = prompt("As they leave you notice there are is a door to your left you hear faint crying from inside, to the north is a large metal door that is slowly opening")
                 }
          }
         if (wait ="Wait"  || (wait ="wait")) {
            var ait = prompt("So I guess I'll be off then. /n Leave" ).toLowerCase();
             if(ait != "leave") {
                 alert("You have decided to spend eternity in the cold. You have died");
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
        var things = prompt("You are inside of a generator room currently you hear groaning sounds from a closet. /n look inside, /n turn on"); }
        if (things == "turn on"){
            var hings = prompt("You turn on the generator and you hear slight moaning sounds from a closest. /n go back, /n wait").toLowerCase(); }
         if (things == "look" || hings == "wait") alert("A zombie jumps out of the closet. You have died!")
                   if(hings = "go back") {
              var up = prompt("You just keep running into the next room, This room is an elevator it has power now, /n go up").toLowerCase();
            }
            if (up = "go up"){
              var ab = prompt("Hey its a survivor, Careful they could be infected. /n not infected. ");
                if(ab = "not infected") {
                    var abc = prompt("Well then here's a knife, Let's go.[there is an office to your left and a big metal door infront of you] /n go left(left), /n follow troop(follow)"); knife++; }
                    
                    if (abc = "left") {
                        var office = prompt("You walk into an office there is a little girl crying in the corner. /n check");
                        if (office = "check") {
                            var check = prompt("You: Why are you crying? Its cold here. /n leave with, /n leave her")
                            if (check == "leave with") {
                                alert("As you walk out of the open door you smell the fresh air and also hear gun fire from ahead of you. You have survived! ")
                            if (check == "leave her")
                                    alert("You decide to leave the girl to her own fate and leave this facility far behind you. You have survived.")
                            }
                        }
                    }
                    else if(ab == "follow") {
                     alert("The door infront of you opens with a metal screech. You leave with the army officers smelling the fresh air. You have survived.")
                    }
            } 
         
         }
    } // end function Facility 