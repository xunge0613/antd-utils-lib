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
   */
  export function pasteTags(value: string[], form: FormInstance, keyName: string)

  /**
   * enum2options
   * @description Convert TS enum into Select.Options
   * @param object enum value 
   * @returns [] options
   */
  export function enum2Options(
      enumObj: object, 
      labelName: string = 'label', 
      valueName: string = 'value') : { [x: string]: any; }[]

  /**
   * getQueryString
   * @description getQueryString
   * @param name string
   * @returns null | string
   */
  export function getQueryString(name: string) : null | string
}

export = AntdUtils;