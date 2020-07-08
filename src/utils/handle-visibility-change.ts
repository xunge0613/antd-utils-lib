/*
 * 页面进入或离开后，触发回调函数
 * 应用场景：列表页新开页面编辑新增，返回后自动刷新列表
 * handlePageshow(() => setSearch({ ...(search || {}) }))
 * @param pageShowCallback () => void 进入时回调
 * @param pageHideCallback () => void 离开时回调
 */
export default function handleVisibilityChange(pageShowCallback: () => void, pageHideCallback?: () => void) {
  try {
    const hiddenHandler = function () {
      var isHidden = document.hidden
      if (!isHidden) {
        pageShowCallback && pageShowCallback();
      } else {
        pageHideCallback && pageHideCallback();
      }
    }
    document.onvisibilitychange = hiddenHandler
  } catch (error) {
    console.warn(error)
  }
}