// subset([1,2,3])
// => [[], [1], [2], [2, 1], [3], [3, 1], [3, 2], [3, 2, 1]]
// subset(seq)
//   len_seq ← length(seq)
//   if len_seq = 0 then
//     return [[]] # base case
//   else
//     elem ← seq[0]
//     rest_sub ← subset(seq[1:])
//     return (rest_sub + [[elem] + sub for sub in rest_sub])

const array = [1, 2, 3]

const subset = (array) =>
  array.reduce(
    (sets, curr) => sets.concat(sets.map((set) => [curr, ...set])),
    [[]]
  )

console.log(subset(array))
