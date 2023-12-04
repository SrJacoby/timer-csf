function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }
  
  // Função principal do timer
  function startTimer() {
    const targetTime = new Date();
    targetTime.setHours(13, 0, 0, 0); // Define o horário de encerramento como 13:00:00
  
    setInterval(() => {
      const currentTime = new Date();
      const remainingTime = Math.max(0, Math.floor((targetTime - currentTime) / 1000));
      
      // Atualiza o elemento HTML com o tempo restante
      document.getElementById('timer').innerText = `Início do CSF em: \n${formatTime(remainingTime)}`;
  
      // Verifica se o tempo acabou
      if (remainingTime === 0) {
        clearInterval(intervalId); // Para o intervalo quando o tempo acabar
        document.getElementById('timer').innerText = "Começou!";
      }
    }, 1000);
  }
  
  // Inicia o timer quando a página carrega
  window.onload = startTimer;