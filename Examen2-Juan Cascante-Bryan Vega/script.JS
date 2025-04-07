document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggle = document.querySelector('.dropdown-toggle'); // Botón del menú
    const dropdownMenu = document.querySelector('.dropdown-menu'); // Lista de opciones
    const items = document.querySelectorAll('.dropdown-item'); // Opciones del menú

    dropdownToggle.addEventListener('click', () => {
        // Mostrar u ocultar el menú al hacer clic en el botón
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    items.forEach(item => {
        item.addEventListener('click', () => {
            // Remover la clase "seleccionado" de todos los elementos
            items.forEach(el => {
                el.classList.remove('seleccionado');
                const checkmark = el.querySelector('.checkmark');
                if (checkmark) checkmark.remove(); // Eliminar cualquier checkmark existente
            });
            
            // Agregar la clase "seleccionado" al elemento clicado
            item.classList.add('seleccionado');
            
            // Añadir dinámicamente el checkmark al elemento seleccionado
            const checkmark = document.createElement('span');
            checkmark.textContent = '✔'; // Simbolo del checkmark
            checkmark.classList.add('checkmark');
            item.appendChild(checkmark);
            
            // Cambiar el texto del botón para reflejar la selección
            dropdownToggle.textContent = item.textContent;
            
            // Cerrar el menú
            dropdownMenu.style.display = 'none';
        });
    });
});