<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const startExploring = () => {
  router.push('/about')
}
</script>

<template>
  <div class="start-page">
    <!-- 背景装饰层 -->
    <div class="background-decoration">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
    </div>

    <!-- 粒子背景容器 -->
    <div class="particles">
      <div class="particle" v-for="i in 30" :key="i"></div>
    </div>

    <!-- 网格背景 -->
    <div class="grid-background"></div>

    <!-- 主要内容 -->
    <div class="content">
      <div class="title-wrapper">
        <h1 class="main-title">
          <span class="title-line">探索无限</span>
          <span class="title-line gradient-text">可能</span>
        </h1>
        <div class="title-underline"></div>
      </div>

      <p class="subtitle">一切从这里开始</p>

      <button class="explore-button" @click="startExploring">
        <span class="button-bg"></span>
        <span class="button-text">
          <span class="text-content">开始探索</span>
          <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M5 12h14M12 5l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </button>

      <!-- 装饰性滚动提示 -->
      <div class="scroll-hint">
        <div class="mouse"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.start-page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #0a0b1e;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 背景装饰层 - 渐变光球 */
.background-decoration {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  animation: float-orb 20s infinite ease-in-out;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  top: -10%;
  left: -10%;
  animation-delay: 0s;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  bottom: -10%;
  right: -5%;
  animation-delay: 5s;
}

.orb-3 {
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  top: 50%;
  right: -10%;
  animation-delay: 10s;
}

@keyframes float-orb {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

/* 网格背景 */
.grid-background {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: grid-move 20s linear infinite;
}

@keyframes grid-move {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}

/* 粒子容器 */
.particles {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

/* 粒子样式 */
.particle {
  position: absolute;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(139, 92, 246, 0.4) 50%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;
  animation: float 12s infinite ease-in-out, twinkle 4s infinite ease-in-out;
}

/* 为每个粒子生成随机位置和大小 */
.particle:nth-child(1) { left: 10%; top: 20%; width: 4px; height: 4px; animation-delay: 0s, 0s; }
.particle:nth-child(2) { left: 20%; top: 80%; width: 3px; height: 3px; animation-delay: 1s, 0.5s; }
.particle:nth-child(3) { left: 30%; top: 40%; width: 5px; height: 5px; animation-delay: 2s, 1s; }
.particle:nth-child(4) { left: 40%; top: 60%; width: 2px; height: 2px; animation-delay: 3s, 1.5s; }
.particle:nth-child(5) { left: 50%; top: 30%; width: 4px; height: 4px; animation-delay: 4s, 2s; }
.particle:nth-child(6) { left: 60%; top: 70%; width: 6px; height: 6px; animation-delay: 5s, 2.5s; }
.particle:nth-child(7) { left: 70%; top: 50%; width: 3px; height: 3px; animation-delay: 6s, 3s; }
.particle:nth-child(8) { left: 80%; top: 25%; width: 5px; height: 5px; animation-delay: 7s, 0.3s; }
.particle:nth-child(9) { left: 90%; top: 75%; width: 4px; height: 4px; animation-delay: 8s, 0.8s; }
.particle:nth-child(10) { left: 15%; top: 55%; width: 3px; height: 3px; animation-delay: 9s, 1.3s; }
.particle:nth-child(11) { left: 25%; top: 15%; width: 5px; height: 5px; animation-delay: 1.5s, 1.8s; }
.particle:nth-child(12) { left: 35%; top: 85%; width: 4px; height: 4px; animation-delay: 2.5s, 2.3s; }
.particle:nth-child(13) { left: 45%; top: 45%; width: 3px; height: 3px; animation-delay: 3.5s, 2.8s; }
.particle:nth-child(14) { left: 55%; top: 65%; width: 6px; height: 6px; animation-delay: 4.5s, 0.2s; }
.particle:nth-child(15) { left: 65%; top: 35%; width: 4px; height: 4px; animation-delay: 5.5s, 0.7s; }
.particle:nth-child(16) { left: 75%; top: 10%; width: 3px; height: 3px; animation-delay: 6.5s, 1.2s; }
.particle:nth-child(17) { left: 85%; top: 90%; width: 5px; height: 5px; animation-delay: 7.5s, 1.7s; }
.particle:nth-child(18) { left: 5%; top: 50%; width: 4px; height: 4px; animation-delay: 8.5s, 2.2s; }
.particle:nth-child(19) { left: 12%; top: 70%; width: 3px; height: 3px; animation-delay: 0.8s, 2.7s; }
.particle:nth-child(20) { left: 22%; top: 30%; width: 6px; height: 6px; animation-delay: 1.8s, 0.4s; }
.particle:nth-child(21) { left: 32%; top: 60%; width: 3px; height: 3px; animation-delay: 2.8s, 0.9s; }
.particle:nth-child(22) { left: 42%; top: 20%; width: 5px; height: 5px; animation-delay: 3.8s, 1.4s; }
.particle:nth-child(23) { left: 52%; top: 80%; width: 4px; height: 4px; animation-delay: 4.8s, 1.9s; }
.particle:nth-child(24) { left: 62%; top: 40%; width: 3px; height: 3px; animation-delay: 5.8s, 2.4s; }
.particle:nth-child(25) { left: 72%; top: 65%; width: 5px; height: 5px; animation-delay: 6.8s, 0.6s; }
.particle:nth-child(26) { left: 82%; top: 35%; width: 4px; height: 4px; animation-delay: 7.8s, 1.1s; }
.particle:nth-child(27) { left: 92%; top: 55%; width: 3px; height: 3px; animation-delay: 8.8s, 1.6s; }
.particle:nth-child(28) { left: 8%; top: 25%; width: 6px; height: 6px; animation-delay: 9.8s, 2.1s; }
.particle:nth-child(29) { left: 18%; top: 45%; width: 4px; height: 4px; animation-delay: 1.2s, 2.6s; }
.particle:nth-child(30) { left: 28%; top: 75%; width: 3px; height: 3px; animation-delay: 2.2s, 0.1s; }

/* 粒子漂浮动画 */
@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-30px) translateX(15px);
  }
  50% {
    transform: translateY(-60px) translateX(-15px);
  }
  75% {
    transform: translateY(-30px) translateX(10px);
  }
}

