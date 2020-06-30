/**
 * @author Tony.Xu
 * @desc 类型声明
 */
import { ColumnProps } from 'antd/lib/table'
import { FormInstance } from 'antd/lib/form';

declare namespace AntdUtils {
  /**
   * 表格转置：行转列
   * @param oldColumns ColumnProps<T>[] 旧表头
   * @param oldData T[] 旧数据
   * @param options?
   * @returns newColumns, newData 新表头
   * @author Tony.Xu https://github.com/xunge0613
   */
  export function transformTable<T>(
    oldColumns: ColumnProps<T>[],
    oldData: T[],
    options?: object,
  ): {
    newColumns: ColumnProps<T>[];
    newData: any[]
  };

  /**
   * select tags 兼容复制操作，逗号分隔
   * @description paste or input string with ',' into <Select> in tags mode
   * @param value onChange(value)
   * @param form the form instance
   * @param keyName the Form.Item name 
   * @author Tony.Xu https://github.com/xunge0613
   */
  export function pasteTags(value: string[], form: FormInstance, keyName: string)

  /**
   * enum2options
   * @description Convert TS enum into Select.Options
   * @param object enum value 
   * @param labelName? default `label`
   * @param valueName? defalut `value`
   * @returns [] options
   * @author Tony.Xu https://github.com/xunge0613
   */
  export function enum2Options(
      enumObj: object, 
      labelName?: string, 
      valueName?: string) :
       { [x: string]: any; }[]

  /**
   * getQueryString
   * @description getQueryString
   * @param name string
   * @returns null | string
   * @author Tony.Xu https://github.com/xunge0613
   */
  export function getQueryString(name: string) : null | string

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
  export function calcRowspanToMerge<T extends { [propName: string]: any }>(items: T[], propName: string) : number[] 
}

export = AntdUtils;