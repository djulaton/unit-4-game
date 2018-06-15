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
                'assets/images/red-gem.jpg',
                'assets/images/blue-gem.jpg',
                'assets/images/yellow-gem.jpg',
                'assets/images/green-gem.jpg']

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
