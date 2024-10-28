const messages = [
    "Ваше замовлення успішно оформлено!",
    "Наш менеджер зв'яжеться з вами найближчим часом.",
    "Дякуємо за вибір нашого магазину!"
];

const animatedMessage = document.getElementById('animatedMessage');
let currentMessage = 0;
let currentChar = 0;

function typeWriter() {
    if (currentChar < messages[currentMessage].length) {
        animatedMessage.innerHTML += messages[currentMessage].charAt(currentChar);
        currentChar++;
        setTimeout(typeWriter, 50);
    } else {
        setTimeout(eraseText, 2000);
    }
}

function eraseText() {
    if (currentChar > 0) {
        animatedMessage.innerHTML = messages[currentMessage].substring(0, currentChar - 1);
        currentChar--;
        setTimeout(eraseText, 25);
    } else {
        currentMessage = (currentMessage + 1) % messages.length;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;
