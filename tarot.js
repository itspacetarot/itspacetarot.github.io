// Данные колоды карт
const tarotDeck = {
    "deck_name": "Dev Tarot - IT колода карт Таро",
    "description": "Юмористическая колода Таро для IT-специалистов с тематическими переименованиями и трактованиями",
    "major_arcana": [
        {
            "type": "Старший Аркан",
            "name": "The Intern (Стажер)",
            "number": 0,
            "img": "images/major/theIntern.png",
            "interpretation": {
                "upright": "Энтузиазм, новые технологии, готовность учиться, начало проекта 'с чистого листа'",
                "reversed": "Неопытность, наивность, риск наделать ошибок, 'сломал прод'"
            }
        },
        {
            "type": "Старший Аркан",
            "name": "The Fullstack Dev (Фулстек-разработчик)",
            "number": 1,
            "img": "images/major/thFullstackDev.png",
            "interpretation": {
                "upright": "Контроль над ситуацией, использование всех инструментов, мастерство, инициатива",
                "reversed": "Хаки, костыли, неэффективное использование ресурсов, обман начальства"
            }
        },
        {
            "type": "Старший Аркан",
            "name": "The Oracle (Оракул / База Данных)",
            "number": 2,
            "img": "images/major/theOracle.png",
            "interpretation": {
                "upright": "Глубокие знания, интуиция (чуйка на баги), доступ к скрытой информации, мудрость документации",
                "reversed": "Скрытые баги, непонимание ТЗ, утечка данных, зашифрованные логи"
            }
        },
        {
            "type": "Старший Аркан",
            "name": "The Product Owner (Владелец продукта)",
            "number": 3,
            "img": "images/major/thePO.png",
            "interpretation": {
                "upright": "Изобилие фич, творческий подход, рост проекта, комфорт и ресурсы",
                "reversed": "Задачи без KPI, крейзи-идеи, раздутый бюджет, 'хочушечки'"
            }
        },
        {
            "type": "Старший Аркан",
            "name": "The CTO (Технический директор)",
            "number": 4,
            "img": "images/major/theCTO.png",
            "interpretation": {
                "upright": "Структура, порядок, контроль, архитектура, авторитет, стратегия",
                "reversed": "Микроменеджмент, бюрократия, техностек, который никому не нравится"
            }
        },
        {
            "type": "Старший Аркан",
            "name": "The Tech Lead (Тимлид)",
            "number": 5,
            "img": "images/major/theTechLead.png",
            "interpretation": {
                "upright": "Менторство, код-ревью, передача знаний, соблюдение best practices, традиции команды",
                "reversed": "Догматизм, 'мы всегда так делали', навязывание своего стиля кода"
            }
        },
        {
            "type": "Старший Аркан",
            "name": "The Merge Conflict (Конфликт слияния)",
            "number": 6,
            "img": "images/major/theMerge Conflict.png",
            "interpretation": {
                "upright": "Выбор (какую ветку оставить?), согласие, интеграция",
                "reversed": "Неразрешимый конфликт, потерянный код, необходимость все переделывать"
            }
        },
        {
            "type": "Старший Аркан",
            "name": "The Release (Релиз)",
            "number": 7,
            "img": "images/major/theRelease.png",
            "interpretation": {
                "upright": "Движение вперед, победа, вывод продукта в прод, контроль над двумя 'конями' (dev и ops)",
                "reversed": "Задержка релиза, откат (rollback), все падает в самый последний момент"
            }
        },
        {
            "type": "Старший Аркан",
            "name": "The Refactoring (Рефакторинг)",
            "number": 8,
            "img": "images/major/theRefactoring.png",
            "interpretation": {
                "upright": "Укрощение легаси-кода, мягкая сила, терпение, уверенность в своих силах",
                "reversed": "Страх сломать, технический долг, который победил вас"
            }
        },
        {
            "type": "Старший Аркан",
            "name": "The Debugger (Дебаггер)",
            "number": 9,
            "img": "images/major/theDebugger.png",
            "interpretation": {
                "upright": "Глубокий анализ, поиск корня проблемы, уход в себя (в код), саморефлексия",
                "reversed": "Бесконечный поиск бага, который не существует, изоляция, выгорание"
            }
        },
        {
            "type": "Старший Аркан",
            "name": "The Deploy (Деплой)",
            "number": 10,
            "img": "images/major/theDeploy.png",
            "interpretation": {
                "upright": "Поворот судьбы, удача, кармический цикл (на продакшене все работает иначе)",
                "reversed": "Неудачный деплой, падающие сервера, 'работало на моей машине'"
            }
        },
        {
            "type": "Старший Аркан",
            "name": "The Code Review (Код-ревью)",
            "number": 11,
            "img": "images/major/theCodeReview.png",
            "interpretation": {
                "upright": "Баланс, справедливость, карма, accountability, принятие взвешенных решений",
                "reversed": "Придирки из-за пробелов вместо табов, необъективность, хейт"
            }
        },
        {
            "type": "Старший Аркан",
            "name": "The Burnout (Выгорание)",
            "number": 12,
            "img": "images/major/theBurnout.png",
            "interpretation": {
                "upright": "Взгляд с новой перспективы, пауза, необходимость отступить",
                "reversed": "Застой, апатия, ощущение бессмысленности, 'стояние в очереди на отпуск'"
            }
        },
        {
            "type": "Старший Аркан",
            "name": "The End of Support (Конец поддержки)",
            "number": 13,
            "img": "images/major/theEndOfSupport.png",
            "interpretation": {
                "upright": "Конец эпохи, трансформация, обязательные изменения (миграция, апгрейд)",
                "reversed": "Сопротивление изменениям, мертвый код, который все боятся трогать"
            }
        },
        {
            "type": "Старший Аркан",
            "name": "The DevOps (Девопс)",
            "number": 14,
            "img": "images/major/theDevOps.png",
            "interpretation": {
                "upright": "Гармония между разработкой и эксплуатацией, балансировка нагрузки, эффективность",
                "reversed": "Сложная и хрупкая конфигурация, 'это не у меня падает, это у тебя'"
            }
        },
        {
            "type": "Старший Аркан",
            "name": "The Legacy Code (Легаси-код)",
            "number": 15,
            "img": "images/major/theLegacyCode.png",
            "interpretation": {
                "upright": "Оковы, зависимости, токсичные отношения с кодом, вредные привычки",
                "reversed": "Освобождение от пут, рискованный рефакторинг, полный переписывание"
            }
        },
        {
            "type": "Старший Аркан",
            "name": "The Production Incident (Инцидент в проде)",
            "number": 16,
            "img": "images/major/theProductionIncident.png",
            "interpretation": {
                "upright": "Внезапный крах, прозрение, разрушение иллюзий",
                "reversed": "Хаос, паника, поиск виноватых, постмортем без выводов"
            }
        },
        {
            "type": "Старший Аркан",
            "name": "The Open Source (Опенсорс)",
            "number": 17,
            "img": "images/major/theOpenSource.png",
            "interpretation": {
                "upright": "Надежда, вдохновение, щедрость сообщества, свет в конце туннеля",
                "reversed": "Заброшенный репозиторий, уязвимости, токсичный мейнтейнер"
            }
        },
        {
            "type": "Старший Аркан",
            "name": "The QA Tester (Тестировщик)",
            "number": 18,
            "img": "images/major/theQATester.png",
            "interpretation": {
                "upright": "Иллюзии, страхи (а что, если...?), поиск скрытых багов, тесты на граничных условиях",
                "reversed": "Ложные срабатывания, пропущенный критический баг, паранойя"
            }
        },
        {
            "type": "Старший Аркан",
            "name": "The Successful Launch (Успешный запуск)",
            "number": 19,
            "img": "images/major/theSuccessfulLaunch.png",
            "interpretation": {
                "upright": "Успех, радость, позитив, ясность, проект работает и приносит деньги",
                "reversed": "Слепой оптимизм, недооценка проблем, 'медовый месяц' перед первым багом"
            }
        },
        {
            "type": "Старший Аркан",
            "name": "The Stand-up (Стендап)",
            "number": 20,
            "img": "images/major/theStandUp.png",
            "interpretation": {
                "upright": "Подведение итогов, оценка результатов, призыв к действию, ясность задач",
                "reversed": "Ежедневная рутина, бесполезные встречи, оправдания"
            }
        },
        {
            "type": "Старший Аркан",
            "name": "The Promotion (Повышение)",
            "number": 21,
            "img": "images/major/thePromotion.png",
            "interpretation": {
                "upright": "Завершение большого цикла, успех, гармония, интеграция, чувство достижения",
                "reversed": "Застой в карьере, 'повышение' без увеличения з/п, синдром самозванца"
            }
        }
    ],
    "minor_arcana": [
        {
            "type": "Младший Аркан",
            "suit": "Кофе (Coffee)",
            "description": "Энергия, энтузиазм, проекты, инициативы. Источник энергии разработчика.",
            "cards": [
                {
                    "rank": "Туз",
                    "name": "Туз Кофе",
                    "img": "images/minor/coffee/theAceCoffee.png",
                    "interpretation": {
                        "upright": "Блестящая идея, прилив мотивации, начало нового проекта",
                        "reversed": "Отсутствие вдохновения, творческий кризис, прокрастинация"
                    }
                },
                {
                    "rank": "Двойка",
                    "name": "Двойка Кофе",
                    "img": "images/minor/coffee/coffee2.png",
                    "interpretation": {
                        "upright": "Планирование проекта, распределение задач, первые шаги",
                        "reversed": "Неясные цели, отсутствие плана, хаотичное начало"
                    }
                },
                {
                    "rank": "Тройка",
                    "name": "Тройка Кофе",
                    "img": "images/minor/coffee/coffee3.png",
                    "interpretation": {
                        "upright": "Быстрое развитие, первые успехи, рост компетенций",
                        "reversed": "Задержки в разработке, технические трудности, медленный прогресс"
                    }
                },
                {
                    "rank": "Четверка",
                    "name": "Четверка Кофе",
                    "img": "images/minor/coffee/coffee4.png",
                    "interpretation": {
                        "upright": "Стабильность проекта, отлаженные процессы, предсказуемость",
                        "reversed": "Застой, рутина, отсутствие инноваций, скука"
                    }
                },
                {
                    "rank": "Пятерка",
                    "name": "Пятерка Кофе",
                    "img": "images/minor/coffee/coffee5.png",
                    "interpretation": {
                        "upright": "Конкуренция, сравнение с другими проектами, здоровое соперничество",
                        "reversed": "Конфликты в команде, нечестная конкуренция, саботаж"
                    }
                },
                {
                    "rank": "Шестерка",
                    "name": "Шестерка Кофе",
                    "img": "images/minor/coffee/coffee6.png",
                    "interpretation": {
                        "upright": "Победа, успешное завершение этапа, признание заслуг",
                        "reversed": "Задержка успеха, недооцененность, отсутствие признания"
                    }
                },
                {
                    "rank": "Семерка",
                    "name": "Семерка Кофе",
                    "img": "images/minor/coffee/coffee7.png",
                    "interpretation": {
                        "upright": "Защита своего проекта, отстаивание идей, уверенность",
                        "reversed": "Оборонительная позиция, неспособность принять критику, упрямство"
                    }
                },
                {
                    "rank": "Восьмерка",
                    "name": "Восьмерка Кофе",
                    "img": "images/minor/coffee/coffee8.png",
                    "interpretation": {
                        "upright": "Быстрое движение, Agile-подход, оперативные изменения",
                        "reversed": "Спешка, необдуманные решения, технический долг"
                    }
                },
                {
                    "rank": "Девятка",
                    "name": "Девятка Кофе",
                    "img": "images/minor/coffee/coffee9.png",
                    "interpretation": {
                        "upright": "Сильная мотивация, энергия для финального рывка, устойчивость",
                        "reversed": "Выгорание, истощение, нехватка сил на завершение"
                    }
                },
                {
                    "rank": "Десятка",
                    "name": "Десятка Кофе",
                    "img": "images/minor/coffee/coffee10.png",
                    "interpretation": {
                        "upright": "Успешный запуск, завершение проекта, признание",
                        "reversed": "Провальный релиз, перегруженность, чрезмерная ответственность"
                    }
                },
                {
                    "rank": "Паж",
                    "name": "Паж Кофе",
                    "img": "images/minor/coffee/thePageboyCoffee.png",
                    "interpretation": {
                        "upright": "Любознательный стажер, новые идеи, энтузиазм",
                        "reversed": "Неопытность, наивные предложения, необходимость менторства"
                    }
                },
                {
                    "rank": "Рыцарь",
                    "name": "Рыцарь Кофе",
                    "img": "images/minor/coffee/theKnightCoffee.png",
                    "interpretation": {
                        "upright": "Активный разработчик, быстрые действия, амбиции",
                        "reversed": "Нетерпение, безрассудство, необдуманные риски"
                    }
                },
                {
                    "rank": "Королева",
                    "name": "Королева Кофе",
                    "img": "images/minor/coffee/theQueenCoffee.png",
                    "interpretation": {
                        "upright": "Уверенный лидер, вдохновляющий других, компетентность",
                        "reversed": "Властность, подавление инициативы, доминирование"
                    }
                },
                {
                    "rank": "Король",
                    "name": "Король Кофе",
                    "img": "images/minor/coffee/theKingCoffee.png",
                    "interpretation": {
                        "upright": "Опытный архитектор, видение проекта, стратегическое мышление",
                        "reversed": "Жесткий контроль, негибкость, авторитарный стиль"
                    }
                }
            ]
        },
        {
            "type": "Младший Аркан",
            "suit": "Код (Code)",
            "description": "Интеллект, конфликты, проблемы, логика. Непосредственно код, баги, ментальные challenges.",
            "cards": [
                {
                    "rank": "Туз",
                    "name": "Туз Кода",
                    "img": "images/minor/code/theAceCode.png",
                    "interpretation": {
                        "upright": "Озарение, ясное решение сложной проблемы, прорывная идея",
                        "reversed": "Путаница в коде, сложная логика, непонятные решения"
                    }
                },
                {
                    "rank": "Двойка",
                    "name": "Двойка Кода",
                    "img": "images/minor/code/code2.png",
                    "interpretation": {
                        "upright": "Взвешенное техническое решение, выбор между подходами",
                        "reversed": "Неопределенность, трудный выбор, тупиковая архитектура"
                    }
                },
                {
                    "rank": "Тройка",
                    "name": "Тройка Кода",
                    "img": "images/minor/code/code3.png",
                    "interpretation": {
                        "upright": "Успешное решение проблемы, работающий патч",
                        "reversed": "Болезненное решение, необходимость пожертвовать частью функционала"
                    }
                },
                {
                    "rank": "Четверка",
                    "name": "Четверка Кода",
                    "img": "images/minor/code/code4.png",
                    "interpretation": {
                        "upright": "Необходимость отдохнуть от кода, перерыв для перезагрузки",
                        "reversed": "Вынужденный простой, блокировка другими задачами"
                    }
                },
                {
                    "rank": "Пятерка",
                    "name": "Пятерка Кода",
                    "img": "images/minor/code/code5.png",
                    "interpretation": {
                        "upright": "Поиск уязвимостей, обнаружение чужих ошибок",
                        "reversed": "Нечестные методы, кража кода, плагиат"
                    }
                },
                {
                    "rank": "Шестерка",
                    "name": "Шестерка Кода",
                    "img": "images/minor/code/code6.png",
                    "interpretation": {
                        "upright": "Успешный переход на новую технологию, миграция данных",
                        "reversed": "Застревание в старом решении, сопротивление изменениям"
                    }
                },
                {
                    "rank": "Семерка",
                    "name": "Семерка Кода",
                    "img": "images/minor/code/code7.png",
                    "interpretation": {
                        "upright": "Креативное решение, нестандартный подход, хак",
                        "reversed": "Обход правил, неэтичные методы, небезопасные решения"
                    }
                },
                {
                    "rank": "Восьмерка",
                    "name": "Восьмерка Кода",
                    "img": "images/minor/code/code8.png",
                    "interpretation": {
                        "upright": "Сложный рефакторинг, ограничения старой системы",
                        "reversed": "Ощущение заточения в легаси, невозможность изменений"
                    }
                },
                {
                    "rank": "Девятка",
                    "name": "Девятка Кода",
                    "img": "images/minor/code/code9.png",
                    "interpretation": {
                        "upright": "Бессонная ночь из-за сложного бага, тревога, паранойя",
                        "reversed": "Преодоление страха, решение проблемы, облегчение"
                    }
                },
                {
                    "rank": "Десятка",
                    "name": "Десятка Кода",
                    "img": "images/minor/code/code10.png",
                    "interpretation": {
                        "upright": "Крах проекта, полный пересмотр архитектуры",
                        "reversed": "Циклические зависимости, невозможность что-либо изменить"
                    }
                },
                {
                    "rank": "Паж",
                    "name": "Паж Кода",
                    "img": "images/minor/code/thePageboyCode.png",
                    "interpretation": {
                        "upright": "Любознательный ученик, изучение новых технологий",
                        "reversed": "Поверхностные знания, непонимание основ"
                    }
                },
                {
                    "rank": "Рыцарь",
                    "name": "Рыцарь Кода",
                    "img": "images/minor/code/theKnightCode.png",
                    "interpretation": {
                        "upright": "Логичный аналитик, ясное мышление, рациональность",
                        "reversed": "Холодная логика, игнорирование человеческого фактора"
                    }
                },
                {
                    "rank": "Королева",
                    "name": "Королева Кода",
                    "img": "images/minor/code/theQueenCode.png",
                    "interpretation": {
                        "upright": "Мудрый архитектор, глубокая экспертиза, ясность мысли",
                        "reversed": "Манипуляция знаниями, интеллектуальное превосходство"
                    }
                },
                {
                    "rank": "Король",
                    "name": "Король Кода",
                    "img": "images/minor/code/theKingCode.png",
                    "interpretation": {
                        "upright": "Мастер алгоритмов, глубокое понимание систем",
                        "reversed": "Злоупотребление властью через знания, сложные для понимания решения"
                    }
                }
            ]
        },
        {
            "type": "Младший Аркан",
            "suit": "Деньги (Dollars)",
            "description": "Финансы, материальные блага, ресурсы, бизнес. Бюджет, зарплата, финансирование, монетизация.",
            "cards": [
                {
                    "rank": "Туз",
                    "name": "Туз Денег",
                    "img": "images/minor/dollars/theAceMoney.png",
                    "interpretation": {
                        "upright": "Новый раунд инвестиций, повышение зарплаты, финансовые возможности",
                        "reversed": "Потеря финансирования, сокращение бюджета, финансовые проблемы"
                    }
                },
                {
                    "rank": "Двойка",
                    "name": "Двойка Денег",
                    "img": "images/minor/dollars/money2.png",
                    "interpretation": {
                        "upright": "Балансировка бюджета, приоритизация затрат",
                        "reversed": "Дисбаланс в финансах, нерациональные траты"
                    }
                },
                {
                    "rank": "Тройка",
                    "name": "Тройка Денег",
                    "img": "images/minor/dollars/money3.png",
                    "interpretation": {
                        "upright": "Успешная монетизация, рост доходов, окупаемость",
                        "reversed": "Задержки в оплате, проблемы с monetization"
                    }
                },
                {
                    "rank": "Четверка",
                    "name": "Четверка Денег",
                    "img": "images/minor/dollars/money4.png",
                    "interpretation": {
                        "upright": "Сохранение бюджета, контроль расходов, экономия",
                        "reversed": "Жадность, нежелание платить за хороший хостинг или инструменты"
                    }
                },
                {
                    "rank": "Пятерка",
                    "name": "Пятерка Денег",
                    "img": "images/minor/dollars/money5.png",
                    "interpretation": {
                        "upright": "Финансовые трудности, необходимость оптимизировать затраты",
                        "reversed": "Крайняя бедность проекта, отсутствие финансирования"
                    }
                },
                {
                    "rank": "Шестерка",
                    "name": "Шестерка Денег",
                    "img": "images/minor/dollars/money6.png",
                    "interpretation": {
                        "upright": "Финансовая помощь, инвестиции, спонсорство",
                        "reversed": "Долги, невыгодные условия, зависимость от инвесторов"
                    }
                },
                {
                    "rank": "Семерка",
                    "name": "Семерка Денег",
                    "img": "images/minor/dollars/money7.png",
                    "interpretation": {
                        "upright": "Долгосрочные инвестиции, терпение в ожидании отдачи",
                        "reversed": "Нетерпение, желание быстрой отдачи, неоправданные риски"
                    }
                },
                {
                    "rank": "Восьмерка",
                    "name": "Восьмерка Денег",
                    "img": "images/minor/dollars/money8.png",
                    "interpretation": {
                        "upright": "Профессиональное развитие, инвестиции в обучение",
                        "reversed": "Рутинная работа ради денег, отсутствие развития"
                    }
                },
                {
                    "rank": "Девятка",
                    "name": "Девятка Денег",
                    "img": "images/minor/dollars/money9.png",
                    "interpretation": {
                        "upright": "Финансовая стабильность, комфорт, безопасность",
                        "reversed": "Зависимость от денег, нежелание рисковать"
                    }
                },
                {
                    "rank": "Десятка",
                    "name": "Десятка Денег",
                    "img": "images/minor/dollars/money10.png",
                    "interpretation": {
                        "upright": "Финансовый успех, богатство, наследие",
                        "reversed": "Потеря состояния, неудачные инвестиции"
                    }
                },
                {
                    "rank": "Паж",
                    "name": "Паж Денег",
                    "img": "images/minor/dollars/thePageboyMoney.png",
                    "interpretation": {
                        "upright": "Изучение финансовой грамотности, новые возможности заработка",
                        "reversed": "Неразумное отношение к деньгам, транжирство"
                    }
                },
                {
                    "rank": "Рыцарь",
                    "name": "Рыцарь Денег",
                    "img": "images/minor/dollars/theKnightMoney.png",
                    "interpretation": {
                        "upright": "Надежный инвестор, практичный подход к финансам",
                        "reversed": "Излишняя осторожность, упущенные возможности"
                    }
                },
                {
                    "rank": "Королева",
                    "name": "Королева Денег",
                    "img": "images/minor/dollars/theQueenMoney.png",
                    "interpretation": {
                        "upright": "Финансовая мудрость, разумное управление бюджетом",
                        "reversed": "Материализм, жадность, оценка всего через деньги"
                    }
                },
                {
                    "rank": "Король",
                    "name": "Король Денег",
                    "img": "images/minor/dollars/theKingMoney.png",
                    "interpretation": {
                        "upright": "Финансовая власть, успешный инвестор, богатство",
                        "reversed": "Злоупотребление финансовой властью, жадность"
                    }
                }
            ]
        },
        {
            "type": "Младший Аркан",
            "suit": "Пинг (Ping)",
            "description": "Эмоции, отношения, коммуникация, команда. Коммуникация, митинг-пойнтинг, эмоциональный климат.",
            "cards": [
                {
                    "rank": "Туз",
                    "name": "Туз Пинга",
                    "img": "images/minor/ping/theAcePing.png",
                    "interpretation": {
                        "upright": "Новый крутой митап или начало плотного сотрудничества, эмоциональное удовлетворение",
                        "reversed": "Эмоциональный голод, одиночество в коллективе"
                    }
                },
                {
                    "rank": "Двойка",
                    "name": "Двойка Пинга",
                    "img": "images/minor/ping/ping2.png",
                    "interpretation": {
                        "upright": "Удачное коллективное программирование, взаимопонимание",
                        "reversed": "Разсогласованность, недопонимание, возможный конфликт"
                    }
                },
                {
                    "rank": "Тройка",
                    "name": "Тройка Пинга",
                    "img": "images/minor/ping/ping3.png",
                    "interpretation": {
                        "upright": "Успешная командная работа, празднование успеха",
                        "reversed": "Разочарование в коллегах, неоправданные ожидания"
                    }
                },
                {
                    "rank": "Четверка",
                    "name": "Четверка Пинга",
                    "img": "images/minor/ping/ping4.png",
                    "interpretation": {
                        "upright": "Необходимость перерыва в общении, эмоциональная пауза",
                        "reversed": "Изоляция, избегание коллег, эмоциональный блок"
                    }
                },
                {
                    "rank": "Пятерка",
                    "name": "Пятерка Пинга",
                    "img": "images/minor/ping/ping5.png",
                    "interpretation": {
                        "upright": "Разочарование в коллегах, несбывшиеся надежды",
                        "reversed": "Принятие ситуации, движение дальше"
                    }
                },
                {
                    "rank": "Шестерка",
                    "name": "Шестерка Пинга",
                    "img": "images/minor/ping/ping6.png",
                    "interpretation": {
                        "upright": "Ностальгия по прошлым проектам, работа с бывшими коллегами",
                        "reversed": "Застревание в прошлом, неспособность двигаться вперед"
                    }
                },
                {
                    "rank": "Семерка",
                    "name": "Семерка Пинга",
                    "img": "images/minor/ping/ping7.png",
                    "interpretation": {
                        "upright": "Соблазн сменить команду, поиск лучших условий",
                        "reversed": "Пустые мечты, нерешительность, упущенные возможности"
                    }
                },
                {
                    "rank": "Восьмерка",
                    "name": "Восьмерка Пинга",
                    "img": "images/minor/ping/ping8.png",
                    "interpretation": {
                        "upright": "Уход из проекта, эмоциональное отдаление",
                        "reversed": "Цепляние за неудачные отношения, страх перемен"
                    }
                },
                {
                    "rank": "Девятка",
                    "name": "Девятка Пинга",
                    "img": "images/minor/ping/ping9.png",
                    "interpretation": {
                        "upright": "Гармония в команде, эмоциональное удовлетворение",
                        "reversed": "Искусственная гармония, скрытые конфликты"
                    }
                },
                {
                    "rank": "Десятка",
                    "name": "Десятка Пинга",
                    "img": "images/minor/ping/ping10.png",
                    "interpretation": {
                        "upright": "Семейная атмосфера в коллективе, полное удовлетворение",
                        "reversed": "Дисфункциональная команда, эмоциональное выгорание"
                    }
                },
                {
                    "rank": "Паж",
                    "name": "Паж Пинга",
                    "img": "images/minor/ping/thePageboyPing.png",
                    "interpretation": {
                        "upright": "Эмоциональное сообщение, новые знакомства в рабочем порядке",
                        "reversed": "Неудачные шутки, недопонимание, эмоциональная незрелость"
                    }
                },
                {
                    "rank": "Рыцарь",
                    "name": "Рыцарь Пинга",
                    "img": "images/minor/ping/theKnightPing.png",
                    "interpretation": {
                        "upright": "Романтическое предложение о работе, эмоциональное приглашение",
                        "reversed": "Нежелательное внимание, назойливость, спам"
                    }
                },
                {
                    "rank": "Королева",
                    "name": "Королева Пинга",
                    "img": "images/minor/ping/theQueenPing.png",
                    "interpretation": {
                        "upright": "Эмпатичный лидер, забота о команде, эмоциональный интеллект",
                        "reversed": "Манипуляции эмоциями, эмоциональная зависимость"
                    }
                },
                {
                    "rank": "Король",
                    "name": "Король Пинга",
                    "img": "images/minor/ping/theKingPing.png",
                    "interpretation": {
                        "upright": "Мудрый руководитель, эмоциональная стабильность, дипломатия",
                        "reversed": "Злоупотребление эмоциональной властью, манипуляции"
                    }
                }
            ]
        }
    ]
};

