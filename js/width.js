let chompen = document.getElementById('distri')
console.log(distri)
chompen.onresize = () => {
    let w = window.outerWidth
    console.log('sin event:', w)}

window.addEventListener ('resize', () => {
    let y = document.documentElement.clientWidth
    console.log(document.documentElement.clientWidth)
})    