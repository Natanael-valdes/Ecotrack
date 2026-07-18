 

 //-------------------------------cambios de pagina (navigate)---------------------------------------------
function BotonMover(){
    window.location.href = "createAccount.html"
}

function BtonPassword(){
    window.location.href = "ReestorePassword.html"
}

function btonChange(){
    window.location.href = "PrincipalPage.html"
}

function mostrarfom(){
    let form = document.getElementById("formulario-Mago");

    if (form.style.display === "none") {
        form.style.display = "flex";
    } else {
        form.style.display = "none"
    }
}


//-----------------que aparezca los input para poner el codigo en recuperar la cuenta--------------------

const inputs = document.querySelectorAll(".input-code");

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });
});



//-------------------------------------------Crear un Post------------------------------------------------

const postInput = document.getElementById("postInput");
const imageInput = document.getElementById("imageInput");
const postBtn = document.getElementById("postBtn");
const postsContainer = document.getElementById("postsContainer");

postBtn.addEventListener("click", () => {
  const text = postInput.value.trim();
  const file = imageInput.files[0];

  if (text === "" && !file) {
    alert("Escribe algo o selecciona una imagen");
    return;
  }

  createPost(text, file);

  postInput.value = "";
  imageInput.value = "";
});

function createPost(text, file) {
  const post = document.createElement("div");
  post.classList.add("post");

  const user = document.createElement("h4");
  user.textContent = "Tú";
  post.appendChild(user);

  // Texto
  if (text) {
    const content = document.createElement("p");
    content.textContent = text;
    post.appendChild(content);
  }

  // Imagen
  if (file) {
    const img = document.createElement("img");

    const reader = new FileReader();
    reader.onload = function(e) {
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);

    post.appendChild(img);
  }

// Botón eliminar
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Eliminar";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => post.remove());

  post.appendChild(deleteBtn);

  postsContainer.prepend(post);
}



/*------------------------------------MAPA-------------------------------*/
// Crear mapa

// Crear el mapa centrado en Santa Ana
var map = L.map('map').setView([13.9945, -89.5597], 13);

// Cargar OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
}).addTo(map);

// Marcador principal
L.marker([13.9945, -89.5597])
.addTo(map)
.bindPopup("<b>EcoTrack</b><br>Santa Ana");