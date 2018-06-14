//make four crystal images with random values attached to 
//each one as a data attribute or in the id

//on click - add the value from the clicked element id or data attr
//to the score

//if they click and the score is over, they lose
//if they win - show a success message

//get rand number between 19 anmd 120
//crystal number between 1 and 12



//declare global variables

var wins = 0;
var losses = 0;
var userTotal = 0;
var randomNumber = 0;

//create an array that holds the crystal points

var crystalPoints = ['', '', '', ''];

//generate a random number between 19-120 that loads on the screen for the user to match
//a new number should generate everytime we win or lose

var resetAndStart = function() {

    $(".crystals").empty();

    var images = [
                'blue-gem.jpg',
                'https://www.rd.com/wp-content/uploads/2017/08/02_crystal_Reasons-Why-You-Should-Give-Crystals-a-Try_364248173_Abra-Cadabraaa-380x254.jpg',
                'https://www.rd.com/wp-content/uploads/2017/08/02_crystal_Reasons-Why-You-Should-Give-Crystals-a-Try_364248173_Abra-Cadabraaa-380x254.jpg',
                'https://www.rd.com/wp-content/uploads/2017/08/02_crystal_Reasons-Why-You-Should-Give-Crystals-a-Try_364248173_Abra-Cadabraaa-380x254.jpg']

    randomNumber = Math.floor(Math.random() * 101 + 19);
    $("#number-to-guess").text(randomNumber);
    // console.log(randomNumber);

    //create random values for 4 crystal images between 1-12

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;
        console.log(random);

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random

        });

           crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"
           })

        $(".crystals").append(crystal);
    }

}

resetAndStart();

//on click -create a function to add the value of the crystal to the score
//resets game
$(document).on('click', ".crystal", function () {

        var num = parseInt($(this).attr('data-random')); 
        userTotal += num;

        $("#score").html(userTotal)

        console.log(userTotal);

        if (userTotal > randomNumber) {
            console.log("You lost!!");
            losses++;
            alert("Sorry, try again!");

        $("#loss").html(losses);

        userTotal = 0;

        resetAndStart();
        }
        else if (userTotal === randomNumber) {
            console.log("You win!!");
            wins++;
            alert("Winner, winner, chicken dinner!");

        $("#win").html(wins);

        userTotal = 0;

        resetAndStart();

        }
});


//if the score is over, they lose and alert message pops up and resets game, increments a loss
//if they match the randomNumber, they win and alert pops up and resets game and increments a win

/*
score.textContent = '0';

var targetNums = [];

for(var i=19; i<=120; i++){
    targetNums.push(i);
}

//TODO: 
//put target num on the screen

var crystalNums = [];

for(var i=1; i<=12; i++){
    crystalNums.push(i);
}

var targetNum = targetNums[Math.floor(Math.random()*targetNums.length)];

for(var i=0; i<4; i++){
    //make crystal elems 
    var crys = document.createElement('img');
    crys.className = 'crys';
    crys.src = "http://www.seirtec.org/wp-content/uploads/ktz/chandelier-wooden-original-wooden-orb-chandelier-metal-orb-detail-and-crystal-img-365tpo8zqm3wdy29u7nsp6.jpg";
    crys.dataset.hiddenValue = crystalNums[Math.floor(Math.random()*crystalNums.length)];
    //get value to attach to crystal elems

    document.body.appendChild(crys);
}

document.addEventListener('click', function(e){
    if(e.target.className == 'crys'){
        //get value of current score
        var curScore = Number(document.getElementById('score').innerHTML);
        var crysVal = Number(e.target.dataset.hiddenValue);
        var newScore = curScore + crysVal;

        document.getElementById('score').innerHTML = newScore;
        //add the data attribute value to the score

        //
    }
})

*/