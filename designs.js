    // declaring a boolean that will be used when keeping the mouse button pressed
    var isMouseDown;

    $("body").mousedown(function() {
        isMouseDown = true;
    });

    $("body").mouseup(function() {
        isMouseDown = false;
    });

    // button to clear the colors on the canvas
    $("#clear_canvas").click(function() {
        $("td").css("backgroundColor", "");
    });

    // get user inputs to build the grid
    $("#sizePicker").submit(function(event) {
        var gridHeight = $("#input_height").val();
        var gridWidth = $("#input_width").val();
        $("#input").next().text();
        // prevent grid from refreshing upon submission
        event.preventDefault();
        // when size is submitted by the user, build actual grid
        makeGrid();

        function makeGrid() {
            // clear any previous grids
            $("#pixel_canvas").find("tr", "td").remove();
            // build actual grid HTML elements
            var row = 0;
            while (row = row < gridWidth) {
                $("#pixel_canvas").append("<tr></tr>");
                row = row + 1;
                for (var column = 0; column < gridHeight; column++) {
                    $("tr").last().append("<td></td>");
                }
            }

            // as long as the mouse is pressed, color table cells as if it was a real paintbrush
            $("td").mouseover(function() {
                if (isMouseDown)
                    $(this).css("backgroundColor", $("#colorPicker").val());
                // keep original mouse cursor pointer shape when painting
                $("#pixel_canvas").css("cursor", "default");

                // even a single mouse click should color a cell
                $("td").click(function() {
                    $(this).css("backgroundColor", $("#colorPicker").val());
                });
            });
        };
    });