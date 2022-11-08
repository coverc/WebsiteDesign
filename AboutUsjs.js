$(document).ready(function() {
        $("#home").focus();
        $.getJSON("AboutUsjson.json", function(data) {
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("#jsontext").append (
                        "<p>" + value.Paragraph1 + "</p>" +
                        "<p>" + value.Paragraph2 + "</p>" +
                        "<p>" + value.Paragraph3 + "</p>"
                    );
                });
            });
        });

        $("#slider").bxSlider({
            auto: true,
            autoStart: true,
            speed: 5000,
            minSlides: 1,
            maxSlides: 1,
            slideWidth: 500,
            slideMargin: 20,
            moveSlides: 1,
            randomStart: true,
    });
});