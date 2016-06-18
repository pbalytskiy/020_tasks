var x = 'X';
var o = 'O';
var nextSymbol = x;
var gameField = init();

function clickButton(btn) {
	var currentSymbol = btn.innerHTML;
	if (currentSymbol !== x && currentSymbol !== o) {
		currentSymbol = nextSymbol;
		nextSymbol = (currentSymbol === x) ? o : x;
	}
	btn.innerHTML = currentSymbol;
	var currentSymbolWin = isCurrentSymbolWin(currentSymbol);
	if (currentSymbolWin) {
		alert('Win: ' + currentSymbol);
	}
}

function init() {
	var gameField = [];
	var gameFieldHtml = document.getElementById('gameField');
	var	linesHtml = gameFieldHtml.querySelectorAll('.line');
	for (var i = 0; i < linesHtml.length; i++) {
		var line = linesHtml[i];
		var buttonsHtml = line.getElementsByTagName('button');
		gameField.push(buttonsHtml);
	}
	console.log(gameField);
	return gameField;
}

function isCurrentSymbolWin(symbol) {
	// console.log(symbol);
	for (var r = 0; r < gameField.length; r++) {
		var row	= gameField[r];
		var res = 0;
		for (var c = 0; c < row.length; c++) {
			var btn = row[c];
			res	+= btn.innerHTML === symbol;
		}
		if (res == row.length) {
			return true;
		}
	}

	for (var c = 0; c < gameField.length; c++) {
		var res = 0;
		for (var r = 0; r < gameField.length; r++) {
			var	row = gameField[r];
			// console.log('r=' + r + '; c=' + c);
			var btn = row[c];
			res	+= btn.innerHTML === symbol;
		}
		if (res == row.length) {
			return true;
		}
	}

	var	res	= 0;
	for (var r = 0, c = gameField.length - 1; r < gameField.length; r++, c--) {
		var btn = gameField[r][c];
		res	+= btn.innerHTML === symbol;
	}
	if (res == row.length) {
		return true;
	}

	var	res	= 0;
	for (var r = 0, c = 0; r < gameField.length; r++, c++) {
		var btn = gameField[r][c];
		res	+= btn.innerHTML === symbol;
	}
	if (res == row.length) {
		return true;
	}

	return false;
}