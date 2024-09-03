document.getElementById("detallesLink").addEventListener("click", function(event){
    event.preventDefault();
    let detallesDiv = document.getElementById("contenedorDetallesDeEnvioDet");

    if(detallesDiv.style.display === "block" || detallesDiv.style.display === "none"){
        fetch('../pages/detallesDeEnvio.html')
        .then(response => response.text())
        .then(data => {
            detallesDiv.innerHTML = data;
            detallesDiv.style.display = "block";

            // Añadir la clase 'underline' al enlace clickeado
            document.getElementById('detallesLink').classList.add('underline');

            // Remover la clase 'underline' de los otros enlaces si existen
            document.querySelectorAll('.nav-link').forEach(function(link) {
                if (link.id !== 'detallesLink') {
                    link.classList.remove('underline');
                }
            });

            // Agrega el event listener después de cargar el contenido
            document.getElementById('mostrarCupon').addEventListener("click", function(event){
                event.preventDefault();
                document.getElementById('inputCupon').style.display = "block";
            });

            // Maneja el click del botón 'Siguiente'
            document.getElementById('botonSiguiente').addEventListener("click", function(event) {
                event.preventDefault();

                // Validar campos requeridos antes de proceder
                const requiredInputs = document.querySelectorAll('input[required]');
                const estadoSelect = document.getElementById('estado');
                let allValid = true;

                // Verificar campos de entrada requeridos
                requiredInputs.forEach(input => {
                    if (!input.value) {
                        allValid = false;
                        input.classList.add('error'); // Clase CSS para destacar el error
                    } else {
                        input.classList.remove('error');
                    }
                });

                // Verificar el campo select
                if (estadoSelect.value === "") {
                    allValid = false;
                    estadoSelect.classList.add('error'); // Clase CSS para destacar el error
                } else {
                    estadoSelect.classList.remove('error');
                }

                if (allValid) {
                    fetch('../pages/metodoDePago.html')
                    .then(response => response.text())
                    .then(data => {
                        detallesDiv.innerHTML = data;

                        // Aquí se agrega nuevamente el listener para "Mostrar Cupón" en la vista de Método de Pago
                        document.getElementById('mostrarCupon').addEventListener("click", function(event){
                            event.preventDefault();
                            document.getElementById('inputCupon').style.display = "block";
                        });
                    })
                    .catch(error => console.error('Error cargando el archivo:', error));
                } else {
                    alert('Por favor, completa todos los campos requeridos antes de continuar.');
                }
            });
        })
        .catch(error => console.error('Error cargando el archivo:', error));
    } else {
        detallesDiv.style.display = "none";
    }
});
