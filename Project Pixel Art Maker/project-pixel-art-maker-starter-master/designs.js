// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$(document).ready(function() {
   $('#sizePicker').submit(function makeGrid(grid) {
      $('table tr').remove();
    let rows = $('#inputHeight').val();
    let cols = $('#inputWeight').val();
    for (let i = 1; i <= rows; i++) {
      $('table').append('<tr></tr>');
      for (let j = 1; j <= cols; j++) {
        $('tr:last').append('<td></td>');
        $('td').attr("class", 'cells');
      }
    }
    grid.preventDefault();

    $('.cells').click(function(event) {
      let paint = $('#colorPicker').val();
      $(event.target).css('background-color', paint);
    });
    $('#erase').click(function eraseTable() {
      $("td").removeAttr("style");
    });
  });

});
