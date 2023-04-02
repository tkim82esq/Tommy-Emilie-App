$(document).ready(function() {
    $('#calendar-container').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultDate: new Date(),
        navLinks: true,
        editable: true,
        eventLimit: true,
        events: function(start, end, timezone, callback) {
            // Fetch events from Firebase and pass them to the callback function
        },
        eventDrop: function(event, delta, revertFunc) {
            // Update the event in Firebase after it has been moved
        },
        eventResize: function(event, delta, revertFunc) {
            // Update the event in Firebase after it has been resized
        },
        dayClick: function(date, jsEvent, view) {
            // Handle adding a new event to Firebase when a day is clicked
        },
        eventClick
