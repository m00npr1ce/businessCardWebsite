// Часть 1: Работа с DOM

// 1. Изменение текста заголовка H1 (надо выбрать, на какой странице из трёх работать)
// Пример для первой страницы:
const h1 = document.querySelector('main h1'); // Или более специфичный селектор, если есть несколько h1
if (h1) {
    h1.textContent = "Добро пожаловать на наш сайт!";
}

// 2. Изменение цвета текста заголовка H2 (также нужно уточнить, какая страница)
const h2 = document.querySelector('main h2');
if (h2) {
    h2.style.color = "red";
}

// 3. Изменение текста первого параграфа (нужна уточнение страницы)
const firstP = document.querySelector('main p');
if (firstP) {
    firstP.textContent = "Это новый текст параграфа.";
}

// // 4. Скрытие встроенного видео (нужно указать, на какой странице)
// const iframe = document.querySelector('main iframe');
// if (iframe) {
//     iframe.style.display = "none";
// }

// Часть 2: Работа с формой
const formData = {};

function submitForm(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    // Собираем данные из формы
    formData.name = document.getElementById("name").value;
    formData.email = document.getElementById("email").value;
    formData.phone = document.getElementById("phone").value;
    formData.date = document.getElementById("date").value;
    formData.comment = document.getElementById("comment").value;

    // Проверки
    if (!formData.name || !formData.email || !formData.comment) {
        alert("Поля 'Имя', 'E-mail' и 'Комментарий' не могут быть пустыми!");
        return;
    }

    if (!/^\+7[0-9]{10}$/.test(formData.phone)) {
        alert("Некорректный формат номера телефона. Должно быть +7 и 10 цифр.");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        alert("Некорректный формат E-mail!");
        return;
    }

    // Вывод данных в консоль
    console.log("Имя:", formData.name);
    console.log("E-mail:", formData.email);
    console.log("Телефон:", formData.phone);
    console.log("Дата:", formData.date);
    console.log("Комментарий:", formData.comment);

    // Очищаем форму
    document.getElementById("contactForm").reset();
    $('#registerModal').modal('hide');

    // Показываем сообщение об успешной отправке с анимацией
    const successMessage = document.getElementById("successMessage");
    if (successMessage) {
        successMessage.classList.add('show'); // Показываем сообщение
        setTimeout(() => {
            successMessage.classList.remove('show'); // Скрываем сообщение через 3 секунды
        }, 3000);
    }
}

formData.printData = function() {
    console.log("Имя:", this.name);
    console.log("E-mail:", this.email);
    console.log("Телефон:", this.phone);
    console.log("Дата:", this.date);
    console.log("Комментарий:", this.comment);
};

// Часть 3: Обработчик формы
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", submitForm);
}

// Часть 4: Дополнительные функции

// Функция 1: showMessage
function showMessage(message) {
    console.log(message);
}

// Функция 2: changeBackgroundColor
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Функция 3: toggleVisibility
function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
    }
}

// Функция 4: замена текста H1 с учетом параметра utm_term
function updateH1FromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const h1Element = document.querySelector('h1');
    if (utmTerm && h1Element) {
        h1Element.textContent = utmTerm;
    }
}

// Дополнительные функции

// Функция logCurrentTime
function logCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`);
}

// Функция resetBackgroundColor
function resetBackgroundColor() {
    document.body.style.backgroundColor = '#77BAB589';
}
