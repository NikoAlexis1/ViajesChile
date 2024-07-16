import '../../node_modules/jquery/dist/jquery.min.js';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Alert
let alertContainer = document.getElementById("alertcontainer");
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
    alertContainer.append(wrapper)
  }
  const alertTrigger = document.getElementById('enviarcontacto')
  if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
      appendAlert('Mesaje enviado correctamente!', 'success')
    })
  }