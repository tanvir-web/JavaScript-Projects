'use strict';

const cardNum = document.querySelector('.app-card');

const converter = (number) => {
	const getNum = number.innerHTML;
	const newNum = getNum.slice(-4);
	console.log(newNum);
	return(newNum.padStart(getNum.length, '*'));
};

const data = converter(cardNum);
cardNum.innerHTML = data;