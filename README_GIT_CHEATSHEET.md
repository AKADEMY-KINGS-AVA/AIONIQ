# Git шпаргалка для проекта AIONIQ

Эта шпаргалка поможет быстро работать с Git и GitHub через терминал.

---

## 1. Проверить состояние проекта

```bash
git status
```

Показывает:

- какие файлы изменены
- какие файлы добавлены
- что готово к коммиту
- на какой ветке ты находишься

---

## 2. Инициализация Git в проекте

Если Git еще не подключен к папке проекта:

```bash
git init
```

---

## 3. Подключить GitHub репозиторий

SSH вариант:

```bash
git remote add origin git@github.com:USERNAME/REPOSITORY.git
```

Пример:

```bash
git remote add origin git@github.com:AKADEMY-KINGS-AVA/AIONIQ.git
```

Проверить подключенный репозиторий:

```bash
git remote -v
```

---

## 4. Проверить SSH доступ к GitHub

```bash
ssh -T git@github.com
```

Если все хорошо, будет примерно так:

```text
Hi USERNAME! You've successfully authenticated, but GitHub does not provide shell access.
```

Это нормально. Значит GitHub тебя узнал.

---

## 5. Добавить файлы в commit

Добавить все изменения:

```bash
git add .
```

Добавить конкретный файл:

```bash
git add src/App.jsx
```

Добавить конкретную папку:

```bash
git add src/
```

---

## 6. Создать commit

Обычный commit:

```bash
git commit -m "updated project"
```

Пример нормального сообщения:

```bash
git commit -m "add login form"
```

---

## 7. Commit с несколькими пунктами

Если хочешь сделать commit с подробным описанием:

```bash
git commit -m "add auth layout" \
-m "- added login and password inputs" \
-m "- added login button handler" \
-m "- connected frontend with Flask server"
```

Структура:

```text
Первая строка — короткое название commit

Дальше — подробности:
- что добавил
- что изменил
- что исправил
```

Еще пример:

```bash
git commit -m "setup backend server" \
-m "- created Flask server" \
-m "- added /send-login endpoint" \
-m "- enabled CORS for React requests" \
-m "- added JSON response handling"
```

---

## 8. Отправить изменения на GitHub

Если ветка уже привязана:

```bash
git push
```

Если первый push:

```bash
git push -u origin main
```

После `-u` Git запоминает связь между локальной веткой и GitHub.

---

## 9. Скачать изменения с GitHub

```bash
git pull
```

Или явно:

```bash
git pull origin main
```

---

## 10. Посмотреть ветки

```bash
git branch
```

Текущая ветка будет отмечена звездочкой:

```text
* main
```

---

## 11. Создать новую ветку

```bash
git branch new-branch-name
```

Пример:

```bash
git branch auth-page
```

Перейти на ветку:

```bash
git checkout auth-page
```

Создать и сразу перейти:

```bash
git checkout -b auth-page
```

---

## 12. Переключиться между ветками

```bash
git checkout main
```

или:

```bash
git switch main
```

---

## 13. Объединить ветку с main

Сначала перейти в main:

```bash
git checkout main
```

Потом объединить:

```bash
git merge auth-page
```

---

## 14. Посмотреть историю commit

```bash
git log
```

Короткий вариант:

```bash
git log --oneline
```

---

## 15. Отменить изменения в файле

Откатить файл к последней версии из commit:

```bash
git checkout -- src/App.jsx
```

или современный вариант:

```bash
git restore src/App.jsx
```

---

## 16. Убрать файл из staged area

Если сделал `git add`, но передумал:

```bash
git restore --staged fileName
```

Пример:

```bash
git restore --staged src/App.jsx
```

---

## 17. Исправить последний commit

Если забыл добавить файл:

```bash
git add .
git commit --amend
```

Если хочешь изменить только сообщение последнего commit:

```bash
git commit -m "
-Создана новая анимация backgound-у
-Улучшена работа с сервером
-Инициализированное переключение на главную после регистрации
-Созданны проверки на ввод символов при регистрации
- Улучшено окно регистрации
"
```

---

## 18. Force push

```bash
git push --force
```

Использовать осторожно.

`--force` перезаписывает историю на GitHub и может удалить чужие изменения.

Более безопасный вариант:

```bash
git push --force-with-lease
```

---

## 19. Частые ошибки

### Repository not found

Причины:

- неверный URL репозитория
- нет доступа к репозиторию
- репозиторий удален
- неправильно настроен SSH ключ

Проверить remote:

```bash
git remote -v
```

---

### Could not resolve hostname github.com

Это проблема DNS/интернета, а не Git.

Проверить интернет:

```bash
ping 8.8.8.8
```

Проверить DNS:

```bash
ping github.com
```

Если IP пингуется, а github.com нет — сломан DNS.

---

### Non-fast-forward

Ошибка:

```text
Updates were rejected because the tip of your current branch is behind
```

Это значит, что на GitHub есть изменения, которых нет у тебя локально.

Обычно решение:

```bash
git pull origin main
```

Потом:

```bash
git push
```

---

## 20. Самый частый workflow

Каждый раз, когда сделал изменения:

```bash
git status
git add .
git commit -m "describe changes"
git push
```

Пример:

```bash
git status
git add .
git commit -m "update registration page"
git push
```

---

## 21. Хорошие названия commit

Плохо:

```text
update
fix
asdf
changes
123
```

Хорошо:

```text
add login form
fix registration button styles
connect React login with Flask server
setup backend folder
update README
```

---

## 22. Полезные команды одной строкой

```bash
git status
```

```bash
git add .
```

```bash
git commit -m "message"
```

```bash
git push
```

```bash
git pull
```

```bash
git log --oneline
```

```bash
git branch
```

```bash
git checkout -b new-branch
```

```bash
git checkout main
```

```bash
git merge branch-name
```

---

## 23. Рекомендуемый порядок для AIONIQ

Перед работой:

```bash
git pull
```

После изменений:

```bash
git status
git add .
git commit -m "update AIONIQ frontend"
git push
```

Если работаешь над большой функцией:

```bash
git checkout -b feature-auth
```

Потом:

```bash
git add .
git commit -m "add auth feature"
git push -u origin feature-auth
```
