

function flatten(arr, acc = []) {
  arr.forEach(val => {
    if (Array.isArray(val)) {
      flatten(val, acc)
    } else {
      acc.push(val)
    }
  })
  return acc
}
console.log(flatten([0,[0,[0]]]))
