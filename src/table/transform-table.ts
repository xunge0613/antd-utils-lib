import { ColumnProps } from 'antd/lib/table'

/**
 * 表格倒置：行转列
 * @param oldColumns ColumnProps<T>[] 旧表头
 * @param oldData T[] 旧数据
 * @param options?
 * @returns newColumns, newData 新表头
 */
// 处理数据，生成新表格字段以及数据格式
function transformTable<T>(
  oldColumns: ColumnProps<T>[],
  oldData: T[],
  options?: object,
): { newColumns: ColumnProps<T>[]; newData: any[] } {
  // 无数据时返回空白表格
  if (!oldData || !oldData.length) {
    return { newColumns: [], newData: [] }
  }
  // 表格转置 行转列
  // console.log('old', oldColumns, oldData)
  // 转表头
  const newColumns = [
    // 第一列固定
    {
      title: 'title',
      dataIndex: 'title',
      fixed: true,
      width: 150,
    },
    // 第二列起，同 dataindex 不同 data 的值
    ...oldData.map((item: T, index: number) => {
      return {
        dataIndex: index,
      }
    }),
  ]
  // 转数据
  const newData = oldColumns.map((column: ColumnProps<T>, index: number) => {
    return {
      title: oldColumns[index].title, // 第一列
      ...Object.entries(oldData || []) // 遍历键值对
        .map((item, i) => {
          // console.log(item); // ["0", {"1" : {0: "value", title: "title"}}]
          let value = column.dataIndex && item[1] ? (item[1] as any)[column.dataIndex as string] : undefined
          if (column.render) {
            // render 优先级高于 dataIndex
            value = column.render((item[1] as any)[column.dataIndex as string], oldData[i], i)
          }
          return {
            [item[0]]: value,
          }
        })
        .reduce((prev: any, next: any) => {
          // 合并对象数组
          return { ...prev, ...next }
        }, []),
    }
  })
  console.log('new', newColumns, newData)
  return { newColumns, newData }
}

export = transformTable