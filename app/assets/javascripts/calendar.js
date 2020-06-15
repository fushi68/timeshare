$(function() {
  
  $('#calendar').fullCalendar({
    events: '/events.json', 
    header: {
      left: 'prev,next today',
      center: 'month,agendaWeek,agendaDay',
      right: 'title'
    },
    buttonText: {
      prev: "<",
      next: ">"
    },
    timezone: 'UTC',
    navLinks: true,
    selectable: true,
    selectHelper: true,
    dayClick: function(start, end, jsEvent, view) {
      const year = moment(start).year();
      const month = moment(start).month()+1; //1月が0のため+1する
      const day = moment(start).date();

    },

    eventClick : function(event) {
      var id = event.id
      var show_url = "/events/"+id
      location.href = show_url;
  },
    
    
  });
  
});