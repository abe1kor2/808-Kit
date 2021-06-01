var numofDrum = document.querySelectorAll(".drum").length;
//  detecting Buttons being pressed
for(var i = 0; i < numofDrum; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

        var buttonPressed = this.innerHTML;
        makeSound(buttonPressed);

        buttonAnimiation(buttonPressed);
        // this.style.color = "white";
        // this will get triggered whenever we click on the specific button
        
    });
    
}
// detecting buttons being pressed
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimiation(event.key)
});

function makeSound(key){
    switch (key) {
        case "w":
                var t1 = new Audio("sounds/snare.wav");
                t1.play(); 
            break;               
        case "a":
                var t2 = new Audio("sounds/kick.wav");
                t2.play();                
            break;
        case "s":
                var t3 = new Audio("sounds/clap.wav");
                t3.play();                
            break;
        case "d":
                var t4 = new Audio("sounds/bassShot.wav");
                t4.play();                
            break;
        
        case "h":
                var kick = new Audio("sounds/hat.wav");
                kick.play();                
            break;

        case "j":
                var snare = new Audio("sounds/rim.wav");
                snare.play();                
            break;
            
        case "z":
                var crash = new Audio("sounds/tom-1.mp3");
                crash.play();                
            break;
    
        case "x":
                var crash = new Audio("sounds/tom-2.mp3");
                crash.play();                
            break;
        
        case "c":
                var crash = new Audio("sounds/tom-3.mp3");
                crash.play();                
            break;

        case "v":
                var crash = new Audio("sounds/tom-4.mp3");
                crash.play();                
            break;
        default:
            console.log("Press the correct buttons");
            break;
    };
};

function buttonAnimiation(currentkey){
    var activekey = document.querySelector("." + currentkey);
    // "pressed" is already a class that is created in the css file
    activekey.classList.add("pressed")
    

    setTimeout(function(){
        activekey.classList.remove("pressed");
    }, 30);

};