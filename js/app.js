const bg = document.querySelector('#wrap')
const title = document.querySelector('h1')
const playBtn = document.querySelector('.play')
const stopBtn = document.querySelector('.stop')

function getRandomColor() {
    const hex = '#' + Math.random().toString(16).slice(2, 8).padEnd(6, '0')
    console.log(hex)

    return hex
}

function bgChange() {

    const randomColor = getRandomColor()

    bg.style.backgroundColor = randomColor
    title.textContent = randomColor.toUpperCase()

}

bgChange()
let play=null;



playBtn.addEventListener('click',()=>{
    if(!play){

        play=setInterval(bgChange,2000)
    }

})
stopBtn.addEventListener('click',()=>{
    clearInterval(play)

    play=null

})