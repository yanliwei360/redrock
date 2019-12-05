function base(num) { // higher-order-function
  function add(step) {
    num += step
    return num
  }

  return add
}

const addOnTwo = base(2)
console.log(addOnTwo)
const sum = addOnTwo(3)
console.log(sum)