### Страница должна содержать два компонента:
1. Компонент загрузки картинок.
Должен быть реализован в виде поля ввода и кнопки “Загрузить”. В поле можно ввести урл до картинки или загрузить файл со списком картинок. Формат файла - JSON. Можно использовать данный файл, сделать его копию на стороннем сервере или просто сохранить и загружать его с локального компьютера.

Поле - вставляется URL
Загрузить - JSON файл

2. Галерея картинок.
Должен быть реализован в виде упорядоченного набора превью всех картинок, загруженных в галерею
## Требования к галерее
- Нужно разместить картинки галереи рядами. Количество рядов не ограничено. ✓
- Ряды должны быть одинаковы по ширине, но могут различаться по высоте. ✓
- Все картинки в одном ряду должны быть одинаковы по высоте. ✓
- У картинок должны быть сохранены пропорции. ✓
- Интерфейс должен быть responsive, максимальная ширина контейнера — 860 px, минимальная – 320 px. ✓
- Количество картинок в каждом ряду не фиксировано. При сужении/расширении галереи их количество может меняться. ✓
- Важно, чтобы на картинки было приятно смотреть: на мобильных они не должны быть слишком мелкими, на десктопах не должны быть слишком крупными. ✓
- Следует добавить плейсхолдеры на время загрузки. Внешний вид выберите на усмотрение кандидата. ✓
- Предусмотрите  возможность добавить картинку drag-n-drop в уже готовую загруженную галерею. ✓
- Добавьте возможность удалить картинку из галереи. ✓
- Мы против использования сторонних библиотек построения галереи, которые выполняют поставленную задачу за вас. ✓

## Требования к верстке
- Поддержка браузеров: две последние мажорные версии (FF, Chrome, IE). ✓
- Необходимо использовать соглашение по именованию BEM. ✓
- Использование CSS-препроцессоров. ✓

## Требования к исходникам
- Исходники должны компилироваться на любой машине. Желательно приложить readme по сборке. ✓

1. Клонируем данный репозиторий
2. Вводим в консоль npm install
3. Чтобы запустить development сборку вводим npm run start
4. Для production - npm run build
