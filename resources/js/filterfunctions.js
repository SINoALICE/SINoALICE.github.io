var typecrystalclicked = false;
var typehammerclicked = false;
var typeinstrumentclicked = false;
var typerangedclicked = false;
var typespearclicked = false;
var typestaffclicked = false;
var typeswordclicked = false;
var typetomeclicked = false;

var typeheadclicked = false;
var typebodyclicked = false;
var typefeetclicked = false;
var typehandsclicked = false;

var elementfireclicked = false;
var elementwindclicked = false;
var elementwaterclicked = false;

var rankaclicked = false;
var ranksclicked = false;
var rankssclicked = false;
var ranklclicked = false;

var character2bclicked = false;
var character9sclicked = false;
var charactera2clicked = false;
var characteraccordclicked = false;
var characteraliceclicked = false;
var characterboymikhailclicked = false;
var characterbriarroseclicked = false;
var charactercinderellaclicked = false;
var characterdorothyclicked = false;
var characteremilclicked = false;
var charactergretelclicked = false;
var characterkaguyaclicked = false;
var characterlittlemermaidclicked = false;
var characternutcrackerrclicked = false;
var characteroneclicked = false;
var characterpinocchioclicked = false;
var characterredridinghoodclicked = false;
var charactersnowwhiteclicked = false;
var characterzeroclicked = false;

var skilldamageclicked = false;

var regionglobalclicked = false;
var jobweaponclicked = false;


// Filter Type

function filtertype(name) {
    $('#weapons').DataTable().column(3).search(name).draw();
    $('#armor').DataTable().column(3).search(name).draw();
    $('#jobs').DataTable().column(7).search(name).draw();
}

function activatetype(currenttype) {
    $("#type" + currenttype).css('background', '#4b4642');
}

function deactivatetype() {
    $("#typecrystal").css('background', '');
    $("#typehammer").css('background', '');
    $("#typeinstrument").css('background', '');
    $("#typeranged").css('background', '');
    $("#typespear").css('background', '');
    $("#typestaff").css('background', '');
    $("#typesword").css('background', '');
    $("#typetome").css('background', '');

    $("#typehead").css('background', '');
    $("#typebody").css('background', '');
    $("#typefeet").css('background', '');
    $("#typehands").css('background', '');
}

function dotypefilter(clicked, type) {
    deactivatetype();
    if (!clicked) {
        filtertype(type);
        activatetype(type);
        clicked = true;
    } else {
        filtertype("");
        clicked = false;
    }

    switch (type) {
        case "crystal": typecrystalclicked = clicked;
        case "hammer": typehammerclicked = clicked;
        case "instrument": typeinstrumentclicked = clicked;
        case "ranged": typerangedclicked = clicked;
        case "spear": typespearclicked = clicked;
        case "staff": typestaffclicked = clicked;
        case "sword": typeswordclicked = clicked;
        case "tome": typetomeclicked = clicked;

        case "head": typeheadclicked = clicked;
        case "body": typebodyclicked = clicked;
        case "feet": typefeetclicked = clicked;
        case "hands": typehandsclicked = clicked;
    }
}


// Filter Element

function filterelement(name) {
    $('#nightmares').DataTable().column(3).search(name).draw();
    $('#weapons').DataTable().column(4).search(name).draw();
}

function activateelement(currentelement) {
    $("#element" + currentelement).css('background', '#4b4642');
}

function deactivateelement() {
    $("#elementfire").css('background', '');
    $("#elementwind").css('background', '');
    $("#elementwater").css('background', '');
}

function doelementfilter(clicked, element) {
    deactivateelement();
    if (!clicked) {
        filterelement(element);
        activateelement(element);
        clicked = true;
    } else {
        filterelement("");
        clicked = false;
    }

    switch (element) {
        case "fire": elementfireclicked = clicked;
        case "wind": elementwindclicked = clicked;
        case "water": elementwaterclicked = clicked;
    }
}


//filter Rank

function filterrank(name) {
    $('#nightmares').DataTable().column(4).search(name, true, false).draw();
    $('#weapons').DataTable().column(5).search(name, true, false).draw();
    $('#armor').DataTable().column(4).search(name, true, false).draw();
}

function activaterank(currentrank) {
    $("#rank" + currentrank).css('background', '#4b4642');
}

function deactivaterank() {
    $("#rankb").css('background', '');
    $("#ranka").css('background', '');
    $("#ranks").css('background', '');
    $("#rankss").css('background', '');
    $("#rankl").css('background', '');
}

