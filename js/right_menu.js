var mainPart = document.querySelector('.main-part')
var leftParts = document.querySelectorAll('.list-user')
var mainPartContextMenu = document.getElementById('mainPartRightMenu')
var leftPartContextMenu = document.getElementById('leftPartRightMenu')
var longPressSecond = 1000 // 1s

updateUserList()

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

    if(!e.target.closest('#leftPartRightMenu')) {
        leftPartContextMenu.style.display = 'none'
    }
})

function updateUserList() {
    var leftParts = document.querySelectorAll('.list-user')
    
    leftParts.forEach(div => {
        div.addEventListener('contextmenu', function(e) {
            e.preventDefault()
            currentDiv = this
            console.log(this.getAttribute('data-username'))
            leftPartContextMenu.style.left = e.pageX + 'px'
            leftPartContextMenu.style.top = e.pageY + 'px'
            leftPartContextMenu.style.display = 'block'
        })
    })
}

window.addEventListener('resize', function(e) {
    mainPartContextMenu.style.display = 'none'
    leftPartContextMenu.style.display = 'none'
})

// Main Part Right Menu Reflect

document.getElementById('changeBG').addEventListener('click', function(e) {
    console.log(1)
    mainPartContextMenu.style.display = 'none'
    openSettingWindow()
})

//Left Part Right Menu Reflect

document.getElementById('pinToTop').addEventListener('click', function(e) {
    console.log(currentDiv)
    console.log(currentDiv.getAttribute('data-username'))
})