import changeScene from './functions/changeScene.js'
import startScreen from './objects/startScreen.js'
import flappyBirdInit from './objects/flappyBird.js'
import background from './objects/background.js'
import floor from './objects/floor.js'

window.currentScene = {}
window.globals = {}

var game = () => {
  const sprites = new Image()
  sprites.src = './sprites.png'

  const canvas = document.querySelector('canvas')
  const ctx = canvas.getContext('2d')

  const gravity = 0.25

  const scenes = {
    startScene: {
      init() {
        window.globals.flappyBird = flappyBirdInit()
      },
      draw() {
        background.draw(ctx, sprites)
        floor.draw(ctx, sprites)
        window.globals.flappyBird.draw(ctx, sprites)
        startScreen.draw(ctx, sprites)
      },
      click() {
        changeScene(scenes.gameScene)
      },
      update() {}
    },
    gameScene: {
      draw() {
        background.draw(ctx, sprites)
        floor.draw(ctx, sprites)
        window.globals.flappyBird.draw(ctx, sprites)
      },
      click() {
        window.globals.flappyBird.fly()
      },
      update() {
        window.globals.flappyBird.update(gravity, floor, scenes)
      }
    }
  }

  function gameLoop() {
    window.currentScene.draw()
    window.currentScene.update()

    requestAnimationFrame(gameLoop)
  }

  changeScene(scenes.startScene)

  window.addEventListener('click', () => {
    if(window.currentScene.click) {
      window.currentScene.click()
    }
  })
  
  gameLoop()
}
game()