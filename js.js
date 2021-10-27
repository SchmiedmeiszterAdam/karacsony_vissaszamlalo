$(function () {
    setInterval(idoMeghatarozas, 100)
    function idoMeghatarozas() {
        const datum = new Date()
        const egyNap = 1000 * 60 * 60 * 24;
        let ev = datum.getFullYear()
        if (datum.getMonth() == 11 && datum.getDate() > 25) {
            ev = ev + 1;
        }
        const karacsony = new Date(ev, 11, 25)
        let kul = karacsony - datum
        var kari = Math.floor(kul / egyNap)

        let ora = 23 - datum.getHours()
        let perc = 60 - datum.getMinutes()
        

        let masdoperc = 59 - datum.getSeconds()
        if (masdoperc < 10) {
            masdoperc = '0' + masdoperc
        }

        idoKiiras()
        function idoKiiras() {
            $("#nap").html(kari)
            $("#ora").html(ora)
            $("#perc").html(perc)
            $("#masodperc").html(masdoperc)
        }
    }

});