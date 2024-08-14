
// You should implement your task here.
module.exports = function towelSort (matrix) {
  let newArray = []
  if(!matrix || matrix.length === 0) {
    return newArray
  }

  for(let i=0; i < matrix.length; i++) {
    if(i % 2 === 0) {
      newArray = newArray.concat(matrix[i])
    } else {
      newArray = newArray.concat(matrix[i].reverse());
    }
  }

  /*if(newArray.length % 2 !== 0) {
  newArray.push(',')
  } */
  return newArray 
}