/* 粒子闪烁动画 */
@keyframes twinkle {
  0%, 100% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
}

/* 主要内容区域 */
.content {
  position: relative;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
}

/* 标题包装器 */
.title-wrapper {
  margin-bottom: 2rem;
  opacity: 0;
  animation: fadeInUp 1s ease-out 0.3s forwards;
  position: relative;
}

/* 为标题包装器添加环绕粒子 */
.main-title::before {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background: radial-gradient(circle, rgba(102, 126, 234, 1) 0%, rgba(118, 75, 162, 0.6) 50%, transparent 70%);
  border-radius: 50%;
  right: -50px;
  top: 30%;
  animation: orbit-particle 8s infinite linear;
  opacity: 0.8;
}

.main-title::after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  background: radial-gradient(circle, rgba(240, 147, 251, 1) 0%, rgba(245, 87, 108, 0.6) 50%, transparent 70%);
  border-radius: 50%;
  left: -40px;
  bottom: 20%;
  animation: orbit-particle 10s infinite linear reverse;
  opacity: 0.7;
}

@keyframes orbit-particle {
  0% {
    transform: rotate(0deg) translateX(60px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(60px) rotate(-360deg);
  }
}

/* 主标题 */
.main-title {
  font-size: 7rem;
  font-weight: 800;
  line-height: 1.1;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.title-line {
  display: block;
  color: #ffffff;
  text-shadow:
    0 0 30px rgba(255, 255, 255, 0.4),
    0 0 60px rgba(102, 126, 234, 0.3),
    0 0 100px rgba(118, 75, 162, 0.2);
  position: relative;
  animation: text-glow 3s ease-in-out infinite;
}

@keyframes text-glow {
  0%, 100% {
    text-shadow:
      0 0 30px rgba(255, 255, 255, 0.4),
      0 0 60px rgba(102, 126, 234, 0.3),
      0 0 100px rgba(118, 75, 162, 0.2);
  }
  50% {
    text-shadow:
      0 0 40px rgba(255, 255, 255, 0.6),
      0 0 80px rgba(102, 126, 234, 0.5),
      0 0 120px rgba(118, 75, 162, 0.4);
  }
}

/* 标题粒子效果 */
.title-line::before,
.title-line::after {
  content: '';
  position: absolute;
  width: 6px;
  height: 6px;
  background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(139, 92, 246, 0.6) 50%, transparent 70%);
  border-radius: 50%;
  opacity: 0;
  animation: title-particle 4s infinite ease-in-out;
}

.title-line::before {
  left: -30px;
  top: 50%;
  animation-delay: 0s;
}

.title-line::after {
  right: -30px;
  top: 50%;
  animation-delay: 2s;
}

@keyframes title-particle {
  0%, 100% {
    opacity: 0;
    transform: translate(0, 0) scale(0.5);
  }
  25% {
    opacity: 1;
    transform: translate(-10px, -20px) scale(1);
  }
  50% {
    opacity: 0.7;
    transform: translate(-20px, -40px) scale(0.8);
  }
  75% {
    opacity: 0.3;
    transform: translate(-30px, -60px) scale(0.5);
  }
}

.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-shift 3s ease infinite;
  background-size: 200% 200%;
  position: relative;
  filter: drop-shadow(0 0 30px rgba(102, 126, 234, 0.5));
}

/* 渐变文字周围的粒子群 */
.title-wrapper::before,
.title-wrapper::after {
  content: '';
  position: absolute;
  pointer-events: none;
}

.title-wrapper::before {
  width: 8px;
  height: 8px;
  background: radial-gradient(circle, rgba(240, 147, 251, 1) 0%, rgba(245, 87, 108, 0.6) 50%, transparent 70%);
  border-radius: 50%;
  left: 10%;
  top: 20%;
  animation: float-title-particle 5s infinite ease-in-out;
  opacity: 0;
}

