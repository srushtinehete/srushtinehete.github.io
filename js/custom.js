const siema = new Siema({
    duration: 500,
    loop: true,
    onChange: () => {
        page.innerText = siema.currentSlide + 1 + '/' + siema.innerElements.length;
    }
});
prev.addEventListener('click', () => siema.prev())
next.addEventListener('click', () => siema.next())
document.onkeydown = (e) => {
    e = e || window.event
    if (e.keyCode == '37') {
        siema.prev()
    } else if (e.keyCode == '39') {
        siema.next()
    }
}