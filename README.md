## Квалификационное практическое задание для разработчиков HTML/CSS от Funbox +

Моё демо на проверку: [Click](https://funbox-test-work.vercel.app/)

Скачать тестовое задание целиком можно здесь: [Download](https://dl.fun-box.ru/qt-htmlcss.zip.)

## Task 1

Сверстайте страницу, показанную на рисунке. Внешний вид должен полностью соответствовать макету, а поведение — описанию задачи. Макет находится в папке prototype, описание задачи ниже. Чтобы продемонстрировать свои навыки наиболее полно, пожалуйста, выполните дополнительное задание к макету.

![Logo](https://i.ibb.co/ZJn48H1/prototype.jpg)

---

## Task Requirements

- :white_check_mark: 1.Фон занимает всю площадь экрана, блок находится по центру вертикально и горизонтально.
- :white_check_mark: 2.На планшетах упаковки располагаются треугольником, на смартфонах друг под другом.
- :white_check_mark: 3.Информация о продукте может меняться.
- :white_check_mark: 4.Каждая из упаковок может быть выбрана или недоступна для выбора. Выбор + осуществляется нажатием на упаковку или на текст «купи» в описании.
- :white_check_mark: 5.Можно выбрать одновременно несколько упаковок, а также отменить свой выбор повторным нажатием на упаковку.
- :white_check_mark: 6.Состояние наведения применяется к выбранной упаковке не сразу, а после того, как курсор ушел с нее после первоначального выбора.

---

### Блок с вопросами:

## Q1: Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения.

- пользователя: хорошая верстка это когда UX совпадает с UI и сайт интуитивно подсказывает что нужно пользователю.
- менеджера проекта: хорошая верстка это быстрая верстка выполненная по ТЗ.
- дизайнера: хорошая верстка это pixel perfect верстка.
- верстальщика: хорошая верстка имеет очевидную логику и удобно структурирована, поэтому необходимость вносить изменения в код не вызывает затруднений
- клиентского программиста: хорошая верстка позволяет без затруднений и необходимости переделывать разметку разрабатывать на ее основе интерфейсы
- серверного программиста: логично описанны переменные для дальнейшей работы на бэкенде

---

## Q2: Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки. Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике.

 Основная особенность это компонентный подход с прицелом на дальнейшую легкую модернизацию дизайна или редизайн в будущем. Например методология БЭМ, довольно популярна и известна, она помогает структурировать код сайта, выделить логические блоки, элементы, модификаторы что в дальнейшем помогает поддерживать и редактировать сайт. Так же используют препроцессоры CSS такие как Sass, LESS они помогают масштабировать проект. В свою очередь в своих работах я использую БЭМ и Sass.

---

## Q3: Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.

 Оснавная особенность верстки сайта под современный ПК в том, что отображение сайта зависит от браузера на котором этот сайт открыл USER, последния ли версия браузера и поддерживает ли браузер все современные стандарты? Поддерживает ли браузер ту или иную фичу я проверяю https://caniuse.com/ или чере @support.
     А так же ньюанс состоит в том что у каждого браузера свои default styles, которые желательно или обнулить или привести к normalize значениям, для того чтоб сайт в разных браузерах показывался максимально одинакого.
    Оснавная особенность верстки сайта на маленькие экраны телефонов и планшетов это адаптивность(responsive), необходимо внимательно следить за изменением сайта при динамическом изменении width или height, я использую стандартный отладчик в браузере toggle device toolbar в google chrome.

---

## Q4: Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.

Различные расширения для Visual Studio Code, такие как: prettier, AII autocomplete, Auto Close Tag, Auto Complete Tag, Auto Rename, ES7+ React/Redux - snippets, ESLint, LiveServer и так далее.
    А так же препроцессор Sass.

---

## Q5: Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?

С подобными проблемами я не сталкивался, для начала попробывал бы найти платформу и бразуер через которые сайт корректно отображался, посмотреть код елементов в браузере, возможно консоль в которой выскакивают ошибки, посмотрел бы network возможно сервер не отрабатывает, на худой конец отправился бы на stackoverflow и гугл.ру)

---

## Q6: Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?

Обратиться к дизайнеру на прямую и узнать это ошибка или так и задумано, если нет возможности связаться с дизайнером, отправился бы обсуждать данный вопрос с проект менеджером или другим компетентым человеком.

## Q7: Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее).

- https://learn.javascript.ru/
- https://developer.mozilla.org/ru/
- https://stackoverflow.com/
- https://code.mu/
- https://codewars.com/
- https://github.com/
- https://ru.reactjs.org/
- Курсы от Богдана Стащука [Udemy](https://www.udemy.com/user/bogdanstashchuk/)
- Курсы от Ивана Петриченко [Udemy](https://www.udemy.com/user/yan-kovalenko-2/)
- Канал [WebDev](https://www.youtube.com/channel/UCE9ODjNIkOHrnSdkYWLfYhg)
- Канал [Михаил Непомнящий](https://www.youtube.com/@mishanep)
- Канал [Ulbi TV](https://www.youtube.com/@UlbiTV)
- Канал [Archakov Blog](https://www.youtube.com/@ArchakovBlog)
- Канал [Владилен Минин](https://www.youtube.com/@ArchakovBlog)

### Какое направление развития вам более близко: JS-программирование, HTML/CSS верстка или и то, и другое?

    JS -> React -> React Native, считаю будущее за мобильными приложениями.

### Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?

    Математика, Экономика

## Q8: Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.

- Виталий, 24года, техническая вышка Строительство СПбГАСУ, средний бал 4.77. Работал чуть более 2 лет в структуре ген подряда на руководительских должностях. Не окончил магистратуру т.к. приоритетом выбрал карьеру.
- По скольку не увидел перспектив карьерного роста далее в сфере строительства, решил сменить сферу деятельности, всегда дружил и увлекался компьютерными технологиями, на факультете я был тем человеком который досрочно сдавал все курсовые работы связанные с проектированием в таких средах как  AutoCad,3ds Max.
    - Мой стек:
    - HTML5
    - CSS3
    - Sass
    - javascript
    - React JS
    - React-Router
    - ReduxToolkit

Примеры работ:

- [Верстка ](https://interior-design-layout.vercel.app/) макета для согласования с заказчиком на фрилансе.
- [Интернет магазин](https://ecommerce-pizza.vercel.app/) с использованием всех последих технологий ReactRouter, ReduxToolkit, Sass, Fetch Api
- [Todo](https://todo-for-kazan-express.vercel.app/) версия по ТЗ для Kazan-Express, первое SPA на React JS тут я учился использовать (localStorage, useState, useEffect и многое другое), в данный момент изучаю TypeScript соответственно потихоньку переписываю.
- [Calculator](https://calc-typescript.vercel.app/) пока написан на JS, изучаю TypeScript соответственно потихоньку переписываю.
