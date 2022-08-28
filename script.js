function getInfo(array, header){
	let TRs = [,];
	let TDs = [];
	for(let i=0; i<array.length; i++){

		for (let j = 0; j < array[i].length; j++) {
			TDs[j] = `<td>${array[i][j]}</td>`;

		}

		TRs.push(`<tr>${TDs.join('')}</tr>`);

	} 
	 document.write(`<table border="1"><caption>${header} info</caption>${TRs.join('')}</table>`);

}

const animals = [
	['🐭','mouse','Jerry'],
	['🐹','hamster','Biscuit'],
	['🐰','rabbit','Bugs'],
	['🦊','fox','Mrs. Fox'],
	['🐻','bear','Paddington']
];

const food = [
	['🍎','apple',10],
	['🍐','pear',12],
	['🍊','tangerine',15],
	['🍋','lemon',5],
	['🍌','banana',7]
];



getInfo(food, 'Food');