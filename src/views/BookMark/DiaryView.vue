<script setup lang="ts">
import { ref } from 'vue'

const expandedId = ref<number | null>(null)

const toggleEntry = (id: number) => {
  expandedId.value = expandedId.value === id ? null : id
}

const entries = [
  {
    id: 1,
    date: '2026年02月25日',
    weekday: '星期三',
    season: '冬',
    mood: '🌸',
    moodLabel: '温柔',
    title: '午后，班味十足',
    excerpt: 'boring……',
    content: `very boring……`,
    tags: ['冬天', '午后', '班味生活'],
    colorClass: 'amber',
  },
  {
    id: 2,
    date: '2026年02月xx日',
    weekday: '星期三',
    season: '冬',
    mood: '🌙',
    moodLabel: '沉静',
    title: '深夜落雪，写给自己的信',
    excerpt: '夜深了，窗外飘起了今年的第一场雪……',
    content: `xxx`,
    tags: ['冬天', '深夜', '雪', '内心独白'],
    colorClass: 'indigo',
  },
]
</script>

<template>
  <div class="diary-page">
    <!-- 背景装饰 -->
    <div class="bg-layer">
      <div class="orb orb-a"></div>
      <div class="orb orb-b"></div>
      <div class="orb orb-c"></div>
      <div class="grid-bg"></div>
    </div>

    <!-- 页面主体 -->
    <div class="page-wrapper">
      <!-- 顶部标题区 -->
      <header class="page-header">
        <div class="header-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="header-text">
          <h1 class="page-title">我的日记</h1>
          <p class="page-sub">记录生活中那些值得被记住的瞬间</p>
        </div>
        <div class="header-deco">
          <span class="deco-dot"></span>
          <span class="deco-dot"></span>
          <span class="deco-dot"></span>
        </div>
      </header>

      <!-- 日记列表 -->
      <main class="entries-list">
        <div
          v-for="entry in entries"
          :key="entry.id"
          class="entry-card"
          :class="[entry.colorClass, { expanded: expandedId === entry.id }]"
        >
          <!-- 卡片左侧时间轴 -->
          <div class="timeline-axis">
            <div class="season-badge">{{ entry.season }}</div>
            <div class="axis-line"></div>
          </div>

          <!-- 卡片主体 -->
          <div class="card-body">
            <!-- 元信息行 -->
            <div class="card-meta">
              <span class="card-date">{{ entry.date }}</span>
              <span class="card-weekday">{{ entry.weekday }}</span>
              <span class="card-divider">·</span>
              <span class="card-mood">{{ entry.mood }} {{ entry.moodLabel }}</span>
            </div>

            <!-- 标题 -->
            <h2 class="card-title">{{ entry.title }}</h2>

            <!-- 摘要 / 正文 -->
            <div class="card-content">
              <p v-if="expandedId !== entry.id" class="card-excerpt">{{ entry.excerpt }}</p>
              <div v-else class="card-full">
                <p v-for="(para, i) in entry.content.split('\n\n')" :key="i" class="full-para">
                  {{ para }}
                </p>
              </div>
            </div>

            <!-- 标签 -->
            <div class="card-tags">
              <span v-for="tag in entry.tags" :key="tag" class="tag"># {{ tag }}</span>
            </div>

            <!-- 操作行 -->
            <div class="card-actions">
              <button class="read-btn" @click="toggleEntry(entry.id)">
                <span>{{ expandedId === entry.id ? '收起' : '展开阅读' }}</span>
                <svg class="btn-icon" :class="{ rotated: expandedId === entry.id }"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M6 9l6 6 6-6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>

      <!-- 底部装饰 -->
      <footer class="page-footer">
        <div class="footer-line"></div>
        <span class="footer-text">愿每一个日子都值得被记录</span>
        <div class="footer-line"></div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
/* ── 页面基础 ────────────────────────── */
.diary-page {
  min-height: 100vh;
  background: #0d0f1a;
  position: relative;
  overflow-x: hidden;
}

/* ── 背景层 ──────────────────────────── */
.bg-layer {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.18;
  animation: float-orb 22s ease-in-out infinite;
}
.orb-a {
  width: 520px; height: 520px;
  background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
  top: -12%; left: -12%;
  animation-delay: 0s;
}
.orb-b {
  width: 420px; height: 420px;
  background: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%);
  bottom: -10%; right: -8%;
  animation-delay: 7s;
}
.orb-c {
  width: 360px; height: 360px;
  background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%);
  top: 45%; left: 55%;
  animation-delay: 14s;
}

