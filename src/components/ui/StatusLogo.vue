<!-- logo
    a. 點擊回首頁
    b. 顯示在線狀態10:00-18:00顯示綠色圓點為在線，其他時間及星期二顯示灰色原點表示離線或忙碌中
    c. 與footer的logo共用，所以除了logo單獨拆出component之外，連ts時間檢查邏輯也要拆出composables -->
<script setup lang="ts">
    import {useStudioStatus} from "../../composables/useStudioStatus";

    // 載入時間監測及hover提示文字
    const { isOnline, statusText } = useStudioStatus();
</script>

  <template>
  <div class="flex h-16 items-center justify-between px-6">
      
      <a href="#top" aria-label="回到頁面頂端，Tina Studio" class="group relative flex items-center gap-2 cursor-pointer">
        
        <div class="relative flex h-2.5 w-2.5">
          <span aria-hidden="true"
            :class="[
              'absolute inline-flex h-full w-full rounded-full opacity-75',
              isOnline ? 'animate-ping bg-emerald-400' : 'bg-transparent'
            ]"
          ></span>
          
          <span aria-hidden="true"
            :class="[
              'relative inline-flex rounded-full h-2.5 w-2.5 transition-colors duration-500',
              isOnline ? 'bg-emerald-500' : 'bg-slate-500'
            ]"
          ></span>
        </div>

        <span class="font-mono text-sm tracking-wider text-slate-500">TINA STUDIO</span>
        <span class="sr-only">目前狀態：{{ statusText }}</span>
        
        <div aria-hidden="true" class="absolute w-50 top-full left-0 mt-2 scale-95 opacity-0 pointer-events-none transition-all duration-200 ease-out 
        group-hover:scale-100 group-hover:opacity-100 group-hover:translate-y-1 rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-slate-200 shadow-xl">
          <div class="absolute -top-1 left-4 h-2 w-2 rotate-45 border-t border-l border-slate-800 bg-slate-900"></div>
          
          <span class="flex items-center gap-1.5">
            <span aria-hidden="true" :class="['h-1 w-1 rounded-full', isOnline ? 'bg-emerald-500' : 'bg-slate-500']"></span>
            {{ statusText }}
          </span>
        </div>

      </a>

      </div>
</template>

<style scoped></style>