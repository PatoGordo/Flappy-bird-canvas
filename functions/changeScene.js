function changeScene(newScene) {
  window.currentScene = newScene

  if(window.currentScene.init) {
    window.currentScene.init()
  }
}

export default changeScene