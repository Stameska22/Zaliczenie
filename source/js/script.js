function displayTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
  
    // Добавляем нули перед однозначными цифрами
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
  
    // Формируем строку с текущим временем
    let timeString = hours + ":" + minutes;
  
    // Выводим время на страницу
    document.getElementById("time").innerHTML = timeString;
  } 
setInterval(displayTime, 1000);