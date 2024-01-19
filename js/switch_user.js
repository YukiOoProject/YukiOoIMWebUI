var userList = document.querySelectorAll('.left-part #user')
var mainPart = document.querySelector('.main-part')
var defaultPage = document.getElementById('default-chat-page')

userList.forEach(function(div) {
    div.addEventListener('click', function() {
        mainPart.innerHTML = ''

        var chatWindow = document.createElement('div')
        chatWindow.className = '.chat-window'
        chatWindow.id = 'chat-window'
        chatWindow.style.width = '100%'
        chatWindow.style.height = '100%'
        chatWindow.innerHTML += "<div class='name-bar'>" + div.getAttribute('data-username') + "</div>"
        mainPart.append(chatWindow)
    })
})