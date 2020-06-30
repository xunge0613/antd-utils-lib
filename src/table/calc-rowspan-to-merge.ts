/**
 * 计算需要纵向合并相邻的重复单元格
 * @description 指定对象索引值 propName，遍历一次 items，统计出数组中重复项，并返回 rowSpanMapping
 * 时间复杂度： O(n)
 * @param items T[]
 * @param propName string 用于判重
 * @returns rowSpanMapping number[] 单元格合并信息，数组元素与数组索引一一对应
 * @example 返回 [1,1,1,1,1,1] 无合并， [3,0,0,3,0,0] 表示索引 0~2，3~5 共 2 个合并的单元格，
 * @author Tony.Xu https://github.com/xunge0613
 */
export default function calcRowspanToMerge<T extends { [propName: string]: any }>(items: T[], propName: string) {
  // 初始化
  const rowSpanMapping: number[] = []
  let saveId = -1 // 当前记录的 mappingId
  let saveIndex = 0 // 当前记录的下标
  let saveCount = 0 // 当前记录占据多少个单元格
  /**
   * eg：saveId 6，saveIndex 1， saveCount 3
   * 表示纵向合并 items[1] ~ items[3]，它们的值都等于 6
   */
  for (let index = 0; index < items.length; index++) {
    const element = items[index]
    if (saveId === -1) {
      // 初始化
      saveId = element[propName]
      saveCount = 1
      continue
    }
    if (saveId !== element.propName) {
      // 与前一项不同，先记录前一存档点信息，
      rowSpanMapping[saveIndex] = saveCount
      // 重新初始化
      saveId = element.propName
      saveIndex = index
      saveCount = 1
    } else {
      // 与前一项相同，记录当前项为 0，存档点继续统计
      rowSpanMapping[index] = 0
      saveCount++
    }
    // 最后一项当前如果为 0，则给前一存档点记录
    if (index === items.length - 1 && rowSpanMapping[index] === 0) {
      rowSpanMapping[saveIndex] = saveCount
    }
  }
  return rowSpanMapping
}
