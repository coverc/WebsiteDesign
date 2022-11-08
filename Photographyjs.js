$(document).ready(function () {
    var searchTerm;
    $("#btnSearch").click(function() {
       searchTerm="";
       if ($("#search").val() == "") {
           alert("Enter a search term!");
       }
       else {
           searchTerm = $("#search").val();
           var url = "https://api.flickr.com/services/feeds/photos_public.gne?" +
               "format=json&jsoncallback=?&tags=" + searchTerm + "&tagmode=all";

           $.getJSON(url, function (data) {
               var html = "";
               $.each(data.items, function (i, item) {
                   html += "<h2>" + item.title + "</h2>";
                   html += "<img src=" + item.media.m + ">";
               });
               $("#flickrpho").html(html);
           });
       }
       });

    $("#home").focus();

    $('#reqbutton').on("click", function() {
        window.location.href = "https://webpages.uncc.edu/coverc14/Project/ContactUs.html";
    });
    $('#galbutton').on("click", function() {
        window.location.href = "https://webpages.uncc.edu/coverc14/Project/PhotographyPhotoGallery.html";
    });

    $('#phopho').on("mouseover", function() {
        $("#phopho").css({"background-color":"white"});
        $("#promo").html("<p>Thank you for exploring my website! Use Promocode SECRET on any of my online stores for 10% off!</p>");
    })

});