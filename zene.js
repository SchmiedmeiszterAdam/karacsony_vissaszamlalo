const zenek = []
let hossz;
let szamlalo = 0
var idozit
var audio = new Audio()
$(document).ready(function () {
  $.ajax({
    url: "zenek",
    success: function (data) {
      $(data).find("a:contains(.mp3)").each(function () {
        var fajl = $(this).attr("href");
        zenek.push(fajl)
      });
      keveres(zenek)
      mehet()
    }
  });
  $('body').keyup(function (e) {
    switch (e.which) {
      case 32:
        szamlalo = 0
        leallit()
        mehet()
        break;

      case 37:
        if (szamlalo > 0) {
          leallit()
          szamlalo--;
          clearTimeout(idozit)
          mehet()
        }
        break;

      case 38:
        if (audio.volume < 1) {
          audio.volume += 0.05
        }
        break;

      case 39:
        if (szamlalo < zenek.length - 1) {
          leallit()
          szamlalo++;
          clearTimeout(idozit)
          mehet()
        }
        break;

      case 40:
        if (audio.volume > 0.1) {
          audio.volume -= 0.05
        }
        break;
    }
  });
  function leallit() {
    audio.pause();
    audio.currentTime = 0;
  }
  function mehet() {
    audio = new Audio(zenek[szamlalo])
    audio.addEventListener("loadedmetadata", function (_event) {
      hossz = audio.duration;
      idozit = setTimeout(function () { szamlalo++; mehet() }, (hossz * 1000))
    });
    var playPromise = audio.play()
  }
});

function keveres(tomb) {
  var currentIndex = tomb.length, randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [tomb[currentIndex], tomb[randomIndex]] = [
      tomb[randomIndex], tomb[currentIndex]];
  }
  return tomb;
}