function majProfil(pseudo){
    $.get("http://localhost/site/api/getProfil.php?name="+pseudo).done( function(data){
        profil = jQuery.parseJSON(data);
        //$( "#result" ).text(profil.name );
        console.log(profil);
        console.log(profil.name);
        console.log(profil.summonerLevel);
        console.log(profil.name + " est niveau " + profil.summonerLevel)
    
        $("#pseudo").text(profil.name);
        $("#niveau").text("lvl: "+profil.summonerLevel);

    });
 }
        console.log("profil");

$(document).ready(function(){

    
    $("#input_button").click(function(){
       
        var textDeLUtilisateur =$("#input_text").val();

        majProfil(textDeLUtilisateur);

    });

});


   