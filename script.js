const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const container = document.querySelector(".container");
const rockImg = './assets/images/rock.png';
const scissorsImg = './assets/images/scissors.png';
const paperImg = './assets/images/paper.png';
const enemyImg = document.getElementById("enemy-img");
const isWinner = document.querySelector(".isWinner");

rock.addEventListener("click", ()=> 
    {
        container.classList.toggle("active");
        sessionStorage.setItem("item", "rock");
        document.querySelector(".after-chose").classList.toggle("active");
        document.querySelector(".chossen-title").textContent = sessionStorage.getItem("item");
        document.getElementById("chossen-img").src = rockImg;
        const randomNumber = Math.floor(Math.random() * 3);
        if (randomNumber == 0) {
            document.querySelector(".enemy-title").textContent = "rock";
            enemyImg.src = rockImg;
            isWinner.textContent = "draw";
            
        } else if (randomNumber == 1) {
            document.querySelector(".enemy-title").textContent = "paper";
            enemyImg.src = paperImg;
            isWinner.textContent = "lose";
        } else if (randomNumber == 2) {
            document.querySelector(".enemy-title").textContent = "scissor";
            enemyImg.src = scissorsImg;
            isWinner.textContent = "win";
        }
        
});

paper.addEventListener("click", ()=> 
    {
        container.classList.toggle("active");
        sessionStorage.setItem("item", "paper");
        document.querySelector(".after-chose").classList.toggle("active");
        document.querySelector(".chossen-title").textContent = sessionStorage.getItem("item");
        document.getElementById("chossen-img").src = paperImg;
        const randomNumber = Math.floor(Math.random() * 3);
        if (randomNumber == 0) {
            document.querySelector(".enemy-title").textContent = "rock";
            enemyImg.src = rockImg;
            isWinner.textContent = "win";
        } else if (randomNumber == 1) {
            document.querySelector(".enemy-title").textContent = "paper";
            enemyImg.src = paperImg;
            isWinner.textContent = "draw";
        } else if (randomNumber == 2) {
            document.querySelector(".enemy-title").textContent = "scissor";
            isWinner.textContent = "lose";
            enemyImg.src = scissorsImg;
        }
    });

scissors.addEventListener("click", ()=> 
    {
        container.classList.toggle("active");
        sessionStorage.setItem("item", "scissors");
        document.querySelector(".after-chose").classList.toggle("active");
        document.querySelector(".chossen-title").textContent = sessionStorage.getItem("item");
        document.getElementById("chossen-img").src = scissorsImg;
        const randomNumber = Math.floor(Math.random() * 3);
        if (randomNumber == 0) {
            document.querySelector(".enemy-title").textContent = "rock";
            enemyImg.src = rockImg;
            isWinner.textContent = "lose";
        } else if (randomNumber == 1) {
            document.querySelector(".enemy-title").textContent = "paper";
            enemyImg.src = paperImg;
            isWinner.textContent = "win";
        } else if (randomNumber == 2) {
            document.querySelector(".enemy-title").textContent = "scissor";
            enemyImg.src = scissorsImg;
            isWinner.textContent = "draw";
        }
    });

function reloadPage() {
    location.reload();
};