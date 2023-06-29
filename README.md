# GitHubApp

## Available Scripts

In the project directory, you can run:

### `yarn`

### `yarn dev`

## Application Description

В GitHubApp используется [Github GraphQL API](https://docs.github.com/ru/graphql), приложение состоит из 4 страниц:

1. Home – имя, логин пользователя, фото и общая информация
2. My repositories – страница со списком репозиториев пользователя
3. Search – здесь отображается список репозиториев при поиске
4. Repository – страница с детальной информацией о репозитории (карточка репозитория).

### My repositories/Search

Ключевые элементы страницы:
• Список репозиториев
• Paginator – список страниц

При клике на название репозитория происходит переход на "Карточку репозитория".
Внизу страницы есть "Paginator" вида [1, 2, 3, 4, 5].

При клике на вторую страницу показываются репозитории с 11 по 20. При клике на третью страницу показываются репозитории с 21 по 30 … и т.д.

При перезагрузке страницы состояние выбранных фильтров (поиска и страницы) сохраняется и используется для первоначального запроса.

### Search

При введении текста в Поле для поиска, происходит поиск по названию среди всех репозиториев GitHub и выводиться его результат в "Список репозиториев" .
(при запросе не организована анимация при загрузке, данные приходят не мгновенно, приложение не виснет, просто пару секунд нужно подождать)

### Repository

Карточка имеет следующую структуру:
• [Название репозитория] - [кол-во звёзд на github] - [дата последнего коммита]
• [Фото владельца репозитория, если есть] - [Nickname владельца репозитория с ссылкой на него]
• [Список используемых языков в репозитории]
• [Краткое описание репозитория]
