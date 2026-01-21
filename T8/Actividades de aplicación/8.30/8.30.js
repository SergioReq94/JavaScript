let intervalo;

Notification.requestPermission().then(p => {
  if (p === "granted") {
    intervalo = setInterval(() => {
      const n = new Notification("Visita el enlace");

      n.onclick = () => {
        window.open("https://www.google.es");
        clearInterval(intervalo);
      };

      setTimeout(() => n.close(), 5000);
    }, 30000);
  }
});
