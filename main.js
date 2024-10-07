function updateGreeting() {
    const popupHeader = document.getElementById('popupHeader');
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 7 && hours < 12) {
        popupHeader.textContent = "Удачи на работе 🍀";
    } else if (hours >= 12 && hours < 13) {
        popupHeader.textContent = "Пора кушать 🍽️";
    } else if (hours >= 13 && hours < 16) {
        popupHeader.textContent = "Скоро уже конец рабочего времени";
    } else if (hours >= 16 && hours < 21) {
        popupHeader.textContent = "Ураа, этот момент настал, ещё один отработанный день в копилку";
    } else {
        popupHeader.textContent = "Сладких снов 😘";
    }
}

window.onload = function() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'flex';
    document.getElementById('popup').style.justifyContent = 'center';
    document.getElementById('popup').style.flexDirection = 'column';
};

document.getElementById('close-btn').onclick = function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
};

updateGreeting();

function hideButton() {
    document.getElementById("typeButton").style.display = "none";
    document.getElementById("heart").style.display="inline-block";
    document.getElementById("text").style.boxShadow ='rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px';
}

document.getElementById('typeButton').addEventListener('click', () => {
    const title = document.getElementById('pulsingTitle');
    title.style.display = 'block'; // Показать заголовок
});

const textElement = document.getElementById('text');
const typeButton = document.getElementById('typeButton');
const newTextButton = document.getElementById('heart');

const texts = [
    "Хотел просто сказать, как ты прекрасна. Каждый раз, когда я вижу твою улыбку, мой день становится ярче. Ты обладаешь невероятным обаянием и теплотой, и я ценю каждую минуту, проведенную с тобой.",
    "Ты — невероятный человек, и я восхищаюсь твоей силой и добротой. Спасибо за все моменты, которые ты даришь. Ты делаешь этот мир лучше просто тем, что в нем есть.",
    "Ты знаешь, каждый раз, когда я думаю о тебе, на моем лице появляется улыбка. Ты обладаешь удивительной способностью делать окружающий мир лучше, и я счастлив, что могу быть частью твоей жизни. Твоя искренность и доброта вдохновляют меня, и я надеюсь, что у нас будет много красивых моментов вместе.",
    "Ты — словно утренний рассвет, который приносит свет и радость. Твоя улыбка и смех наполняют мою жизнь счастьем. Я ценю каждую минуту, проведенную с тобой, и надеюсь, что впереди нас ждёт ещё много удивительных приключений. Ты заслуживаешь только самого лучшего!",
    "Я просто хотел напомнить тебе, как ты удивительна. Твоя страсть к жизни и стремление к мечтам вдохновляют меня. Ты не только прекрасна, но и умна, и я горжусь тем, что могу тебя знать. Надеюсь, что мы сможем продолжать открывать мир вместе!",
    "Я вижу, что тебе сейчас тяжело, и хочу, чтобы ты знала: ты не одна. Я всегда рядом, чтобы поддержать тебя и выслушать все твои переживания. Помни, что в трудные времена важно не замыкаться в себе, и я готов быть твоим опорой.",
    "Я хочу говорить тебе постоянно, комплименты, что ты всегда знала насколько ты прекрасна, что хочу видеть тебя всегда, но понимаю, что есть возможность потерять интерес если быть слишком навязчивым и давать много нежности",
    "Ты особенный человек для меня, ты единственная ради кого я готов не спать ожидая сообщения, только с тобой мне никогда не надоест. ",
    "Мне безумно нравится слушать твои голосовые, смотреть видео которые ты мне отправляешь, мне приятно знать, что ты делишьсч со мной своими событиями. Не переставай это делать",
    "Знаешь почему с тобой не играют в прятки. Потому что такиз как ты невозможно найти"
];

let typingInterval; // Переменная для хранения ID таймера

typeButton.addEventListener('click', () => {
    clearInterval(typingInterval); // Остановить предыдущую анимацию
    textElement.textContent = ''; // Очистить текст перед началом
    typeText(texts[Math.floor(Math.random() * texts.length)], 0); // Выбрать случайный текст
    typeButton.style.display = 'none'; // Скрыть кнопку печати
});

newTextButton.addEventListener('click', () => {
    clearInterval(typingInterval); // Остановить предыдущую анимацию
    textElement.textContent = ''; // Очистить текст
    typeText(texts[Math.floor(Math.random() * texts.length)], 0); // Сгенерировать новый текст
});

function typeText(text, index) {
    if (index < text.length) {
        textElement.textContent += text.charAt(index); // Добавить следующий символ
        typingInterval = setTimeout(() => typeText(text, index + 1), 30); // Задержка перед следующей буквой
    } else {
        newTextButton.style.display = 'block'; // Показать кнопку для нового текста
    }
}
