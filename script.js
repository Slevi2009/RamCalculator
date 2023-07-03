document.getElementById("ramForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var version = document.getElementById("version").value;
  var playerCount = parseInt(document.getElementById("playerCount").value);
  var pluginCount = parseInt(document.getElementById("pluginCount").value);

  var baseRAM = (version === "1.17+") ? 3 : 2;
  var playerRAM = Math.ceil(playerCount / 5);
  var pluginRAM = Math.ceil(pluginCount / 10);
  var totalRAM = baseRAM + playerRAM + pluginRAM;

  var resultElement = document.getElementById("result");
  resultElement.innerHTML = "Required RAM: " + totalRAM + "GB";
  resultElement.style.display = "block";
});
