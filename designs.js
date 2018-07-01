// Select color input
// Select size input
var height, width, colour;
$('#sizePicker').submit(function(event){
    event.preventDefault();
    height= $('#inputHeight').val();
    width= $('#inputWeight').val();
    makeGrid(height, width);
});
// When size is submitted by the user, call makeGrid()

function makeGrid(x, y) {
$('tr').remove();

for(var i= 1; i< x; i++){
    $('#pixelCanvas').append('<tr id=tableRow'+ i +'></tr>');
    for(var j= 1; j< y; j++){
        $('#tableRow' + i).append('<td></td>');
    }
}
    $('td').click(function changeBackGr(){
        colour= $('#colorPicker').val();
        if($(this).attr('style')){
            $(this).removeAttr('style');
        }else{
            $(this).attr('style', 'background-color:' + colour);
        }
    });

// Your code goes here!

}
