function hideButton() {
    document.getElementById("typeButton").style.display = "none";
    document.getElementById("heart").style.display="inline-block";
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
    "Я просто хотел напомнить тебе, как ты удивительна. Твоя страсть к жизни и стремление к мечтам вдохновляют меня. Ты не только прекрасна, но и умна, и я горжусь тем, что могу тебя знать. Надеюсь, что мы сможем продолжать открывать мир вместе!"
];

typeButton.addEventListener('click', () => {
    textElement.textContent = ''; // Очистить текст перед началом
    typeText(texts[Math.floor(Math.random() * texts.length)], 0); // Выбрать случайный текст
    typeButton.style.display = 'none'; // Скрыть кнопку печати
});

newTextButton.addEventListener('click', () => {
    textElement.textContent = ''; // Очистить текст
    typeText(texts[Math.floor(Math.random() * texts.length)], 0); // Сгенерировать новый текст
});

function typeText(text, index) {
    if (index < text.length) {
        textElement.textContent += text.charAt(index); // Добавить следующий символ
        setTimeout(() => typeText(text, index + 1), 30); // Задержка перед следующей буквой
    } else {
        newTextButton.style.display = 'block'; // Показать кнопку для нового текста
    }
}