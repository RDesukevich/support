let score = 0;
let heartInterval;
const gameDuration = 30; // Время игры в секундах
let remainingTime = gameDuration;

// Функция для создания сердец
function createSerdce() {
    const serdce = document.createElement('div');
    serdce.className = 'serdce';

    // Размеры сердца
    const heartWidth = 50; // Ширина основного элемента
    const heartHeight = 50; // Высота основного элемента

    // Учитываем ширину псевдоэлементов
    const pseudoWidth = 26; // Ширина псевдоэлементов

    // Максимальные координаты
    const maxX = window.innerWidth - heartWidth; // Учитываем ширину основного элемента
    const maxY = window.innerHeight - heartHeight; // Учитываем высоту основного элемента

    // Случайные координаты с учётом размера сердца и псевдоэлементов
    const posX = Math.random() * (maxX - pseudoWidth); // Учитываем ширину псевдоэлементов
    const posY = Math.random() * maxY;

    serdce.style.left = posX + 'px';
    serdce.style.top = posY + 'px';

    // Добавление сердца в контейнер
    document.getElementById('heartContainer').appendChild(serdce);

    // Удаление сердца при клике
    serdce.onclick = function() {
        score++;
        document.getElementById('score').textContent = "Счет: " + score;
        serdce.style.transform = 'scale(2)';
        serdce.style.opacity = '0';

        setTimeout(() => {
            serdce.remove(); // Удалить сердце из DOM
        }, 300);
    };
}

// Функция для обновления таймера
function updateTimer() {
    remainingTime--;
    document.getElementById('timer').textContent = "Осталось времени: " + remainingTime;

    if (remainingTime <= 0) {
        endGame();
    }
}

// Функция для начала игры
function startGame() {
    score = 0;
    remainingTime = gameDuration;
    document.getElementById('score').textContent = "Счет: " + score;
    document.getElementById('timer').textContent = "Осталось времени: " + remainingTime;
    document.getElementById('heartContainer').innerHTML = '';

    heartInterval = setInterval(createSerdce, 1000);

    const timerInterval = setInterval(() => {
        updateTimer();
    }, 1000);
    
    setTimeout(() => {
        clearInterval(timerInterval);
        endGame();
    }, gameDuration * 1000);
}

// Функция для завершения игры
function endGame() {
    clearInterval(heartInterval);
    
    const popup = document.getElementById('popup2');
    const finalScore = document.getElementById('finalScore');
    
    if (popup && finalScore) {
        document.getElementById('overlay2').style.display = 'block';
        popup.style.display = 'block';
        finalScore.textContent = "Ваш счет: " + score;
    }
}

// Закрытие основного модального окна
document.getElementById('closePopup2').onclick = function() {
    document.getElementById('overlay2').style.display = 'none';
    document.getElementById('popup2').style.display = 'none';
    document.getElementById('heartContainer').innerHTML = ''; // Удаление сердец при закрытии окна
};

// Открытие инструкций
document.getElementById('openInstructionsButton').onclick = function() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('instructionsPopup').style.display = 'block';
};

// Закрытие инструкций
document.getElementById('closeInstructionsPopup').onclick = function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('instructionsPopup').style.display = 'none';
};

// Обработчик для кнопки "Начать игру"
document.getElementById('startGameButton').onclick = function() {
    startGame();
};