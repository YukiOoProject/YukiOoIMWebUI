var userList = document.querySelectorAll('.left-part #user')
var mainPart = document.querySelector('.main-part')
var defaultPage = document.getElementById('default-chat-page')

userList.forEach(function(div) {
    div.addEventListener('click', function() {
        mainPart.innerHTML = ''

        var chatWindow = document.createElement('div')
        chatWindow.className = '.default-main-part-window'
        chatWindow.id = 'chat-window'
        chatWindow.innerHTML += div.getAttribute('data-username')
        mainPart.append(chatWindow)
    })
})