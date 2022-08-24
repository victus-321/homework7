"use strict"

const title = document.querySelector('#title'),
    btn = document.querySelector('.btn'),
    bookList = document.querySelector('#book-list');

btn.addEventListener('click', (event) => {
    event.preventDefault()
    // alert input yozish sharti
    if (title.value == '') {
        alert('Place input your information')
    } else {
        const newRow = document.createElement('tr')
        //karobka ochamis title uchun
        const newTitle = document.createElement('th')
        newTitle.innerHTML = title.value
        newRow.appendChild(newTitle)


        // book listga joylimis
        bookList.appendChild(newRow)
    }
})