loadPage = function () {
    //SPECIAL FLAIRS
    loadIcons = function () {
        var categories = [
            ['weapons', getWeapons(), 'Weapon/CardS', -4, 'flair'],
            ['jobs', getJobs(), 'Job/CharacterIcon', -3, 'flair'],
            ['nightmares', getNightmares(), 'Nightmare/CardS', -4, 'flair'],
            ['armor', getArmor(), 'Armor/CardS', -4, 'flair'],
            ['characters', getCharacters(), 'CharacterImage/', -3, 'characters']
        ];

        //creates HTML for everything
        for (var cat in categories) {
            var contain = document.getElementById(categories[cat][0]);

            for (var x in categories[cat][1]) {
                if (categories[cat][1][x] === -1) {
                    var icon_hr = document.createElement('hr');

                    contain.appendChild(icon_hr);
                }
                else {
                    var icon = document.createElement('img');
                    icon.setAttribute('class', categories[cat][4]);
                    icon.setAttribute('id', categories[cat][0][0] + categories[cat][1][x]);
                    icon.setAttribute('src', 'images/' + categories[cat][2] + (('0000' + categories[cat][1][x]).substr(categories[cat][3])) + '.png');

                    contain.appendChild(icon);
                }
            }
        }
    }
    loadIcons();
}

//waits for DOM to load before executing function
document.addEventListener('DOMContentLoaded', loadPage, false);