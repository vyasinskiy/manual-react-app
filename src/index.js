// index.js
// создаем элемент заголовка
const heading = document.createElement('h1')
heading.textContent = 'JS is connected to HTML and insert this H1!'

// добавляем заголовок в DOM
const root = document.querySelector('#root')
root.append(heading)