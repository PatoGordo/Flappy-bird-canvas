function isVerticalColliding(obj1, obj2) {
  if(obj1.x >= obj2.x) {
    const flappyBirdHead = obj1.y
    const flappyBirdFoot = obj1.y + obj1.height

    if(flappyBirdHead <= obj2.roofTube.y) {
      return true
    }
    if(flappyBirdFoot >= obj2.floorTube.y) {
      return true
    }
  }
  return false
}

export default isVerticalColliding