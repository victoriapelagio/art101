//index.js- purpose and description jhere
//Author: Victoria Pelagio 
//Date: June 7th
//Using the core $.ajax() method to fetch data from Chuck Norris API
$(document).ready(function () {
    $.ajax({
        url: "https://api.chucknorris.io/jokes/random",
        type: "GET",
        dataType: "json",
        success: function (data) {
            $('output').html(data.value);
            console.log(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
            $('#output').html("An Error has occured");
        }
    });
});

//create a button listener
$("my-button").click (function(){
    //call ajax
    $.ajax(ajaxObj);
})


