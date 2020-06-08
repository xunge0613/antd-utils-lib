import { FormInstance } from 'antd/lib/form'

/**
 * select tags 兼容复制操作，逗号分隔
 * @param value
 * @param form
 * @param keyName
 */
function parseTags(value: string[], form: FormInstance, keyName: string) {
  if (value && value.length) {
    let parsedValue: string[] = []
    value.map((item) => {
      if (item.includes(',')) {
        parsedValue = [...parsedValue, ...item.split(',').filter((item) => item !== '')]
      } else {
        parsedValue.push(item)
      }
    })
    form.setFieldsValue({ [keyName]: Array.from(new Set(parsedValue)) })
    form.validateFields([keyName])
  }
}

export = parseTags