// Состояние игры
let gameState = {
    currentDeck: 'major', // 'major' или 'minor'
    selectedCards: [], // Выбранные карты
    currentStep: 1, // Текущий шаг (1 - первая карта, 2 - вторая карта)
    deckCards: [], // Карты в колоде
    usedCards: [], // Использованные карты
    pendingPlacement: null // Действие, выполняемое после закрытия модалки
};

// DOM элементы
const deckGrid = document.getElementById('deckGrid');
const majorArcanaLabel = document.getElementById('majorArcanaLabel');
const minorArcanaLabel = document.getElementById('minorArcanaLabel');
const resetButton = document.getElementById('resetButton');
const imageModal = document.getElementById('imageModal');
const interpretationModal = document.getElementById('interpretationModal');

// Инициализация игры
function initGame() {
    resetGame();
    setupEventListeners();
    showMajorArcana();
}

// Сброс игры
function resetGame() {
    gameState = {
        currentDeck: 'major',
        selectedCards: [],
        currentStep: 1,
        deckCards: [],
        usedCards: []
    };
    
    // Очистка расклада
    clearSpread();
    
    // Сброс указателей
    majorArcanaLabel.classList.add('active');
    minorArcanaLabel.classList.remove('active');
    
    // Показать старшие арканы
    showMajorArcana();
}

