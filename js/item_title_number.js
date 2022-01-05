$("#item01").click(function() {
    $("#descriptionItem01").toggle();
    $("#descriptionItem02").hide();
    $("#descriptionItem03").hide();
    $("#descriptionItem04").hide();
    $(".arrow01").toggle();
});

$("#item02").click(function() {
    $("#descriptionItem01").hide();
    $("#descriptionItem02").toggle();
    $("#descriptionItem03").hide();
    $("#descriptionItem04").hide();
    $(".arrow02").toggle();
});

$("#item03").click(function() {
    $("#descriptionItem01").hide();
    $("#descriptionItem02").hide();
    $("#descriptionItem03").toggle();
    $("#descriptionItem04").hide();
    $(".arrow02").toggle();
        });

$("#item04").click(function() {
    $("#descriptionItem01").hide();
    $("#descriptionItem02").hide();
    $("#descriptionItem03").hide();
    $("#descriptionItem04").toggle();
    $(".arrow03").toggle();
        });