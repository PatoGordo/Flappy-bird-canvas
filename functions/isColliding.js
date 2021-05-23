function isColliding(obj1, obj2) {
  const obj1Y = obj1.y + obj1.height
  const obj2Y = obj2.y

  if(obj1Y >= obj2Y) {
    return true
  }

  return false
}

export default isColliding