// Base de datos de proyectos/manualidades
const projects = [
  {
    id: 1,
    title: "Self-Watering Planter",
    category: "plastic",
    icon: "🪴",
    difficulty: "Easy",
    time: "15 mins",
    desc: "Create a self-watering pot for herbs using a plastic soda bottle.",
    materials: ["1 plastic bottle", "Cotton string/yarn", "Soil & plant seed", "Scissors"],
    steps: [
      "Cut the plastic bottle in half.",
      "Poke a small hole in the bottle cap and thread the cotton string through it.",
      "Screw the cap back on and place the top half upside down into the bottom half.",
      "Fill the bottom with water and the top half with soil and your plant.",
      "The string will pull water up into the soil automatically!"
    ]
  },
  {
    id: 2,
    title: "Desk Organizer",
    category: "cardboard",
    icon: "✏️",
    difficulty: "Easy",
    time: "20 mins",
    desc: "Turn cereal boxes and toilet paper rolls into a stylish desk holder.",
    materials: ["Cereal box", "3-4 toilet paper rolls", "Paint/colored paper", "Glue"],
    steps: [
      "Cut the top of the cereal box at an angle.",
      "Paint or cover the box and paper rolls with colorful paper.",
      "Glue the rolls inside the box to create separate pen and pencil compartments.",
      "Let it dry and organize your desk supplies!"
    ]
  },
  {
    id: 3,
    title: "Tin Can Lantern",
    category: "glass",
    icon: "🕯️",
    difficulty: "Medium",
    time: "30 mins",
    desc: "Transform clean tin cans into beautiful decorative candle lanterns.",
    materials: ["Clean tin can", "Hammer & nail", "Water & freezer", "LED candle/tea light"],
    steps: [
      "Fill the tin can with water and freeze it (prevents denting while hammering).",
      "Use a hammer and nail to punch small decorative patterns/holes into the can.",
      "Melt the ice out and paint the outside of the can.",
      "Place an LED tea light inside to watch the pattern light up!"
    ]
  },
  {
    id: 4,
    title: "Vertical Hanging Garden",
    category: "plastic",
    icon: "🌱",
    difficulty: "Advanced",
    time: "45 mins",
    desc: "Build a multi-tier garden for small spaces using large plastic bottles.",
    materials: ["3-4 Large plastic bottles", "Sturdy rope", "Soil", "Scissors"],
    steps: [
      "Cut a rectangular opening along the side of each bottle.",
      "Poke holes on both ends of each bottle and thread the rope through to chain them vertically.",
      "Tie knots under each bottle to hold them in place.",
      "Fill with soil, plant your herbs, and hang it on a wall or balcony!"
    ]
  }
];

// Elementos del DOM
const projectsGrid = document.getElementById('projects-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalBody = document.getElementById('modal-body');

// Función para renderizar proyectos
function renderProjects(categoryFilter = 'all') {
  projectsGrid.innerHTML = '';

  const filtered = categoryFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === categoryFilter);

  filtered.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-img-wrapper">
        <span>${project.icon}</span>
        <span class="difficulty-tag">${project.difficulty}</span>
      </div>
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.desc}</p>
        <div class="project-meta">
          <span>⏱️ ${project.time}</span>
          <span>📦 ${project.materials.length} items</span>
        </div>
        <button class="view-btn" onclick="openModal(${project.id})">View Instructions</button>
      </div>
    `;
    projectsGrid.appendChild(card);
  });
}

// Filtros por botón
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.category);
  });
});

// Modal de instrucciones
function openModal(id) {
  const project = projects.find(p => p.id === id);
  if (!project) return;

  modalBody.innerHTML = `
    <h2>${project.icon} ${project.title}</h2>
    <p><strong>Difficulty:</strong> ${project.difficulty} | <strong>Time:</strong> ${project.time}</p>
    
    <h4>Materials Needed:</h4>
    <ul>
      ${project.materials.map(m => `<li>${m}</li>`).join('')}
    </ul>

    <h4>Step-by-Step Instructions:</h4>
    <ol>
      ${project.steps.map(s => `<li>${s}</li>`).join('')}
    </ol>
  `;

  modalOverlay.classList.add('active');
}

modalClose.addEventListener('click', () => {
  modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) modalOverlay.classList.remove('active');
});

// Inicializar
renderProjects();