$(document).ready(onReady);
// the above states hey jquery when the document is ready run the on ready function

function onReady(){
    console.log('jQuery is good to go!')

    $('.row').click(function(){
        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let indentification = $('#ID').val();
        let title = $('#title').val();
        let annualSalary = Number($('#annualSalary').val());
        let newRow = "<tr><td>" + firstName + "</td><td>" + lastName + "</td><td>" + indentification + "</td><td>" + title + "</td><td class='emAnSalary'>" + annualSalary + "</td><td><input type='button' id='removeBtn' value='Delete'></td></tr>";
        $('table tbody').append(newRow);
        $('#firstName').val('');
        $('#lastName').val('');
        $('#ID').val('');
        $('#title').val('');
        $('#annualSalary').val('');
        let monthlyCap = 0
        $('.emAnSalary').each(function(){ monthlyCap+=Math.round(parseInt($(this).text())/12)});
        $('#monthlyCap').text(monthlyCap);
        if(monthlyCap < 20000){
            $('#monthlyCap').css("background-color", "chartreuse")}
            else if(monthlyCap > 20000){
                $('#monthlyCap').css("background-color", "red")};
    });
    // This function happens when the button with a class of 'row' is clicked. The function creates variables equal to the values of
    // the different input fields and turns them into a new table row with each variable being its own cell/data. It then adds the new 
    // row onto the table and resets the input field values. Afterwards it targets each item with a class of 'emAnSalary' and passes them 
    // into a function that converts them into a number, divides the value by 12, rounds it to the nearest whole number, and then adds it
    // onto the monthlyCap variable. The output for the display of Monthly Salary Costs is then updated to the result of the function.
    // A final check on the value turns the number either green or red depending on if the value is over or under budget.

    $('table').on('click', '#removeBtn', rmvRow);
    // creating a function to remove rows when the delete button is pressed within the row
}
// The above function runs when the document is ready to go

// function adjustSalary(){
    // monthlyCap-=Number($(this).$('.emAnSalary')/12);
    // $('#monthlyCap').text(monthlyCap);
// }

   function rmvRow(){
        $(this).closest('tr').remove();
        let monthlyCap = 0;
        $('.emAnSalary').each(function(){ monthlyCap+=Math.round(parseInt($(this).text())/12)});
        $('#monthlyCap').text(monthlyCap);
        if(monthlyCap < 20000){
            $('#monthlyCap').css("background-color", "chartreuse")}
            else if(monthlyCap > 20000){
                $('#monthlyCap').css("background-color", "red")};
    }
    // this function targets the closest row to the button (which is the row that contains the button), and removes it. The function then updates
    // the value of monthlyCap using the same method as above without the removed row. The output for the display of Monthly Salary Costs is then
    // updated to the result of the function. A final check on the value turns the number either green or red depending on if the value is over or under budget.

