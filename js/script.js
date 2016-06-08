var counterClick = 0;

function clickButton(btn) {
	counterClick++;
	if(counterClick % 2==0){
		btn.innerHTML = "X";
	} else {
		btn.innerHTML = "O";
	}
}

function resetGame(btn) {
	counterClick = 0;
	// Why doesn't it need a return?
}