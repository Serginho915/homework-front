const sports = [
    ['🤺','fencing'],
    ['⛸','figure skating'],
    ['⛷','skier'],
    ['🏂','snowboarder'],
    ['🏌','golfing'],
    ['🚣','rowing boat'],
    ['🏊','swimming'],
    ['🤸','gymnastics'],
    ['🤾','handball']
];

const winners = [
    ['fencing','🥇','fr'],
    ['fencing','🥈','it'],
    ['fencing','🥉','us'],

    ['figure skating','🥇','ca'],
    ['figure skating','🥈','fr'],
    ['figure skating','🥉','us'],

    ['skier','🥇','no'],
    ['skier','🥈','us'],
    ['skier','🥉','fr'],

    ['snowboarder','🥇','us'],
    ['snowboarder','🥈','jp'],
    ['snowboarder','🥉','au'],

    ['golfing','🥇','gb'],
    ['golfing','🥈','se'],
    ['golfing','🥉','us'],

    ['rowing boat','🥇','us'],
    ['rowing boat','🥈','ml'],
    ['rowing boat','🥉','ro'],

    ['swimming','🥇','us'],
    ['swimming','🥈','gb'],
    ['swimming','🥉','au'],

    ['gymnastics','🥇','it'],
    ['gymnastics','🥈','fr'],
    ['gymnastics','🥉','ua'],

    ['handball','🥇','dk'],
    ['handball','🥈','ke'],
    ['handball','🥉','de'],
];

const olympic = ['🔵','⚫','🔴','🟡','🟢'];
// Європа — синій, Африка — чорний, Америка — червоний, Азія — жовтий, Австралія — зелений

const continents = [
    ['fr','Europe'],
    ['it','Europe'],
    ['us','America'],
    ['ca','America'],
    ['no','Europe'],
    ['jp','Asia'],
    ['au','Oceania'],
    ['gb','Europe'],
    ['se','Europe'],
    ['ro','Europe'],
    ['ua','Europe'],
    ['dk','Europe'],
    ['de','Europe'],
    ['ke','Africa'],
    ['ml','Africa']
];

const flags = [
    ['fr','🇫🇷'],
    ['it','🇮🇹'],
    ['us','🇺🇸'],
    ['ca','🇨🇦'],
    ['no','🇳🇴'],
    ['jp','🇯🇵'],
    ['au','🇦🇺'],
    ['gb','🇬🇧'],
    ['se','🇸🇪'],
    ['ro','🇷🇴'],
    ['ua','🇺🇦'],
    ['dk','🇩🇰'],
    ['de','🇩🇪'],
    ['ke','🇰🇪'],
    ['ml','🇲🇱']
];

function getContinentByCountry(country){
	let currCountry = continents
		.find(
			function(item){
				return item[0] === country;
			}
		);
	return currCountry[1];
}

function getCountryFlag(country){
	let currFlag = flags
	.find(
		function(item){
			return item[0] === country;
		}
	)
	return currFlag[1];
}

function getWinnerMedal(country, sport){
	let currMedal = winners
	.find(
		function(item){
			return item[2] === country && item[0] === sport;
		}
	)
	return currMedal[1];
}
console.log(getWinnerMedal(`fr` , `fencing`));

const THs = olympic
	.map(
		function(circle){
			return `<th>${circle}</th>`
		}
	)
	.join('');

const TRs = sports
	.map(
		function(sport){
			let sportIcon = sport[0];
			let sportName = sport[1];
			let Europe = [],
			Africa = [],
			America = [],
			Asia = [],
			Oceania = [];

			let currWinners = winners
					.filter(
						function(winner){
							return winner[0] === sportName;
					}
					)
					.forEach(
						function(winner){
							let winnerCountry =  winner[2] ;
							let winnerSport =  winner[0] ;
							let winnerFlag = getCountryFlag(winnerCountry);
							let winnerContinent = getContinentByCountry(winnerCountry);
							let winnerMedal = getWinnerMedal(winnerCountry, winnerSport)
							
							let rendered = `<div>${winnerFlag} – ${winnerMedal}</div>`;


							switch(winnerContinent){
								case 'Europe':
									Europe.push(rendered)
									break;
								case 'Africa':
									Africa.push(rendered)
									break;
								case 'America':
									America.push(rendered)
									break;
								case 'Asia':
									Asia.push(rendered)
									break;
								case 'Oceania':
									Oceania.push(rendered)
									break;
							}
						}
					)
			
			return `<tr>
				<td>${sportIcon}</td>
				<td>${Europe.join(' ')}</td>
				<td>${Africa.join(' ')}</td>
				<td>${America.join(' ')}</td>
				<td>${Asia.join(' ')}</td>
				<td>${Oceania.join(' ')}</td>
			</tr>`
		}
	)
	.join('');
console.log(TRs);
document.write(`
<table>
	<thead>
		<tr>
			<th></th>
			${THs}
		</tr>
	</thead>
	<tbody>
		${TRs}
	</tbody>
</table>
`)