@keyframes float-orb {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(28px, -28px) scale(1.08); }
  66%       { transform: translate(-18px, 18px) scale(0.92); }
}

.grid-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(200, 170, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(200, 170, 255, 0.04) 1px, transparent 1px);
  background-size: 48px 48px;
  animation: grid-drift 25s linear infinite;
}

@keyframes grid-drift {
  from { transform: translate(0, 0); }
  to   { transform: translate(48px, 48px); }
}

/* ── 页面包装 ─────────────────────────── */
.page-wrapper {
  position: relative;
  z-index: 1;
  max-width: 780px;
  margin: 0 auto;
  padding: 4rem 2rem 5rem;
}

/* ── 顶部标题 ────────────────────────── */
.page-header {
  display: flex;
  align-items: center;
  gap: 1.4rem;
  margin-bottom: 4rem;
  opacity: 0;
  animation: slide-in 0.8s ease-out 0.1s forwards;
}

.header-icon {
  width: 56px; height: 56px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(246, 211, 101, 0.2), rgba(253, 160, 133, 0.2));
  border: 1px solid rgba(246, 211, 101, 0.3);
  color: #f6d365;
  flex-shrink: 0;
}
.header-icon svg { width: 26px; height: 26px; }

.header-text { flex: 1; }
.page-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 0.3rem;
  letter-spacing: 0.04em;
  background: linear-gradient(135deg, #f6d365 0%, #fda085 60%, #e8a0f8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.page-sub {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.4);
  margin: 0;
  letter-spacing: 0.06em;
}

.header-deco {
  display: flex; flex-direction: column; gap: 5px;
}
.deco-dot {
  display: block; width: 6px; height: 6px;
  border-radius: 50%;
  background: rgba(246, 211, 101, 0.5);
}
.deco-dot:nth-child(2) { background: rgba(253, 160, 133, 0.5); }
.deco-dot:nth-child(3) { background: rgba(232, 160, 248, 0.5); }

