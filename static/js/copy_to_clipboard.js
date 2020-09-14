function myCopyFunction() {
  var copyText = document.getElementById("copy-to-clipboard");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Gekopieerd naar het klembord!";
}
