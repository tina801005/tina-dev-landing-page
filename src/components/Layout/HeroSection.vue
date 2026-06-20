<!-- Hero"模擬聊天室窗口" 
主體：聊天視窗+[A提問1+B回覆1]+[A提問2+B回覆2] 
設計：跟nav一樣，毛玻璃微透明，對話氣泡兩端圓圓且A和B顏色不同
動畫效果：自動且循環撥放
邏輯：對話內容用渲染的-->

<script setup lang="ts">
// TODO: 對話內容用渲染的，並且自動且循環撥放

</script>

<template>
    <section class="min-h-[85vh] flex flex-col items-center justify-center relative z-10 gap-4">
        <!-- Hero Content簡單自我介紹 -->
        <div class="text-center mb-10 flex flex-col items-center gap-3">
            <span class="font-mono text-xs tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
                FRONTEND DEVELOPER
            </span>
            <h1 class="text-3xl md:text-5xl font-extrabold text-white tracking-wide ">
                嗨，我是 <span class="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-blue-200">Tina</span>
            </h1>
            <p class="text-slate-400 text-sm md:text-base tracking-wide max-w-md">
                我是一名前端開發工程師，歡迎來到我的作品集😉
            </p>
        </div>

        <div class="w-full  bg-white/30 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl flex flex-col gap-12">

            <div class="flex justify-start w-full items-center gap-4 animated animate-bubbleUp-1-delay ">
                <!-- 圓形頭像 -->
                <div class="w-10 h-10 rounded-full bg-linear-to-tr from-indigo-500 to-blue-400 flex items-center justify-center text-white font-bold shrink-0"></div>
                <!-- 氣泡框 -->
                <div class="relative max-w-xl p-5 rounded-2xl  shadow-lg bg-blue-100 backdrop-blur-md border border-blue-500/15  
                after:content-[''] after:absolute after:bottom-6  after:-left-2 after:h-4 after:w-4 after:rotate-45 after:bg-blue-100 after:border-l after:border-b after:border-blue-500/15">
                    <p class="text-slate-700 text-sm md:text-base leading-relaxed relative z-10">
                        測試文字測試文字測試文字測測試文字測試文
                    </p>
                </div>
            </div>

            <div class="flex justify-end w-full items-center gap-4 animated animate-bubbleUp">
                <div class="relative max-w-xl p-5 rounded-2xl  shadow-lg bg-pink-100 backdrop-blur-md border border-pink-500/15
                after:content-[''] after:absolute after:bottom-6 after:-right-2 after:h-4 after:w-4 after:rotate-45 after:bg-pink-100 after:border-r after:border-t after:border-pink-500/15">
                    
                    <p class="text-slate-700 text-sm md:text-base leading-relaxed relative z-10">
                        測試文字測試文字測試文字測試文字測試測試
                    </p>
                </div>
                <!-- 圓形頭像 -->
                <div class="w-10 h-10 rounded-full bg-linear-to-tr from-indigo-500 to-blue-400 flex items-center justify-center text-white font-bold shrink-0"></div>
                <!-- <p class="font-sm text-slate-700">B</p> -->
            </div>
        </div>
        
    </section>

</template>

<style scoped>
/* 氣泡彈出動畫 */
@keyframes bubbleUp {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>