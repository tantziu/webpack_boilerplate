import unicorn from './images/unicorn.png'
import './styles/main.scss'
// const heading = document.createElement('h1')
// heading.textContent = 'Interesting!'

// const app = document.querySelector('#root');
// app.append(heading)
class Game {
    name = 'Violin Charades'
}

const myGame = new Game();
const p = document.createElement('p')
p.textContent = `I like ${myGame.name}.`

// Create heading node
const heading = document.createElement('h1')
heading.textContent = 'Interesting!'

// Append SVG and heading nodes to the DOM
const app = document.querySelector('#root')
app.append(heading, p)