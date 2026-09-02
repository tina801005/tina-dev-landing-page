<!-- 頁尾
1. 左側：logo+nav導覽
2. 右側：聯絡資訊
    a. FB,Line, LinkedIn,github
    b. Email留言區
        i. 資安防護: 防止DDOS攻擊,惡意程式碼攻擊(含廣告,無意義內容),垃圾郵件攻擊
        ii. 同ip寄過email後要等14天才能再次透過landing page表單寄信。等待期間再次瀏覽會出現"處理中請稍後"等相關字樣
        iii. 成功寄出"正反饋": 成功寄出後噴彩帶 -->
        <script setup lang="ts">
        import { ref, onMounted } from 'vue';
        import emailjs from '@emailjs/browser';
        import confetti from 'canvas-confetti';
        import StatusLogo from "../ui/StatusLogo.vue";
        
        const email = ref('');
        const message = ref('');
        const isSubmitted = ref(false);
        const isLoading = ref(false);
        
        const COOLDOWN_DAYS = 14;
        const COOLDOWN_MS = COOLDOWN_DAYS * 24 * 60 * 60 * 1000;
        
        // EmailJS 設定資訊 (可以替換成妳在 EmailJS 後台拿到的 ID)
        const EMAILJS_SERVICE_ID = 'service_1hnxys8';
        const EMAILJS_TEMPLATE_ID = 'template_375fgai';
        const EMAILJS_PUBLIC_KEY = 'i0CW_n7FBMU2E9tFq';
        
        // 檢查是否處於冷卻期
        onMounted(() => {
          const lastSent = localStorage.getItem('last_email_sent_time');
          if (lastSent) {
            const timePassed = Date.now() - parseInt(lastSent, 10);
            if (timePassed < COOLDOWN_MS) {
              isSubmitted.value = true;
            }
          }
        });
        
        const handleSubmit = async () => {
          if (isSubmitted.value || isLoading.value) return;
        
          isLoading.value = true;
        
          try {
            // 呼叫 EmailJS 寄信 API
            await emailjs.send(
              EMAILJS_SERVICE_ID,
              EMAILJS_TEMPLATE_ID,
              {
                from_email: email.value, // 對應 EmailJS Template 裡的 {{from_email}}
                message: message.value,  // 對應 EmailJS Template 裡的 {{message}}
              },
              EMAILJS_PUBLIC_KEY
            );
        
            // 模擬成功
            localStorage.setItem('last_email_sent_time', Date.now().toString());
            isSubmitted.value = true;
              
            // 清空輸入框
            email.value = '';
            message.value = '';

            // 觸發成功的噴彩帶特效 🎉
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 }
            });

          } catch (error) {
            console.error('EmailJS 寄送失敗:', error);
            alert('寄送失敗，請稍後再試或直接發送至信箱。');
          } finally {
            isLoading.value = false;
          }
          //   // 觸發噴彩帶特效 🎊
          //   triggerConfetti();
          // } catch (error) {
          //   console.error('寄信失敗:', error);
          // } finally {
          //   isLoading.value = false;
          // }
        };
        </script>
        
        <template>
          <footer id="contact" class="mb-4 border-t border-white/40 bg-white/30 backdrop-blur-md py-12 px-6">
            <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              
              <!-- 左側：Logo + Nav 導覽 -->
              <div class="space-y-4">
                <StatusLogo />
                
                <nav class="m-7 flex flex-wrap gap-4 text-sm text-slate-600">
                  <a href="#about-section" class="hover:underline hover:text-blue-500 transition-colors">關於我</a>
                  <a href="#portfolio-section" class="hover:underline hover:text-blue-500 transition-colors">作品集</a>
                  <a href="#contact" class="hover:underline hover:text-blue-500 transition-colors">聯絡我</a>
                </nav>
              </div>
        
              <!-- 右側：聯絡資訊與 Email 留言區 -->
              <div class="space-y-6">
                <!-- 社群連結 -->
                <div class="flex items-center space-x-4 text-sm text-slate-600">
                  <a href="https://github.com/tina801005" target="_blank" class="hover:text-blue-500 transition-colors">GitHub</a>
                  <a href="https://www.linkedin.com/in/tinawang1005/" target="_blank" class="hover:text-blue-500 transition-colors">LinkedIn</a>
                  <a href="https://discord.com/users/tina_801005" target="_blank" class="hover:text-blue-500 transition-colors">Discord</a>
                </div>
        
                <!-- Email 留言區 -->
                <form @submit.prevent="handleSubmit" class="space-y-3 bg-white/50 p-4 rounded-xl border border-white/60">
                  <input
                    v-model="email"
                    type="email"
                    required
                    :disabled="isSubmitted"
                    placeholder="您的 Email"
                    class="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
                  />
                  <textarea
                    v-model="message"
                    required
                    rows="3"
                    :disabled="isSubmitted"
                    placeholder="留下想跟我說的話..."
                    class="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
                  ></textarea>
        
                  <button
                    type="submit"
                    :disabled="isSubmitted || isLoading"
                    class="w-full py-2 px-4 rounded-lg bg-blue-500 text-white font-medium text-sm hover:bg-blue-600 transition-all disabled:bg-slate-400 cursor-pointer disabled:cursor-not-allowed"
                  >
                    <span v-if="isLoading">處理中請稍後...</span>
                    <span v-else-if="isSubmitted">處理中請稍後（訊息已收到）</span>
                    <span v-else>送出留言</span>
                  </button>
                </form>
              </div>
        
            </div>
            <p class="text-sm text-slate-600">© 2026 Tina Wang. All rights reserved.</p>
          </footer>
        </template>
<style scoped></style>