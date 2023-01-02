// insertion_sort(a)
//   return _insertion_sort([a[0]], a[1:])
//
// _insertion_sort(a, b)
//   if b = [] then
//     return a
//   else
//     return _insertion_sort(insert(a, b[0]), b[1:])
//
// insert(a, elem)
//   n = length(a)
//   if a[n-1] ≤ elem then
//     return a + [elem]
//   if elem ≤ a[0] then
//     return [elem] + a
//   for i in 0..n-2
//     if a[i] ≤ elem and elem ≤ a[i+1] then
//       return a[:i+1] + [elem] + a[i+1:]

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let temp = array[i]
    let j = i - 1

    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j]
      j--
    }
    array[j + 1] = temp
  }
  return array
}

console.log(insertionSort([5, 6, 1, 2, 4, 3]))
