var sorting = 0;

loadPage = function () {
    //SPECIAL FLAIRS
    loadIcons = function () {
        var categories = [
            ['weapons', getWeapons(), 'Weapon/CardS', -4, 'flair'],
            ['jobs', getJobs(), 'Job/CharacterIcon', -3, 'flair'],
            ['nightmares', getNightmares(), 'Nightmare/CardS', -4, 'flair'],
            ['armor', getArmor(), 'Armor/CardS', -4, 'flair'],
            ['characters', getCharacters(sorting), 'CharacterImage/', -3, 'characters']
        ];

        //creates HTML for everything
        for (var cat in categories) {
            var contain = document.getElementById(categories[cat][0]);

            contain.innerHTML = '';

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

                    if (categories[cat][0] == 'characters') {
                        icon.addEventListener('click', function () {
                            var img = $(this);
                            var character = $('<img class="modalimage"/>');
                            character.attr({
                                src: img.attr('src'),
                                alt: img.attr('alt'),
                                title: img.attr('title')
                            });

                            var sprite = $('<img class="modalimage"/>');
                            sprite.attr({
                                src: img.attr('src').replace('CharacterImage', 'CharacterImageSmall'),
                                alt: img.attr('alt'),
                                title: img.attr('title')
                            });

                            var over = $('<div class="modalBackground"/>').text(' ').append(character).append(sprite).bind('click', function () {
                                $(this).fadeOut(300, function () {
                                    $(this).remove();
                                });
                            }).insertAfter(this).animate({
                                'opacity': 1
                            }, 300);
                        });
                    }

                    contain.appendChild(icon);
                }
            }
        }
    }
    loadIcons();
}

function toggleVisibility() {
    toggleDisplay("weaponarea");
    toggleDisplay("jobarea");
    toggleDisplay("nightmarearea");
    toggleDisplay("armorarea");
    toggleDisplay("characterarea");
}

function toggleDisplay(sourceElement){
    var x = document.getElementById(sourceElement);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function changeSorting() {
    if (sorting == 0) {
        sorting = 1;
    } else if (sorting == 1) {
        sorting = 2;
    } else if (sorting == 2) {
        sorting = 0;
    }
    
    loadPage();  
    enablePageFunctions();
}

//waits for DOM to load before executing function
document.addEventListener('DOMContentLoaded', loadPage, false);