function illuminateField(attr) {
    for (let target of document.querySelectorAll(`${attr}`)) {
        target.setAttribute('style', 'border-color: red;');
    }
}

export { illuminateField };