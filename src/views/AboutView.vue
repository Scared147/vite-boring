<template>
  <div class="about">
    <div class="container">
      <div class="icon">🚧</div>
      <h1 class="title">正在赶制中</h1>
      <p class="desc">内容还没好，开发者正在努力搬砖，敬请期待</p>
      <div class="progress-bar">
        <div class="progress-fill"></div>
      </div>
      <p class="hint">Loading<span class="dots"><span>.</span><span>.</span><span>.</span></span></p>
    </div>
  </div>
</template>

<style scoped>
.about {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
}

.container {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 48px 32px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.08);
  max-width: 420px;
  width: 90%;
}

.icon {
  font-size: 3.5rem;
  animation: shake 2.4s ease-in-out infinite;
}

@keyframes shake {
  0%, 100% { transform: rotate(0deg); }
  20%       { transform: rotate(-8deg); }
  40%       { transform: rotate(8deg); }
  60%       { transform: rotate(-4deg); }
  80%       { transform: rotate(4deg); }
}

.title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
}

.desc {
  font-size: 0.95rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.6;
}

/* 进度条 */
.progress-bar {
  width: 100%;
  height: 6px;
  background: #e5e7eb;
  border-radius: 99px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  width: 40%;
  background: linear-gradient(90deg, #6366f1, #a78bfa);
  border-radius: 99px;
  animation: progress 3s ease-in-out infinite alternate;
}

@keyframes progress {
  0%   { width: 20%; }
  100% { width: 75%; }
}

/* 底部提示 */
.hint {
  font-size: 0.85rem;
  color: #9ca3af;
  margin: 0;
  letter-spacing: 0.05em;
}

.dots span {
  display: inline-block;
  animation: blink 1.2s step-start infinite;
}
.dots span:nth-child(1) { animation-delay: 0s; }
.dots span:nth-child(2) { animation-delay: 0.3s; }
.dots span:nth-child(3) { animation-delay: 0.6s; }

@keyframes blink {
  0%, 100% { opacity: 0; }
  50%      { opacity: 1; }
}
</style>
