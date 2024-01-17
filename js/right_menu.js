// main-part right menu

var mainPart = document.querySelector('.main-part')
var mainPartContextMenu = document.getElementById('mainPartRightMenu')
var longPressSecond = 1000 // 1s

function openMainPartMenu(e) {
    e.preventDefault()
    mainPartContextMenu.style.left = e.pageX + 'px'
    mainPartContextMenu.style.top = e.pageY + 'px'
    mainPartContextMenu.style.display = 'block'
}

// long press on mobile devices, buggy in Safari 
// 苹果真傻逼

mainPart.addEventListener('contextmenu', function(e) {
    openMainPartMenu(e)
})

mainPart.addEventListener('touchstart', function(e) {
    clearTimeout(timer)
    timer = setTimeout(openMainPartMenu(e), longPressSecond)
}, false)

mainPart.addEventListener('touchend', function() {
    clearTimeout(timer)
})

mainPart.addEventListener('touchmove', function() {
    clearTimeout(timer)
})

document.addEventListener('click', function(e) {
    if (!e.target.closest('#mainPartRightMenu')) {
        mainPartContextMenu.style.display = 'none'
    }
})

window.addEventListener('resize', function(e) {
    mainPartContextMenu.style.display = 'none'
})