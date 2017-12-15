//who is playing
var person1 = 'O' 
var person2 = 'X'
var player1Turn = true;


var changePlayer = function() {
 if(player1Turn === true){
    player1Turn = false;

} else {
    player1Turn = true;
}


}

var startGame = function(event) {
	if (!event.target.textContent) {
	if(player1Turn === true) {
		event.target.textContent = person2
		//event.target.classList.add(stopRepeat) 
	} else {
		event.target.textContent = person1
       
	}
	changePlayer();
}
checkWin(person1)
checkWin(person2)

    }


var boxList = document.querySelectorAll('.box')
  	for(var i = 0; i < boxList.length; i++){
  	boxList[i].addEventListener('click', startGame)

}



function checkWin(player){ 
	if(boxList[0].textContent === player &&
       boxList[1].textContent === player &&
	  boxList[2].textContent === player
	  ) { alert("WINNER" + player)}
	 else if (
	    boxList[3].textContent === player &&
	    boxList[4].textContent === player &&
	    boxList[5].textContent === player
	   ) { alert("WINNER " + player)}
	    else if (
	   boxList[6].textContent === player &&
	   boxList[7].textContent === player &&
	   boxList[8].textContent === player
	  ) { alert("WINNER" + player)}

	 }



var resetGame = function(event){
	for(var i = 0; i < boxList.length; i++){
		boxList[i].textContent = ""
	}

}



var resetButton = document.querySelector('.button')
resetButton.addEventListener("click", resetGame)
        







































// var checkWinner = function(){

//   	if(person 1 ===    )


// }


	// var resetButton= function(event) {



    // var resetButton = document.querySelector('.button')

    //  resetButton.addEventListener("click", function(){
    //             alert("Reset the game");
    //         });


