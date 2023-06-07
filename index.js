function toDiceGame() {
    window.location.href = "GameHome.html";

}
function toTwoPlayer() {
    window.location.href = "TwoPlayer.html";

}
function toRollHome() {
    window.location.href = "RollHome.html";

}
function toSinglePlayer() {
    window.location.href = "SinglePlayer.html";

}
function toTwoDice() {
    window.location.href = "TwoDice.html";

}
function toOneDice() {

    window.location.href = "OneDice.html";

}
function toThreeDice() {
    window.location.href = "ThreeDice.html";

}
function toAddName() {
    window.location.href = "AddName.html";

}
muter.addEventListener('click',function(){
// always use 3 equal to when assinging something    

    if(document.getElementById("muter").innerHTML==="Mute"){
    document.getElementById("muter").innerHTML="Unmute";
    }
    else
    document.getElementById("muter").innerHTML="Mute";
})


// muter function 

function toggleMute() {
    var x = document.getElementById("dice2");
    x.muted = !x.muted;
 }
 
//  Single Player  // 

function SinglePlayer() {
    
    // Dice 1 Generator
    var randomNumber1 = Math.random();
    randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
    var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", randomDiceImage1);
    // Dice 2 Generator 
    var randomNumber2 = Math.random();
    randomNumber2 = Math.floor(randomNumber2 * 6) + 1;
    var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
    var img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src", randomDiceImage2);
    // Display of Winner   
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = FirstName +" wins";
    }
    if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "It's a Tie";
    }
    if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Computer wins";
    }
    diceSound();
}

// Two Player //

function TwoPlayer() {
 
    // document.querySelector(".player1").innerHTML= people;
    // document.querySelector(".player2").innerHTML= people2;
    // Dice 1 Generator
    var randomNumber1 = Math.random();
    randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
    var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", randomDiceImage1);
    // Dice 2 Generator 
    var randomNumber2 = Math.random();
    randomNumber2 = Math.floor(randomNumber2 * 6) + 1;
    var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
    var img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src", randomDiceImage2);
    // Display of Winner 
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = FirstName +" wins";
    }
    if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "It's a Tie";
    }
    if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML =  LastName+" wins";
    }
    diceSound();
}

function ThreePlayer() {
    // Dice 1 Generator
    var randomNumber1 = Math.random();
    randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
    var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", randomDiceImage1);
    // Dice 2 Generator 
    var randomNumber2 = Math.random();
    randomNumber2 = Math.floor(randomNumber2 * 6) + 1;
    var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
    var img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src", randomDiceImage2);
    // Dice 3 Generator 
    var randomNumber3 = Math.random();
    randomNumber3 = Math.floor(randomNumber3 * 6) + 1;
    var randomDiceImage3 = "images/dice" + randomNumber3 + ".png";
    var img3 = document.querySelectorAll("img")[2];
    img3.setAttribute("src", randomDiceImage3);
// logic
    if (randomNumber1 > randomNumber2 && randomNumber1>randomNumber3 ) {
        document.querySelector("h1").innerHTML = FirstName +" wins";
    }
    if (randomNumber1 === randomNumber2 === randomNumber3) {
        document.querySelector("h1").innerHTML = "It's a Tie";
    }
    if (randomNumber2 > randomNumber1 &&  randomNumber2>randomNumber3) {
        document.querySelector("h1").innerHTML =  LastName+" wins";
    }
    if (randomNumber3 > randomNumber1 &&  randomNumber3>randomNumber2) {
        document.querySelector("h1").innerHTML =  LastName+" wins";
    }
    diceSound();
}


// One Dice//

function OneDice() {
    var randomNumber1 = Math.random();
    randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
    var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", randomDiceImage1);
    document.querySelector("h1").innerHTML = randomNumber1;
   
    diceSound();
   

    

}

// Two Dice //

function TwoDice() {
    // Dice 1 Generator
    var randomNumber1 = Math.random();
    randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
    var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", randomDiceImage1);
    // Dice 2 Generator 
    var randomNumber2 = Math.random();
    randomNumber2 = Math.floor(randomNumber2 * 6) + 1;
    var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
    var img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src", randomDiceImage2);
    // Total of Dices shower
    document.querySelector("h1").innerHTML = randomNumber1 + randomNumber2;
    diceSound();
} 
    

function ThreeDice() {
    // Dice 1 Generator
    var randomNumber1 = Math.random();
    randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
    var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", randomDiceImage1);
    // Dice 2 Generator 
    var randomNumber2 = Math.random();
    randomNumber2 = Math.floor(randomNumber2 * 6) + 1;
    var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
    var img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src", randomDiceImage2);
    // Dice 3 Generator 
    var randomNumber3 = Math.random();
    randomNumber3 = Math.floor(randomNumber3 * 6) + 1;
    var randomDiceImage3 = "images/dice" + randomNumber3 + ".png";
    var img3 = document.querySelectorAll("img")[2];
    img3.setAttribute("src", randomDiceImage3);
    // Total of Dices shower
  var sum =  randomNumber1 + randomNumber2  + randomNumber3 ;
    document.querySelector("h1").innerHTML =sum;

} 
            

















// the basic logic available for enter button 
//document.addEventListener("keypress", function (event) {
    //     event.preventDefault();
    
    //     // enterkey(event.key);
    //     if(event.keyCode===13){
    //         console.log("pres");
    //         clic();
    //     }
    //     console.log(event);
    // });

