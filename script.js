var userselect=document.querySelectorAll("img");
var user_score=0;
var computer_score=0;
var computer_wins;
var user_wins;
var clicked;
var selectedchoices;
userselect.forEach(function(val){
    val.addEventListener("click",function(){
        clicked=this.getAttribute("id");
        computer_choice();
        result();
    })
})

function computer_choice(){
    var choices=["rock","paper","scissor"];
   var comchoices= Math.floor(Math.random()*3);
  selectedchoices =choices[comchoices];
}

function result(){
    if(clicked===selectedchoices) {
        document.querySelector("p").innerText="Draw"
    }
    else if(clicked==="paper"){
        if(selectedchoices==="rock"){
            document.querySelector("p").innerText="you wins!computer lose";
            user_wins=true;
            user_counter();
        }
        else{
            document.querySelector("p").innerText="computer wins!you lose";
            computer_wins=true;
           comp_counter();
        }
    }
    else if(clicked==="rock"){
        if(selectedchoices==="paper"){
             document.querySelector("p").innerText="computer wins!you lose";
             computer_wins=true;
            comp_counter();

        }
        else{
            document.querySelector("p").innerText="you wins!computer lose";
            user_wins=true;
           user_counter();
        }
    }
    else{
        if(selectedchoices==="rock"){
             document.querySelector("p").innerText="computer wins!you lose";
             computer_wins=true;
            comp_counter();
             
        }
        else{
             document.querySelector("p").innerText="you wins!computer lose";
             user_wins=true;
             user_counter();
        }
    }
}
function comp_counter(){
if(computer_wins){
    computer_score+=1;
    document.querySelector(".computer h2").textContent=`${computer_score}`;
}
}
function user_counter(){
    if(user_wins){
    user_score+=1;
    document.querySelector(".user h2").textContent=`${user_score}`;
}
}

function reset(){
    document.querySelector(".reset button").addEventListener("click",function(){
        user_score=0;
        document.querySelector(".user h2").textContent=`${user_score}`;
    computer_score=0;
      document.querySelector(".computer h2").textContent=`${computer_score}`;

      document.querySelector(".buttons p").innerText="paly your move"
    })
    
}

reset();