# IT Tarot Card Images

This directory contains the image files for the IT Tarot deck. Each card has a corresponding image file that will be used as the background on the front face of the card.

## Directory Structure

```
images/
├── major/                    # Major Arcana (22 cards)
│   ├── 0.jpg               # Стажер (The Intern)
│   ├── 1.jpg               # Фулстек-разработчик (The Fullstack Dev)
│   ├── 2.jpg               # Оракул / База Данных (The Oracle)
│   ├── 3.jpg               # Владелец продукта (The Product Owner)
│   ├── 4.jpg               # Технический директор (The CTO)
│   ├── 5.jpg               # Тимлид (The Tech Lead)
│   ├── 6.jpg               # Конфликт слияния (The Merge Conflict)
│   ├── 7.jpg               # Релиз (The Release)
│   ├── 8.jpg               # Рефакторинг (The Refactoring)
│   ├── 9.jpg               # Дебаггер (The Debugger)
│   ├── 10.jpg              # Деплой (The Deploy)
│   ├── 11.jpg              # Код-ревью (The Code Review)
│   ├── 12.jpg              # Выгорание (The Burnout)
│   ├── 13.jpg              # Конец поддержки (The End of Support)
│   ├── 14.jpg              # Девопс (The DevOps)
│   ├── 15.jpg              # Легаси-код (The Legacy Code)
│   ├── 16.jpg              # Инцидент в проде (The Production Incident)
│   ├── 17.jpg              # Опенсорс (The Open Source)
│   ├── 18.jpg              # Тестировщик (The QA Tester)
│   ├── 19.jpg              # Успешный запуск (The Successful Launch)
│   ├── 20.jpg              # Стендап (The Stand-up)
│   └── 21.jpg              # Повышение (The Promotion)
│
├── minor/                    # Minor Arcana (54 cards)
│   ├── coffee/              # Coffee suit - Energy & Projects
│   │   ├── ace.jpg         # Туз Кофе
│   │   ├── 2.jpg           # Двойка Кофе
│   │   ├── 3.jpg           # Тройка Кофе
│   │   ├── 4.jpg           # Четверка Кофе
│   │   ├── 5.jpg           # Пятерка Кофе
│   │   ├── 6.jpg           # Шестерка Кофе
│   │   ├── 7.jpg           # Семерка Кофе
│   │   ├── 8.jpg           # Восьмерка Кофе
│   │   ├── 9.jpg           # Девятка Кофе
│   │   ├── 10.jpg          # Десятка Кофе
│   │   ├── page.jpg        # Паж Кофе
│   │   ├── knight.jpg      # Рыцарь Кофе
│   │   ├── queen.jpg       # Королева Кофе
│   │   └── king.jpg        # Король Кофе
│   │
│   ├── code/                # Code suit - Intellect & Logic
│   │   ├── ace.jpg         # Туз Кода
│   │   ├── 2.jpg           # Двойка Кода
│   │   ├── 3.jpg           # Тройка Кода
│   │   ├── 4.jpg           # Четверка Кода
│   │   ├── 5.jpg           # Пятерка Кода
│   │   ├── 6.jpg           # Шестерка Кода
│   │   ├── 7.jpg           # Семерка Кода
│   │   ├── 8.jpg           # Восьмерка Кода
│   │   ├── 9.jpg           # Девятка Кода
│   │   ├── 10.jpg          # Десятка Кода
│   │   ├── page.jpg        # Паж Кода
│   │   ├── knight.jpg      # Рыцарь Кода
│   │   ├── queen.jpg       # Королева Кода
│   │   └── king.jpg        # Король Кода
│   │
│   ├── dollars/             # Dollars suit - Finance & Resources
│   │   ├── ace.jpg         # Туз Денег
│   │   ├── 2.jpg           # Двойка Денег
│   │   ├── 3.jpg           # Тройка Денег
│   │   ├── 4.jpg           # Четверка Денег
│   │   ├── 5.jpg           # Пятерка Денег
│   │   ├── 6.jpg           # Шестерка Денег
│   │   ├── 7.jpg           # Семерка Денег
│   │   ├── 8.jpg           # Восьмерка Денег
│   │   ├── 9.jpg           # Девятка Денег
│   │   ├── 10.jpg          # Десятка Денег
│   │   ├── page.jpg        # Паж Денег
│   │   ├── knight.jpg      # Рыцарь Денег
│   │   ├── queen.jpg       # Королева Денег
│   │   └── king.jpg        # Король Денег
│   │
│   └── ping/                # Ping suit - Emotions & Communication
│       ├── ace.jpg         # Туз Пинга
│       ├── 2.jpg           # Двойка Пинга
│       ├── 3.jpg           # Тройка Пинга
│       ├── 4.jpg           # Четверка Пинга
│       ├── 5.jpg           # Пятерка Пинга
│       ├── 6.jpg           # Шестерка Пинга
│       ├── 7.jpg           # Семерка Пинга
│       ├── 8.jpg           # Восьмерка Пинга
│       ├── 9.jpg           # Девятка Пинга
│       ├── 10.jpg          # Десятка Пинга
│       ├── page.jpg        # Паж Пинга
│       ├── knight.jpg      # Рыцарь Пинга
│       ├── queen.jpg       # Королева Пинга
│       └── king.jpg        # Король Пинга
```

## Image Requirements

- **Format**: JPG (recommended) or PNG
- **Aspect Ratio**: 1:1.72 (same as the cards)
- **Recommended Size**: 300x517 pixels (minimum) or 600x1034 pixels (optimal)
- **Style**: IT-themed, professional, consistent with the card's meaning
- **Background**: Should work well with white text overlay

## Usage

The images are referenced in the `tarot.js` file and will be used as background images for the front face of each card. When a card is flipped, the image will be displayed with the card's name and type overlaid.

## Adding New Images

1. Place the image file in the appropriate directory
2. Ensure the filename matches exactly with what's referenced in `tarot.js`
3. Test that the image displays correctly in the game

## Notes

- All image paths are relative to the project root
- The system will gracefully handle missing images by showing a default background
- Consider optimizing images for web use to maintain fast loading times
