$(document).ready(function(){

    if (screen.width >= 1024){
        $("#fullpage").fullpage({
            navigation:true,
            navigationPosition:'right',  
            anchors:['secondPage']
        });
    }
});