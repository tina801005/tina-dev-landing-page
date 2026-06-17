// 顯示是否在線的動態logo
// 用於偵測時間
// 10:00-18:00顯示綠色圓點為在線，其他時間及星期二顯示灰色原點表示離線或忙碌中

import { ref, onMounted, onUnmounted, computed } from 'vue'

export function useStudioStatus() {
  // 建立一個響應式的目前時間狀態
  const currentTime = ref(new Date())
  let timer: number | null = null

  // 每秒更新一次時間
  onMounted(() => {
    timer = window.setInterval(() => {
      currentTime.value = new Date()
    }, 1000)
  })

  // 清除計時器，避免記憶體洩漏
  onUnmounted(() => {
    if (timer) clearInterval(timer)
  })

  // 用 computed 實時計算目前是不是「在線時間」
  const isOnline = computed(() => {
    const hours = currentTime.value.getHours()
    
    // 在線時間：早上 9 點到晚上 6 點 (09:00 ~ 18:00)
    
    return hours >= 9 && hours < 18
  })

  // 根據在線狀態，自動切換 Tooltip 提示文案
  const statusText = computed(() => {
    return isOnline.value 
      ? '目前在線中，可直接聯繫 ✨' 
      : '目前休息中，會儘快回覆您 🌙'
  })

  return {
    isOnline,
    statusText
  }
}