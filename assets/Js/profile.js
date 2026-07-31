document.addEventListener('DOMContentLoaded', () => {

    // ===== ELEMENTOS =====
    const avatarImg = document.getElementById('avatarImg');
    const changeAvatarBtn = document.getElementById('changeAvatarBtn');
    const avatarInput = document.getElementById('avatarInput');
    const editProfileBtn = document.getElementById('editProfileBtn');
    const editSection = document.getElementById('editProfileSection');
    const cancelEditBtn = document.getElementById('cancelEditBtn');
    const editForm = document.getElementById('editProfileForm');
    const editName = document.getElementById('editName');
    const editBio = document.getElementById('editBio');
    const displayName = document.getElementById('displayName');
    const bioDisplay = document.getElementById('bioDisplay');
    // (puedes añadir más campos si quieres)

    // ===== CAMBIAR FOTO DE PERFIL =====
    changeAvatarBtn.addEventListener('click', () => {
        avatarInput.click();
    });

    avatarInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => {
                avatarImg.src = ev.target.result;
                // Aquí podrías subir la imagen a Supabase Storage más adelante
            };
            reader.readAsDataURL(file);
        }
    });

    // ===== MOSTRAR/OCULTAR EDITOR =====
    editProfileBtn.addEventListener('click', () => {
        // Cargar datos actuales en el formulario
        editName.value = displayName.textContent;
        editBio.value = bioDisplay.textContent;
        editSection.style.display = 'block';
        editProfileBtn.style.display = 'none'; // ocultamos el botón "Editar"
    });

    cancelEditBtn.addEventListener('click', () => {
        editSection.style.display = 'none';
        editProfileBtn.style.display = 'inline-block';
    });

    // ===== GUARDAR CAMBIOS =====
    editForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const newName = editName.value.trim();
        const newBio = editBio.value.trim();

        if (newName) {
            displayName.textContent = newName;
        }
        bioDisplay.textContent = newBio || 'Sin biografía aún.';

        // Ocultar editor y mostrar botón de editar
        editSection.style.display = 'none';
        editProfileBtn.style.display = 'inline-block';

        // Aquí podrías enviar los datos a Supabase para actualizar el perfil
        alert('✅ Perfil actualizado correctamente (simulación)');
    });

    // ===== (Opcional) Cargar datos del usuario desde Supabase =====
    // Aquí puedes hacer una consulta a la tabla 'profiles' o 'users'
    // y rellenar los campos con los datos reales.
    // Por ahora usamos datos de ejemplo estáticos.
});