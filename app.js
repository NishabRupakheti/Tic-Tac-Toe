
//Variables of the element we want to access 
const boxes = document.querySelectorAll('.box');
const reset_btn = document.getElementById('reset_btn')
const messagebox = document.getElementById('msg-Cont');
const winnerSpan = document.getElementById('winner');


// Variable that keeps track of the turns 
let turnO = true;

//Variable that stores the win patterns
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnO){
            box.innerText = "O"
            turnO = false
            
        }
        else{
            box.innerText = "X"
            turnO = true
        }
        box.disabled = true
        checkWinner();
    })
})


// Adding the eventlistener to the reset button 
reset_btn.addEventListener('click', ()=>{
    boxes.forEach(box => {
        box.innerText = ""
        box.disabled = false
    })
    messagebox.style.display = 'none'

})

//Checking the winner with a function 


const checkWinner = ()=>{
    for (let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        if (pos1val!="" &&  pos2val!="" && pos3val!="" ){
            if (pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
                disableBoxes();
            }
        }
    }
}


showWinner = (winner)=>{
    messagebox.style.display = 'block'
    winnerSpan.innerText = winner
}


disableBoxes = ()=>{
    boxes.forEach((box) => box.disabled = true)
}
