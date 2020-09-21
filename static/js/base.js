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