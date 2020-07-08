/**
 * @author Tony.Xu https://github.com/xunge0613
 * @desc 导出全部函数
 */

// table
import transformTable from './table/transform-table';
import calcRowspanToMerge from './table/calc-rowspan-to-merge';

// select
import pasteTags from './select/paste-tags';
import enum2Options from './select/enum2options';

// utils
import getQueryString from './utils/get-querystring';
import handleVisibilityChange from './utils/handle-visibility-change';

export = {
  // table
  transformTable,
  calcRowspanToMerge,  // 计算需要纵向合并相邻的重复单元格
  // select
  pasteTags,
  enum2Options,
  // utils
  getQueryString,
  handleVisibilityChange,
};

