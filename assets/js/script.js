time();

//Gets the item in local storage and sets the corresponding text area to its value, this could be improved on
$('.row').children('textarea').eq(0).val(localStorage.getItem('9-textarea'));
$('.row').children('textarea').eq(1).val(localStorage.getItem('10-textarea'));
$('.row').children('textarea').eq(2).val(localStorage.getItem('11-textarea'));
$('.row').children('textarea').eq(3).val(localStorage.getItem('12-textarea'));
$('.row').children('textarea').eq(4).val(localStorage.getItem('13-textarea'));
$('.row').children('textarea').eq(5).val(localStorage.getItem('14-textarea'));
$('.row').children('textarea').eq(6).val(localStorage.getItem('15-textarea'));
$('.row').children('textarea').eq(7).val(localStorage.getItem('16-textarea'));
$('.row').children('textarea').eq(8).val(localStorage.getItem('17-textarea'));


function time(){
    //Gets the overall time for the header and current time for the color-coded timeblocks
    var overallTime = moment().format("dddd, MMMM Do YYYY");
    var currentTime = moment().hour();

    //Prints the overall time to the currentDay id
    $("#currentDay").text(overallTime);


    //Goes through each row class and gets the id for the children ie: the div with the hours in it and returns that to a variable
    $('.row').each(function () {
        var idTime = $(this).children().attr('id');
        var idTextArea = $(this).children('textarea');

        //Runs some conditional checks comparing current time to the id value (corresponding to the 24 hour clock) and will change the class based on whats needed
        if (idTime < currentTime){
            idTextArea.addClass("past");
        }
        else if (idTime > currentTime){
            idTextArea.addClass("future");
        }
        else{
            idTextArea.addClass("present");
        }
    });
}

//Function to save the text area value to local storage
function saveToStorage(event){
    //Gets the id of the textarea to be used as a key
    var textAreaId = $(this).children('textarea').attr('id');
    //If the event target (.row containers) children has the target of button
    if (event.target.tagName == 'BUTTON'){
        //Set the textarea value into local storage
        localStorage.setItem(textAreaId, $(this).children('textarea').val());    
    }    
}

//Runs everytime there is a click in the row element but only responds to click on the button
var rowEl = $('.row');
rowEl.on('click', saveToStorage);