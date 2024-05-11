document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = true; // Допустим, пользователь успешно вошел

    if (isLoggedIn) {
        // Отобразить меню для скачивания файлов
        document.querySelector('.menu').style.display = 'block';

        // Добавляем обработчики событий для каждой кнопки "Скачать"
        document.getElementById('download1').addEventListener('click', function() {
            window.location.href = 'https://drive.google.com/file/d/1ej-EZq22e6tUNRNKuyNL3ivlKoXu634G/view?usp=sharing';
        });

        document.getElementById('download2').addEventListener('click', function() {
            window.location.href = 'ссылка на файл 2';
        });

        document.getElementById('download3').addEventListener('click', function() {
            window.location.href = 'ссылка на файл 3';
        });

        document.getElementById('download4').addEventListener('click', function() {
            window.location.href = 'ссылка на файл 4';
        });

        document.getElementById('download5').addEventListener('click', function() {
            window.location.href = 'ссылка на файл 5';
        });
    }
});    
