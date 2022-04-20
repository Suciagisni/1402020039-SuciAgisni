$(document).ready(function(){

    $("#notlp").change(function(){
        if($("#notlp").val () > 0){
            $("#SelectPulsa").prop("disabled" , false);
        }
    });

    $("#SelectPulsa").change(function(){
        ;
       $("#btnAwal").hide();
       $("#buttonPaket").hide();
       $("#buttonPulsa").show();
       $("#buttonPulsa").prop("disabled",false);
    });

    $("#buttonPulsa").click(function(){
        
        var masukanPulsa = document.getElementById("SelectPulsa").value;
        var pulsa = Number (masukanPulsa);
        var pulsaPrice;

        var  notlp = $("#notlp").val();
        var isiPulsa = confirm("pembelian Pulsa sebesar " + pulsa + ".000 ke nomor " + notlp);

        if(isiPulsa){

            if(pulsa < 10) {

                pulsaPrice = pulsa + 3;

            } else if (pulsa >= 10) {
                pulsaPrice = pulsa + 2;

            }

            alert( "Total harga pulsa Rp."+pulsaPrice + ".000,- ke nomor " + notlp + " sedang di proses. Terima Kasih :)");


        }
    });

    $("#buttonPaket").click(function(){
        console.log("masuk button paket");
        var masukanPaket = $('#SelectPaket option:selected').text()
        var isiPaket = document.getElementById("SelectPaket").value;
        
        var isiMasukanPaket = Number (isiPaket);

        var  notlp = $("#notlp").val();
        var isianPaket = confirm("pembelian paket sebesar " + masukanPaket + " ke nomor " + notlp);

        if(isianPaket){

            if(isiMasukanPaket== 30.500){

                console.log("masuk sini 30.500")
            }

            console.log("masuk conboxpaket");
            alert( "Total harga paket data Rp." + isiPaket + ",- ke nomor " + notlp + " sedang di proses. Terima Kasih :)");
        } 
        return false;

    });

    $("#btnPulsa").click(function(){
        $("#SelectPulsa").show();
        $("#SelectPaket").hide();

    });

    $("#btnPaket").click(function(){

        $("#SelectPulsa").hide();
        $("#SelectPaket").show();

        $("#notlp").change(function(){
            if($("#notlp").val () > 0){
                $("#SelectPaket").prop("disabled" , false);
            }
        });

        $("#SelectPaket").change(function(){
            ;
           $("#btnAwal").hide();
           $("#buttonPulsa").hide();
           $("#buttonPaket").show();
        //    $("#buttonPaket").prop("disabled",false);
        });

    });
   
});
