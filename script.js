// datetime
function showDate() {
	const now = new Date();
	document.getElementById('day').innerText = `${twoDigitify(now.getDate())}/${twoDigitify(now.getMonth()+1)}/${now.getFullYear()} at ${twoDigitify(now.getHours())}:${twoDigitify(now.getMinutes())}`;
	document.getElementById('day').dateTime = now.toISOString().slice(0,16) + "Z";
}
function twoDigitify(num) {
	return num.toString().length < 2 ? "0"+num : num;
}
setInterval(showDate,1);


// dice rolling
function rollDice() {
	const diceVals = [(Math.random()*6|0)+1,(Math.random()*6|0)+1]; // fancy flooring
	const diceImgs = document.querySelectorAll('.dice img');
	for (const i in diceVals) {
		diceImgs[i].src = `dice-${diceVals[i]}.svg`;
	}
	let diceTotal = 0;
	diceVals.forEach(x=>diceTotal+=x);
	document.getElementById('total').innerText = diceTotal;
	document.querySelector('.message h3').innerText = (diceTotal>=8? 'You Win' : "You didn't win")+': Try Again!';
}

document.getElementById('btn').addEventListener('click',rollDice);