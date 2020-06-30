/**
 * 匹配 url ? 后参数
 * @param name string
 * @returns string | null
 * @author Tony.Xu https://github.com/xunge0613
 */
export default function getQueryString(name: string): string | null {
  const match = location.search.substring(1).match(new RegExp(`(^|&)${name}=([^$&]*)(&|$)`, 'i'))
  if(match !== null) {
    return unescape(match[2]);
  }  
  return null;
}