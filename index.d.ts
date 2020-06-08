/**
 * @author Tony.Xu
 * @desc 类型声明
 */
import { ColumnProps } from 'antd/lib/table'

declare namespace AntdUtils {
  /**
   * 表格转置：行转列
   * @param oldColumns ColumnProps<T>[] 旧表头
   * @param oldData T[] 旧数据
   * @param options?
   * @returns newColumns, newData 新表头
   */
  export function transformTable<T>(
    oldColumns: ColumnProps<T>[],
    oldData: T[],
    options?: object,
  ): {
    newColumns: ColumnProps<T>[];
    newData: any[]
  };
}

export = AntdUtils;