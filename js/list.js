$(document).ready(function() {
  // let url = "https://data.cityofchicago.org/resource/xzkq-xp2w.json?$select=department,count(department)&$group=department&$order=department";
  let url = "https://data.cityofchicago.org/resource/cdmx-wzbz.json?$where=ward > 0"
  $.get(url, function(data) {
    console.log(data);

    $.each(data, function(i, v) {
      let clone = $("#template").clone();
      clone.text(v.ward);
      let span = $("<span>")
        .addClass("badge badge-primary badge-pill")
        .text(v.status);
      clone.append(span);
      clone.attr("id", "");
      clone.attr("data-department", encodeURIComponent(v.ward));

      $(".list-group").append(clone);

    });
  });


  // $("body").on("click", ".list-group-item", function() {
  //   $.get("https://data.cityofchicago.org/resource/xzkq-xp2w.json?department=" + $(this).attr("data-department"), function(data) {
  //     console.log(data);
  //     // <clear whatever container holds the cards>
  //     // <loop through response data, clone simple card and append to container>
  //   });
  //
  // });



});
