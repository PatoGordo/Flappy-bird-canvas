import changeScene from './functions/changeScene.js'
import startScreen from './objects/startScreen.js'
import flappyBirdInit from './objects/flappyBird.js'
import background from './objects/background.js'
import floorInit from './objects/floor.js'
import tubesInit from './objects/tubes.js'

window.currentScene = {}
window.globals = {}
window.frames = 0

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
        window.globals.floor = floorInit()
        window.globals.tubes = tubesInit()
      },
      draw() {
        background.draw(ctx, sprites)
        window.globals.flappyBird.draw(ctx, sprites)
        window.globals.floor.draw(ctx, sprites)
        startScreen.draw(ctx, sprites)
      },
      click() {
        changeScene(scenes.gameScene)
      },
      update() {
      }
    },
    gameScene: {
      draw() {
        background.draw(ctx, sprites)
        window.globals.tubes.draw(ctx, sprites)
        window.globals.floor.draw(ctx, sprites)
        window.globals.flappyBird.draw(ctx, sprites)
      },
      click() {
        window.globals.flappyBird.fly()
      },
      update() {
        window.globals.floor.update()
        window.globals.flappyBird.update(gravity, window.globals.floor, scenes)
        window.globals.tubes.update(window.globals.flappyBird, scenes)
      }
    }
  }

  function gameLoop() {
    window.currentScene.draw()
    window.currentScene.update()

    window.frames++
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