.title-wrapper::after {
  width: 6px;
  height: 6px;
  background: radial-gradient(circle, rgba(79, 172, 254, 1) 0%, rgba(0, 242, 254, 0.6) 50%, transparent 70%);
  border-radius: 50%;
  right: 15%;
  bottom: 30%;
  animation: float-title-particle 6s infinite ease-in-out 1s;
  opacity: 0;
}

@keyframes float-title-particle {
  0%, 100% {
    opacity: 0;
    transform: translate(0, 0);
  }
  10% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
    transform: translate(20px, -40px);
  }
  90% {
    opacity: 0;
  }
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* 标题下划线 */
.title-underline {
  width: 0;
  height: 5px;
  background: linear-gradient(90deg, transparent, #667eea, #764ba2, transparent);
  margin: 2rem auto 0;
  border-radius: 2px;
  animation: underline-expand 1.5s ease-out 0.8s forwards;
}

@keyframes underline-expand {
  to {
    width: 300px;
  }
}

/* 副标题 */
.subtitle {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0 0 5rem 0;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-weight: 300;
  opacity: 0;
  animation: fadeInUp 1s ease-out 1s forwards;
  position: relative;
  text-shadow:
    0 0 20px rgba(255, 255, 255, 0.3),
    0 0 40px rgba(102, 126, 234, 0.2);
}

/* 副标题周围的小粒子 */
.subtitle::before,
.subtitle::after {
  content: '';
  position: absolute;
  width: 4px;
  height: 4px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(139, 92, 246, 0.5) 50%, transparent 70%);
  border-radius: 50%;
  opacity: 0;
  animation: subtitle-sparkle 3s infinite ease-in-out;
}

.subtitle::before {
  left: -20px;
  top: 50%;
  animation-delay: 0s;
}

.subtitle::after {
  right: -20px;
  top: 50%;
  animation-delay: 1.5s;
}

@keyframes subtitle-sparkle {
  0%, 100% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

/* 标题渐入动画 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 开始探索按钮 */
.explore-button {
  position: relative;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  opacity: 0;
  animation: fadeInUp 1s ease-out 1.5s forwards;
  transition: transform 0.3s ease;
}

.explore-button:hover {
  transform: translateY(-3px);
}

.explore-button:active {
  transform: translateY(-1px);
}

.button-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50px;
  z-index: -1;
  transition: all 0.3s ease;
}

.explore-button:hover .button-bg {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.4), 0 0 60px rgba(118, 75, 162, 0.3);
}

.button-bg::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
  border-radius: 50px;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
  background-size: 200% 200%;
  animation: gradient-rotate 3s linear infinite;
}

@keyframes gradient-rotate {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.explore-button:hover .button-bg::before {
  opacity: 1;
}

.button-text {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.3rem 3rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.05em;
  position: relative;
  z-index: 1;
}

.text-content {
  transition: transform 0.3s ease;
}

.explore-button:hover .text-content {
  transform: translateX(-5px);
}

.arrow-icon {
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
}

.explore-button:hover .arrow-icon {
  transform: translateX(5px);
}

/* 滚动提示 */
.scroll-hint {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  animation: fadeIn 1s ease-out 2s forwards, bounce 2s ease-in-out 3s infinite;
}

@keyframes fadeIn {
  to {
    opacity: 0.5;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(10px);
  }
}

.mouse {
  width: 24px;
  height: 36px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  position: relative;
}

.mouse::before {
  content: '';
  position: absolute;
  width: 3px;
  height: 8px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  animation: mouse-scroll 2s ease-in-out infinite;
}

@keyframes mouse-scroll {
  0% {
    opacity: 1;
    top: 6px;
  }
  100% {
    opacity: 0;
    top: 20px;
  }
}

/* 响应式设计 - 平板 */
@media (max-width: 1024px) {
  .main-title {
    font-size: 5rem;
  }

  .subtitle {
    font-size: 1.25rem;
    margin-bottom: 4rem;
  }

  .button-text {
    padding: 1.15rem 2.5rem;
    font-size: 1.15rem;
  }

  .gradient-orb {
    filter: blur(60px);
  }
}

/* 响应式设计 - 手机 */
@media (max-width: 768px) {
  .content {
    padding: 1rem;
  }

  .main-title {
    font-size: 3.5rem;
  }

  .subtitle {
    font-size: 1.1rem;
    letter-spacing: 0.2em;
    margin-bottom: 3rem;
  }

  .button-text {
    padding: 1rem 2.2rem;
    font-size: 1.05rem;
  }

  .gradient-orb {
    filter: blur(50px);
    opacity: 0.2;
  }

  .orb-1 {
    width: 300px;
    height: 300px;
  }

  .orb-2 {
    width: 250px;
    height: 250px;
  }

  .orb-3 {
    width: 200px;
    height: 200px;
  }

  .scroll-hint {
    display: none;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 2.8rem;
  }

  .subtitle {
    font-size: 0.95rem;
  }

  .button-text {
    padding: 0.9rem 2rem;
    font-size: 1rem;
    gap: 0.5rem;
  }

  .arrow-icon {
    width: 20px;
    height: 20px;
  }
}
</style>
