// solution 1


function combine(...arr) {
  let newA = [];
  let num = Math.max(...arr.map(v => v.length));
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < arr.length; j++) {
      arr[j][i] ? newA.push(arr[j][i]) : 1;
    }
  }
  return newA;
}

// Solution 2

const combine = (...a) => 
  a.reduce((arr, v, i) => 
    (v.forEach((v, j) => 
      arr[j * a.length + i] = v), arr), [])
    .filter(v => v != undefined)
