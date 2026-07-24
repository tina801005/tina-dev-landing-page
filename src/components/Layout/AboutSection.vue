<!-- about + skill 
顯示區塊主要配置：
1. about：顯示區的左半邊，toggle選單，標題+內容。內容為白話的方式呈現，撰寫概念：這整個web=我，所以我要用介紹我自己的方式介紹網頁，但不要太死板。
2. skills：顯示區右半邊，用膠囊包裹著各項技能有專有名詞、白話的技能以及我的個人特質。
互動效果：toggle未開展開時，所有技能膠囊都是呈現未點亮(灰色)模式。當toggle展開時，相關的技能膠囊會被點亮。 -->

<script setup lang="ts">
import BaseTag from "../ui/BaseTag.vue";
</script>

<template>
    <section id="about-section" class="flex flex-col items-center justify-center gap-4 ">
        <!-- 頁面標題 -->
        <div class="flex flex-col items-center gap-2 mb-12">
            <BaseTag class="text-indigo-400 bg-indigo-500/10">
                ABOUT ME & SKILLS
            </BaseTag>
            <h2 class="text-2xl md:text-3xl font-bold text-white tracking-wide">
                ？？？？ 我是誰 <span class="text-slate-400 font-light text-xl md:text-2xl">/ Who I Am</span>
            </h2>
        </div>
        <!-- 主內容區 -->
        <div class="bg-amber-100 min-h-[65vh] w-full flex items-start gap-2">
            <!-- 左側 about，toggle選單，標題+內容-->
            <div class="bg-pink-500 w-2/3 min-h-[65vh] flex flex-col gap-4 p-4">
                這裡要用toggle選單來做。需要有標題+內容
            </div>
            <!-- 右側 skills, 技能膠囊 -->
            <div class="bg-blue-500 w-1/3 min-h-[65vh] flex flex-col gap-4 p-4">
                這裡是技能膠囊區塊，當左側的toggle選單展開時，相關的技能膠囊會被點亮。
            </div>
        </div>
    </section>
</template>

<style scoped></style>