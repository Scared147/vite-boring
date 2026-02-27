<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage, ElNotification } from 'element-plus'
import { message } from 'ant-design-vue'

// ── Element Plus state ───────────────────
const inputVal = ref('')
const sliderVal = ref(40)
const switchVal = ref(true)
const rateVal = ref(3.5)
const progress = ref(68)
const selectVal = ref('vue')
const dialogVisible = ref(false)

const selectOptions = [
  { label: 'Vue 3', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Svelte', value: 'svelte' },
]

function showElMessage() {
  ElMessage.success('Element Plus 消息提示成功！')
}

function showElNotify() {
  ElNotification({ title: '通知', message: '这是一条 Element Plus 通知', type: 'info' })
}

// ── Ant Design Vue state ─────────────────
const antTab = ref('1')
const antStepCurrent = ref(1)

function showAntMessage() {
  message.success('Ant Design Vue 消息提示成功！')
}

const tableData = [
  { name: '日记本', status: '进行中', progress: 72 },
  { name: '书签墙', status: '已完成', progress: 100 },
  { name: '时间轴', status: '计划中', progress: 15 },
]
</script>

<template>
  <div class="showcase-page">
    <!-- 背景装饰 -->
    <div class="bg-layer">
      <div class="orb orb-a"></div>
      <div class="orb orb-b"></div>
      <div class="orb orb-c"></div>
      <div class="grid-bg"></div>
    </div>

    <div class="page-wrapper">
      <!-- 顶部标题 -->
      <header class="page-header">
        <div class="header-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="3" y="3" width="7" height="7" rx="1.5" stroke-width="1.5"/>
            <rect x="14" y="3" width="7" height="7" rx="1.5" stroke-width="1.5"/>
            <rect x="3" y="14" width="7" height="7" rx="1.5" stroke-width="1.5"/>
            <rect x="14" y="14" width="7" height="7" rx="1.5" stroke-width="1.5"/>
          </svg>
        </div>
        <div class="header-text">
          <h1 class="page-title">UI 组件示例</h1>
          <p class="page-sub">Element Plus · Ant Design Vue</p>
        </div>
        <div class="header-badges">
          <span class="lib-badge el-badge">Element Plus</span>
          <span class="lib-badge ant-badge">Ant Design Vue</span>
        </div>
      </header>

      <!-- ═══════════ SECTION: Element Plus ═══════════ -->
      <section class="section">
        <div class="section-label el-label">
          <span class="label-dot"></span>
          Element Plus
        </div>

        <!-- 按钮组 -->
        <div class="card">
          <h3 class="card-title">按钮 Button</h3>
          <div class="row wrap gap-sm">
            <el-button>默认</el-button>
            <el-button type="primary">主要</el-button>
            <el-button type="success">成功</el-button>
            <el-button type="warning">警告</el-button>
            <el-button type="danger">危险</el-button>
            <el-button type="info">信息</el-button>
            <el-button type="primary" plain>朴素</el-button>
            <el-button type="primary" round>圆角</el-button>
            <el-button type="primary" circle icon="Plus" />
            <el-button type="primary" loading>加载中</el-button>
          </div>
        </div>

        <!-- 输入 + 选择 -->
        <div class="card">
          <h3 class="card-title">输入 / 选择</h3>
          <div class="row wrap gap-sm">
            <el-input v-model="inputVal" placeholder="请输入内容" clearable style="width: 200px" />
            <el-input v-model="inputVal" placeholder="搜索" :prefix-icon="'Search'" style="width: 200px" />
            <el-select v-model="selectVal" style="width: 160px">
              <el-option
                v-for="opt in selectOptions"
                :key="opt.value"
                :label="opt.label"
                :value="opt.value"
              />
            </el-select>
          </div>
        </div>

        <!-- 标签 -->
        <div class="card">
          <h3 class="card-title">标签 Tag</h3>
          <div class="row wrap gap-sm">
            <el-tag>默认</el-tag>
            <el-tag type="success">成功</el-tag>
            <el-tag type="warning">警告</el-tag>
            <el-tag type="danger">危险</el-tag>
            <el-tag type="info">信息</el-tag>
            <el-tag effect="dark" type="primary">Dark</el-tag>
            <el-tag effect="plain" type="success">Plain</el-tag>
            <el-tag closable type="primary">可关闭</el-tag>
          </div>
        </div>

        <!-- 滑块 / 开关 / 评分 -->
        <div class="card">
          <h3 class="card-title">表单控件</h3>
          <div class="form-grid">
            <div class="form-item">
              <label>滑块 Slider</label>
              <el-slider v-model="sliderVal" style="width: 240px" />
              <span class="form-val">{{ sliderVal }}</span>
            </div>
            <div class="form-item">
              <label>开关 Switch</label>
              <el-switch v-model="switchVal" />
              <span class="form-val">{{ switchVal ? '开' : '关' }}</span>
            </div>
            <div class="form-item">
              <label>评分 Rate</label>
              <el-rate v-model="rateVal" allow-half />
              <span class="form-val">{{ rateVal }}</span>
            </div>
            <div class="form-item">
              <label>进度 Progress</label>
              <el-progress :percentage="progress" style="width: 240px" />
            </div>
          </div>
        </div>

        <!-- 消息 / 通知 / 对话框 -->
        <div class="card">
          <h3 class="card-title">反馈组件</h3>
          <div class="row wrap gap-sm">
            <el-button type="primary" @click="showElMessage">Message 消息</el-button>
            <el-button type="info" @click="showElNotify">Notification 通知</el-button>
            <el-button type="warning" @click="dialogVisible = true">Dialog 对话框</el-button>
          </div>
        </div>
      </section>

      <!-- ═══════════ SECTION: Ant Design Vue ═══════════ -->
      <section class="section">
        <div class="section-label ant-label">
          <span class="label-dot"></span>
          Ant Design Vue
        </div>

        <!-- 按钮组 -->
        <div class="card">
          <h3 class="card-title">按钮 Button</h3>
          <div class="row wrap gap-sm">
            <a-button>默认</a-button>
            <a-button type="primary">主要</a-button>
            <a-button type="dashed">虚线</a-button>
            <a-button type="text">文字</a-button>
            <a-button type="link">链接</a-button>
            <a-button danger>危险</a-button>
            <a-button type="primary" shape="round">圆角</a-button>
            <a-button type="primary" shape="circle" />
            <a-button type="primary" loading>加载中</a-button>
          </div>
        </div>

        <!-- 徽标 -->
        <div class="card">
          <h3 class="card-title">徽标 Badge · 标签 Tag</h3>
          <div class="row wrap gap-md">
            <a-badge :count="5">
              <a-button>消息</a-button>
            </a-badge>
            <a-badge :count="99" :overflow-count="99">
              <a-button>通知</a-button>
            </a-badge>
            <a-badge dot>
              <a-button>小红点</a-button>
            </a-badge>
            <a-tag color="blue">蓝色</a-tag>
            <a-tag color="green">绿色</a-tag>
            <a-tag color="orange">橙色</a-tag>
            <a-tag color="red">红色</a-tag>
            <a-tag color="purple">紫色</a-tag>
            <a-tag color="cyan" closable>可关闭</a-tag>
          </div>
        </div>

        <!-- Tabs -->
        <div class="card">
          <h3 class="card-title">标签页 Tabs</h3>
          <a-tabs v-model:activeKey="antTab">
            <a-tab-pane key="1" tab="概览">
              <div class="tab-content">
                <a-statistic title="完成任务" :value="128" suffix="个" />
              </div>
            </a-tab-pane>
            <a-tab-pane key="2" tab="详情">
              <div class="tab-content">
                <a-statistic title="累计时长" :value="9.3" :precision="1" suffix="小时" />
              </div>
            </a-tab-pane>
            <a-tab-pane key="3" tab="设置">
              <div class="tab-content">
                <a-statistic title="当前积分" :value="3680" />
              </div>
            </a-tab-pane>
          </a-tabs>
        </div>

        <!-- Steps -->
        <div class="card">
          <h3 class="card-title">步骤条 Steps</h3>
          <a-steps :current="antStepCurrent" size="small" style="margin-bottom: 16px">
            <a-step title="注册" description="创建账号" />
            <a-step title="配置" description="完善信息" />
            <a-step title="完成" description="开始使用" />
          </a-steps>
          <div class="row gap-sm">
            <a-button :disabled="antStepCurrent === 0" @click="antStepCurrent--">上一步</a-button>
            <a-button type="primary" :disabled="antStepCurrent === 2" @click="antStepCurrent++">下一步</a-button>
          </div>
        </div>

        <!-- 时间轴 -->
        <div class="card">
          <h3 class="card-title">时间轴 Timeline · 消息 Message</h3>
          <div class="row wrap gap-md">
            <a-timeline style="flex: 1; min-width: 200px">
              <a-timeline-item color="green">创建项目 2026-01-01</a-timeline-item>
              <a-timeline-item color="blue">功能开发 2026-02-01</a-timeline-item>
              <a-timeline-item color="orange">测试阶段 2026-02-20</a-timeline-item>
              <a-timeline-item color="red">正式上线 2026-03-01</a-timeline-item>
            </a-timeline>
            <div class="row wrap gap-sm" style="align-items: flex-start">
              <a-button type="primary" @click="showAntMessage">Message 消息</a-button>
            </div>
          </div>
        </div>

        <!-- 表格 -->
        <div class="card">
          <h3 class="card-title">表格 Table</h3>
          <a-table
            :data-source="tableData"
            :pagination="false"
            size="small"
            :columns="[
              { title: '项目名称', dataIndex: 'name', key: 'name' },
              { title: '状态', dataIndex: 'status', key: 'status' },
              { title: '进度', dataIndex: 'progress', key: 'progress' },
            ]"
          >
            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'status'">
                <a-tag :color="record.status === '已完成' ? 'green' : record.status === '进行中' ? 'blue' : 'default'">
                  {{ record.status }}
                </a-tag>
              </template>
              <template v-else-if="column.key === 'progress'">
                <a-progress :percent="record.progress" size="small" />
              </template>
            </template>
          </a-table>
        </div>
      </section>

      <!-- 底部 -->
      <footer class="page-footer">
        <div class="footer-line"></div>
        <span class="footer-text">Element Plus + Ant Design Vue</span>
        <div class="footer-line"></div>
      </footer>
    </div>

    <!-- Element Plus Dialog -->
    <el-dialog v-model="dialogVisible" title="Element Plus 对话框" width="400px">
      <p>这是一个 <strong>el-dialog</strong> 示例。</p>
      <p>支持自定义内容、操作按钮等。</p>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确认</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