// Очистка расклада
function clearSpread() {
    const card1 = document.getElementById('card1');
    const card2 = document.getElementById('card2');
    const card3 = document.getElementById('card3');
    const orient1 = document.getElementById('orient1');
    const orient2 = document.getElementById('orient2');
    const orient3 = document.getElementById('orient3');
    
    card1.innerHTML = '';
    card1.className = 'card-placeholder';
    
    card2.innerHTML = '';
    card2.className = 'card-placeholder';
    
    card3.innerHTML = '';
    card3.className = 'card-placeholder';

    if (orient1) orient1.textContent = '';
    if (orient2) orient2.textContent = '';
    if (orient3) orient3.textContent = '';

    // Скрыть результаты и показать колоду
    const resultsSection = document.getElementById('resultsSection');
    if (resultsSection) resultsSection.style.display = 'none';
    const tarotDeckSection = document.querySelector('.tarot-deck');
    if (tarotDeckSection) tarotDeckSection.style.display = '';
}

// Показать старшие арканы (22 карты)
function showMajorArcana() {
    gameState.currentDeck = 'major';
    gameState.deckCards = [...tarotDeck.major_arcana];
    gameState.usedCards = [];
    
    // Перемешивание карт
    shuffleDeck();
    
    // Создание сетки карт
    createDeckGrid();
    
    // Обновление указателей
    majorArcanaLabel.classList.add('active');
    minorArcanaLabel.classList.remove('active');
}

