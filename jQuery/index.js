
$("input").on("keypress", function(event){
    let press = event.key;
    if(press === "Enter"){   
    let InputText = $("input").val();
    
    $("h1").text(InputText);
    }

    setTimeout(function(){
        $("h1").text("Page");
    }, 10000);

} )
