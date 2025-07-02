document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar');
    const eventListEl = document.getElementById('event-list');

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth'
        },
        events: [
            { title: 'Capacitación', date: '2025-07-01' },
            { title: 'Crossfit', date: '2025-07-03' },
            { title: 'Yoga', date: '2025-07-10' },
            { title: 'Spinning', date: '2025-07-15' },
            { title: 'Zumba', date: '2025-07-15' },
            { title: 'Spinning', date: '2025-08-15' }
        ],
        dateClick: function (info) {
            const clickedDate = info.dateStr;
            const events = calendar.getEvents().filter(event => event.startStr === clickedDate);

            if (events.length > 0) {
                let content = `<strong>Eventos para el ${clickedDate}:</strong><ul>`;
                events.forEach(e => {
                    content += `<li>• ${e.title}</li>`;
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


document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".heade");
    const calendario = document.querySelector(".calen");

    window.addEventListener("scroll", function () {
        const calenTop = calendario.getBoundingClientRect().top + window.scrollY;
        const scrollY = window.scrollY;

        if (scrollY + 80 >= calenTop) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.2
  });

  elements.forEach(el => observer.observe(el));
});