// Показать младшие арканы (54 карты)
function showMinorArcana() {
    gameState.currentDeck = 'minor';
    gameState.deckCards = [];
    gameState.usedCards = [];
    
    // Сбор всех карт младших арканов
    tarotDeck.minor_arcana.forEach(suit => {
        suit.cards.forEach(card => {
            gameState.deckCards.push({
                ...card,
                suit: suit.suit,
                type: suit.type
            });
        });
    });
    
    // Перемешивание карт
    shuffleDeck();
    
    // Создание сетки карт
    createDeckGrid();
    
    // Обновление указателей
    minorArcanaLabel.classList.add('active');
    majorArcanaLabel.classList.remove('active');
}

// Перемешивание колоды
function shuffleDeck() {
    for (let i = gameState.deckCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [gameState.deckCards[i], gameState.deckCards[j]] = [gameState.deckCards[j], gameState.deckCards[i]];
        
        // Случайная ориентация карты
        gameState.deckCards[i].isReversed = Math.random() < 0.5;
    }
}

// Создание сетки карт
function createDeckGrid() {
    deckGrid.innerHTML = '';
    
    gameState.deckCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'deck-card';
        cardElement.dataset.index = index;

        // Внутренняя структура для переворота
        const inner = document.createElement('div');
        inner.className = 'card-inner';

        const front = document.createElement('div');
        front.className = 'card-face front';
        
        // Номер карты будет добавлен под картой
        const num = document.createElement('div');
        num.className = 'card-number';
        num.textContent = index + 1;

        const back = document.createElement('div');
        back.className = 'card-face back';
        const backContent = document.createElement('div');
        backContent.className = 'back-content';
        
        // Добавляем изображение карты
        const backImage = document.createElement('img');
        backImage.className = 'card-image';
        backImage.src = card.img;
        backImage.alt = card.name || card.rank || '';
        backImage.onerror = function() {
            // Если изображение не загрузилось, скрываем его
            this.style.display = 'none';
        };
        
        backContent.appendChild(backImage);
        back.appendChild(backContent);

        inner.appendChild(front);
        inner.appendChild(back);
        cardElement.appendChild(inner);
        
        // Добавляем номер карты под картой
        cardElement.appendChild(num);

        // Добавление обработчика клика
        cardElement.addEventListener('click', () => selectCard(index));

        // Анимация раздачи (со смещением по времени)
        cardElement.style.opacity = '0';
        setTimeout(() => {
            cardElement.classList.add('deal-in');
        }, index * 60); // 60мс между картами

        deckGrid.appendChild(cardElement);
    });
}

