const divScreen = document.querySelector('#screen')
const btnCreateNumber = document.querySelector('#createNumber')
const btnCallNumber = document.querySelector('#callNumber')
const spanNewNumber = document.querySelector('#newNumber')
const spanQueue = document.querySelector('#queue')

let n = 0
let queue = []
btnCreateNumber.onclick = () => {
    n += 1
    spanNewNumber.innerText = n
    queue.push.call(queue, n)
    spanQueue.innerText = JSON.stringify(queue)
}
btnCallNumber.onclick = () => {
    if (queue.length === 0) return
    let m = queue.shift.call(queue)
    divScreen.innerText = `请${m}号顾客就餐`
    spanQueue.innerText = JSON.stringify(queue)
}