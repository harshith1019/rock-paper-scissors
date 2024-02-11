let myScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let verdict = document.getElementById("msg");

function generateChoice(){
    const options = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random()*3);
    return options[idx];
}

const playGame = (userChoice) => {
    const compChoice = generateChoice();
    if(userChoice===compChoice){
        verdict.innerText="Game was Draw";
        verdict.style.backgroundColor = "orange";
    }
    else{
        if(userChoice==="rock"&&compChoice==="paper" || userChoice==="paper"&&compChoice==="scissors" || userChoice==="scissors"&&compChoice==="rock"){
            verdict.innerText = compChoice + " beats " + userChoice + ", Computer wins.";
            verdict.style.backgroundColor = "red";
            compScore++;
            document.getElementById("comp-score").innerText = compScore;
        }
        else{
            verdict.innerText = userChoice + " beats " + compChoice + ", You win.";
            verdict.style.backgroundColor = "green";
            myScore++;
            document.getElementById("my-score").innerText = myScore;
        }
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        console.log("choice is: ", choiceId);
        playGame(choiceId);
    });
});