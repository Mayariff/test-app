Технологии: react/redux/ redux thunk/ axios /хуки
тесты: jest, storybook

Демо Версия:  https://mayariff.github.io/test-app/

![hall](D:\test-app\src\assets\giv\project.gif)



В приложении все разделено на 3 уровня: бизнес-логика, уровень работы с сервером и уровень визуальной отрисовка компонент.
Визуальное оформление сделано на css, без дополнительных библиотек.

Концепция: лист с задачами- это отдельная самостоятельная сущность, которую в последствии можно переиспользовать с другими данными.
Лист с задачами состоит из: заголовка; поля для добавления задач; самих задач; и меню с кнопками для их фильтрации.


бизнес-логика: разделена на 2 части:
1) общая для всего приложения (пока здесь только работа с ошибками и с со статусами состояния опираций ( нпр , loading для блокирования кнопок, пока выполняется опирация)
2) относится непосредственно к листу задач (добавление , удаление задач и изменение их статуса)

уровень работы с сервером:
1) был дан один point, поэтому здесь только get запрос за списком задач

Уровень визуальной отрисовки компонент:
1) компоненты, из которых рисуется лист задач
2) универсальные компоненты (кнопки, инпуты и тд), которые можно переиспользовать для отрисовки других сущностей.

в папках есть некоторая инкапсуляция - всё, что находится за пределами папки , обращается к ней через index, а не к отдельным файлам.
Компоненты защищены от лишней перерисовки.