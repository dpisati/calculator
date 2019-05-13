var oneBtn = document.getElementById('calc1');
var twoBtn = document.getElementById('calc2');
var threeBtn = document.getElementById('calc3');
var fourBtn = document.getElementById('calc4');
var fiveBtn = document.getElementById('calc5');
var sixBtn = document.getElementById('calc6');
var sevenBtn = document.getElementById('calc7');
var eightBtn = document.getElementById('calc8');
var nineBtn = document.getElementById('calc9');
var zeroBtn = document.getElementById('calc0');

var decimalBtn = document.getElementById('calc-decimal');
var clearBtn = document.getElementById('calc-clear');
var backSpcBtn = document.getElementById('calc-bk');
var displayValElement = document.getElementById('calc-display-val');

var calcNumBtns = document.getElementsByClassName('calc-btn-num');
var calcOperatorBtns = document.getElementsByClassName('calc-btn-operator');

var displayVal = '0';
var pendingVal;
var evalStingArray = [];

var	updateDisplayVal = (clickObj) => {
	var btnText = clickObj.target.innerText;

	if (displayVal === '0') 
		displayVal = '';
		displayVal += btnText;
		displayValElement.innerText = displayVal;
}

var performOperation = (clickObj) => {
	var operator = clickObj.target.innerHTML;

	switch (operator) {
		case '+':
			pendingVal = displayVal;
			displayVal = '0';
			displayValElement.innerText = displayVal;
			evalStingArray.push(pendingVal);
			evalStingArray.push('+');
			break;
		case '-':
			pendingVal = displayVal;
			displayVal = '0';
			displayValElement.innerText = displayVal;
			evalStingArray.push(pendingVal);
			evalStingArray.push('-');
			break;
		case 'x':
			pendingVal = displayVal;
			displayVal = '0';
			displayValElement.innerText = displayVal;
			evalStingArray.push(pendingVal);
			evalStingArray.push('*');
			break;
		case '/':
			pendingVal = displayVal;
			displayVal = '0';
			displayValElement.innerText = displayVal;
			evalStingArray.push(pendingVal);
			evalStingArray.push('/');
			break;
		case '=':
			evalStingArray.push(displayVal);
			var evaluation = eval(evalStingArray.join(' '));
			displayVal = evaluation + '';
			displayValElement.innerHTML = displayVal;
			evalStingArray = [];
			break;
		default:
			break;
	}
}


for(let i = 0; i < calcNumBtns.length; i++) {
	calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
}
for(let i = 0; i < calcOperatorBtns.length; i++) {
	calcOperatorBtns[i].addEventListener('click', performOperation, false);
}

clearBtn.onclick = () => {
	displayVal = '0';
	pendingVal = undefined;
	evalStingArray = [];
	displayValElement.innerHTML = displayVal;
}

backSpcBtn.onclick = () => {
	let lengthOfDisplayVal = displayVal.length;
	displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);
	if (displayVal === '')
		displayVal = '0';
	displayValElement.innerHTML = displayVal;
}

decimalBtn.onclick = () => {
	if (!displayVal.includes('.'))
		displayVal += '.';
	displayValElement.innerHTML = displayVal;
}
