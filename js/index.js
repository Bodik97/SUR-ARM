                                                    //(ТАЙМЕР)
// Встановлюємо час на 4 години в мілісекундах 

let timeLeft = 3 * 60 * 60 * 1000; // 3 години
// Оновлюємо таймер кожну секунду
const timerInterval = setInterval(updateTimer, 1000);
// Функція для оновлення таймера
function updateTimer() {
    // Обчислюємо години, хвилини та секунди
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Оновлюємо текст на сторінці
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

    // Зменшуємо залишок часу
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        document.getElementById("countdown").innerText = "Час вийшов!";
    } else {
        timeLeft -= 1000; // Зменшуємо на 1 секунду (1000 мс)
    }
}


document.getElementById('scrollButton').addEventListener('click', function() {
    document.getElementById('orderForm').scrollIntoView({
        behavior: 'smooth' // Плавний скрол
    });
});

                                        // СЛАЙДЕР
let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');

function showSlide(slideIndex) {
    // Перевіряємо, що індекс не виходить за межі
    if (slideIndex >= slides.length) {
        currentSlide = 0; // Повертаємось до першого слайда
    } else if (slideIndex < 0) {
        currentSlide = slides.length - 1; // Повертаємось до останнього слайда
    } else {
        currentSlide = slideIndex;
    }

    // Рахуємо ширину слайдера і зсуваємо всі зображення
    const slideWidth = slides[0].clientWidth;
    document.querySelector('.slides').style.transform = `translateX(-${slideWidth * currentSlide}px)`;
}
function moveSlide(direction) {
    showSlide(currentSlide + direction);
}
// Показуємо перший слайд при завантаженні сторінки
showSlide(0);

document.addEventListener('DOMContentLoaded', function() {
    const reviewCards = document.querySelectorAll('.review-card');

    reviewCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 50px rgba(0,0,0,0.1)';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('orderForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        window.location.href = 'confirmation.html';
    });
    
});

document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
        // Page is visible, reinitialize any necessary state
        console.log('Page is visible');
    }
});

if ('onfreeze' in document) {
    document.addEventListener('freeze', function() {
        // Page is being frozen (moved to bfcache)
        console.log('Page is being frozen');
    });

    document.addEventListener('resume', function() {
        // Page is being resumed from bfcache
        console.log('Page is being resumed');
    });
}

