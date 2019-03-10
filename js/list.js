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
        clone.find(".card-title").text(`Ward: ${v.ward}`);

        clone.find(".card-title").addClass(v.results);

        clone.find(".card-title").attr("data-results", v.results);

        clone.find(".card-subtitle").text(`Status: ${v.status}`);
        clone.find(".card-location").text(`Address: ${v.street_address}`);
        clone.find(".card-srn").text(`SRN: ${v.service_request_number}`);
        clone.find(".card-where-located").text(`Where graffiti is located: ${v.where_is_the_graffiti_located_}`);
        clone.find(".card-type-surface").text(`Type of surface: ${v.what_type_of_surface_is_the_graffiti_on_}`);
        clone.find(".card-date-created").text(`Request created: ${v.creation_date}`);
        clone.find(".card-compl-date").text(`Completion date: ${v.completion_date}`);

        // insert into DOM
        $("#cards").append(clone);
        clone.show();

      });

    })

  });

});
