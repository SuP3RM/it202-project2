// Main Javascript for map
let map;
// storing markers in array for use later
let markersArray = [];

let chicago = {
  lat: 41.8781,
  lng: -87.6298
};

const APIurl = "https://data.cityofchicago.org/resource/cdmx-wzbz.json?$limit=50";

// Initialize and add the map
function initMap() {
  let map = new google.maps.Map(document.getElementById('map'), {
    center: chicago,
    zoom: 11
  });

  $.get(APIurl, function(response) {
    let data = response;
    createMarkers(map, data);
  });

  function createMarkers(map, data) {
    // let url = "http://maps.google.com/mapfiles/ms/icons/";
    // url += color + "-dot.png";

    $.each(data, function(i, v) {
      let marker;
      let location = {
        lat: parseFloat(v.latitude),
        lng: parseFloat(v.longitude)
      }

      if (v.status === "Open") {
        marker = new google.maps.Marker({
          map: map,
          position: location,
          icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
          }
        })
      } else {
        marker = new google.maps.Marker({
          map: map,
          position: location,
          icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
          }
        })
      }

      let infowindow = new google.maps.InfoWindow({
        content: 'Ward: ' + v.ward + '<br/>' + 'Status: ' + v.status +
          '<br/>Address: ' + v.street_address + '<br/>SRN: ' + v.service_request_number + '<br/>Graffiti location: ' + v.where_is_the_graffiti_located_ +
          '<br/>Type of Surface: ' + v.what_type_of_surface_is_the_graffiti_on_ + '<br/>Date Created: ' + v.creation_date + '<br/>Completion Date: ' + v.completion_date
      });

      marker.addListener('click', function(results) {
        infowindow.open(map, marker);
      });

      let textBox = document.getElementById("input-search-bar").innerHTML;
      console.log(textBox);
      if (textBox.innerHTML > 0) {
        marker.setMap(null);

      }

      // $("#searchBtn").on("click", function() {
      //   // clear map of markers
      //   marker.setMap(null);
      //
      //
      //   let searchString = $("#input-search-bar").val();
      //
      //   let url = APIurl + "&ward=" + searchString;
      //
      //   let results = $("#results").val();
      //
      //
      //   $.get(url, function(response) {
      //
      //     let data = response;
      //
      //     $.each(data, function(i, v) {
            //
            // clone card
            // let clone = $(".template").clone();
            // update values
            // clone.find(".card-title").text(`Ward: ${v.ward}`);
            //
            // clone.find(".card-title").addClass(v.results);
            //
            // clone.find(".card-title").attr("data-results", v.results);
            //
            // clone.find(".card-subtitle").text(`Status: ${v.status}`);
            // clone.find(".card-location").text(`Address: ${v.street_address}`);
            // clone.find(".card-srn").text(`SRN: ${v.service_request_number}`);
            // clone.find(".card-where-located").text(`Where graffiti is located: ${v.where_is_the_graffiti_located_}`);
            // clone.find(".card-type-surface").text(`Type of surface: ${v.what_type_of_surface_is_the_graffiti_on_}`);
            // clone.find(".card-date-created").text(`Request created: ${v.creation_date}`);
            // clone.find(".card-compl-date").text(`Completion date: ${v.completion_date}`);

            // insert into DOM
            // $("#cards").append(clone);
            // clone.show();
            // marker.setMap(location);
      //
      //     });
      //
      //   });
      //
      // });

      // $("#searchBtn").on("click", function() {
      //
      //   // clear the display
      //   marker.setMap(null);
      //
      //   let searchString = $("#input-search-bar").val();
      //   let url = APIurl + "&ward=" + searchString;
      //
      //   let results = $("#results").val();
      //   $.get(url, function(response) {
      //
      //       $.each(data, function(i, v) {
      //       $("#map").append(v.location)
      //       marker.addListener('click', function(location) {
      //         infowindow.open(map, marker);
      //       });
      //
      //     })
      //   })
      // });

    });
  }
};
