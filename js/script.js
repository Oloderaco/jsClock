const secondArrow = document.querySelector('.s'),
    minuteArrow = document.querySelector('.m'),
    hourArrow = document.querySelector('.h'),
    hoursBox = document.querySelector('.hours'),
    minutesBox = document.querySelector('.minutes'),
    getStopBtn = document.querySelector('.stopwatch__btn'),
    getStopWatchHours = document.querySelector('.stopwatch__hours'),
    getStopWatchMinutes = document.querySelector('.stopwatch__minutes'),
    getStopWatchSeconds = document.querySelector('.stopwatch__seconds'),
    getBlock = document.querySelector('.tabsLink__span');

// adds
let sec = 0;
let min = 0;
let hour = 0;

function clock() {
    let time = new Date()
    let seconds = time.getSeconds()
    let minutes = time.getMinutes()
    let hours = time.getHours()
    secondArrow.style = `transform: rotate(${seconds * 6}deg)`
    minuteArrow.style = `transform: rotate(${minutes * 6}deg)`
    hourArrow.style = `transform: rotate(${hours * 30}deg)`
    hoursBox.innerHTML = hours < 10 ? '0' + hours : hours
    minutesBox.innerHTML = minutes < 10 ? '0' + minutes : minutes
    setTimeout(() => clock(), 1000);
}
clock()

let links = document.querySelectorAll('.tabsItem')
let tabs = document.querySelectorAll('.tabsContentItem')

links.forEach((el, i) => {
    el.addEventListener('click', () => {
        removeActive()
        el.classList.add('active')
        tabs[i].classList.add('active')
    })
})

function removeActive() {
    links.forEach((el, i) => {
        el.classList.remove('active')
        tabs[i].classList.remove('active')
    })
}

getStopBtn.addEventListener('click', () => {
    if (getStopBtn.innerHTML == 'Start') {
        getBlock.classList.add('active')
        getStopBtn.innerHTML = 'Stop'
        setTimeout(() => startSec(), 1000)
    } else if (getStopBtn.innerHTML == 'Stop') {
        getStopBtn.innerHTML = 'Reset'
        getBlock.classList.remove('active')
        getBlock.classList.add('active_clear')
    } else if (getStopBtn.innerHTML == 'Reset') {
        getBlock.classList.remove('active_clear')
        getStopWatchSeconds.innerHTML = sec = 0
        getStopWatchMinutes.innerHTML = min = 0
        getStopWatchHours.innerHTML = hour = 0
        getStopBtn.innerHTML = 'Start'
    }
})

function startSec() {
    if (getBlock.classList.contains('active_clear')) {
        sec
        min
        hour
    } else if (sec < 60) {
        sec++
        getStopWatchSeconds.innerHTML = sec
        setTimeout(() => {
            startSec()
        }, 1000)
        if (sec == 59) {
            sec = 0
            min++
            getStopWatchMinutes.innerHTML = min
            if (min == 59) {
                min == 0
                hour++
                getStopWatchMinutes.innerHTML = hour
            }
        }
        console.log(sec);
    }
}