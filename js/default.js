// left-part display

const leftpart = document.getElementById('left-part')

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX
    const screenWidth = window.innerWidth

    console.log(screenWidth)

    if (screenWidth < 800) {
        if (mouseX <= 10) {
            leftpart.style.left = '5px'
        } 
        else if (mouseX >= 320) {
            leftpart.style.left = '-300px'
        }
    }

    
})

// touch action on touchscreens 废弃

// var startX, endX
// document.addEventListener('touchstart', function(e) {
//     startX = e.touches[0].clientX
// })

// document.addEventListener('touchend', function(e) {
//     endX = e.changedTouches[0].clientX
//     if (endX < startX) {
//         leftpart.requestFullscreen.left = '-300px'
//     } else if (endX > startX) {
//         leftpart.style.left = '5px'
//     }
// })