$(document).ready(function() {

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 169) {
            $(".navcontainer").addClass(" nav-bgcolor");
        } else {
            $(".navcontainer").removeClass("nav-bgcolor");
        }
    });



});