@keyframes slide-in {
  from { opacity: 0; transform: translateY(-20px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── 条目列表 ────────────────────────── */
.entries-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* ── 单条日记卡片 ─────────────────────── */
.entry-card {
  display: flex;
  gap: 1.6rem;
  opacity: 0;
  animation: slide-in 0.7s ease-out forwards;
}
.entry-card:nth-child(1) { animation-delay: 0.3s; }
.entry-card:nth-child(2) { animation-delay: 0.5s; }

/* ── 时间轴侧边 ──────────────────────── */
.timeline-axis {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
  padding-top: 4px;
}

.season-badge {
  width: 40px; height: 40px;
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem; font-weight: 700;
  letter-spacing: 0.02em;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}
.entry-card:hover .season-badge { transform: scale(1.08) rotate(-4deg); }

.amber .season-badge {
  background: linear-gradient(135deg, rgba(246, 211, 101, 0.2), rgba(253, 160, 133, 0.2));
  border: 1px solid rgba(246, 211, 101, 0.4);
  color: #f6d365;
}
.indigo .season-badge {
  background: linear-gradient(135deg, rgba(138, 120, 234, 0.2), rgba(186, 148, 255, 0.2));
  border: 1px solid rgba(138, 120, 234, 0.4);
  color: #a78bfa;
}

.axis-line {
  flex: 1;
  width: 2px;
  min-height: 40px;
  margin-top: 8px;
  border-radius: 1px;
}
.amber .axis-line {
  background: linear-gradient(to bottom, rgba(246, 211, 101, 0.4), transparent);
}
.indigo .axis-line {
  background: linear-gradient(to bottom, rgba(138, 120, 234, 0.4), transparent);
}

/* ── 卡片正文区 ──────────────────────── */
.card-body {
  flex: 1;
  border-radius: 20px;
  padding: 1.8rem 2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  transition: all 0.35s ease;
  cursor: default;
}
.entry-card:hover .card-body {
  background: rgba(255, 255, 255, 0.055);
  transform: translateY(-3px);
}

.amber .card-body {
  box-shadow:
    0 4px 32px rgba(246, 211, 101, 0.06),
    inset 0 1px 0 rgba(246, 211, 101, 0.08);
}
.amber .card-body:hover,
.amber:hover .card-body {
  border-color: rgba(246, 211, 101, 0.2);
  box-shadow:
    0 12px 48px rgba(246, 211, 101, 0.12),
    inset 0 1px 0 rgba(246, 211, 101, 0.12);
}

.indigo .card-body {
  box-shadow:
    0 4px 32px rgba(138, 120, 234, 0.06),
    inset 0 1px 0 rgba(138, 120, 234, 0.08);
}
.indigo .card-body:hover,
.indigo:hover .card-body {
  border-color: rgba(138, 120, 234, 0.2);
  box-shadow:
    0 12px 48px rgba(138, 120, 234, 0.12),
    inset 0 1px 0 rgba(138, 120, 234, 0.12);
}

/* ── 元信息 ──────────────────────────── */
.card-meta {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.9rem;
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.35);
}
.card-date { font-weight: 500; }
.card-weekday { opacity: 0.8; }
.card-divider { opacity: 0.4; }
.card-mood { font-size: 0.85rem; }

/* ── 标题 ───────────────────────────── */
.card-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 1rem;
  line-height: 1.4;
  letter-spacing: 0.02em;
  transition: color 0.3s;
}
.amber:hover .card-title { color: #fde68a; }
.indigo:hover .card-title { color: #c4b5fd; }

/* ── 内容区 ──────────────────────────── */
.card-excerpt {
  font-size: 0.96rem;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.55);
  margin: 0;
}

.card-full {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.full-para {
  font-size: 0.96rem;
  line-height: 1.95;
  color: rgba(255, 255, 255, 0.65);
  margin: 0;
  text-indent: 2em;
}

/* ── 标签 ───────────────────────────── */
.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.2rem;
}
.tag {
  font-size: 0.76rem;
  padding: 0.28rem 0.8rem;
  border-radius: 50px;
  letter-spacing: 0.04em;
  transition: all 0.25s;
}
.amber .tag {
  background: rgba(246, 211, 101, 0.1);
  border: 1px solid rgba(246, 211, 101, 0.2);
  color: rgba(246, 211, 101, 0.8);
}
.amber .tag:hover {
  background: rgba(246, 211, 101, 0.18);
  color: #f6d365;
}
.indigo .tag {
  background: rgba(138, 120, 234, 0.1);
  border: 1px solid rgba(138, 120, 234, 0.2);
  color: rgba(167, 139, 250, 0.8);
}
.indigo .tag:hover {
  background: rgba(138, 120, 234, 0.18);
  color: #a78bfa;
}

/* ── 操作按钮 ────────────────────────── */
.card-actions {
  margin-top: 1.4rem;
}
.read-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 1.3rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-size: 0.88rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.read-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.3s;
}
.read-btn:hover::before { opacity: 1; }

.amber .read-btn {
  background: linear-gradient(135deg, rgba(246, 211, 101, 0.15), rgba(253, 160, 133, 0.15));
  border: 1px solid rgba(246, 211, 101, 0.3);
  color: #f6d365;
}
.amber .read-btn:hover {
  background: linear-gradient(135deg, rgba(246, 211, 101, 0.25), rgba(253, 160, 133, 0.25));
  box-shadow: 0 4px 20px rgba(246, 211, 101, 0.2);
  transform: translateY(-1px);
}

.indigo .read-btn {
  background: linear-gradient(135deg, rgba(138, 120, 234, 0.15), rgba(186, 148, 255, 0.15));
  border: 1px solid rgba(138, 120, 234, 0.3);
  color: #a78bfa;
}
.indigo .read-btn:hover {
  background: linear-gradient(135deg, rgba(138, 120, 234, 0.25), rgba(186, 148, 255, 0.25));
  box-shadow: 0 4px 20px rgba(138, 120, 234, 0.2);
  transform: translateY(-1px);
}

.btn-icon {
  width: 16px; height: 16px;
  transition: transform 0.3s ease;
}
.btn-icon.rotated { transform: rotate(180deg); }

/* ── 底部装饰 ────────────────────────── */
.page-footer {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-top: 4rem;
  opacity: 0;
  animation: slide-in 0.7s ease-out 0.9s forwards;
}
.footer-line {
  flex: 1; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.12), transparent);
}
.footer-text {
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.25);
  letter-spacing: 0.12em;
  white-space: nowrap;
}

/* ── 响应式 ──────────────────────────── */
@media (max-width: 640px) {
  .page-wrapper { padding: 2.5rem 1.2rem 4rem; }
  .page-title { font-size: 1.75rem; }
  .page-header { gap: 1rem; margin-bottom: 2.8rem; }
  .header-icon { width: 48px; height: 48px; }
  .entry-card { gap: 1rem; }
  .card-body { padding: 1.4rem 1.3rem; }
  .card-title { font-size: 1.15rem; }
  .timeline-axis { display: none; }
}
</style>
