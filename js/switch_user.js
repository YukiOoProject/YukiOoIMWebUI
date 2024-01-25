var userList = document.querySelectorAll('.left-part #user')
var mainPart = document.querySelector('.main-part')
var defaultPage = document.getElementById('default-chat-page')
var userListObj = document.getElementById('userList')

processUserList()

function processUserList() {
    var userList = document.querySelectorAll('.left-part #user')
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
}

function createLeftUser(username, avatarUrl) {
    var userLi = document.createElement('li')
    var userDiv = document.createElement('div')
    userDiv.className = 'list-user'
    userDiv.id = 'user'
    userDiv.setAttribute('data-username', username)
    var userAvatarImg = document.createElement('img')
    userAvatarImg.src = avatarUrl
    userAvatarImg.className = 'avatar'
    userDiv.appendChild(userAvatarImg)
    var userSpan = document.createElement('span')
    userSpan.textContent = username
    userDiv.appendChild(userSpan)
    userLi.appendChild(userDiv)
    userListObj.appendChild(userLi)
    updateUserList()
    processUserList()
}

// const observer = new MutationObserver((mutationsList, observer) => {
//     userList = document.querySelectorAll('.left-part #user')
//     processUserList()
// })

// const config = { childList: true, subtree: true }

// observer.observe(document.body, config)