export const chunk = (array, size = 1) => {
  const numItems = array.length 
  const numChunkArrays = Math.ceil(numItems/size)
  const result = new Array(numChunkArrays)

  let itemIdx = 0
  let resultIdx = 0

  while (resultIdx < numChunkArrays) {
    const itemsForChunk = array.slice(itemIdx, itemIdx += size)
    result[resultIdx++] = [...itemsForChunk]
  }

  return result
}