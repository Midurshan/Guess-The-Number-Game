// Selecting elements
var guessnumber = document.getElementById("guessnumber");
var result = document.getElementById("result");
var score = document.getElementById("score");

// Generating a random number between 1 and 10
var randomNumber = Math.floor(Math.random() * 10) + 1;
var totalscore = 10;

function check() {
    var enterednumber = parseInt(guessnumber.value); // Convert input to number
    
    if (randomNumber === enterednumber) {
        console.log("Right");
        result.textContent = "✔️ Right";
        alert("🎉 You WON!....");
    } else {
        totalscore -= 1;
        score.textContent = "🏆 Score: " + totalscore;
        result.textContent = "❌ Wrong";
    }
}
