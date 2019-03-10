$(document).ready(function() {

  var endpoint = "https://data.cityofchicago.org/resource/cdmx-wzbz.json?$limit=10";


  $("#search").on("click", function() {
    // clear the display
    $("#cards").empty();
    var searchString = $("#search-input-bar").val();
    console.log(searchString);
    var url = endpoint + "&ward=" + searchString;
    console.log(url);

    $.get(url, function(response) {
      console.log(response);

      $("#cards").append("<h2>Your query returned " + response.length + " records.</h2>");


      var data = response;

      $.each(data, function(i, v) {
        //console.log(i,v);

        // clone card
        var clone = $(".template").clone();
        // update values
        clone.find(".card-title").text(v.ward);



        clone.find(".card-title").addClass(v.results);

        clone.find(".card-title").attr("data-results", v.results);

        clone.find(".card-subtitle").text(v.status);

        if (v.zip_code) {
          //clone.find(".card-text").text(v.violations);
        } else {
          clone.find(".card-text").text("")
        }




        clone.removeClass("template")


        // insert into DOM
        $("#screen2").append(clone);

      });


    })

  });





});
