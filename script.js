const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('li')

listItems.forEach( (listItem,idx) => {
    listItem.addEventListener('click', ()=> {
        hideAllContents()
        hideAllItems()
        listItem.classList.add('active')
        contents[idx].classList.add('show')
    })
})

function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'))
}

function hideAllItems() {
    listItems.forEach(listItem => listItem.classList.remove('active'))
}