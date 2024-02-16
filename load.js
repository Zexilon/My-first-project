function showNotification() {
    // Проверка поддержки уведомлений в браузере
    if ('Notification' in window) {
      Notification.requestPermission().then(function (permission) {
        if (permission === 'granted') {
          // Создание объекта уведомления
          var notification = new Notification('Пример уведомления', {
            body: 'Это пример уведомления на вашем сайте.',
          });
  
          // Обработка клика по уведомлению
          notification.onclick = function () {
            alert('Вы нажали на уведомление!');
          };
        }
      });
    } else {
      alert('Уведомления не поддерживаются в вашем браузере.');
    }
  }
  