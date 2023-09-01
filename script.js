const buttons = document.querySelectorAll('.btn')
const themeBtn = document.getElementById('theme-button')
const startBtn = document.getElementById('start-button')
const pauseBtn = document.getElementById('pause-button')
const resetBtn = document.getElementById('reset-button')
const stopWatch = document.getElementById('stop-watch-container')

let seconds = 0
let minutes = 0
let hours = 0

let timeInterval = setInterval(setStopWatch, 1000)

resetStopWatch()

themeBtn.addEventListener('click', (e) => {
    document.querySelector('html').classList.toggle('dark')

    if(themeBtn.innerText === 'DARK THEME'){
        themeBtn.innerText = 'LIGHT THEME'
    }else{
        themeBtn.innerHTML = 'DARK THEME'
    }

    rippleEffect(e, themeBtn)
})

startBtn.addEventListener('click', () => setStopWatch())

pauseBtn.addEventListener('click', () => {
    if(startBtn.innerText === 'START'){
        startBtn.innerText = 'RESUME'
    } else if(startBtn.innerText === 'RESUME'){
        startBtn.innerText = 'START'
    }

    clearInterval(timeInterval)
})
    
resetBtn.addEventListener('click', () => resetStopWatch())

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {

        rippleEffect(e, btn)

    })
})

function rippleEffect(e, button) {
    const ripple = document.createElement('span')
    ripple.classList.add('ripple')
    button.appendChild(ripple)


    const x = e.clientX - button.offsetLeft
    const y = e.clientY - button.offsetTop

    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`

    setTimeout(() => ripple.remove(), 300)
}

function resetInterval(){
    clearInterval(timeInterval)
    timeInterval = setInterval(setStopWatch, 1000)
}

function setStopWatch (){
    resetInterval()
    seconds++
    if(seconds > 59){
        minutes++
        seconds=0
    }
    if(minutes > 59){
        hours++
        minutes=0
    }
    stopWatch.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}

function resetStopWatch(){
    clearInterval(timeInterval)
    seconds = 0
    minutes = 0
    hours = 0
    stopWatch.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}
