"use strict";
var basic_calendar = {
    init: function() {
        $('#cal-basic').fullCalendar({
            defaultDate: '2016-06-12',
            editable: true,
            selectable: true,
            selectHelper: true,
            droppable: true,
            eventLimit: true,
            select: function(start, end, allDay) {
                var title = prompt('Event Title:');
                if (title) {
                    $('#cal-basic').fullCalendar('renderEvent',
                    {
                        title: title,
                        start: start._d,
                        end: end._d,
                        allDay: allDay
                    },
                    true
                    );
                }
                $('#cal-basic').fullCalendar('unselect');
            },
            events: [
            {
                title: 'All Day Event',
                start: '2016-06-01'
            },
            {       
                title: 'Long Event',
                start: '2016-06-07',
                end: '2016-06-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2016-06-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2016-06-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2016-06-11',
                end: '2016-06-13'
            },
            {
                title: 'Meeting',
                start: '2016-06-12T10:30:00',
                end: '2016-06-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2016-06-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2016-06-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2016-06-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2016-06-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2016-06-13T07:00:00'
            }
            ]
        }), $('#cal-basic-view').fullCalendar({
            header: {
            right: 'prev,next today',
            center: 'title',
            left: 'month,basicWeek,basicDay'
            },
            defaultDate: '2016-06-12',
            editable: true,
            droppable: true,
            eventLimit: true,
            select: function(start, end, allDay) {
                var title = prompt('Event Title:');
                if (title) {
                    $('#cal-basic-view').fullCalendar('renderEvent',
                    {
                        title: title,
                        start: start._d,
                        end: end._d,
                        allDay: allDay
                    },
                    true
                    );
                }
                $('#cal-basic-view').fullCalendar('unselect');
            },
            events: [
            {
                title: 'All Day Event',
                start: '2016-06-01'
            },
            {
                title: 'Long Event',
                start: '2016-06-07',
                end: '2016-06-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2016-06-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2016-06-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2016-06-11',
                end: '2016-06-13'
            },
            {
                title: 'Meeting',
                start: '2016-06-12T10:30:00',
                end: '2016-06-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2016-06-12T12:00:00'
            },  
            {
                title: 'Meeting',
                start: '2016-06-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2016-06-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2016-06-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2016-06-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2016-06-28'
            }
            ]
        }), $('#cal-agenda-view').fullCalendar({
            header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
            },
            defaultDate: '2016-06-12',
            defaultView: 'agendaWeek',
            editable: true,
            selectable: true,
            selectHelper: true,
            droppable: true,
            eventLimit: true,
            select: function(start, end, allDay) {
                var title = prompt('Event Title:');
                if (title) {
                    $('#cal-agenda-view').fullCalendar('renderEvent',
                    {
                        title: title,
                        start: start._d,
                        end: end._d,
                        allDay: allDay
                    },
                    true 
                    );
                }
                $('#cal-agenda-view').fullCalendar('unselect');
            },
            events: [
            {
                title: 'All Day Event',
                start: '2016-06-01'
            },
            {
                title: 'Long Event',
                start: '2016-06-07',
                end: '2016-06-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2016-06-09T16:00:00'
            },  
            {
                id: 999,
                title: 'Repeating Event',
                start: '2016-06-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2016-06-11',
                end: '2016-06-13'
            },
            {
                title: 'Meeting',
                start: '2016-06-12T10:30:00',
                end: '2016-06-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2016-06-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2016-06-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2016-06-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2016-06-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2016-06-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2016-06-28'
            }
            ]
        }), $('#cal-bg-events').fullCalendar({
            header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
            },
            defaultDate: '2018-02-03',
            businessHours: true, 
            editable: true,
            selectable: true,
            selectHelper: true,
            droppable: true,
            eventLimit: true, 
            select: function(start, end, allDay) {
                var title = prompt('Event Title:');
                if (title) {
                    $('#cal-bg-events').fullCalendar('renderEvent',
                    {
                        title: title,
                        start: start._d,
                        end: end._d,
                        allDay: allDay
                    },
                    true
                    );
                }
                $('#cal-bg-events').fullCalendar('unselect');
            },
            events: [
            {
                title: 'Business Lunch',
                start: '2018-02-03T16:00:00',
                constraint: 'businessHours'
            },
            {
                title: 'Meeting',
                start: '2018-02-13T11:00:00',
                constraint: 'availableForMeeting', 
                color: '#ba895d'
            },
            {
                title: 'Conference',
                start: '2018-02-18',
                end: '2016-06-20'
            },
            {
                title: 'Party',
                start: '2018-02-28T20:00:00'
            },
            {
                id: 'availableForMeeting',
                start: '2018-02-11T10:00:00',
                end: '2016-02-11T16:00:00',
                rendering: 'background'
            },
            {
                id: 'availableForMeeting',
                start: '2018-02-13T10:00:00',
                end: '2018-02-13T16:00:00',
                rendering: 'background'
            },
            {
                start: '2018-02-24',
                end: '2018-02-28',
                overlap: false,
                rendering: 'background',
                color: '#ba895d'
            },
            {
                start: '2018-02-06',
                end: '2018-02-08',
                overlap: false,
                rendering: 'background',
                color: '#ba895d'
            }   
            ]
        }), $('#cal-event-colors').fullCalendar({
            header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
            },
            defaultDate: '2016-06-12',
            businessHours: true,
            editable: true,
            selectable: true,
            selectHelper: true,
            droppable: true,
            eventLimit: true,
            select: function(start, end, allDay) {
                var title = prompt('Event Title:');
                if (title) {
                    $('#cal-event-colors').fullCalendar('renderEvent',
                    {
                        title: title,
                        start: start._d,
                        end: end._d,
                        allDay: allDay
                    },
                    true
                    );
                }
                $('#cal-event-colors').fullCalendar('unselect');
            },
            events: [
            {
                title: 'All Day Event',
                start: '2016-06-01',
                color: '#24695c'
            },
            {
                title: 'Long Event',
                start: '2016-06-07',
                end: '2016-06-10',
                color: '#ba895d'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2016-06-09T16:00:00',
                color: '#ba895d'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2016-06-16T16:00:00',
                color: '#FF5370'
            },
            {
                title: 'Conference',
                start: '2016-06-11',
                end: '2016-06-13',
                color: '#ba895d'
            },
            {
                title: 'Meeting',
                start: '2016-06-12T10:30:00',
                end: '2016-06-12T12:30:00',
                color: '#ba895d'
            },
            {
                title: 'Lunch',
                start: '2016-06-12T12:00:00',
                color: '#ba895d'
            },
            {
                title: 'Meeting',
                start: '2016-06-12T14:30:00',
                color: '#ba895d'
            },
            {
                title: 'Happy Hour',
                start: '2016-06-12T17:30:00',
                color: '#ba895d'
            },
            {
                title: 'Dinner',
                start: '2016-06-12T20:00:00',
                color: '#ba895d'
            },
            {
                title: 'Birthday Party',
                start: '2016-06-13T07:00:00',
                color: '#ba895d'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2016-06-28',
                color: '#22af47'
            }
            ]
        }), $('#external-events .fc-event').each(function() {
                $(this).css({'backgroundColor': $(this).data('color'), 'borderColor': $(this).data('color')});
                $(this).data('event', {
                    title: $.trim($(this).text()), 
                    color: $(this).data('color'),
                    stick: true 
                });
                $(this).draggable({
                    zIndex: 999,
                    revert: true,      
                    revertDuration: 0  
                });
        }), $('#fc-external-drag').fullCalendar({
            header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
            },
            editable: true,
            defaultDate: '2018-06-12',
            selectable: true,
            selectHelper: true,
            droppable: true,
            eventLimit: true,
            select: function(start, end, allDay) {
                var title = prompt('Event Title:');
                if (title) {
                    $('#fc-external-drag').fullCalendar('renderEvent',
                    {
                        title: title,
                        start: start._d,
                        end: end._d,
                        allDay: allDay
                    },
                    true 
                    );
                }
                $('#fc-external-drag').fullCalendar('unselect');
            },
            events: [
            {
                title: 'All Day Event',
                start: '2018-06-01',
                color: '#24695c'
            },
            {
                title: 'Long Event',
                start: '2018-06-07',
                end: '2018-06-10',
                color: '#22af47'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2018-06-09T16:00:00',
                color: '#22af47'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2018-06-16T16:00:00',
                color: '#ff9f40'
            },
            {
                title: 'Conference',
                start: '2018-06-11',
                end: '2018-06-13',
                color: '#FF5370'
            },
            {
                title: 'Meeting',
                start: '2018-06-12T10:30:00',
                end: '2018-06-12T12:30:00',
                color: '#FF5370'
            },
            {
                title: 'Lunch',
                start: '2018-06-12T12:00:00',
                color: '#FF5370'
            },
            {
                title: 'Meeting',
                start: '2018-06-12T14:30:00',
                color: '#FF5370'
            },
            {
                title: 'Happy Hour',
                start: '2018-06-12T17:30:00',
                color: '#FF5370'
            },
            {
                title: 'Dinner',
                start: '2018-06-12T20:00:00',
                color: '#FF5370'
            },
            {
                title: 'Birthday Party',
                start: '2018-06-13T07:00:00',
                color: '#FF5370'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2018-06-28',
                color: '#ba895d'
            }
            ],
            drop: function() {
                if ($('#drop-remove').is(':checked')) {
                    $(this).remove();
                }
            }   
        }), $('#external-events .fc-event').each(function() {
                $(this).css({'backgroundColor': $(this).data('color'), 'borderColor': $(this).data('color')});
                $(this).data('event', {
                    title: $.trim($(this).text()),
                    color: $(this).data('color'),
                    stick: true
                });
                $(this).draggable({
                    zIndex: 999,
                    revert: true, 
                    revertDuration: 0 
                });
        }), $('#fc-external-drag').fullCalendar({
            header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
            },
            editable: true,
            defaultDate: '2018-06-12',
            selectable: true,
            selectHelper: true,
            droppable: true,
            eventLimit: true,
            select: function(start, end, allDay) {
                var title = prompt('Event Title:');
                if (title) {
                    $('#fc-external-drag').fullCalendar('renderEvent',
                    {
                        title: title,
                        start: start._d,
                        end: end._d,
                        allDay: allDay
                    },
                    true
                    );
                }
                $('#fc-external-drag').fullCalendar('unselect');
            },
            events: [
            {
                title: 'All Day Event',
                start: '2018-06-01',
                color: '#24695c'
            },
            {
                title: 'Long Event',
                start: '2018-06-07',
                end: '2018-06-10',
                color: '#22af47'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2018-06-09T16:00:00',
                color: '#22af47'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2018-06-16T16:00:00',
                color: '#ff9f40'
            },
            {
                title: 'Conference',
                start: '2018-06-11',
                end: '2018-06-13',
                color: '#FF5370'
            },
            {
                title: 'Meeting',
                start: '2018-06-12T10:30:00',
                end: '2018-06-12T12:30:00',
                color: '#FF5370'
            },
            {
                title: 'Lunch',
                start: '2018-06-12T12:00:00',
                color: '#FF5370'
            },
            {
                title: 'Meeting',
                start: '2018-06-12T14:30:00',
                color: '#FF5370'
            },
            {
                title: 'Happy Hour',
                start: '2018-06-12T17:30:00',
                color: '#FF5370'
            },
            {
                title: 'Dinner',
                start: '2018-06-12T20:00:00',
                color: '#FF5370'
            },
            {
                title: 'Birthday Party',
                start: '2018-06-13T07:00:00',
                color: '#FF5370'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2018-06-28',
                color: '#ba895d'
            }
            ],
            drop: function() {
                if ($('#drop-remove').is(':checked')) {
                    $(this).remove();
                }
            }
        });
    }
};
(function($) {
    "use strict";
    basic_calendar.init()
})(jQuery);