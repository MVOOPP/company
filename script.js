document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById('burger-menu');
    const nav = document.getElementById('nav');

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Инициализация AOS
    AOS.init({
        duration: 800, // Длительность анимации
        offset: 200,   // Смещение от нижней границы
        once: true     // Анимация выполняется один раз
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const openPopup = document.getElementById('open-popup');
    const closePopup = document.getElementById('close-popup');
    const popup = document.getElementById('popup');
    const form = popup.querySelector('form'); // Форма внутри попапа

    // Открытие попапа
    openPopup.addEventListener('click', () => {
        popup.classList.add('active'); // Добавить класс "active"
        document.body.style.overflow = 'hidden'; // Блокировка прокрутки страницы
    });

    // Закрытие попапа по кнопке "Закрыть"
    closePopup?.addEventListener('click', () => {
        closePopupFunction();
    });

    // Закрытие попапа при клике вне его области
    popup.addEventListener('click', (event) => {
        const popupContent = popup.querySelector('.popup-content');
        if (!popupContent.contains(event.target)) {
            closePopupFunction();
        }
    });

    // Обработка отправки формы
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Предотвращаем перезагрузку страницы
        alert('Форма успешно отправлена!'); // Уведомление об успешной отправке
        form.reset(); // Очистить форму после отправки
        closePopupFunction(); // Закрыть попап после отправки
    });

    // Функция закрытия попапа
    function closePopupFunction() {
        popup.classList.remove('active'); // Удалить класс "active"
        document.body.style.overflow = ''; // Разблокировка прокрутки страницы
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const infoIcons = document.querySelectorAll('.info-icon');

    infoIcons.forEach((infoIcon) => {
        infoIcon.addEventListener('click', (event) => {
            // Скрываем все другие открытые подсказки
            document.querySelectorAll('.info-icon').forEach((icon) => {
                if (icon !== infoIcon) {
                    icon.classList.remove('show-tooltip');
                }
            });

            // Переключаем видимость текущей подсказки
            infoIcon.classList.toggle('show-tooltip');

            // Останавливаем всплытие события
            event.stopPropagation();
        });
    });

    // Скрытие подсказок при клике в любое другое место
    document.addEventListener('click', () => {
        infoIcons.forEach((infoIcon) => {
            infoIcon.classList.remove('show-tooltip');
        });
    });
});
