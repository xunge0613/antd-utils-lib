/**
 * enum2options
 * @description Convert TS enum into Select.Options
 * @param object enum value 
 * @returns [] options
 */
function enum2Options(enumObj: object, labelName: string = 'label', valueName: string = 'value') {
  if (!enumObj) {
    return [];
  }
  return (Object.keys(enumObj)
    .filter(key => isNaN(Number(key))) || [])
    .map(key => ({
      [labelName]: key,
      [valueName]: enumObj[key]
    }))
}

export = enum2Options
