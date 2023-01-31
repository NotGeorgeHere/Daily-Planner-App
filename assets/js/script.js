time();



$('.row').each(function(){
    var idText = $(this).children('textarea').attr('id');
    var test = localStorage.getItem(idText);
    if (test == idText){
        $(this).children('textarea').val(test);
    }
})



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

//TODO
function saveToStorage(event){
    var textAreaId = $(this).children('textarea').attr('id');
    if (event.target.tagName == 'BUTTON'){
        localStorage.setItem(textAreaId, $(this).children('textarea').val());    
    }    
}

var buttonEl = $('.row');
buttonEl.on('click', saveToStorage);