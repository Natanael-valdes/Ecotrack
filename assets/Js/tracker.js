// Cargar datos del localStorage o usar valores por defecto
let points = parseInt(localStorage.getItem('ecoPoints')) || 0;
let history = JSON.parse(localStorage.getItem('ecoHistory')) || [];

// Elementos del DOM
const totalPointsEl = document.getElementById('total-points');
const levelTitleEl = document.getElementById('level-title');
const levelBadgeEl = document.getElementById('level-badge');
const actionSelect = document.getElementById('action-select');
const addActionBtn = document.getElementById('add-action-btn');
const historyList = document.getElementById('history-list');

// Función para actualizar la interfaz
function updateUI() {
  totalPointsEl.textContent = points;

  // Lógica de Niveles y Emblema Principal
  if (points >= 300) {
    levelTitleEl.textContent = 'Earth Guardian';
    levelBadgeEl.textContent = '🌍';
  } else if (points >= 150) {
    levelTitleEl.textContent = 'Urban Forest';
    levelBadgeEl.textContent = '🌳';
  } else if (points >= 50) {
    levelTitleEl.textContent = 'Eco Friend';
    levelBadgeEl.textContent = '🌿';
  } else {
    levelTitleEl.textContent = 'Beginner';
    levelBadgeEl.textContent = '🌱';
  }

  // Actualizar desbloqueo de medallas
  document.getElementById('badge-1').className = points >= 10 ? 'badge-item unlocked' : 'badge-item locked';
  document.getElementById('badge-2').className = points >= 50 ? 'badge-item unlocked' : 'badge-item locked';
  document.getElementById('badge-3').className = points >= 150 ? 'badge-item unlocked' : 'badge-item locked';
  document.getElementById('badge-4').className = points >= 300 ? 'badge-item unlocked' : 'badge-item locked';

  // Renderizar historial
  historyList.innerHTML = '';
  if (history.length === 0) {
    historyList.innerHTML = '<li class="empty-msg">No actions registered yet.</li>';
  } else {
    history.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `<span>${item.text}</span> <span class="history-pts">+${item.pts} pts</span>`;
      historyList.appendChild(li);
    });
  }
}

// Evento al presionar el botón de registrar
addActionBtn.addEventListener('click', () => {
  const selectedOption = actionSelect.options[actionSelect.selectedIndex];
  const pts = parseInt(selectedOption.value);
  const text = selectedOption.text.split(' (')[0]; // Toma solo el texto de la opción

  // Actualizar variables
  points += pts;
  history.unshift({ text: text, pts: pts }); // Agrega al inicio de la lista

  // Guardar en localStorage
  localStorage.setItem('ecoPoints', points);
  localStorage.setItem('ecoHistory', JSON.stringify(history));

  // Actualizar vista
  updateUI();
});

// Inicializar la página
updateUI();