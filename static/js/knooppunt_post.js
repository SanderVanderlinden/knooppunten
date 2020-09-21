$(document).ready(initialise);

function initialise() {
    popover();
    showRoute();
}

function popover() {
    $('[data-toggle="popover"]').popover();
}

$('[data-toggle="popover"]').click(function () {

	setTimeout(function () {
		$('.popover').fadeOut('slow');
	}, 3000);

});

function showRoute() {
    var start = document.getElementById("checkStart");
    var end = document.getElementById("checkEnd");
    var reverse = document.getElementById("checkReverse");

    var link_van_naar = document.getElementById("link_van_naar");
    var link_van_naar_mijn_locatie = document.getElementById("link_van_naar_mijn_locatie");
    var link_van_naar_kies_bestemming = document.getElementById("link_van_naar_kies_bestemming");
    var link_van_naar_mijn_locatie_kies_bestemming = document.getElementById("link_van_naar_mijn_locatie_kies_bestemming");
    var link_naar_van = document.getElementById("link_naar_van");
    var link_naar_van_mijn_locatie = document.getElementById("link_naar_van_mijn_locatie");
    var link_naar_van_kies_bestemming = document.getElementById("link_naar_van_kies_bestemming");
    var link_naar_van_mijn_locatie_kies_bestemming = document.getElementById("link_naar_van_mijn_locatie_kies_bestemming");

    link_van_naar.style.display = "none";
    link_van_naar_mijn_locatie.style.display = "none";
    link_van_naar_kies_bestemming.style.display = "none";
    link_van_naar_mijn_locatie_kies_bestemming.style.display = "none";
    link_naar_van.style.display = "none";
    link_naar_van_mijn_locatie.style.display = "none";
    link_naar_van_kies_bestemming.style.display = "none";
    link_naar_van_mijn_locatie_kies_bestemming.style.display = "none";

    if (!start.checked  && !end.checked && !reverse.checked){
        link_van_naar.style.display = "block";
        $(copy-route).text = $(link_van_naar).attr('href');
    }
    else if (start.checked  && !end.checked && !reverse.checked){
        link_van_naar_mijn_locatie.style.display = "block";
        $(copy-route).text = $(link_van_naar).attr('href');
    }
    else if (!start.checked  && end.checked && !reverse.checked){
        link_van_naar_kies_bestemming.style.display = "block";
        $(copy-route).text = $(link_van_naar).attr('href');
    }
    else if (start.checked  && end.checked && !reverse.checked){
        link_van_naar_mijn_locatie_kies_bestemming.style.display = "block";
        $(copy-route).text = $(link_van_naar).attr('href');
    }
    else if (!start.checked  && !end.checked && reverse.checked){
        link_naar_van.style.display = "block";
        $(copy-route).text = $(link_van_naar).attr('href');
    }
    else if (start.checked  && !end.checked && reverse.checked){
        link_naar_van_mijn_locatie.style.display = "block";
        $(copy-route).text = $(link_van_naar).attr('href');
    }
    else if (!start.checked  && end.checked && reverse.checked){
        link_naar_van_kies_bestemming.style.display = "block";
        $(copy-route).text = $(link_van_naar).attr('href');
    }
    else if (start.checked  && end.checked && reverse.checked){
        link_naar_van_mijn_locatie_kies_bestemming.style.display = "block";
        $(copy-route).text = $(link_naar_van_mijn_locatie_kies_bestemming).attr('href');
    }
}

function myCopyFunction() {
    var copyText = document.getElementById("copy-to-clipboard");
    copyText.style.display = "block";
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    copyText.style.display = "none";
}

function myCopyFunctionAll() {
    var copyText = document.getElementById("copy-to-clipboard");
    copyText.style.display = "block";
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    copyText.style.display = "none";
}
