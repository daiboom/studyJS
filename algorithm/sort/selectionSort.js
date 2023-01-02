// selection_sort(a)
//   if length(a) ≤ 1 then
//     return
// n = length(a)
// i = max_index(a)
// a[n-1], a[i] ← a[i], a[n-1]
// selection_sort(a[:n-1])
// 𝑂(𝑛^2)
const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let lowest = i

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) {
        lowest = j
      }
    }

    if (lowest !== i) {
      ;[array[i], array[lowest]] = [array[lowest], array[i]]
    }
  }
  return array
}

console.log(selectionSort([3, 5, 1, 2]))