// Выбор карты
function selectCard(index) {
    if (gameState.usedCards.includes(index)) {
        return; // Карта уже использована
    }
    
    const card = gameState.deckCards[index];
    const cardElement = document.querySelector(`[data-index="${index}"]`);
    
    // Отметить карту как выбранную
    cardElement.classList.add('selected');
    
    // Добавить в выбранные карты
    gameState.selectedCards.push({
        card: card,
        deckIndex: index,
        isReversed: card.isReversed
    });
    
    // Отметить как использованную
    gameState.usedCards.push(index);
    
    // Отложить размещение карты и возможное переключение колоды до закрытия модалки
    gameState.pendingPlacement = {
        card,
        index,
        shouldSwitchToMinor: gameState.currentDeck === 'major' && gameState.selectedCards.length === 1
    };
    
    // Переворот на месте и показ модального окна
    flipCardAndShowModal(cardElement, card, card.isReversed);
}

// Размещение карты в раскладе
function placeCardInSpread(card, deckIndex) {
    const cardNumber = gameState.selectedCards.length;
    const placeholder = document.getElementById(`card${cardNumber}`);
    const orientLine = document.getElementById(`orient${cardNumber}`);
    
    placeholder.innerHTML = `
        <div class="card-content">
            <img class="card-image" src="${card.img}" alt="${card.name}" onerror="this.style.display='none'">
        </div>
    `;
    placeholder.className = 'card-placeholder filled';
    if (orientLine) orientLine.textContent = card.isReversed ? 'Перевернутая' : 'Прямая';
    
    // Анимация появления
    placeholder.style.transform = 'scale(0.8)';
    setTimeout(() => {
        placeholder.style.transform = 'scale(1)';
    }, 100);
}

