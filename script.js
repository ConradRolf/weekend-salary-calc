$(document).ready(onReady);

let monthlyCap = 0
function onReady(){
    console.log('jQuery is good to go!')

    $('.row').click(function(){
        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let indentification = $('#ID').val();
        let title = $('#title').val();
        let annualSalary = $('#annualSalary').val();
        let newRow = "<tr><td><input type='button' id='removeBtn' value='Delete'></td><td>" + firstName + "</td><td>" + lastName + "</td><td>" + indentification + "</td><td>" + title + "</td><td>" + annualSalary + "</td></tr>";
        $('table tbody').append(newRow);
        $('#firstName').val('');
        $('#lastName').val('');
        $('#ID').val('');
        $('#title').val('');
        $('#annualSalary').val('');
        monthlyCap += annualSalary
    });

    $('table').on('click', '#removeBtn', rmvRow);
}

function rmvRow(){
    $(this).closest('tr').remove();
}