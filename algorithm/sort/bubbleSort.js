// bubble_sort(a)
//   if length(a) ≤ 1 then
//     return
//   n = length(a)
//   for i in 0..n-2 do
//     if a[i] > a[i+1] then
//       a[i], a[i+1] ← a[i+1], a[i]
//   bubble_sort(a[:n-1])

const bubbleSort = (array) => {
  let dump
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        dump = array[j]
        array[j] = array[j + 1]
        array[j + 1] = dump
      }
    }
  }
  return array
}

console.log(bubbleSort([3, 4, 2, 1, 5, 6]))
