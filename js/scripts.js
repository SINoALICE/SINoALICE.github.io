function updateStorage(key, value, save) {
  if (save) {
    localStorage.setItem(key, value);
  }
  else {
    localStorage.removeItem(key);
  }
}

function readStorageValue(key) {
  return localStorage.getItem(key);
}

function readAllStorage() {
  const nbItem = localStorage.length;
  const store = [];
  let i;
  let storeKey;
  for (i = 0; i < nbItem; i += 1) {
    storeKey = localStorage.key(i);
    store.push({
      "key": storeKey,
      "value": readStorageValue(storeKey)
    });
  }
  return store;
}

function updatePage() {
  //check local storage
  const store = readAllStorage();
  //restore the selected class
  $.each(store, function (index, elem) {
    $("#" + elem.key).addClass("selected");
  });
}

function selectPage() {
  //adds selected class to every icon
  $(".flair:not(.disabled)").addClass("selected");

  var className = document.getElementsByClassName('selected');
  var idStore = new Array();

  //loops every ID and stores key into array
  for (var i = 0; i < className.length; i++) {
    idStore.push({ "key": className[i].id, "value": className[i].className });
  }

  //add IDs from array to local storage
  for (var j = 0; j < idStore.length; j++) {
    updateStorage(idStore[j]['key'], null, true);
  }
}

function countEverything() {
  countWeapons();
  countJobs();
  countNightmares();
  countArmor();
}

function countWeapons() {
  var amount = $("#weapons .selected").length;
  var total = $("#weapons .flair").length;

  $('#counter1').html("<span class='cl'>Weapons Unlocked - </span>" + amount + "/" + (total));
}

function countJobs() {
  var amount = $("#jobs .selected").length;
  var total = $("#jobs .flair").length;

  $('#counter2').html("<span class='cl'>Jobs Unlocked - </span>" + amount + "/" + (total));
}

function countNightmares() {
  var amount = $("#nightmares .selected").length;
  var total = $("#nightmares .flair").length;

  $('#counter3').html("<span class='cl'>Nightmares Owned - </span>" + amount + "/" + (total));
}

function countArmor() {
  var amount = $("#armor .selected").length;
  var total = $("#armor .flair").length;

  $('#counter4').html("<span class='cl'>Armor Owned - </span>" + amount + "/" + (total));
}

function enableSelect() {
  $(".container2 img").mousedown(function (e) {
    const $obj = $(this);

    $obj.toggleClass("selected");

    //creates object if selected class is present
    const save = $obj.hasClass("selected");

    //update the key
    updateStorage($obj.attr("id"), null, save);

    countEverything();
  });
}

function enablePageFunctions() {
  //restore previous state
  updatePage();

  //legend counter
  countEverything();

  //main function for selecting icons
  enableSelect();
}

jQuery(document).ready(function ($) {
  enablePageFunctions();
});
