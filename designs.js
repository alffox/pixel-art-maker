    //declaring isMouseDown boolean to use when keeping the mouse button pressed
    var isMouseDown;

    $("body").mousedown(function(){
        isMouseDown = true;
    });

    $("body").mouseup(function(){
        isMouseDown = false;
    });

    //get user inputs to build the grid
    $("#sizePicker").submit(function(event) {
        var gridHeight = $("#input_height").val();
        var gridWidth = $("#input_width").val();
        $("#input").next().text();
    //prevent grid refreshing upon submission
    event.preventDefault();
    // When size is submitted by the user, build actual grid
    makeGrid();

    function makeGrid() {
        //first, let's clear any pre-existing grid rendered on page as a result of any previous submissions
        $("#pixel_canvas").find("tr","td").remove();
        //build actual grid HTML elements
        for (var row = 0; row < gridWidth; row++) {
            $("#pixel_canvas").append("<tr></tr>");
            for (var column = 0; column < gridHeight; column++) {
                $("tr").last().append("<td></td>");
            }
        }
        //as long as the mouse is pressed, color table cells
        $("td").mouseover(function() {
            if (isMouseDown)
                var chosenColor = $("#colorPicker").val();
            $(this).css("backgroundColor", chosenColor);
        });
        $("td").click(function() {
            var chosenColor = $("#colorPicker").val();
            $(this).css("backgroundColor", chosenColor);
        });
    };
});