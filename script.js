// Selecting elements
var guessnumber = document.getElementById("guessnumber");
var result = document.getElementById("result");
var score = document.getElementById("score");
var howToPlayLink = document.getElementById("howToPlayLink");
var howToPlayModal = document.getElementById("howToPlayModal");
var closeModal = document.getElementById("closeModal");

// Generating a random number between 1 and 10
var randomNumber = Math.floor(Math.random() * 10) + 1;
var totalscore = 10;

function check() {
    var enterednumber = parseInt(guessnumber.value); // Convert input to number
    
    if (randomNumber === enterednumber) {
        result.textContent = "✔️ Right";
        alert("🎉 You WON!....");
    } else {
        totalscore -= 1;
        score.textContent = "🏆 Score: " + totalscore;
        result.textContent = "❌ Wrong";
    }
}

// Show the modal
howToPlayLink.onclick = function(event) {
    event.preventDefault(); // Prevent default link behavior
    howToPlayModal.style.display = "block";
}

// Close the modal
closeModal.onclick = function() {
    howToPlayModal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target === howToPlayModal) {
        howToPlayModal.style.display = "none";
    }
}
