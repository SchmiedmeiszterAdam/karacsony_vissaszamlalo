$(function () {
    idoMeghatarozas()
    setInterval(idoMeghatarozas, 1000)
    function idoMeghatarozas() {
        $("#masodperc").removeClass('pulzalas')
        setTimeout(function(){$("#masodperc").addClass('pulzalas')},10)
        const datum = new Date()
        const egyNap = 1000 * 60 * 60 * 24;
        let ev = datum.getFullYear()
        if (datum.getMonth() == 11 && datum.getDate() > 25) {
            ev = ev + 1;
        }
        const karacsony = new Date(ev, 11, 24)
        let kul = karacsony - datum
        var kari = Math.floor(kul / egyNap)
        
        let ora = 23 - datum.getHours()
        let perc = 59 - datum.getMinutes()
        
        let masdoperc = 59 - datum.getSeconds()
        if(masdoperc === 0){
            $("#perc").addClass('pulzalas')
            setTimeout(function(){$("#perc").removeClass('pulzalas')},1000)
        }
        if(perc === 0){
            $("#ora").addClass('pulzalas')
            setTimeout(function(){$("#ora").removeClass('pulzalas')},1000)
        }
        if(ora === 0){
            $("#nap").addClass('pulzalas')
            setTimeout(function(){$("#nap").removeClass('pulzalas')},1000)
        }
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