$(document).ready(function () {
    $("#home").focus();

    $('#reqbutton').on("click", function() {
        window.location.href = "https://webpages.uncc.edu/coverc14/Project/ContactUs.html";
    });
    $('#galbutton').on("click", function() {
        window.location.href = "https://webpages.uncc.edu/coverc14/Project/AntiquePhotoGallery.html";
    });
    $('#antipho').on("mouseover", function() {
       $("#antipho").css({"background-color":"white"});
        $("#promo").html("<p>Thank you for exploring my website! Use Promocode SECRET on any of my online stores for 10% off!</p>");
    })
});
