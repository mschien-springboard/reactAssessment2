function unroll(arr) {
  const size = arr.length;
  const result = [];

  for (let i = 0; i < Math.floor(size / 2); i++) {
    let top = i;
    let right = size - i - 1;
    let bottom = right;
    let left = i;

    for (let x = left; x < right; x++) {
      result.push(arr[top][x]);
    }

    for (let y = top; y < bottom; y++) {
      result.push(arr[y][right])
    }

    for (let x = right; x > left; x--) {
      result.push(arr[bottom][x]);
    }

    for (let y = bottom; y > top; y--) {
      result.push(arr[y][left]);
    }
  }

  if (size % 2 !== 0) {
    let index = Math.floor(size/2);
    result.push(arr[index][index]);
  }

  return result;
}

module.exports = unroll;