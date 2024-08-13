
// You should implement your task here.
module.exports = function towelSort (matrix) {
  let newArray = []
    if(matrix) {
      matrix.forEach((arr) => {
        newArray = newArray.concat(arr);
        return newArray;
      })
    } else {
      return newArray;
    }

    return newArray;
}
