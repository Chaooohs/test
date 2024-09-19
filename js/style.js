const currentDate = document.querySelector('#date')
const totalTimer = document.querySelector('#timer')
const burgerIcon = document.querySelector('.burger')
const burgerMenu = document.querySelector('.burger__menu')
const burgerLink = document.querySelectorAll('.burger__link')
const body = document.querySelector('body')
let totalTime = 3600 * 2


// date
let nowDate = new Date();
nowDate.toLocaleString();

let data = nowDate.getDate()
let mounth = nowDate.getMonth()
const year = nowDate.getFullYear()

data = data < 10 ? '0' + data : data
mounth = mounth < 10 ? '0' + (mounth + 1) : mounth + 1

currentDate.innerHTML = `${data}.${mounth}.${year}`


// timer
const Timer = () => {
  const hour = Math.floor(totalTime / 60 / 60)
  let min = Math.floor(totalTime / 60 / 2)
  let sec = Math.floor(totalTime % 60)

  sec = sec < 10 ? '0' + sec : sec
  min = min < 10 ? '0' + min : min

  totalTimer.innerHTML = `${hour}:${min}:${sec}`
  totalTime--
}

Timer()
setInterval(Timer, 1000)


// burger menu 
burgerIcon.addEventListener('click', () => {
  burgerIcon.classList.toggle("open")
  burgerMenu.classList.toggle('open')
  body.classList.toggle('open')
})

burgerLink.forEach((link) => {
  link.addEventListener('click', () => {
    burgerIcon.classList.remove("open")
    burgerMenu.classList.remove('open')
    body.classList.remove('open')
  })
})