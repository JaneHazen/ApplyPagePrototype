const navButtonContainer = document.getElementById("navButtonContainer");
const buttons = navButtonContainer.getElementsByTagName("li");
const submitQuizButton = document.getElementById("submitCheckBox");
const getStartedButton = document.getElementById("getStarted");

for(let i = 0; i < buttons.length; i++){
    let button = buttons[i];
    button.addEventListener("click", function(){
        let current = document.getElementsByClassName("active");
        current[0].className = "";
        button.className += "active";
    })
}

submitQuizButton.addEventListener("click", function(){
    alert("Thanks for your feedback!");
});

getStartedButton.addEventListener("click", function(){
    alert("Coming soon!");
});