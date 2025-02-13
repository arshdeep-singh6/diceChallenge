let rollBtn = document.getElementById("play");
let resultArea = document.querySelector(".result");

rollBtn.addEventListener("click", ()=>{
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    
    
    switchImage(dice1, "img1");
    switchImage(dice2, "img2");
    declareWinner(dice1, dice2);
});

function switchImage(dice, imgId)
{
    let img = document.getElementById(imgId);
    img.style.height= "160px";
    img.style.margin= "2rem 0";
    switch (dice) 
    {
        case 1:
            img.setAttribute("src", "./images/dice1.png");
            break;
        case 2:
            img.setAttribute("src", "./images/dice2.png");
            break;
        case 3:
            img.setAttribute("src","./images/dice3.png");
            break;
        case 4:
            img.setAttribute("src", "./images/dice4.png");
            break;
        case 5:
            img.setAttribute("src", "./images/dice5.png");
            break;
        case 6:
            img.setAttribute("src", "./images/dice6.png");
            break;
        default:
            break;
    }
    
}

function declareWinner(dice1, dice2)
{
    if(dice1 > dice2)
    {
        resultArea.textContent = "Player 1 wins....";
    }  
    else if(dice2 > dice1)
    {
        resultArea.textContent = "Player 2 wins....";  
    }
    else{
        resultArea.textContent = "Your luck is at the same level! Its a tie....";
    }
}