/* ── 页面基础 ────────────────────────── */
.showcase-page {
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
  opacity: 0.15;
  animation: float-orb 22s ease-in-out infinite;
}
.orb-a {
  width: 500px; height: 500px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  top: -10%; left: -10%;
}
.orb-b {
  width: 400px; height: 400px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  bottom: -8%; right: -8%;
  animation-delay: 8s;
}
.orb-c {
  width: 320px; height: 320px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  top: 50%; left: 50%;
  animation-delay: 16s;
}
@keyframes float-orb {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(24px, -24px) scale(1.06); }
  66%       { transform: translate(-16px, 16px) scale(0.94); }
}
.grid-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(102, 126, 234, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(102, 126, 234, 0.04) 1px, transparent 1px);
  background-size: 48px 48px;
  animation: grid-drift 28s linear infinite;
}
@keyframes grid-drift {
  from { transform: translate(0, 0); }
  to   { transform: translate(48px, 48px); }
}

/* ── 页面包装 ─────────────────────────── */
.page-wrapper {
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem 5rem;
}

/* ── 顶部标题 ────────────────────────── */
.page-header {
  display: flex;
  align-items: center;
  gap: 1.4rem;
  margin-bottom: 3.5rem;
  opacity: 0;
  animation: slide-in 0.8s ease-out 0.1s forwards;
}
.header-icon {
  width: 56px; height: 56px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
  border: 1px solid rgba(102, 126, 234, 0.3);
  color: #818cf8;
  flex-shrink: 0;
}
.header-icon svg { width: 26px; height: 26px; }
.header-text { flex: 1; }
.page-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 0.3rem;
  background: linear-gradient(135deg, #818cf8 0%, #c084fc 60%, #38bdf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.page-sub {
  font-size: 0.92rem;
  color: rgba(255, 255, 255, 0.35);
  margin: 0;
  letter-spacing: 0.06em;
}
.header-badges {
  display: flex;
  gap: 0.5rem;
}
.lib-badge {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  letter-spacing: 0.04em;
}
.el-badge {
  background: rgba(64, 158, 255, 0.12);
  border: 1px solid rgba(64, 158, 255, 0.3);
  color: #60a5fa;
}
.ant-badge {
  background: rgba(250, 140, 22, 0.12);
  border: 1px solid rgba(250, 140, 22, 0.3);
  color: #fb923c;
}

