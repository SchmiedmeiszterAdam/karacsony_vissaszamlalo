const zenek = []
let hossz;
let szamlalo = 0
var audio
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
  $('body').keyup(function(e){
    szamlalo = 0
    keveres(zenek)
    if(e.keyCode == 32){
      audio.pause();
      audio.currentTime = 0;
      mehet()
    }
 });

  function mehet() {
    audio = new Audio(zenek[szamlalo])
    audio.addEventListener("loadedmetadata", function(_event) {
      hossz = audio.duration;
      setTimeout(mehet,(hossz * 1000))
    });
    var playPromise = audio.play()
    szamlalo++
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