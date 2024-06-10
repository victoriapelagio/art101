Author: Victoria Pelagio

(document).ready(function(){

    //Sorts the characters of a string in alphabetical order.
    function sortString(inputString) {

        //We have to covert our string to an array and back again to sort it 
        return inputString.split('').sort().join('');
    }

    //click listener for button
    $("submit").click(function(){

        //get value of input field
        $("#submit").click(function() {

            //get value of input field
            const userName = $("#username").val();

            //now let's sort it
            const userNameSorted = $("#username").val();

            //apend a new div to our ourput div
            $(#output).html(div class="text"><p></p>) + userNameSorted + </p></
            div>');

        });
    });
    


    