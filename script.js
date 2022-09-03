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
	['fencing','gold','fr'],
	['fencing','silver','it'],
	['fencing','bronze','us'],

	['figure skating','gold','ca'],
	['figure skating','silver','ru'],
	['figure skating','bronze','us'],

	['skier','gold','no'],
	['skier','silver','ru'],
	['skier','bronze','fr'],

	['snowboarder','gold','us'],
	['snowboarder','silver','jp'],
	['snowboarder','bronze','au'],

	['golfing','gold','gb'],
	['golfing','silver','se'],
	['golfing','bronze','us'],

	['rowing boat','gold','us'],
	['rowing boat','silver','gb'],
	['rowing boat','bronze','ro'],

	['swimming','gold','us'],
	['swimming','silver','gb'],
	['swimming','bronze','au'],

	['gymnastics','gold','ru'],
	['gymnastics','silver','ru'],
	['gymnastics','bronze','ua'],

	['handball','gold','dk'],
	['handball','silver','fr'],
	['handball','bronze','de'],
];

const olympic = ['🔵','⚫','🔴','🟡','🟢'];

const medals = [
	['🥇','gold'],
	['🥈','silver'],
	['🥉','bronze'],
];

const continents = [
	['fr','Europe'],
	['it','Europe'],
	['us','The Americas'],
	['ca','The Americas'],
	['ru','Europe'],
	['no','Europe'],
	['jp','Asia'],
	['au','Oceania'],
	['gb','Europe'],
	['se','Europe'],
	['ro','Europe'],
	['ua','Europe'],
	['dk','Europe'],
	['de','Europe']
];

const flags = [
	['fr','🇫🇷'],
	['it','🇮🇹'],
	['us','🇺🇸'],
	['ca','🇨🇦'],
	['ru','🇷🇺'],
	['no','🇳🇴'],
	['jp','🇯🇵'],
	['au','🇦🇺'],
	['gb','🇬🇧'],
	['se','🇸🇪'],
	['ro','🇷🇴'],
	['ua','🇺🇦'],
	['dk','🇩🇰'],
	['de','🇩🇪']
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
						let winnerCountry = winner[2];
						let winnerContinent = getContinentByCountry(winnerCountry);
						
						switch(winnerContinent){
							case 'Europe':
								Europe.push(winner)
								break;
							case 'Africa':
								Africa.push(winner)
								break;
							case 'America':
								America.push(winner)
								break;
							case 'Asia':
								Asia.push(winner)
								break;
							case 'Oceania':
								Oceania.push(winner)
								break;
						}
					}
				)
				console.log(currWinners)
			return `<tr>
				<td>${sportIcon}</td>
				<td>${Europe.join('')}</td>
				<td>${Africa.join('')}</td>
				<td>${America.join('')}</td>
				<td>${Asia.join('')}</td>
				<td>${Oceania.join('')}</td>
			</tr>`
		}
	)
	.join('');

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
