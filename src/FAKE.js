function whatever () {
  return thing;
}

function parentFunction () {
  otherThing = whatever()
  return otherThing;
}

finalResult = parentFunction();
