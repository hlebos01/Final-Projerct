// Получаем модальное окно
    const modal = document.getElementById("myModal");
    
    // Получаем изображение внутри модального окна
    const modalImg = document.getElementById("img01");
    
    // Получаем все изображения с классом 'modal-image'
    const images = document.querySelectorAll('.modal-image');
    
    // Получаем элемент <span>, который закрывает модальное окно
    const span = document.getElementsByClassName("close")[0];
    
    // Перебираем все изображения и добавляем обработчик клика
    images.forEach(img => {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            modalImg.alt = this.alt;
        }
    });
    
    // При клике на <span> (x), закрываем модальное окно
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    // Также закрываем модальное окно при клике вне изображения
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
    
    // Закрываем модальное окно при нажатии клавиши ESC
    document.onkeydown = function(event) {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    }


    