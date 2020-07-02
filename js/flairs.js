loadPage = function() {

	var flair_class = '';

	//SPECIAL FLAIRS
	loadIcons = function() {
		var contain1 = document.getElementById('weapons');
		var contain2 = document.getElementById('jobs');
		var contain3 = document.getElementById('nightmares');
		var contain4 = document.getElementById('armor');

		var weapons = [
			1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,52,55,58,61,64,67,69,
			71,73,75,77,79,81,83,85,87,89,91,93,95,97,99,101,103,105,107,109,111,113,115,117,119,121,123,
			125,127,129,131,133,135,137,139,141,143,145,147,149,151,153,156,159,162,165,168,171,173,175,
			177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,
			223,225,227,229,231,233,235,238,240,242,244,246,248,250,252,254,256,259,262,265,267,269,272,
			274,277,279,281,283,285,287,289,291,293,295,297,299,301,303,305,326,327,328,329,330,331,332,
			333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,
			356,357,358,359,360,581,582,585,586,587,588,589,590,
		]

		var jobs = [
			1,2,3,5,6,14,19,20,21,23,24,25,
		]

		var nightmares = [
			448,449,450,451,452,453,454,455,456,457,458,461,462,463,464,465,466,467,468,469,470,471,472,
			473,474,475,583,584,
		]

		var armor = [
			401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,
			424,425,
		]

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
