
for(var i=0;i<7;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);

    function handleclick()
    {
        var buttoninnerHTML= this.innerHTML;
        makesound(buttoninnerHTML);
        buttonanimation(buttoninnerHTML);

    }



}
document.addEventListener("keydown",keyboard);

    function keyboard(event)
    {
        makesound(event.key);
        buttonanimation(event.key);
    }


function makesound(key)
{

    switch(key)
    {
        case "w":
            var tom1= new Audio('tom-1.mp3');
            tom1.play()
            break;

        case "a":
            var tom2= new Audio('tom-2.mp3');
            tom2.play()
            break;

        case "s":
            var tom3= new Audio(/tom-3.mp3');
            tom3.play()
            break;

        case "d":
            var tom4= new Audio('tom-4.mp3');
            tom4.play()
            break;   
            
        case "j":
            var snare= new Audio('snare.mp3');
            snare.play()
            break;

        case "k":
            var kick= new Audio('kick-bass.mp3');
            kick.play()
            

            break;

        case "l":
        var crash= new Audio('crash.mp3');
        crash.play()
        break;

        default:
            console.log(".");
    }
}
//adding animation to button
function buttonanimation(currentkey)
{
    var activeButton= document.querySelector("." +currentkey); 
    activeButton.classList.add("new");
    setTimeout(function() {
        activeButton.classList.remove("new");

    },200);
    
}


// alert("hello p");

// var audio=new Audio('sounds/tom-1.mp3');
// audio.play()
// this.style.color="grey";
