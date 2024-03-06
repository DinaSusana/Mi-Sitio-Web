document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('whatsapp-button');
    const nombre = 'Dina Susana';
    const apellido = 'Alarcon Fabian';
    const email = 'alarconfabiandinasusana@gmail.com';
    const telefono = '971276165';
    const asunto = 'gvvbhbj';
    const mensaje = `Nombre: ${nombre}, Apellido: ${apellido}, Correo Electrónico: ${email}, Teléfono: ${telefono}, Asunto: ${asunto}`;
  
    button.addEventListener('click', () => {
      const url = `https://api.whatsapp.com/send?phone=<971276165>&text=${encodeURIComponent(mensaje)}`;
      window.open(url, '_blank');
    });
  });
  