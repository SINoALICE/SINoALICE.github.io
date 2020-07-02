loadPage = function() {

	var flair_class = '';

	//SPECIAL FLAIRS
	loadIcons = function() {
		var contain1 = document.getElementById('weapons');
		var contain2 = document.getElementById('jobs');
		var contain3 = document.getElementById('nightmares');
		var contain4 = document.getElementById('armor');

		var weapons = getWeapons();
		var jobs = getJobs();
		var nightmares = getNightmares();
		var armor = getArmor();

		//creates HTML for weapons
		for (var x in weapons) {
			var icon_weapon = document.createElement('img');
			icon_weapon.setAttribute('class', 'flair');
			icon_weapon.setAttribute('id', 'w' + weapons[x]);
			icon_weapon.setAttribute('src', 'images/Weapon/CardS' + ( ('0000' + weapons[x]).substr(-4) ) + '.png');

			contain1.appendChild(icon_weapon);
		}

		//creates HTML for jobs
		for (var x in jobs) {
			var icon_job = document.createElement('img');
			icon_job .setAttribute('class', 'flair');
			icon_job .setAttribute('id', 'j' + jobs[x]);
			icon_job .setAttribute('src', 'images/Job/CharacterIcon' + ( ('0000' + jobs[x]).substr(-3) ) + '.png');

			contain2.appendChild(icon_job);
		}

		//creates HTML for nightmares
		for (var x in nightmares) {
			var icon_nightmare = document.createElement('img');
			icon_nightmare.setAttribute('class', 'flair');
			icon_nightmare.setAttribute('id', 'n' + nightmares[x]);
			icon_nightmare.setAttribute('src', 'images/Nightmare/CardS' + ( ('0000' + nightmares[x]).substr(-4) ) + '.png');

			contain3.appendChild(icon_nightmare);
		}

		//creates HTML for armors
		for (var x in armor) {
			var icon_armor = document.createElement('img');
			icon_armor.setAttribute('class', 'flair');
			icon_armor.setAttribute('id', 'a' + armor[x]);
			icon_armor.setAttribute('src', 'images/Armor/CardS' + ( ('0000' + armor[x]).substr(-4) ) + '.png');

			contain4.appendChild(icon_armor);
		}
	}
	loadIcons();
}

//waits for DOM to load before executing function
document.addEventListener('DOMContentLoaded', loadPage, false);
