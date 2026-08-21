const phone = '27698116236';

function trackEvent(name, params = {}) {
  if (typeof gtag === 'function') {
    gtag('event', name, params);
  }
}

document.querySelectorAll('.track-call').forEach(el => {
  el.addEventListener('click', () => trackEvent('phone_click', {
    event_category: 'lead',
    event_label: '069 811 6236'
  }));
});

document.querySelectorAll('.track-whatsapp').forEach(el => {
  el.addEventListener('click', () => trackEvent('whatsapp_click', {
    event_category: 'lead'
  }));
});

document.getElementById('leadForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const area = document.getElementById('area').value.trim();
  const service = document.getElementById('service').value;
  const customerPhone = document.getElementById('phone').value.trim();

  const message = `Hi TV Medics, I would like DStv assistance.%0A%0AName: ${encodeURIComponent(name)}%0AArea: ${encodeURIComponent(area)}%0AService: ${encodeURIComponent(service)}%0APhone: ${encodeURIComponent(customerPhone)}`;

  trackEvent('lead_form_submit', {
    event_category: 'lead',
    service: service
  });

  window.open(`https://wa.me/${phone}?text=${message}`, '_blank', 'noopener');
});

document.getElementById('year').textContent = new Date().getFullYear();
