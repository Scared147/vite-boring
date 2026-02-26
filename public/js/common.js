/**
 * common.js — 项目通用工具库
 * 依赖：jQuery、axios
 */

/* ─────────────────────────────────────────
   1. Toast 通知
   用法：Toast.show('消息内容')
         Toast.show('成功！', 'success')
         Toast.show('出错了', 'error')
         Toast.show('警告', 'warning')
───────────────────────────────────────── */
const Toast = (() => {
  let $container

  function init() {
    if ($('#toast-container').length === 0) {
      $container = $('<div id="toast-container"></div>').appendTo('body')
    } else {
      $container = $('#toast-container')
    }
  }

  function show(message, type = 'info', duration = 3000) {
    init()
    const icons = { success: '✓', error: '✕', warning: '⚠', info: 'ℹ' }
    const $toast = $(`
      <div class="toast toast-${type}">
        <span class="toast-icon">${icons[type] || icons.info}</span>
        <span class="toast-msg">${message}</span>
      </div>
    `).appendTo($container)

    // 入场
    setTimeout(() => $toast.addClass('toast-show'), 10)

    // 自动消失
    setTimeout(() => {
      $toast.removeClass('toast-show')
      setTimeout(() => $toast.remove(), 300)
    }, duration)
  }

  return { show }
})()


/* ─────────────────────────────────────────
   2. Loading 遮罩
   用法：Loading.show()  /  Loading.hide()
───────────────────────────────────────── */
const Loading = (() => {
  let $overlay

  function show(text = '加载中...') {
    if ($('#loading-overlay').length > 0) return
    $overlay = $(`
      <div id="loading-overlay">
        <div class="loading-box">
          <div class="loading-spinner"></div>
          <div class="loading-text">${text}</div>
        </div>
      </div>
    `).appendTo('body')
  }

  function hide() {
    $('#loading-overlay').fadeOut(200, function () { $(this).remove() })
  }

  return { show, hide }
})()


/* ─────────────────────────────────────────
   3. HTTP 请求封装（基于 axios）
   用法：
     Http.get('/api/users').then(data => console.log(data))
     Http.post('/api/login', { user, pass }).then(...)
───────────────────────────────────────── */
const Http = (() => {
  const instance = axios.create({
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
  })

  // 请求拦截：自动显示 loading
  instance.interceptors.request.use(config => {
    Loading.show()
    return config
  })

  // 响应拦截：隐藏 loading，统一错误提示
  instance.interceptors.response.use(
    res => {
      Loading.hide()
      return res.data
    },
    err => {
      Loading.hide()
      const msg = err.response?.data?.message || err.message || '请求失败'
      Toast.show(msg, 'error')
      return Promise.reject(err)
    }
  )

  return {
    get: (url, params) => instance.get(url, { params }),
    post: (url, data) => instance.post(url, data),
    put: (url, data) => instance.put(url, data),
    del: (url) => instance.delete(url)
  }
})()


/* ─────────────────────────────────────────
   4. 防抖 / 节流
   用法：
     const fn = debounce(() => search(), 300)
     const fn = throttle(() => scroll(), 100)
───────────────────────────────────────── */
function debounce(fn, delay = 300) {
  let timer
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, args), delay)
  }
}

function throttle(fn, interval = 100) {
  let last = 0
  return function (...args) {
    const now = Date.now()
    if (now - last >= interval) {
      last = now
      fn.apply(this, args)
    }
  }
}


/* ─────────────────────────────────────────
   5. 日期格式化
   用法：
     formatDate(new Date())           // '2026-02-26'
     formatDate(new Date(), 'cn')     // '2026年02月26日'
     formatDate(new Date(), 'full')   // '2026-02-26 14:30:00'
───────────────────────────────────────── */
function formatDate(date = new Date(), style = 'default') {
  const d = new Date(date)
  const pad = n => String(n).padStart(2, '0')
  const Y = d.getFullYear()
  const M = pad(d.getMonth() + 1)
  const D = pad(d.getDate())
  const h = pad(d.getHours())
  const m = pad(d.getMinutes())
  const s = pad(d.getSeconds())

  if (style === 'cn')   return `${Y}年${M}月${D}日`
  if (style === 'full') return `${Y}-${M}-${D} ${h}:${m}:${s}`
  return `${Y}-${M}-${D}`
}


/* ─────────────────────────────────────────
   6. 本地存储封装（JSON 自动序列化）
   用法：
     Store.set('user', { name: 'Alice' })
     Store.get('user')   // { name: 'Alice' }
     Store.remove('user')
───────────────────────────────────────── */
const Store = {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  get(key) {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch {
      return null
    }
  },
  remove(key) {
    localStorage.removeItem(key)
  }
}


/* ─────────────────────────────────────────
   7. DOM Ready（jQuery 风格快捷方式）
───────────────────────────────────────── */
$(function () {
  // 自动高亮当前导航项
  const path = window.location.pathname
  $('nav ul a').each(function () {
    const href = $(this).attr('href')
    if (href === path || (path === '/' && href === '/')) {
      $(this).addClass('active')
    } else if (href !== '/' && path.startsWith(href)) {
      $(this).addClass('active')
    }
  })
})
