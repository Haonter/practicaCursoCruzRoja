document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const nombreInput = document.getElementById('nombre');
    const anioNacimientoInput = document.getElementById('anioNacimiento');
    const calcularBtn = document.getElementById('calcular');
    const resultadoDiv = document.getElementById('resultado');
    const mensajePersonalizadoDiv = document.getElementById('mensajePersonalizado');
    const categoriaSpan = document.getElementById('categoria');
    
    // Evento click del botón
    calcularBtn.addEventListener('click', function() {
        // Validación básica
        if (!nombreInput.value || !anioNacimientoInput.value) {
            alert('Por favor, completa todos los campos');
            return;
        }
        
        // Obtener los valores
        const nombre = nombreInput.value.trim();
        const anioNacimiento = parseInt(anioNacimientoInput.value);
        const anioActual = new Date().getFullYear();
        
        // Validar año de nacimiento
        if (anioNacimiento < 1900 || anioNacimiento > anioActual) {
            alert('Por favor, ingresa un año de nacimiento válido');
            return;
        }
        
        // Calcular edad
        const edad = anioActual - anioNacimiento;
        
        // Determinar categoría
        let categoria = '';
        let claseColor = '';
        
        if (edad >= 0 && edad <= 12) {
            categoria = 'Niño';
            claseColor = 'bg-green-100 text-green-800';
        } else if (edad >= 13 && edad <= 17) {
            categoria = 'Adolescente';
            claseColor = 'bg-blue-100 text-blue-800';
        } else if (edad >= 18 && edad <= 59) {
            categoria = 'Adulto';
            claseColor = 'bg-purple-100 text-purple-800';
        } else if (edad >= 60) {
            categoria = 'Mayor';
            claseColor = 'bg-amber-100 text-amber-800';
        }
        
        // Crear mensaje personalizado
        let mensaje = '';
        
        if (categoria === 'Niño') {
            mensaje = `¡Hola ${nombre}! Tienes ${edad} años y estás en la etapa más divertida de la vida. ¡Disfruta de tu niñez!`;
            mensajePersonalizadoDiv.className = 'bg-green-50 text-green-700 p-4 rounded-md';
        } else if (categoria === 'Adolescente') {
            mensaje = `¡Hola ${nombre}! Con ${edad} años estás descubriendo quién eres. ¡La adolescencia es una etapa de grandes cambios!`;
            mensajePersonalizadoDiv.className = 'bg-blue-50 text-blue-700 p-4 rounded-md';
        } else if (categoria === 'Adulto') {
            mensaje = `¡Hola ${nombre}! A tus ${edad} años estás en la plenitud de la vida adulta. ¡Es tiempo de cumplir tus metas!`;
            mensajePersonalizadoDiv.className = 'bg-purple-50 text-purple-700 p-4 rounded-md';
        } else if (categoria === 'Mayor') {
            mensaje = `¡Hola ${nombre}! Con ${edad} años tienes una valiosa experiencia de vida. ¡Es tiempo de disfrutar y compartir tu sabiduría!`;
            mensajePersonalizadoDiv.className = 'bg-amber-50 text-amber-700 p-4 rounded-md';
        }
        
        // Mostrar los resultados en el DOM
        mensajePersonalizadoDiv.textContent = mensaje;
        categoriaSpan.textContent = categoria;
        categoriaSpan.className = `ml-2 px-3 py-1 rounded-full text-sm font-medium ${claseColor}`;
        
        // Mostrar la sección de resultados
        resultadoDiv.classList.remove('hidden');
        
        // Efecto de aparición suave
        resultadoDiv.style.opacity = '0';
        resultadoDiv.style.transition = 'opacity 0.5s ease-in-out';
        setTimeout(() => {
            resultadoDiv.style.opacity = '1';
        }, 100);
    });
});
