// Function to play the sound when hovering over menu items
function playSound() {
    var sound = document.getElementById("hover-audio");
    
    // Resets the audio to the beginning so it can play rapidly
    sound.currentTime = 0; 
    
    // Lowers the volume slightly so it isn't overwhelming
    sound.volume = 0.3; 
    
    sound.play();
}
