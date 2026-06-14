<script setup lang="ts">
</script>

<template>
    <div class="fixed inset-0 pointer-events-none z-0">
      <div class="absolute top-[10%] left-[5%] w-96 h-96 rounded-full bg-linear-to-br  from-indigo-500/10 to-transparent animate-xl-circle-1 blur-2xl"></div>
    
      <div class="absolute top-[40%] right-[5%] w-lg h-128 rounded-full bg-linear-to-br from-blue-500/10 to-transparent animate-xl-circle-2 blur-2xl"></div>
      
      <div class="absolute bottom-[10%] left-[15%] w-80 h-80 rounded-full  bg-linear-to-br from-pink-500/10 to-transparent animate-xl-circle-3 blur-2xl"></div>


      <div class="absolute top-[25%] left-[35%] w-24 h-24 rounded-2xl  bg-indigo-500/15 rotate-12 animate-md-square-1 blur-md"></div>
      
      <div class="absolute bottom-[43%] right-[43%] w-28 h-28 rounded-3xl  bg-pink-500/10 -rotate-12 animate-md-square-2 blur-md"></div>

      <div class="absolute top-[15%] right-[20%] w-12 h-12 rounded-xl  bg-blue-500/15 animate-sm-square-1 blur-sm"></div>
      
      <div class="absolute top-[50%] left-[10%] w-14 h-14 rounded-xl  bg-purple-500/10 animate-sm-square-2 blur-sm"></div>
      
      <div class="absolute bottom-[15%] right-[40%] w-10 h-10 rounded-lg  bg-indigo-500/20 animate-sm-square-3 blur-sm"></div>
    </div>

</template>

<style scoped>
/* 漂浮大球 3顆*/
.animate-xl-circle-1{
  animation: floatUp 8s ease-in-out infinite;
}

.animate-xl-circle-2{
  animation: floatDown 10s ease-in-out infinite;
}

.animate-xl-circle-3{
  animation: floatUp 12s ease-in-out infinite ;
  animation-delay:2s;
}

/* 旋轉方塊-中型 2顆 */
.animate-md-square-1{
  animation: spinClockwise 15s linear infinite;
}

.animate-md-square-2{
  animation: spinClockwise 20s linear infinite;
  animation-delay:1s;
}

/* 旋轉方塊-小型 3顆 */
.animate-sm-square-1{
  animation: spinCounter 10s linear infinite;
}

.animate-sm-square-2{
  animation: spinCounter 12s linear infinite;
  animation-delay:1.5s;
}

.animate-sm-square-3{
  animation: spinCounter 9s linear infinite;
  animation-delay:0.5s;
}


/* 漂浮大球 調整Y軸漂浮效果更明顯 */
@keyframes floatUp {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-30px); }
}

@keyframes floatDown {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(35px); }
}

/* 旋轉方塊 調整rotate旋轉效果更明顯 */
/* 順時鐘旋轉 */
@keyframes spinClockwise {
  from { transform: rotate(0deg) translateY(0); }
  50% { transform: rotate(180deg) translateY(-10px); } 
  to { transform: rotate(360deg) translateY(0); }
}

/* 逆時鐘旋轉 */
@keyframes spinCounter {
  from { transform: rotate(360deg) translateY(0); }
  50% { transform: rotate(180deg) translateY(8px); }
  to { transform: rotate(0deg) translateY(0); }
}

</style>