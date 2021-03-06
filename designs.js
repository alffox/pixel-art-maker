    // declaring a boolean that will be used when keeping the mouse button pressed
    let isMouseDown;

    $('body').mousedown(function() {
        isMouseDown = true;
    });

    $('body').mouseup(function() {
        isMouseDown = false;
    });

    // button to clear the colors on the canvas
    $('#clear_canvas').click(function() {
        $('td').css('backgroundColor', '');
    });

    // get user inputs to build the grid
    const gridHeight = $('#input_height');
    const gridWidth = $('#input_width');

    //  build actual grid upon submission
    $('#sizePicker').submit(function(event) {
        let height = gridHeight.val();
        let widht = gridWidth.val();
        $('#input').next().text();
        // prevent grid from refreshing upon submission
        event.preventDefault();
        // when size is submitted by the user, build actual grid
        makeGrid();

        function makeGrid() {
            //clear any previous grids
            $('#pixel_canvas').empty();

            // build actual grid HTML elements
            for (let row = 0; row < widht; row++) {
                $('#pixel_canvas').append('<tr></tr>');
                for (let column = 0; column < height; column++) {
                    $('tr').last().append('<td></td>');
                }
            }

            // as long as the mouse is pressed, color table cells ( as a real paintbrush)
            $('td').mouseover(function() {
                if (isMouseDown) {
                    $(this).css('backgroundColor', $('#colorPicker').val());

                    // keep original mouse cursor pointer shape when painting
                    $('#pixel_canvas').css('cursor', 'default');
                }

                // even a single mouse click should color a cell
                $('td').click(function() {
                    $(this).css('backgroundColor', $('#colorPicker').val());
                });
            });
        }
    });