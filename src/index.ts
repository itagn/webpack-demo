import './index.scss'

interface Author {
  name: string;
  github: string;
}
const me: Author = {
  name: 'itagn',
  github: 'https://github.com/itagn'
}
console.log(me)

declare function require(string: string): any

const demo: HTMLElement = document.getElementById('demo')!
const img: HTMLImageElement = new Image()
img.src = require('./img/cd.jpg')
img.onload = () => {
  demo.appendChild(img)
}
demo.addEventListener('click', () => {
  window.open(me.github)
})