/* ── Section ─────────────────────────── */
.section {
  margin-bottom: 3rem;
  opacity: 0;
  animation: slide-in 0.7s ease-out forwards;
}
.section:nth-child(2) { animation-delay: 0.25s; }
.section:nth-child(3) { animation-delay: 0.45s; }

.section-label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.3rem 1rem;
  border-radius: 50px;
  margin-bottom: 1.2rem;
}
.label-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: currentColor;
}
.el-label {
  background: rgba(64, 158, 255, 0.1);
  border: 1px solid rgba(64, 158, 255, 0.25);
  color: #60a5fa;
}
.ant-label {
  background: rgba(250, 140, 22, 0.1);
  border: 1px solid rgba(250, 140, 22, 0.25);
  color: #fb923c;
}

/* ── 卡片 ────────────────────────────── */
.card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 1.6rem 1.8rem;
  margin-bottom: 1rem;
  backdrop-filter: blur(12px);
  transition: border-color 0.3s, background 0.3s;
}
.card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.14);
}
.card-title {
  font-size: 0.88rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.45);
  margin: 0 0 1.2rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

/* ── 布局工具 ────────────────────────── */
.row {
  display: flex;
  align-items: center;
}
.wrap { flex-wrap: wrap; }
.gap-sm { gap: 0.6rem; }
.gap-md { gap: 1rem; }

