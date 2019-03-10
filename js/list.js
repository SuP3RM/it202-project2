$(document).ready(function() {

  let endpoint = "https://data.cityofchicago.org/resource/cdmx-wzbz.json?$limit=5";

  $("#searchBtn").on("click", function() {

    let filterString = $("#filters").serialize();

    // clear the display
    $("#cards").empty();
    let searchString = $("#input-search-bar").val();
    let url = endpoint + "&ward=" + searchString;

    let results = $("#results").val();

    if (results != "") {
      url = url + "&status=" + results;
    }

    $.get(url, function(response) {

      let data = response;

      $.each(data, function(i, v) {

        // clone card
        let clone = $(".template").clone();
        // update values
        clone.find(".card-title").text(v.ward);

        clone.find(".card-title").addClass(v.results);

        clone.find(".card-title").attr("data-results", v.results);

        clone.find(".card-subtitle").text(v.status);

        // insert into DOM
        $("#cards").append(clone);
        clone.show();

      });

    })

  });

});
