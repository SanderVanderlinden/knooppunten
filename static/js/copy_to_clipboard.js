function myCopyFunction() {
    var copyText = document.getElementById("copy-to-clipboard");
    copyText.style.display = "block";
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    copyText.style.display = "none";
}

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});

$('[data-toggle="popover"]').click(function () {

	setTimeout(function () {
		$('.popover').fadeOut('slow');
	}, 3000);

});

function dontClickFunction() {
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "pink";
    var dontClickButton = document.getElementById("dont-click-button");
    dontClickButton.innerHTML = "...";
}

// Add the following code if you want the name of the file appear on select
$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});
