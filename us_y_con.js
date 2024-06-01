document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.formulario');
    const usuarioInput = document.querySelector('#usuario');
    const contraseñaInput = document.querySelector('#contraseña');

    const usuarioCorrecto = '@Analia2001';
    const contraseñaCorrecta = 'Anali@deOrteg@+17/08/2023';
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const usuario = usuarioInput.value.trim();
        const contraseña = contraseñaInput.value.trim();

        if (usuario === usuarioCorrecto && contraseña === contraseñaCorrecta) {
            alert('Inicio de sesión exitoso, bienvenida Señorita Alava');
            window.location.href = '/carfecum.html'; // Reemplaza 'pagina_destino.html' con la URL de la página de destino
        } else {
            alert('Credenciales incorrectas vuelva a intentarlo ');
            setTimeout(() => {
                window.close();
            },1); // Espera 100 ms antes de cerrar la ventana para que el usuario vea el mensaje
        }
    });
});
