$('doucment').ready(function () {





    $('#input-box').keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {

            $('.for-animation').css("visibility", "visible");
            $('.for-animation').css("opacity", "1");


        }
        //Stop the event from propogation to other handlers
        //If this line will be removed, then keypress event handler attached 
        //at document level will also be triggered
        event.stopPropagation();
    });



});