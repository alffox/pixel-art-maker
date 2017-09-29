// Select color input
// Select size input


/*var chosenColor = colorPicker.value;
console.log(chosenColor);*/


$("#sizePicker").submit(function(event) {
    var gridHeight = $("#input_height").val();
    var gridWidth = $("#input_width").val();
    $("#input").next().text();
    //prevent refreshing upon submission
    event.preventDefault();

    // When size is submitted by the user, call makeGrid()
    makeGrid();

    function makeGrid() {
        //first, let's clear any pre-existing grid rendered on page as a result of any previous submissions
        $("#pixel_canvas").find("tr","td").remove();
        //build actual grid
        for (var row = 0; row < gridWidth; row++) {
            $("#pixel_canvas").append("<tr></tr>");
            for (var column = 0; column < gridHeight; column++) {
                $("tr").last().append("<td></td>");
            }
        }
    }
});

/*$("#colorPicker").change(function() {
        var chosenColor = colorPicker.value;
    //console.log("the chosen color is: " + colorPicker.value);
    console.log(chosenColor);
});*/