function dorankfilter(clicked, rank) {
    deactivaterank();
    if (!clicked) {
        filterrank("^" + rank + "$");
        activaterank(rank);
        clicked = true;
    } else {
        filterrank("");
        clicked = false;
    }

    switch (rank) {
        case "b": rankaclicked = clicked;
        case "a": rankaclicked = clicked;
        case "s": ranksclicked = clicked;
        case "ss": rankssclicked = clicked;
        case "l": ranklclicked = clicked;
    }
}


// Filter Skill

function filterskill(name) {
    $('#nightmares').DataTable().column(9).search(name).draw();
    $('#weapons').DataTable().column(12).search(name).draw();
    $('#armor').DataTable().column(9).search(name).draw();
}

function activateskill(currentskill) {
    $("#skill" + currentskill).css('background', 'black');
}

function deactivateskill() {
    $("#skilldamage").css('background', '');
}

function doskillfilter(clicked, skill) {
    deactivateskill();
    if (!clicked) {
        filterskill(skill);
        activateskill(skill);
        clicked = true;
    } else {
        filterskill("");
        clicked = false;
    }

    switch (skill) {
        case "damage": skilldamageclicked = clicked;
    }
}


// Filter Character

function filtercharacter(name) {
    $('#jobs').DataTable().column(3).search(name).draw();
}

function activatcharacter(currentcharacter) {
    $("#character" + currentcharacter).css('background', 'black');
}

function deactivatecharacter() {
    $("#character2b").css('background', '');
    $("#character9s").css('background', '');
    $("#charactera2").css('background', '');
    $("#characteraccord").css('background', '');
    $("#characteralice").css('background', '');
    $("#characterboymikhail").css('background', '');
    $("#characterbriarrose").css('background', '');
    $("#charactercinderella").css('background', '');
    $("#characterdorothy").css('background', '');
    $("#characteremil").css('background', '');
    $("#charactergretel").css('background', '');
    $("#characterkaguya").css('background', '');
    $("#characterlittlemermaid").css('background', '');
    $("#characternutcracker").css('background', '');
    $("#characterone").css('background', '');
    $("#characterpinocchio").css('background', '');
    $("#characterredridinghood").css('background', '');
    $("#charactersnowwhite").css('background', '');
    $("#characterzero").css('background', '');
}

function docharacterfilter(clicked, character) {
    deactivatecharacter();
    if (!clicked) {
        filtercharacter(character);
        activatcharacter(character);
        clicked = true;
    } else {
        filtercharacter("");
        clicked = false;
    }

    switch(character){
        case "2b": character2bclicked = clicked;
        case "9s": character9sclicked = clicked;
        case "a2": charactera2clicked = clicked;
        case "accord": characteraccordclicked = clicked;
        case "alice": characteraliceclicked = clicked;
        case "boymikhail": characterboymikhailclicked = clicked;
        case "briarrose": characterbriarroseclicked = clicked;
        case "cinderella": charactercinderellaclicked = clicked;
        case "dorothy": characterdorothyclicked = clicked;
        case "emil": characteremilclicked = clicked;
        case "gretel": charactergretelclicked = clicked;
        case "kaguya": characterkaguyaclicked = clicked;
        case "littlemermaid": characterlittlemermaidclicked = clicked;
        case "nutcracker": characternutcrackerclicked = clicked;
        case "one": characteroneclicked = clicked;
        case "pinocchio": characterpinocchioclicked = clicked;
        case "redridinghood": characterredridinghoodclicked = clicked;
        case "snowwhite": charactersnowwhiteclicked = clicked;
        case "zero": characterzeroclicked = clicked;
    }
}


// Filter Region

function filterregion(name) {
    $('#nightmares').DataTable().column(10).search(name).draw();
    $('#weapons').DataTable().column(13).search(name).draw();
    $('#armor').DataTable().column(10).search(name).draw();
    $('#jobs').DataTable().column(8).search(name).draw();
}

function activateregion(currentregion) {
    $("#region" + currentregion).css('background', 'black');
}

function deactivateregion() {
    $("#regionglobal").css('background', '');
}


// Filter Job Unlock

function filterjobweapon(name) {
    $('#weapons').DataTable().column(14).search(name).draw();
    $('#jobs').DataTable().column(6).search(name).draw();
}

function activatejobweapon(currentjobweapon) {
    $("#" + currentjobweapon).css('background', 'black');
}

function deactivatejobweapon() {
    $("#jobweapon").css('background', '');
}