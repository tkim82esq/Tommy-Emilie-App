$(document).ready(function() {
    // Initialize the calendar
    $('#calendar').fullCalendar({
        events: [
            // Add your events here
        ],
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultView: 'month',
        editable: true,
        eventLimit: true // allow "more" link when too many events
    });
});

$('#todo-form').submit(function(e) {
    e.preventDefault();
    const task = $('#todo-input').val().trim();
    if (task) {
        $('#todo-items').append('<li>' + task + ' <button class="remove-task">Remove</button></li>');
        $('#todo-input').val('');
    }
});

$('#todo-items').on('click', '.remove-task', function() {
    $(this).parent().remove();
});

