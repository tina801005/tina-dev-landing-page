<!-- about + skill 
顯示區塊主要配置：
1. about：顯示區的左半邊，toggle選單，標題+內容。內容為白話的方式呈現，撰寫概念：這整個web=我，所以我要用介紹我自己的方式介紹網頁，但不要太死板。
2. skills：顯示區右半邊，用膠囊包裹著各項技能有專有名詞、白話的技能以及我的個人特質。
互動效果：toggle未開展開時，所有技能膠囊都是呈現未點亮(灰色)模式。當toggle展開時，相關的技能膠囊會被點亮。 -->

<script setup lang="ts">
import BaseTag from "../../ui/BaseTag.vue";
import SkillPill from "./SkillPill.vue";
import { ref } from 'vue';
import { accordionData } from './aboutData';

// 預設展開第一個手風琴區塊 ('about')
const activeCategory = ref<'about' | 'philosophy' | 'background'>('about');

// 切換手風琴區塊
const toggleCategory = (id: 'about' | 'philosophy' | 'background') => {
  activeCategory.value = id;
};
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
        <div class=" min-h-[65vh] w-full flex items-start gap-2">
            <!-- 左側 about，toggle選單，標題+內容-->
            <div class="w-2/3 min-h-auto flex flex-col gap-4 bg-white/20 p-4 rounded-lg">
                <!-- 這裡要用toggle選單來做。需要有標題+內容 -->
                <div 
                v-for="item in accordionData"
          :key="item.id">
                    <ul class="flex flex-col gap-6">
                        
                        <li class="w-full flex flex-col border border-slate-400/30 rounded-4xl list-none p-5">
                            <button class="w-full flex items-center justify-between px-2 cursor-pointer "
                            @click="toggleCategory(item.id)">
                                <span class="cursor-pointer 
                                ">{{ item.title }}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"
                                :class="{ 'rotate-180': activeCategory === item.id }">
  <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
</svg>


                            </button>
                            <div class="border-t border-slate-400/30 mt-4 pt-4 flex flex-col items-start gap-2 text-slate-900 text-sm md:text-base transition-all duration-300"
                            v-show="activeCategory === item.id"
                            >
                                <p v-for="(paragraph, index) in item.content" :key="index">{{ paragraph }}</p>
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <!-- 右側 skills, 技能膠囊 -->
            <div class=" w-1/3 min-h-[65vh] flex flex-col gap-4 p-2">
                
                <SkillPill :activeCategory="activeCategory"/>
            </div>
        </div>
    </section>
</template>

<style scoped></style>