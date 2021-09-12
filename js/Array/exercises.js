const removeDuplicates = (array) => {
  return array.filter((val, i) => array.indexOf(val) === i);
};
console.log(removeDuplicates([1, -2, -1, 2, 1, 2, 3, 3, -1, -2]));

const chunkArray = (array, chunkSize) => {
  // return array.reduce((acc, val, i) => {
  //   if (i % chunkSize === 0) {
  //     return acc.concat([[val]]);
  //   }
  //   acc[parseInt(i / chunkSize)].push(val);
  //   return acc;
  // }, []);
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2)) // [[1, 2], [3, 4], [5, 6], [7]]
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3)) // [[1, 2, 3], [4, 5, 6], [7]]

const intersection = (...values) => {
  if (values.length === 1) {
    return values[0];
  }
  const currentArray = values.pop();
  const recursionArray = intersection(...values);
  // console.log({ currentArray, recursionArray });
  return currentArray.filter(val => recursionArray.includes(val));
};
console.log(intersection([1, 2], [2, 3])) // [2]
console.log(intersection(['a', 'b'], ['b', 'c'], ['b', 'e', 'c'])) // ['b']
console.log(intersection(['b', 'b', 'e'], ['b', 'c', 'e'], ['b', 'e', 'c'])) // ['b', 'e']

const flattener = (nestedArray) => {
  return nestedArray.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattener(val) : val), []);
};
console.log(flattener([1, 2, [3, 4, [5, 6, [7]]]])); // [1, 2, 3, 4, 5, 6, 7]
console.log(flattener([[1, 2, 3], [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flattener([[[1, [1.1]], 2, 3], [4, 5]])); // [1, 1.1, 2, 3, 4, 5]
