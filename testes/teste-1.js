const list = [1, 2, 3, 4];

function somarArray() {
  let total = 0;

  for (let num of list) {
    total += num;
  }
  return total;
}
console.log(somarArray());

