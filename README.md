<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Slam Bot — README</title>
<link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Bebas+Neue&family=DM+Mono:wght@400;500&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
<style>
  :root {
    --orange: #FF5C00;
    --orange-light: #FF8C42;
    --gold: #FFB800;
    --dark: #0A0A0A;
    --darker: #050505;
    --surface: #111111;
    --surface2: #181818;
    --text: #F0EDE8;
    --muted: #888;
    --court: #C68B3A;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    background: var(--dark);
    color: var(--text);
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
    cursor: none;
  }

  /* Custom cursor */
  .cursor {
    width: 12px; height: 12px;
    background: var(--orange);
    border-radius: 50%;
    position: fixed;
    top: 0; left: 0;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
    mix-blend-mode: difference;
  }
  .cursor-ring {
    width: 40px; height: 40px;
    border: 1.5px solid var(--orange);
    border-radius: 50%;
    position: fixed;
    top: 0; left: 0;
    pointer-events: none;
    z-index: 9998;
    transition: all 0.15s ease;
    opacity: 0.5;
  }

  /* Noise overlay */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 9997;
    opacity: 0.5;
  }

  /* ========= HERO ========= */
  .hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    padding: 60px 20px;
  }

  /* Animated court lines background */
  .court-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }
  .court-line {
    position: absolute;
    background: rgba(198,139,58,0.08);
    animation: pulse-line 4s ease-in-out infinite;
  }
  .court-line:nth-child(1) { width: 100%; height: 1px; top: 50%; animation-delay: 0s; }
  .court-line:nth-child(2) { width: 1px; height: 100%; left: 50%; animation-delay: 0.5s; }
  .court-line:nth-child(3) { width: 300px; height: 300px; border: 1px solid rgba(198,139,58,0.06); border-radius: 50%; top: 50%; left: 50%; transform: translate(-50%,-50%); background: transparent; animation-delay: 1s; }
  .court-line:nth-child(4) { width: 500px; height: 500px; border: 1px solid rgba(198,139,58,0.04); border-radius: 50%; top: 50%; left: 50%; transform: translate(-50%,-50%); background: transparent; animation-delay: 1.5s; }
  .court-line:nth-child(5) { width: 700px; height: 700px; border: 1px solid rgba(198,139,58,0.025); border-radius: 50%; top: 50%; left: 50%; transform: translate(-50%,-50%); background: transparent; animation-delay: 2s; }

  @keyframes pulse-line {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }

  /* Floating particles */
  .particle {
    position: absolute;
    width: 3px; height: 3px;
    background: var(--orange);
    border-radius: 50%;
    animation: float-up linear infinite;
    opacity: 0;
  }
  @keyframes float-up {
    0% { transform: translateY(100vh) scale(0); opacity: 0; }
    10% { opacity: 0.6; }
    90% { opacity: 0.3; }
    100% { transform: translateY(-10vh) scale(1.5); opacity: 0; }
  }

  /* Big glow */
  .hero-glow {
    position: absolute;
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(255,92,0,0.12) 0%, transparent 70%);
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    animation: glow-pulse 3s ease-in-out infinite;
  }
  @keyframes glow-pulse {
    0%, 100% { transform: translate(-50%,-50%) scale(1); opacity: 0.8; }
    50% { transform: translate(-50%,-50%) scale(1.1); opacity: 1; }
  }

  /* Ball animation */
  .basketball {
    position: absolute;
    top: 8%; right: 8%;
    font-size: 80px;
    animation: ball-bounce 2.5s cubic-bezier(0.36,0.07,0.19,0.97) infinite;
    filter: drop-shadow(0 20px 30px rgba(255,92,0,0.4));
  }
  @keyframes ball-bounce {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    30% { transform: translateY(-40px) rotate(15deg); }
    60% { transform: translateY(-10px) rotate(25deg); }
    80% { transform: translateY(-25px) rotate(20deg); }
  }

  /* Scoreboard top bar */
  .scoreboard-bar {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 4px;
    background: linear-gradient(90deg, transparent, var(--orange), var(--gold), var(--orange), transparent);
    background-size: 200% 100%;
    animation: shimmer 2s linear infinite;
  }
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255,92,0,0.1);
    border: 1px solid rgba(255,92,0,0.3);
    color: var(--orange-light);
    padding: 6px 16px;
    border-radius: 100px;
    font-size: 12px;
    font-family: 'DM Mono', monospace;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 24px;
    animation: fade-in 0.6s ease forwards;
    opacity: 0;
  }
  .badge-dot {
    width: 6px; height: 6px;
    background: var(--orange);
    border-radius: 50%;
    animation: blink 1.5s ease infinite;
  }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }

  .hero-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(80px, 15vw, 180px);
    line-height: 0.9;
    letter-spacing: -2px;
    text-align: center;
    position: relative;
    z-index: 2;
    animation: title-reveal 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s forwards;
    opacity: 0;
    transform: translateY(30px);
  }
  @keyframes title-reveal {
    to { opacity: 1; transform: translateY(0); }
  }

  .title-slam {
    display: block;
    color: var(--text);
    -webkit-text-stroke: 1px rgba(255,255,255,0.1);
  }
  .title-bot {
    display: block;
    color: transparent;
    -webkit-text-stroke: 2px var(--orange);
    text-shadow: 0 0 80px rgba(255,92,0,0.3);
    position: relative;
  }
  .title-bot::after {
    content: 'BOT';
    position: absolute;
    inset: 0;
    color: transparent;
    -webkit-text-stroke: 2px var(--gold);
    opacity: 0;
    animation: glitch-title 5s ease infinite;
  }
  @keyframes glitch-title {
    0%,89%,100% { opacity: 0; transform: none; clip-path: none; }
    90% { opacity: 1; transform: translate(-4px, 0); clip-path: polygon(0 20%, 100% 20%, 100% 40%, 0 40%); }
    92% { transform: translate(4px, 0); clip-path: polygon(0 60%, 100% 60%, 100% 80%, 0 80%); }
    94% { opacity: 0; }
  }

  .hero-sub {
    font-size: 16px;
    color: var(--muted);
    text-align: center;
    max-width: 500px;
    margin-top: 24px;
    line-height: 1.7;
    font-weight: 300;
    animation: fade-in 0.8s ease 0.6s forwards;
    opacity: 0;
    position: relative;
    z-index: 2;
  }
  @keyframes fade-in {
    to { opacity: 1; }
  }

  .hero-cta {
    display: flex;
    gap: 16px;
    margin-top: 40px;
    flex-wrap: wrap;
    justify-content: center;
    animation: fade-in 0.8s ease 0.8s forwards;
    opacity: 0;
    position: relative;
    z-index: 2;
  }

  .btn {
    padding: 14px 32px;
    border-radius: 4px;
    font-size: 13px;
    font-weight: 500;
    font-family: 'DM Mono', monospace;
    text-decoration: none;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    transition: all 0.2s ease;
    position: relative;
    overflow: hidden;
    cursor: none;
  }
  .btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: white;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    mix-blend-mode: overlay;
    opacity: 0.1;
  }
  .btn:hover::before { transform: translateX(0); }

  .btn-primary {
    background: var(--orange);
    color: white;
    box-shadow: 0 0 30px rgba(255,92,0,0.3);
  }
  .btn-primary:hover {
    background: var(--orange-light);
    box-shadow: 0 0 50px rgba(255,92,0,0.5);
    transform: translateY(-2px);
  }
  .btn-secondary {
    background: transparent;
    color: var(--text);
    border: 1px solid rgba(255,255,255,0.15);
  }
  .btn-secondary:hover {
    border-color: var(--orange);
    color: var(--orange);
    transform: translateY(-2px);
  }

  /* Stats ticker */
  .ticker {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    background: var(--orange);
    padding: 10px 0;
    overflow: hidden;
  }
  .ticker-inner {
    display: flex;
    gap: 60px;
    animation: ticker-scroll 20s linear infinite;
    white-space: nowrap;
  }
  @keyframes ticker-scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .ticker-item {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(0,0,0,0.7);
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .ticker-item::after { content: '◆'; color: rgba(0,0,0,0.4); }

  /* ========= SECTIONS ========= */
  section {
    padding: 100px 40px;
    max-width: 1100px;
    margin: 0 auto;
  }

  .section-label {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: var(--orange);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .section-label::before {
    content: '';
    width: 30px;
    height: 1px;
    background: var(--orange);
  }

  .section-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(40px, 6vw, 72px);
    line-height: 1;
    margin-bottom: 60px;
  }

  /* ========= FEATURES GRID ========= */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.06);
  }

  .feature-card {
    background: var(--surface);
    padding: 40px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: none;
  }
  .feature-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,92,0,0.06), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .feature-card::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    width: 0; height: 2px;
    background: var(--orange);
    transition: width 0.4s ease;
  }
  .feature-card:hover::before { opacity: 1; }
  .feature-card:hover::after { width: 100%; }
  .feature-card:hover { transform: translateY(-4px); }

  .feature-icon {
    font-size: 36px;
    margin-bottom: 20px;
    display: block;
    filter: drop-shadow(0 4px 12px rgba(255,92,0,0.3));
    transition: transform 0.3s ease;
  }
  .feature-card:hover .feature-icon { transform: scale(1.2) rotate(5deg); }

  .feature-num {
    position: absolute;
    top: 20px; right: 24px;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 60px;
    color: rgba(255,255,255,0.03);
    line-height: 1;
  }

  .feature-title {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
    color: var(--text);
  }
  .feature-desc {
    font-size: 14px;
    color: var(--muted);
    line-height: 1.7;
  }

  /* ========= TECH STACK ========= */
  .tech-section {
    background: var(--surface);
    border-top: 1px solid rgba(255,255,255,0.06);
    border-bottom: 1px solid rgba(255,255,255,0.06);
    padding: 100px 40px;
  }
  .tech-section > div { max-width: 1100px; margin: 0 auto; }

  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }

  .tech-card {
    background: var(--surface2);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 8px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease;
    cursor: none;
    position: relative;
    overflow: hidden;
  }
  .tech-card::after {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 8px;
    background: linear-gradient(135deg, var(--orange), var(--gold));
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .tech-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
  .tech-card:hover::after { opacity: 1; }

  .tech-icon { font-size: 28px; }
  .tech-name {
    font-size: 15px;
    font-weight: 500;
    color: var(--text);
  }
  .tech-role {
    font-size: 11px;
    font-family: 'DM Mono', monospace;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .tech-badge {
    display: inline-block;
    background: rgba(255,92,0,0.1);
    color: var(--orange-light);
    font-size: 10px;
    font-family: 'DM Mono', monospace;
    padding: 2px 8px;
    border-radius: 100px;
    margin-top: 4px;
    align-self: flex-start;
  }

  /* ========= STATS ========= */
  .stats-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 2px;
    background: rgba(255,255,255,0.04);
    margin: 60px 0;
  }
  .stat-box {
    background: var(--surface);
    padding: 40px 30px;
    text-align: center;
  }
  .stat-num {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 64px;
    line-height: 1;
    background: linear-gradient(135deg, var(--orange), var(--gold));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: block;
  }
  .stat-label {
    font-size: 12px;
    font-family: 'DM Mono', monospace;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-top: 8px;
  }

  /* Counter animation */
  @keyframes count-up {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .stat-box { animation: count-up 0.6s ease forwards; }

  /* ========= INSTALL ========= */
  .install-section { position: relative; }

  .code-block {
    background: #0D0D0D;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 16px;
    transition: border-color 0.3s ease;
  }
  .code-block:hover { border-color: rgba(255,92,0,0.3); }

  .code-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    background: rgba(255,255,255,0.03);
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .code-dots { display: flex; gap: 6px; }
  .code-dot {
    width: 10px; height: 10px;
    border-radius: 50%;
  }
  .dot-red { background: #FF5F57; }
  .dot-yellow { background: #FFBD2E; }
  .dot-green { background: #28C940; }

  .code-label {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  .copy-btn {
    background: rgba(255,92,0,0.1);
    border: 1px solid rgba(255,92,0,0.2);
    color: var(--orange-light);
    padding: 4px 12px;
    border-radius: 4px;
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    cursor: none;
    transition: all 0.2s ease;
    letter-spacing: 0.05em;
  }
  .copy-btn:hover { background: rgba(255,92,0,0.2); border-color: var(--orange); }

  .code-body {
    padding: 20px 24px;
    font-family: 'DM Mono', monospace;
    font-size: 13px;
    line-height: 2;
    color: #ccc;
  }
  .code-body .comment { color: #555; }
  .code-body .cmd { color: var(--orange-light); }
  .code-body .flag { color: var(--gold); }
  .code-body .str { color: #87C9A1; }

  /* Typing animation */
  .typing {
    overflow: hidden;
    white-space: nowrap;
    animation: typing 1.5s steps(30) 0.5s forwards;
    width: 0;
  }
  @keyframes typing {
    to { width: 100%; }
  }

  /* ========= PROJECT STRUCTURE ========= */
  .tree {
    background: #0D0D0D;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 8px;
    padding: 30px;
    font-family: 'DM Mono', monospace;
    font-size: 13px;
    line-height: 2.2;
  }
  .tree-item { color: #888; display: flex; align-items: center; gap: 8px; }
  .tree-item.dir { color: var(--orange-light); font-weight: 500; }
  .tree-item.file { color: #AAA; }
  .tree-indent { margin-left: 24px; }
  .tree-icon { opacity: 0.7; }

  /* ========= FOOTER ========= */
  footer {
    background: var(--darker);
    border-top: 1px solid rgba(255,255,255,0.06);
    padding: 60px 40px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  footer::before {
    content: 'SLAM BOT';
    position: absolute;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 200px;
    color: rgba(255,255,255,0.015);
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    pointer-events: none;
  }

  .footer-links {
    display: flex;
    justify-content: center;
    gap: 32px;
    margin-bottom: 40px;
    flex-wrap: wrap;
  }
  .footer-link {
    color: var(--muted);
    text-decoration: none;
    font-size: 13px;
    font-family: 'DM Mono', monospace;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    transition: color 0.2s ease;
    cursor: none;
  }
  .footer-link:hover { color: var(--orange); }

  .footer-author {
    font-size: 13px;
    color: var(--muted);
    position: relative;
    z-index: 1;
  }
  .footer-author a {
    color: var(--orange);
    text-decoration: none;
    cursor: none;
  }

  /* Scroll reveal */
  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.7s cubic-bezier(0.16,1,0.3,1);
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .reveal-delay-1 { transition-delay: 0.1s; }
  .reveal-delay-2 { transition-delay: 0.2s; }
  .reveal-delay-3 { transition-delay: 0.3s; }

  /* Horizontal divider */
  .divider {
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,92,0,0.3), transparent);
    margin: 0;
  }

  /* Responsive */
  @media (max-width: 768px) {
    section { padding: 60px 20px; }
    .basketball { font-size: 50px; top: 5%; right: 5%; }
    .hero-cta { flex-direction: column; align-items: center; }
  }
</style>
</head>
<body>

<!-- Cursor -->
<div class="cursor" id="cursor"></div>
<div class="cursor-ring" id="cursorRing"></div>

<!-- ========= HERO ========= -->
<section class="hero" style="padding:0; max-width:100%; margin:0;">
  <div class="scoreboard-bar"></div>

  <div class="court-bg">
    <div class="court-line"></div>
    <div class="court-line"></div>
    <div class="court-line"></div>
    <div class="court-line"></div>
    <div class="court-line"></div>
  </div>

  <div class="hero-glow"></div>
  <div class="basketball">🏀</div>

  <!-- Particles -->
  <div id="particles"></div>

  <div class="hero-badge">
    <span class="badge-dot"></span>
    Live on Vercel · Next.js 15
  </div>

  <h1 class="hero-title">
    <span class="title-slam">SLAM</span>
    <span class="title-bot">BOT</span>
  </h1>

  <p class="hero-sub">
    AI-powered basketball slam dunk analytics platform. Analyzes <strong style="color:var(--orange-light)">100+ data points</strong> per game to sharpen every play, every dunk, every performance.
  </p>

  <div class="hero-cta">
    <a href="https://slam-bot.vercel.app" class="btn btn-primary">🚀 Live Demo</a>
    <a href="https://github.com/AakashKavediya/slam_bot" class="btn btn-secondary">⌥ View Source</a>
  </div>

  <div class="ticker">
    <div class="ticker-inner" id="ticker">
      <span class="ticker-item">100+ Data Points Per Game</span>
      <span class="ticker-item">Next.js 15 App Router</span>
      <span class="ticker-item">Deployed on Vercel</span>
      <span class="ticker-item">AI-Powered Analytics</span>
      <span class="ticker-item">Real-Time Performance</span>
      <span class="ticker-item">JavaScript · CSS</span>
      <span class="ticker-item">slam-bot.vercel.app</span>
      <span class="ticker-item">100+ Data Points Per Game</span>
      <span class="ticker-item">Next.js 15 App Router</span>
      <span class="ticker-item">Deployed on Vercel</span>
      <span class="ticker-item">AI-Powered Analytics</span>
      <span class="ticker-item">Real-Time Performance</span>
      <span class="ticker-item">JavaScript · CSS</span>
      <span class="ticker-item">slam-bot.vercel.app</span>
    </div>
  </div>
</section>

<!-- ========= STATS ========= -->
<div style="max-width:1100px; margin:0 auto; padding:0 40px;">
  <div class="stats-row reveal">
    <div class="stat-box">
      <span class="stat-num" data-target="100">0+</span>
      <div class="stat-label">Data Points / Game</div>
    </div>
    <div class="stat-box">
      <span class="stat-num" data-target="24">24</span>
      <div class="stat-label">Commits</div>
    </div>
    <div class="stat-box">
      <span class="stat-num" data-target="0">0</span>
      <div class="stat-label">Config Required</div>
    </div>
    <div class="stat-box">
      <span class="stat-num">∞</span>
      <div class="stat-label">Court Potential</div>
    </div>
  </div>
</div>

<div class="divider"></div>

<!-- ========= FEATURES ========= -->
<section>
  <div class="section-label">What It Does</div>
  <h2 class="section-title reveal">CORE<br>FEATURES</h2>

  <div class="features-grid">
    <div class="feature-card reveal reveal-delay-1">
      <span class="feature-icon">📊</span>
      <div class="feature-num">01</div>
      <div class="feature-title">Advanced Game Analytics</div>
      <div class="feature-desc">Processes over 100 unique data points per game session to surface patterns invisible to the naked eye.</div>
    </div>
    <div class="feature-card reveal reveal-delay-2">
      <span class="feature-icon">🤖</span>
      <div class="feature-num">02</div>
      <div class="feature-title">AI-Powered Bot</div>
      <div class="feature-desc">Intelligent recommendations tailored to slam dunk mechanics and in-game performance metrics.</div>
    </div>
    <div class="feature-card reveal reveal-delay-3">
      <span class="feature-icon">⚡</span>
      <div class="feature-num">03</div>
      <div class="feature-title">Real-Time Data</div>
      <div class="feature-desc">Slam dunk data loads and updates in real-time with smooth, reactive UI powered by Next.js 15.</div>
    </div>
    <div class="feature-card reveal reveal-delay-1">
      <span class="feature-icon">📱</span>
      <div class="feature-num">04</div>
      <div class="feature-title">Fully Responsive</div>
      <div class="feature-desc">Works seamlessly on any screen — from courtside tablets to desktop dashboards.</div>
    </div>
    <div class="feature-card reveal reveal-delay-2">
      <span class="feature-icon">🌐</span>
      <div class="feature-num">05</div>
      <div class="feature-title">Zero Install</div>
      <div class="feature-desc">Entirely web-based. No app to download. Open a browser and you're on the court.</div>
    </div>
    <div class="feature-card reveal reveal-delay-3">
      <span class="feature-icon">🚀</span>
      <div class="feature-num">06</div>
      <div class="feature-title">Vercel Edge Deploy</div>
      <div class="feature-desc">Deployed on Vercel's global edge network for lightning-fast response worldwide.</div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ========= TECH STACK ========= -->
<div class="tech-section">
  <div>
    <div class="section-label">Under the Hood</div>
    <h2 class="section-title reveal">TECH<br>STACK</h2>

    <div class="tech-grid">
      <div class="tech-card reveal reveal-delay-1">
        <span class="tech-icon">▲</span>
        <div class="tech-name">Next.js 15</div>
        <div class="tech-role">Framework</div>
        <span class="tech-badge">App Router</span>
      </div>
      <div class="tech-card reveal reveal-delay-2">
        <span class="tech-icon">⚛️</span>
        <div class="tech-name">React</div>
        <div class="tech-role">UI Library</div>
        <span class="tech-badge">Server Components</span>
      </div>
      <div class="tech-card reveal reveal-delay-3">
        <span class="tech-icon">𝙅𝚂</span>
        <div class="tech-name">JavaScript</div>
        <div class="tech-role">Language</div>
        <span class="tech-badge">ES6+ · 99.5%</span>
      </div>
      <div class="tech-card reveal reveal-delay-1">
        <span class="tech-icon">🎨</span>
        <div class="tech-name">CSS</div>
        <div class="tech-role">Styling</div>
        <span class="tech-badge">Global + Modules</span>
      </div>
      <div class="tech-card reveal reveal-delay-2">
        <span class="tech-icon">𝗚</span>
        <div class="tech-name">Geist Font</div>
        <div class="tech-role">Typography</div>
        <span class="tech-badge">next/font</span>
      </div>
      <div class="tech-card reveal reveal-delay-3">
        <span class="tech-icon">◉</span>
        <div class="tech-name">PostCSS</div>
        <div class="tech-role">CSS Tooling</div>
        <span class="tech-badge">Transforms</span>
      </div>
      <div class="tech-card reveal reveal-delay-1">
        <span class="tech-icon">✦</span>
        <div class="tech-name">ESLint</div>
        <div class="tech-role">Code Quality</div>
        <span class="tech-badge">Next.js Config</span>
      </div>
      <div class="tech-card reveal reveal-delay-2">
        <span class="tech-icon">▲</span>
        <div class="tech-name">Vercel</div>
        <div class="tech-role">Deployment</div>
        <span class="tech-badge">Edge Network</span>
      </div>
    </div>
  </div>
</div>

<div class="divider"></div>

<!-- ========= INSTALL ========= -->
<section class="install-section">
  <div class="section-label">Get Running</div>
  <h2 class="section-title reveal">QUICK<br>START</h2>

  <div class="reveal">
    <div class="code-block">
      <div class="code-header">
        <div class="code-dots">
          <div class="code-dot dot-red"></div>
          <div class="code-dot dot-yellow"></div>
          <div class="code-dot dot-green"></div>
        </div>
        <span class="code-label">bash</span>
        <button class="copy-btn" onclick="copyCode(this, '# Clone the repo\ngit clone https://github.com/AakashKavediya/slam_bot.git\ncd slam_bot\n\n# Install dependencies\nnpm install\n\n# Start dev server\nnpm run dev')">Copy</button>
      </div>
      <div class="code-body">
        <div><span class="comment"># Clone the repo</span></div>
        <div><span class="cmd">git clone</span> <span class="str">https://github.com/AakashKavediya/slam_bot.git</span></div>
        <div><span class="cmd">cd</span> slam_bot</div>
        <br>
        <div><span class="comment"># Install dependencies</span></div>
        <div><span class="cmd">npm install</span></div>
        <br>
        <div><span class="comment"># Start dev server → http://localhost:3000</span></div>
        <div><span class="cmd">npm run dev</span></div>
      </div>
    </div>
  </div>

  <div class="reveal" style="margin-top:40px;">
    <div class="section-label">Project Structure</div>
    <div class="tree">
      <div class="tree-item dir">📁 slam_bot/</div>
      <div class="tree-indent">
        <div class="tree-item dir">📁 app/</div>
        <div class="tree-indent">
          <div class="tree-item file">📄 layout.js <span style="color:#555; font-size:11px;">— root layout + fonts</span></div>
          <div class="tree-item file">📄 page.js <span style="color:#555; font-size:11px;">— main page</span></div>
          <div class="tree-item file">📄 globals.css <span style="color:#555; font-size:11px;">— global styles</span></div>
        </div>
        <div class="tree-item dir">📁 public/ <span style="color:#555; font-size:11px;">— static assets</span></div>
        <div class="tree-item file">📄 next.config.mjs <span style="color:#555; font-size:11px;">— Next.js config</span></div>
        <div class="tree-item file">📄 package.json <span style="color:#555; font-size:11px;">— dependencies + scripts</span></div>
        <div class="tree-item file">📄 eslint.config.mjs <span style="color:#555; font-size:11px;">— linting rules</span></div>
        <div class="tree-item file">📄 postcss.config.mjs <span style="color:#555; font-size:11px;">— CSS transforms</span></div>
        <div class="tree-item file">📄 jsconfig.json <span style="color:#555; font-size:11px;">— path aliases</span></div>
      </div>
    </div>
  </div>

  <div class="reveal" style="margin-top:40px;">
    <div class="section-label">Scripts</div>
    <div class="code-block">
      <div class="code-header">
        <div class="code-dots">
          <div class="code-dot dot-red"></div>
          <div class="code-dot dot-yellow"></div>
          <div class="code-dot dot-green"></div>
        </div>
        <span class="code-label">package.json · scripts</span>
      </div>
      <div class="code-body">
        <div><span class="cmd">npm run dev</span>   <span class="comment">→ dev server with hot reload</span></div>
        <div><span class="cmd">npm run build</span> <span class="comment">→ production build</span></div>
        <div><span class="cmd">npm run start</span> <span class="comment">→ start production server</span></div>
        <div><span class="cmd">npm run lint</span>  <span class="comment">→ run ESLint checks</span></div>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ========= FOOTER ========= -->
<footer>
  <div class="footer-links">
    <a href="https://slam-bot.vercel.app" class="footer-link">🏀 Live Demo</a>
    <a href="https://github.com/AakashKavediya/slam_bot" class="footer-link">⌥ Source Code</a>
    <a href="https://nextjs.org/docs" class="footer-link">▲ Next.js Docs</a>
    <a href="https://vercel.com" class="footer-link">◎ Deploy on Vercel</a>
  </div>
  <p class="footer-author">
    Built by <a href="https://github.com/AakashKavediya">@AakashKavediya</a> · Powered by Next.js + Vercel
  </p>
</footer>

<script>
  // ---- Custom cursor ----
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx - 6 + 'px';
    cursor.style.top = my - 6 + 'px';
  });

  function animRing() {
    rx += (mx - rx) * 0.15;
    ry += (my - ry) * 0.15;
    ring.style.left = rx - 20 + 'px';
    ring.style.top = ry - 20 + 'px';
    requestAnimationFrame(animRing);
  }
  animRing();

  document.querySelectorAll('a, button, .tech-card, .feature-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(2)';
      ring.style.transform = 'scale(1.5)';
      ring.style.borderColor = 'var(--gold)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      ring.style.transform = 'scale(1)';
      ring.style.borderColor = 'var(--orange)';
    });
  });

  // ---- Particles ----
  const pContainer = document.getElementById('particles');
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.width = p.style.height = (Math.random() * 3 + 1) + 'px';
    p.style.animationDuration = (Math.random() * 8 + 5) + 's';
    p.style.animationDelay = (Math.random() * 8) + 's';
    pContainer.appendChild(p);
  }

  // ---- Scroll reveal ----
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  // ---- Copy code ----
  function copyCode(btn, text) {
    navigator.clipboard.writeText(text).then(() => {
      const orig = btn.textContent;
      btn.textContent = 'Copied!';
      btn.style.background = 'rgba(40,201,64,0.15)';
      btn.style.borderColor = '#28C940';
      btn.style.color = '#28C940';
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = '';
        btn.style.borderColor = '';
        btn.style.color = '';
      }, 2000);
    });
  }
</script>
</body>
</html>
