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

for(let i = 0; i < calcNumBtns.length; i++) {
	calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
}
// for(let i = 0; 1 < calcNumBtns.length; i++) {
// 	calcOperatorBtns[i].addEventListener('click', performOperation, false);
// }
