class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  let count = 0;
  for(;;) {
    try {
      return primitiveMultiply(a, b);
      break;
    } catch(e) {
      if(e instanceof MultiplicatorUnitFailure) {
        count += 1
        console.log(`Wrong result. Try number ${count}`);
      }
    }
  }
}

console.log(reliableMultiply(8, 8));
// → 64