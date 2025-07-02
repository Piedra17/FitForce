document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar');
    const eventListEl = document.getElementById('event-list');

    const calendar = new FullCalendar.Calendar(calendarEl, {
        locale: 'es', //Activar español
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth'
        },
        events: [
            { title: 'Capacitación para todos', date: '2025-07-01' },
            { title: 'Pecho', date: '2025-07-03' },
            { title: 'Fuerza', date: '2025-07-10' },
            { title: 'Spinning', date: '2025-07-15' },
            { title: 'Zumba', date: '2025-07-15' },
            { title: 'Pecho', date: '2025-08-17' },
            { title: 'Spinning', date: '2025-08-15' }
        ],
        dateClick: function (info) {
            const clickedDate = info.dateStr;

            const dayEvents = calendar.getEvents().filter(event => {
                const eventDate = event.start.toISOString().split('T')[0];
                return eventDate === clickedDate;
            });

            if (dayEvents.length > 0) {
                let content = `<strong>Eventos para el ${clickedDate}:</strong><ul>`;
                dayEvents.forEach(ev => {
                    content += `<li>• ${ev.title}</li>`;
                });
                content += `</ul>`;
                eventListEl.innerHTML = content;
            } else {
                eventListEl.innerHTML = `<em>No hay eventos para el ${clickedDate}.</em>`;
            }
        }
    });

    calendar.render();
});
