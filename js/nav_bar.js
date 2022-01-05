 $(window).scroll(function() {
            if ($("#menu").offset().top > 56) {
                $("#menu").addClass("color-nav");
            } else {
                $("#menu").removeClass("color-nav");
            }
        });