// Переворот карты и показ модалки
function flipCardAndShowModal(cardElement, card, isReversed) {
    const inner = cardElement.querySelector('.card-inner');
    const backContent = cardElement.querySelector('.back-content');
    
    // Учитываем ориентацию карты (название перевернуто для reversed)
    if (isReversed) {
        backContent.classList.add('reversed');
    } else {
        backContent.classList.remove('reversed');
    }

    // Запускаем переворот
    cardElement.classList.add('flipped');
    
    // После завершения переворота показываем модалку
    setTimeout(() => {
        imageModal.style.display = 'block';
        interpretationModal.style.display = 'block';
        requestAnimationFrame(() => {
            imageModal.classList.add('show');
            interpretationModal.classList.add('show');
            imageModal.querySelector('.modal-content').classList.add('show');
            interpretationModal.querySelector('.modal-content').classList.add('show');
            showInterpretation(card, isReversed);
        });
    }, 600);
}

// Показать интерпретацию карты
function showInterpretation(card, isReversed) {
    const modalTitle = document.getElementById('modalTitle');
    const modalInterpretation = document.getElementById('modalInterpretation');
    const modalCardImage = document.getElementById('modalCardImage');
    
    // Заголовок модального окна (под изображением)
    modalTitle.textContent = card.name;
    
    // Добавляем или обновляем изображение карты в модальном окне
    let cardImage = modalCardImage.querySelector('.card-image');
    if (!cardImage) {
        cardImage = document.createElement('img');
        cardImage.className = 'card-image';
        // Добавляем изображение в начало modalCardImage
        modalCardImage.insertBefore(cardImage, modalCardImage.firstChild);
    }
    cardImage.src = card.img;
    cardImage.alt = card.name;
    cardImage.onerror = function() {
        // Если изображение не загрузилось, скрываем его
        this.style.display = 'none';
    };
    
    // Применение ориентации
    if (isReversed) {
        modalCardImage.classList.add('reversed');
        cardImage.classList.add('reversed');
    } else {
        modalCardImage.classList.remove('reversed');
        cardImage.classList.remove('reversed');
    }
    
    const interpretation = isReversed ? card.interpretation.reversed : card.interpretation.upright;
    const orientationLabel = isReversed ? 'Перевернутая' : 'Прямая';
    modalInterpretation.textContent = `(${orientationLabel}): ${interpretation}`;
}



