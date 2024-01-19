const settingWindow = document.getElementById('settings')
settingWindow.style.display = 'none'

function openSettingWindow() {
    if (settingWindow.style.display === 'none') {
        settingWindow.style.display = 'flex'
    } else {
        settingWindow.style.display = 'none'
    }
}

function setBGBlur() {
    console.log('Set Background Blur')
    var chatWindow = document.getElementById('chat-window')
    chatWindow.style.backdropFilter = 'blur(10px)'
    chatWindow.style.webkitBackdropFilter = 'blur(10px)' // 苹果你真他妈该死
}

function setBGWhite() {
    console.log('Set Background Blur')
    var chatWindow = document.getElementById('chat-window')
    chatWindow.style.background = 'rgba(255, 255, 255, 0.6)'
}