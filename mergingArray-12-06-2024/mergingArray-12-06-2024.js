let arr1 = [2, 4, 3, 5, 4, 6]
let arr2 = [1, 2, 6, 5, 4, 6]
let mergedArray = arr1.concat(arr2)
let newL = mergedArray.sort()
let mergingArray = (arr) => {
    const removeDuplicateElement = mergedArray.filter((value, index) => mergedArray.indexOf(value) === index);
    console.log(removeDuplicateElement.sort())
}
mergingArray(mergedArray)