/* ── 表单控件行 ──────────────────────── */
.form-grid {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}
.form-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.form-item label {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.4);
  width: 100px;
  flex-shrink: 0;
}
.form-val {
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.3);
  min-width: 2rem;
}

/* ── Tab 内容 ───────────────────────── */
.tab-content {
  padding: 0.8rem 0;
}

/* ── 底部装饰 ────────────────────────── */
.page-footer {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-top: 3rem;
  opacity: 0;
  animation: slide-in 0.7s ease-out 0.7s forwards;
}
.footer-line {
  flex: 1; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
}
.footer-text {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.2);
  letter-spacing: 0.1em;
  white-space: nowrap;
}

@keyframes slide-in {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── 响应式 ──────────────────────────── */
@media (max-width: 640px) {
  .page-wrapper { padding: 2.5rem 1rem 4rem; }
  .page-title { font-size: 1.6rem; }
  .page-header { flex-wrap: wrap; gap: 1rem; }
  .header-badges { width: 100%; }
  .card { padding: 1.2rem 1.2rem; }
  .form-item { flex-wrap: wrap; }
}

/* ── Element Plus 暗色适配 ───────────── */
:deep(.el-button) {
  --el-button-bg-color: rgba(255, 255, 255, 0.06);
  --el-button-border-color: rgba(255, 255, 255, 0.15);
  --el-button-text-color: rgba(255, 255, 255, 0.75);
}
:deep(.el-input__wrapper) {
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.12) inset;
}
:deep(.el-input__inner) {
  color: rgba(255, 255, 255, 0.8);
}
:deep(.el-select .el-input__wrapper) {
  background: rgba(255, 255, 255, 0.05);
}
:deep(.el-slider__runway) {
  background: rgba(255, 255, 255, 0.12);
}

/* ── Ant Design Vue 暗色适配 ─────────── */
:deep(.ant-btn:not(.ant-btn-primary):not(.ant-btn-dangerous)) {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.75);
}
:deep(.ant-btn:not(.ant-btn-primary):not(.ant-btn-dangerous):hover) {
  border-color: rgba(102, 126, 234, 0.5);
  color: #818cf8;
}
:deep(.ant-table) {
  background: transparent;
  color: rgba(255, 255, 255, 0.7);
}
:deep(.ant-table-thead > tr > th) {
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.45);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
:deep(.ant-table-tbody > tr > td) {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
:deep(.ant-table-tbody > tr:hover > td) {
  background: rgba(255, 255, 255, 0.04);
}
:deep(.ant-tabs-tab) {
  color: rgba(255, 255, 255, 0.45);
}
:deep(.ant-tabs-tab-active .ant-tabs-tab-btn) {
  color: #818cf8;
}
:deep(.ant-tabs-ink-bar) {
  background: #818cf8;
}
:deep(.ant-steps-item-title) {
  color: rgba(255, 255, 255, 0.65) !important;
}
:deep(.ant-steps-item-description) {
  color: rgba(255, 255, 255, 0.35) !important;
}
:deep(.ant-statistic-title) {
  color: rgba(255, 255, 255, 0.4);
}
:deep(.ant-statistic-content) {
  color: rgba(255, 255, 255, 0.85);
}
:deep(.ant-timeline-item-content) {
  color: rgba(255, 255, 255, 0.6);
}
</style>
