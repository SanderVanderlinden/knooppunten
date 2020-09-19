function myCopyFunction() {
    var copyText = document.getElementById("copy-to-clipboard");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Gekopieerd naar het klembord!";
}

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