// Add the following code if you want the name of the file appear on select
$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

function dontClickFunction() {
    var dontClickDiv = document.getElementById("dont-click-div");

    if (dontClickDiv.childElementCount < 2) {
        var dontClickP = document.createElement("p");
        dontClickP.id = "dontClickP";
        var dontClickPText = document.createTextNode('Very niiice');
        dontClickP.appendChild(dontClickPText);
        dontClickDiv.appendChild(dontClickP);

        var dontClickImg = document.createElement("img");
        dontClickImg.class = "img-rounded";
        dontClickImg.id = "dontClickImg";
        dontClickImg.src = "/static/images/dontClick.jpg"
        dontClickImg.alt = "dontClick"
        dontClickImg.style.width = "100%";
        dontClickDiv.appendChild(dontClickImg);

        document.getElementsByTagName("BODY")[0].style.backgroundColor = "pink";
        var dontClickButton = document.getElementById("dont-click-button");
        dontClickButton.innerHTML = "Snel! Ga terug!";

    }
    else{
        dontClickDiv.removeChild(document.getElementById("dontClickP"));
        dontClickDiv.removeChild(document.getElementById("dontClickImg"));

        document.getElementsByTagName("BODY")[0].style.backgroundColor = "white";
        var dontClickButton = document.getElementById("dont-click-button");
        dontClickButton.innerHTML = "Hier niet klikken!";
    }

}