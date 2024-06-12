let arr1 = [2, 4, 3, 5, 4, 6]
let arr2 = [1, 2, 6, 5, 4, 6]

let mergingArray = (arr1,arr2) => {
    let mergedArray = arr1.concat(arr2)
    const removeDuplicateElement = mergedArray.filter((value, index) => mergedArray.indexOf(value) === index);

    return removeDuplicateElement.sort()
}

console.log(mergingArray(arr1,arr2))

