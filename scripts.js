

function generateNumber() {
    const min = Math.ceil(document.querySelector('.inputmin').value)
    const max = Math.floor(document.querySelector('.inputmax').value)
    const result = Math.floor(Math.random() * (max - min) + min);
    alert(result)
}