// Настройка обработчиков событий
function setupEventListeners() {
    // Кнопка сброса
    resetButton.addEventListener('click', resetGame);
    
    // Закрытие модального окна при клике вне его
    window.addEventListener('click', (event) => {
        if (event.target === imageModal || event.target === interpretationModal) {
            closeModal();
        }
    });
}

// Закрытие модального окна с анимацией
function closeModal() {
    imageModal.classList.remove('show');
    interpretationModal.classList.remove('show');
    imageModal.querySelector('.modal-content').classList.remove('show');
    interpretationModal.querySelector('.modal-content').classList.remove('show');
    
    setTimeout(() => {
        imageModal.style.display = 'none';
        interpretationModal.style.display = 'none';
        
        // Выполнить отложенное действие: поставить карту и переключить колоду при необходимости
        if (gameState.pendingPlacement) {
            const { card, index, shouldSwitchToMinor } = gameState.pendingPlacement;
            placeCardInSpread(card, index);
            
            if (shouldSwitchToMinor) {
                showMinorArcana();
            }
            
            gameState.pendingPlacement = null;

            // Если уже выбраны 3 карты, показать результаты
            if (gameState.selectedCards.length >= 3) {
                renderResults();
            }
        }
    }, 300);
}

// Рендер результатов после выбора 3 карт
function renderResults() {
    const resultsSection = document.getElementById('resultsSection');
    const resultsList = document.getElementById('resultsList');
    const tarotDeckSection = document.querySelector('.tarot-deck');

    if (!resultsSection || !resultsList) return;

    // Скрыть колоду
    if (tarotDeckSection) tarotDeckSection.style.display = 'none';

    // Очистить и заполнить список
    resultsList.innerHTML = '';
    const cards = gameState.selectedCards;
    cards.slice(0, 3).forEach((entry) => {
        const item = document.createElement('div');
        item.className = 'result-item';
        
        const title = document.createElement('div');
        title.className = 'result-item-title';
        title.textContent = `${entry.card.name} (${entry.isReversed ? 'Перевернутая' : 'Прямая'})`;
        const text = document.createElement('div');
        text.className = 'result-item-text';
        const interp = entry.isReversed ? entry.card.interpretation.reversed : entry.card.interpretation.upright;
        text.textContent = interp;
        
        item.appendChild(title);
        item.appendChild(text);
        resultsList.appendChild(item);
    });

    // Показать секцию
    resultsSection.style.display = '';
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', initGame);
