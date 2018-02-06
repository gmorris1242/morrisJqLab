$(document).ready(function() {

  var table = $(".table");
  var formDiv = $("#formDiv");
  var exit = $(".exit");
  var form = $("form");
  var formNum = $("#tableNum");
  var targeted;
  var tableNum;
  var hoverInfo = $(".hoverInfo");
  var formName = $("#name");
  var formPartySize = $("#partySize");


  // on button click
  table.on("click", function() {
    if ($(this).hasClass("available")) {
      formDiv.slideDown().css("display", "flex");
      $("input").val("");
      targeted = $(this);
      tableNum = $(this).text();
      formNum.text(tableNum);
    };
  });

  //on form submit
  form.submit(function(e) {
    e.preventDefault();
    if (formName.val() == "" || formPartySize.val() == "") {
      alert("Please fill out form");
    } else {
      formDiv.slideUp();
      targeted.addClass("reserved");
      targeted.removeClass("available");
      $(".hoverInfo .name1", targeted).text("Name: " + formName.val());
      $(".hoverInfo .size1", targeted).text("Size of party: " + formPartySize.val());
      if (targeted.is(".reserved")) {
        targeted.hover(function() {
          $(".hoverInfo", this).fadeIn();
        }, function() {
          $(".hoverInfo", this).fadeOut();
        });
      };
    };
  });

  exit.on("click", function() {
    formDiv.slideUp();
    targeted.removeClass("reserved");
    targeted.addClass("available");
  });

}); //ready function
