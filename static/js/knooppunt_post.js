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

$('#checkStart').change(showRoute);
$('#checkEnd').change(showRoute);
$('#checkReverse').change(showRoute);

function showRoute() {
    var start = document.getElementById("checkStart");
    var end = document.getElementById("checkEnd");
    var reverse = document.getElementById("checkReverse");

    $("#link_van_naar").hide();
    $("#link_van_naar_mijn_locatie").hide();
    $("#link_van_naar_kies_bestemming").hide();
    $("#link_van_naar_mijn_locatie_kies_bestemming").hide();
    $("#link_naar_van").hide();
    $("#link_naar_van_mijn_locatie").hide();
    $("#link_naar_van_kies_bestemming").hide();
    $("#link_naar_van_mijn_locatie_kies_bestemming").hide();

    $("#copyRoute").show();

    if (!start.checked  && !end.checked && !reverse.checked){
        $("#link_van_naar").show();
        $("#copyRoute").val($(link_van_naar).attr('href'));
    }
    else if (start.checked  && !end.checked && !reverse.checked){
        $("#link_van_naar_mijn_locatie").show();
        $("#copyRoute").val($(link_van_naar_mijn_locatie).attr('href'));
    }
    else if (!start.checked  && end.checked && !reverse.checked){
        $("#link_van_naar_kies_bestemming").show();
        $("#copyRoute").val($(link_van_naar_kies_bestemming).attr('href'));
    }
    else if (start.checked  && end.checked && !reverse.checked){
        $("#link_van_naar_mijn_locatie_kies_bestemming").show();
        $("#copyRoute").val($(link_van_naar_mijn_locatie_kies_bestemming).attr('href'));
    }
    else if (!start.checked  && !end.checked && reverse.checked){
        $("#link_naar_van").show();
        $("#copyRoute").val($(link_naar_van).attr('href'));
    }
    else if (start.checked  && !end.checked && reverse.checked){
        $("#link_naar_van_mijn_locatie").show();
        $("#copyRoute").val($(link_naar_van_mijn_locatie).attr('href'));
    }
    else if (!start.checked  && end.checked && reverse.checked){
        $("#link_naar_van_kies_bestemming").show();
        $("#copyRoute").val($(link_naar_van_kies_bestemming).attr('href'));
    }
    else if (start.checked  && end.checked && reverse.checked){
        $("#link_naar_van_mijn_locatie_kies_bestemming").show();
        $("#copyRoute").val($(link_naar_van_mijn_locatie_kies_bestemming).attr('href'));
    }

    $("#copyRoute").hide();

}

function myCopyFunction() {
    var copyText = document.getElementById("copyRoute");
    copyText.style.display = "block";
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    copyText.style.display = "none";
}

function myCopyFunctionAll() {
    var copyText = document.getElementById("copyRoute");
    copyText.style.display = "block";

    var toCopy = "";

    toCopy += "Route:\n";
    toCopy += ($("#link_van_naar").attr('href'));
    toCopy += "\n\nRoute vanaf uw locatie:\n";
    toCopy += ($("#link_van_naar_mijn_locatie").attr('href'));
    toCopy += "\n\nRoute met te kiezen bestemming:\n";
    toCopy += ($("#link_van_naar_kies_bestemming").attr('href'));
    toCopy += "\n\nRoute vanaf uw locatie met te kiezen bestemming:\n";
    toCopy += ($("#link_van_naar_mijn_locatie_kies_bestemming").attr('href'));
    toCopy += "\n\nOmgekeerde route:\n";
    toCopy += ($("#link_naar_van").attr('href'));
    toCopy += "\n\nOmgekeerde route vanaf uw locatie:\n";
    toCopy += ($("#link_naar_van_mijn_locatie").attr('href'));
    toCopy += "\n\nOmgekeerde route met te kiezen bestemming:\n";
    toCopy += ($("#link_naar_van_kies_bestemming").attr('href'));
    toCopy += "\n\nOmgekeerde route vanaf uw locatie met te kiezen bestemming:\n";
    toCopy += ($("#link_naar_van_mijn_locatie_kies_bestemming").attr('href'));


    $("#copyRoute").val(toCopy);


    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    copyText.style.display = "none";
}
