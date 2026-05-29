# Waylia 旅游门户网站 - 需求拆解文档

## 产品概述

- **产品类型**: 旅游 APP 产品官网/落地页（Landing Page）
- **场景类型**: <scene_type>prototype-app</scene_type>
- **目标用户**: 热爱旅游、追求品质出行的年轻群体（18-35岁），注重旅行体验与社交分享
- **核心价值**: 通过 AI 赋能，让旅行规划更轻松、拍照更出彩、分享更有格调
- **设计调性**: 清晰自然风格，设计感满满，激发下载冲动
- **界面语言**: 中文
- **主题偏好**: light（浅色主题，清新自然）
- **导航模式**: 锚点导航
- **导航布局**: Topbar（顶部固定导航）

---

## 页面结构总览

**页面文件**: `HomePage.tsx`（单页长滚动落地页）

| 区块名称 | 锚点 | 区块说明 |
|---------|------|---------|
| 首屏/Hero | `#hero` | 品牌主视觉 + Slogan + 下载 CTA 按钮组 |
| 核心功能 | `#features` | 六大 AI 功能卡片网格展示 |
| 功能详解 | `#details` | AI 攻略生成、AI 修图、Pose 指导、穿搭推荐、文案生成详情 |
| 用户体验 | `#experience` | 使用流程/场景化展示（Before → After）|
| 下载引导 | `#download` | 底部强转化区，多平台下载入口 |

---

## 插件规划

| 插件实例名称 | 基于官方插件 | 业务用途 | 输出模式 | 所属页面 |
|------------|-----------|---------|---------|---------|
| travel-itinerary-generator | `ai-text-generate` | 生成个性化旅游攻略（路线/景点/交通） | stream | 功能演示区块 |
| ai-photo-enhancer | `ai-image-to-image` | 旅游照片美化/风格转换 | unary | 功能演示区块 |
| pose-analyzer | `ai-image-understanding` | 识别照片姿态并给出拍摄建议 | stream | 功能演示区块 |
| outfit-recommender | `ai-image-matting` + `ai-image-to-image` | 智能抠图 + 虚拟试衣/搭配建议 | unary | 功能演示区块 |
| moment-copywriter | `ai-text-generate` | 根据图片内容生成朋友圈文案 | stream | 功能演示区块 |

> **说明**：落地页中插件以"功能演示/效果预览"形式展示，并非完整功能实现

---

## 导航配置

- **导航布局**: Topbar（顶部固定，透明背景滚动后变实色）
- **导航项**:
  
| 导航文字 | 锚点 | 说明 |
|---------|------|-----|
| 首页 | `#hero` | 返回首屏 |
| 功能 | `#features` | 核心功能概览 |
| 详情 | `#details` | 功能详细介绍 |
| 体验 | `#experience` | 用户场景展示 |
| 下载 App | `#download` | 跳转下载区 |

---

## 功能列表

- **页面**: HomePage（落地页）
  - **页面目标**: 通过清晰自然的视觉设计，展示 Waylia APP 的 AI 能力，激发用户下载欲望
  - **功能点**:
    - **Hero 主视觉区**: 动态背景（自然风光视频/高质量轮播图）+ 品牌 Logo + 主标题"Slogan" + 副标题 + iOS/Android 双平台下载按钮 +  App 界面 Mockup 展示
    - **核心功能卡片网格**: 6 个功能卡片（AI 攻略生成、AI 修图、Pose 指导、智能穿搭、文案生成、一键分享），悬停动效，点击展开详情浮层
    - **功能详解区块**: 左右/上下交替布局，图文配合展示每个 AI 功能的实际效果（示意图/演示动画）
    - **体验对比区块**: Before（传统旅行痛点）vs After（Waylia 解决方案）对比展示，强化价值感知
    - **下载转化区**: 底部固定或独立区块，二维码 + 应用商店按钮 + 限时活动/福利信息
    - **锚点平滑滚动**: 点击导航自动平滑滚动到对应区块

---

## 设计风格指引（供 Design Agent 参考）

- **色彩**: 主色调清新自然（森林绿/天空蓝/沙滩金），辅助色白色/浅灰，强调色用于 CTA 按钮
- **字体**: 标题用优雅衬线或现代无衬线，正文清晰易读
- **视觉元素**: 大量留白、圆角卡片、柔和阴影、自然风光配图、App 界面 Mockup
- **动效**: 页面滚动视差、卡片悬停微动效、内容渐入动画
- **情绪**: 向往感、轻松感、品质感——让人看了就想立刻去旅行

-------

# UI 设计指南

> **场景类型**: <scene_type>prototype-app</scene_type>（应用架构设计）
> **确认检查**: 本指南适用于 Waylia 旅游 APP 产品官网/落地页。单页长滚动设计，锚点导航。

> ℹ️ Section 1-2 为设计意图与决策上下文。Code agent 实现时以 Section 3 及之后的具体参数为准。

---

## 1. Design Archetype (设计原型)

### 1.1 内容理解
- **目标用户**: 热爱旅游、追求品质出行的年轻群体（18-35岁），注重旅行体验与社交分享，对 AI 技术有认知和接受度
- **核心目的**: 说服用户下载 APP，建立信任感和向往感，降低决策门槛
- **期望情绪**: 向往感（激发旅行欲望）、轻松感（AI 让旅行变简单）、品质感（专业可信赖）
- **需避免的感受**: 廉价感（过度营销）、焦虑（信息过载）、复杂难用（技术门槛）

### 1.2 设计语言
- **Aesthetic Direction**: 自然科技融合美学——用有机柔和的视觉语言包裹 AI 技术能力，让科技感知温暖而不冰冷
- **Visual Signature**: 
  1. 森林绿渐变叠加层，营造自然呼吸感
  2. 圆角卡片悬浮布局，柔和阴影创造层次
  3. 底部波浪装饰元素，呼应"旅行/流动"主题
  4. 大面积留白，内容"浮"在画面中
  5. 暖橙色 CTA 按钮，在绿色基调中形成视觉锚点
- **Emotional Tone**: 清新自然 × 轻盈优雅——像翻开一本精美的旅行杂志，每一页都让人想继续探索
- **Design Style**: Soft Blocks 柔色块（主）+ Waves 波浪（辅助）——柔色矩形重叠 + 半透明层次营造轻盈感，底部波浪 SVG 呼应旅行流动主题
- **Application Type**: Landing Page（营销落地页）

---

## 2. Design Principles (设计理念)

1. **自然呼吸感优先**：充足的留白（spacious spacing）让视觉有喘息空间，模拟自然界中"空"的美学，避免信息过载带来的压迫感。

2. **渐进式价值传递**：Hero 区先建立情感共鸣（向往感），Feature 区展示功能广度，Details 区深入功能价值，Experience 区用对比强化痛点解决，Download 区完成转化——信息密度逐层递增。

3. **色彩即情绪**：主色调森林绿传递自然、生机、信任；强调色暖橙传递活力、阳光、行动召唤。所有色彩选择服务于"让人想立刻去旅行"的情绪目标。

4. **悬浮与层次**：通过卡片阴影、半透明遮罩、柔色块叠加创造空间深度，让界面元素如旅行中的风景层层展开。

5. **克制而动效有意义**：动效服务于引导注意力（hover 反馈、滚动揭示），而非炫技。节奏短促流畅，不给用户等待感。

---

## 3. Color System (色彩系统)

> **App 场景配色规则**：基于产品定位"清晰自然风格"自主设计完整配色体系，从品牌语义（自然、旅行、AI 赋能）推导。

**配色设计理由**：选择森林绿系作为主色调，传递自然、生机与信任感，契合旅游主题；暖橙色作为强调色，代表阳光与活力，在绿色基调中形成强烈的 CTA 视觉锚点，激发下载行动。

### 3.1 主题颜色

| 角色 | CSS 变量 | Tailwind Class | HSL 值 | 设计说明 |
|-----|---------|----------------|--------|---------|
| bg | `--background` | `bg-background` | `hsl(150 20% 98%)` | 极淡绿灰白，比纯白更柔和，减少视觉疲劳 |
| surface | `--card` | `bg-card` | `hsl(0 0% 100%)` | 纯白卡片，与背景形成明确层次 |
| text | `--foreground` | `text-foreground` | `hsl(150 30% 15%)` | 深绿灰，比纯黑更柔和，阅读舒适 |
| textMuted | `--muted-foreground` | `text-muted-foreground` | `hsl(150 10% 45%)` | 中绿灰，用于次级说明文字 |
| primary | `--primary` | `bg-primary` | `hsl(158 65% 40%)` | 森林绿，主交互色，代表自然与信任 |
| primary-foreground | `--primary-foreground` | `text-primary-foreground` | `hsl(0 0% 100%)` | 纯白，确保在 primary 背景上对比度充足 |
| accent | `--accent` | `bg-accent` | `hsl(158 30% 95%)` | 极浅绿，hover/focus 状态反馈背景 |
| accent-foreground | `--accent-foreground` | `text-accent-foreground` | `hsl(158 65% 35%)` | 深绿，accent 区域上的文字色 |
| border | `--border` | `border-border` | `hsl(150 15% 90%)` | 淡绿灰边框，轻柔分隔 |
| ring | `--ring` | `ring-ring` | `hsl(158 65% 40%)` | 聚焦环，与 primary 一致 |

### 3.2 强调色系统（CTA 专用）

> 暖橙色作为行动召唤专用色，与主色调形成互补对比，确保 CTA 按钮在页面中一眼可识别。

| 角色 | CSS 变量 | HSL 值 | 设计说明 |
|-----|---------|--------|---------|
| cta | `--cta` | `hsl(25 90% 55%)` | 暖橙色，下载/主要行动按钮 |
| cta-hover | `--cta-hover` | `hsl(25 90% 48%)` | 深暖橙，hover 状态 |
| cta-foreground | `--cta-foreground` | `hsl(0 0% 100%)` | 纯白文字 |

### 3.3 Topbar 导航颜色

> 透明背景滚动后变为实色，需定义滚动后的背景色。

| 状态 | 背景 | 文字 | 说明 |
|-----|-----|-----|-----|
| 初始（透明） | `transparent` | `hsl(0 0% 100%)` | Hero 区上方，白色文字 |
| 滚动后（实色） | `hsl(0 0% 100% / 0.95)` + `backdrop-blur-md` | `hsl(150 30% 15%)` | 毛玻璃效果，深色文字 |

### 3.4 语义颜色（可选）

| 用途 | CSS 变量 | HSL 值 | 说明 |
|-----|---------|--------|-----|
| success | `--success` | `hsl(142 71% 45%)` | 成功状态，深绿 |
| warning | `--warning` | `hsl(38 92% 50%)` | 警告状态，琥珀色 |
| error | `--error` | `hsl(0 72% 51%)` | 错误状态，红色 |

---

## 4. Typography (字体排版)

- **Heading**: `"PingFang SC", "SF Pro Display", "Inter", -apple-system, BlinkMacSystemFont, sans-serif` ——现代几何无衬线，清晰有力
- **Body**: `"PingFang SC", "SF Pro Text", "Inter", -apple-system, BlinkMacSystemFont, sans-serif` ——系统字体栈，保证跨平台可读性
- **字体导入**: 使用系统字体栈，禁止引入 Google Fonts，确保加载速度与多终端兼容

| 层级 | 字号 | 字重 | 行高 | 字距 | 用途 |
|-----|-----|-----|-----|-----|-----|
| Hero 标题 | `text-5xl md:text-6xl lg:text-7xl` | `font-bold` | `leading-tight` | `tracking-tight` | 首屏主标题 |
| 区块标题 | `text-3xl md:text-4xl` | `font-bold` | `leading-tight` | `tracking-tight` | 各区块大标题 |
| 卡片标题 | `text-xl` | `font-semibold` | `leading-snug` | — | 功能卡片标题 |
| 正文 | `text-base` | `font-normal` | `leading-relaxed` | — | 说明文字 |
| 小字 | `text-sm` | `font-medium` | `leading-normal` | — | 标签、辅助信息 |

---

## 5. Global Layout Structure (全局布局结构)

### 5.1 Navigation Strategy (导航策略)

**导航类型**: Topbar（顶部固定导航）

| 导航项 | 锚点 | 说明 |
|-------|-----|-----|
| 首页 | `#hero` | 返回首屏 |
| 功能 | `#features` | 核心功能概览 |
| 详情 | `#details` | 功能详细介绍 |
| 体验 | `#experience` | 用户场景展示 |
| 下载 App | `#download` | 跳转下载区 |

**Topbar 行为**:
- 初始状态：透明背景，白色文字，悬浮于 Hero 区上方
- 滚动后（scrollY > 50px）：白色背景 + 毛玻璃效果（`backdrop-blur-md`），深色文字，底部细边框（`border-b border-border`）
- 过渡动画：背景色和文字色变化需有 200ms 过渡

### 5.2 Page Content Zones (页面区块配置)

**Standard Content Zone（全页面统一）**:
- **Maximum Width**: `max-w-6xl`（约 1152px），Landing Page 平衡视觉冲击力与可读性
- **Padding**: `px-4 sm:px-6 lg:px-8`
- **Alignment**: `mx-auto` 居中
- **Vertical Spacing**: 区块间 `py-20 md:py-28 lg:py-32`（ spacious 留白，大间距）

**宽内容溢出策略**：Hero 区背景可全宽（`w-full`），但内部文字内容受 Standard Content Zone 约束。

**Hero/Banner 区块**:
- **Width**: `w-full`（背景全宽），内部内容 `max-w-6xl mx-auto`
- **Padding**: `py-32 md:py-40 lg:py-48`（大内边距营造沉浸感）
- **Background**: 全屏自然风光图片/视频 + 渐变遮罩（`bg-gradient-to-b from-black/40 via-black/20 to-background`）

---

## 6. Visual Effects & Motion (视觉效果与动效)

### 6.1 Header/Hero 视觉方案

**Hero 背景模式**: 高质量自然风光图片/视频 + 多层渐变遮罩确保文字可读性

```
底层: 全屏图片/视频 (object-cover)
中层: bg-gradient-to-b from-black/50 via-black/30 to-transparent (顶部暗化)
顶层: bg-gradient-to-t from-background via-background/80 to-transparent (底部融合到页面背景)
```

**装饰手法**: 
- Hero 区底部波浪分隔线（SVG wave），自然过渡到下方白色内容区
- 功能卡片区：柔色块装饰（绝对定位的半透明绿色椭圆/矩形，blur 模糊）
- 体验对比区：左右分屏设计，中间斜切分隔或渐变过渡

### 6.2 圆角与阴影

| 元素 | 圆角 | 阴影 |
|-----|-----|-----|
| 大卡片/区块 | `rounded-2xl` (16px) | `shadow-lg` |
| 功能卡片 | `rounded-xl` (12px) | `shadow-md hover:shadow-lg` |
| 按钮（主要） | `rounded-full` (pill) | `shadow-md hover:shadow-lg` |
| 按钮（次要） | `rounded-lg` (8px) | `shadow-sm` |
| 输入框 | `rounded-lg` (8px) | `shadow-inner` 或无边框 |
| 图片 | `rounded-2xl` (16px) | `shadow-xl` |

### 6.3 复杂背景文字处理

| 背景类型 | 处理方案 | 具体要求 |
|---------|---------|---------|
| **Hero 图片背景** | 多层渐变遮罩 + 文字投影 | 遮罩层 `from-black/50 via-black/30 to-transparent`，文字可选 `drop-shadow-lg` |
| **渐变背景** | 以最浅区域计算对比度 | 文字颜色确保对比度 ≥ 4.5:1 |
| **有色卡片** | 明确指定文字颜色 | 白色背景用 `text-foreground`，彩色背景用 `text-white` 或 `text-primary-foreground` |

### 6.4 动效意图

> 只声明动效意图（what / why / 节奏），不提供实现细节。

- **整体动效风格**: 克制、短促、以 opacity + 微位移为主，营造轻盈优雅感，不给用户等待焦虑

- **页面入场**: 页面根容器以微微上移（~20px）淡入，短促（约 300ms），内容随滚动逐步揭示

- **滚动揭示**: 长页面需要 section 随视口进入依次揭示，节奏从容（stagger 50-100ms），元素从下方淡入上移

- **列表项动效 · 变更模式**: 功能卡片网格 hover 时微缩放（scale 1.02）+ 阴影加深，点击展开详情浮层（Dialog 缩放进入）

- **关键交互微动效**:
  1. CTA 按钮 hover: 轻微上移（-2px）+ 阴影加深，暗示可点击
  2. 功能卡片 hover: 微缩放（scale 1.02）+ 边框色变为 primary，创造"悬浮"感
  3. Topbar 滚动变化: 背景色和文字色平滑过渡（200ms）

---

## 7. Components (组件指南)

> 所有颜色引用 Color System 中的角色，使用 Tailwind 语义化 class

### 7.1 Buttons

| 类型 | 背景 | 文字 | 边框 | Hover | 用途 |
|-----|-----|-----|-----|-------|-----|
| **Primary (CTA)** | `bg-[hsl(25_90%_55%)]` | `text-white` | 无 | `bg-[hsl(25_90%_48%)] -translate-y-0.5 shadow-lg` | 下载 App 主要按钮 |
| **Secondary** | `bg-white` | `text-foreground` | `border-border` | `bg-accent text-accent-foreground` | 次要操作 |
| **Ghost** | 透明 | `text-foreground` | 无 | `bg-accent text-accent-foreground` | 导航链接 |
| **Outline Light** | 透明 | `text-white` | `border-white/50` | `bg-white/10` | Hero 区透明背景上的按钮 |

### 7.2 Feature Cards（功能卡片）

```
容器: bg-card rounded-xl shadow-md overflow-hidden
悬停: hover:shadow-lg hover:scale-[1.02] hover:border-primary/50 border-2 border-transparent
结构: 
  - 图标区: w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center
  - 标题: text-xl font-semibold text-foreground mt-4
  - 描述: text-muted-foreground mt-2
  - 可选: 微预览图或演示动画
```

### 7.3 Section Headers（区块标题）

```
容器: text-center mb-12 md:mb-16
Eyebrow（眉题）: text-sm font-semibold text-primary uppercase tracking-wider
主标题: text-3xl md:text-4xl font-bold text-foreground mt-2
副标题: text-lg text-muted-foreground mt-4 max-w-2xl mx-auto
```

### 7.4 App Mockup 展示

- 使用 iPhone/Android 设备框架（边框 + 圆角 + 阴影）
- 内部展示 APP 界面截图
- 可叠加悬浮小卡片（功能标签、AI 气泡等）创造层次
- 设备阴影: `shadow-2xl` + 轻微旋转（rotate-y）营造 3D 感

### 7.5 Before/After 对比组件

```
容器: grid md:grid-cols-2 gap-8 items-center
Before（痛点）: bg-muted/50 rounded-2xl p-6 border border-border
After（解决方案）: bg-primary/5 rounded-2xl p-6 border border-primary/20
对比箭头: 中间或下方放置对比箭头/VS 标识
```

---

## 8. Page Sections (页面区块详细设计)

### 8.1 Hero 首屏 (`#hero`)

**布局结构**:
- 全屏高度（`min-h-screen` 或 `h-screen`），内容垂直居中
- 背景：高质量自然风光视频/轮播图 + 多层渐变遮罩
- 内容层：居中，max-w-4xl
  - Logo（Waylia 品牌标识）
  - 主标题：大字号（text-5xl~7xl），白色，font-bold，tracking-tight
  - 副标题：text-xl~2xl，白色/90%，font-light
  - CTA 按钮组：iOS 下载 + Android 下载（暖橙色 pill 按钮）
  - App Mockup：底部悬浮展示，带阴影和轻微透视

**底部过渡**: SVG 波浪形状，自然过渡到下方白色背景

### 8.2 Features 核心功能 (`#features`)

**布局**: max-w-6xl mx-auto，6 张卡片响应式网格（`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`）

**卡片内容**:
1. AI 攻略生成（路线规划图标）
2. AI 修图（魔法棒/照片图标）
3. Pose 指导（相机/人物图标）
4. 智能穿搭（衣服/搭配图标）
5. 文案生成（文字/气泡图标）
6. 一键分享（分享/社交图标）

**装饰**: 背景绝对定位的柔色块（半透明绿色椭圆，blur-3xl）

### 8.3 Details 功能详解 (`#details`)

**布局**: 图文交替排列（左图右文 → 右图左文），每个功能一个 section

**每个功能区块**:
- 图片侧：App 界面截图或功能演示示意图，rounded-2xl，shadow-xl
- 文字侧：
  - 功能序号（01/02/03...），text-primary，font-bold
  - 功能标题，text-2xl~3xl，font-bold
  - 功能描述，text-muted-foreground，leading-relaxed
  - 关键亮点列表（3-4 个 bullet points）

### 8.4 Experience 体验对比 (`#experience`)

**布局**: 左右对比或 Before/After 滑块

**内容结构**:
- 标题区：文字描述痛点与解决方案的对比
- 对比卡：
  - Before 卡：灰色背景，列出传统旅行痛点（规划繁琐、拍照不好看、穿搭困扰、文案难产）
  - After 卡：淡绿色背景（primary/5），列出 Waylia 解决方案
- 中间可用斜箭头或 "VS" 标识连接

### 8.5 Download 下载引导 (`#download`)

**布局**: 全宽背景（可使用 primary 色或深色渐变），内容居中

**内容**:
- 标题："开启你的智能旅行"
- 副标题：限时福利信息（如有）
- 二维码 + 双平台下载按钮组
- 底部：版权信息、隐私政策链接、社交媒体图标

---

## 9. Flexibility Note (灵活性说明)

> **Landing Page 为单页应用**，核心参数在设计指南生成时已确定。
>
> **code agent 允许的微调**：
> - 响应式适配（移动端卡片单列、间距缩小、字号调整）
> - 图片资源的具体选择（保持自然风光主题）
> - 动画时长的微调（保持短促流畅原则）
> - 区块顺序（保持 Hero → Features → Details → Experience → Download 逻辑）
>
> **禁止的随意变更**：
> - ❌ 改变配色方案（森林绿 + 暖橙 CTA）
> - ❌ 改变圆角/阴影风格（Soft Blocks 柔色块风格）
> - ❌ 添加 Sidebar 导航（Landing Page 不需要）
> - ❌ 改变 Topbar 锚点导航结构

---

## 10. Signature & Constraints (设计签名与禁区)

### DO (视觉签名)
1. **Hero 底部波浪过渡** — 使用 SVG path 创建自然的波浪分隔线，让 Hero 与内容区平滑过渡
2. **暖橙色 pill 按钮** — 下载 CTA 使用 `rounded-full` 药丸形状，暖橙底色白字，hover 时轻微上移
3. **功能卡片悬浮效果** — 卡片默认有阴影，hover 时 scale 1.02 + 阴影加深 + 边框变 primary/50
4. **毛玻璃 Topbar** — 滚动后使用 `bg-white/95 backdrop-blur-md` 营造现代感
5. **深浅交替的区块节奏** — Hero 深色背景 → Features 浅色 → Details 白色 → Experience 淡绿 → Download 深绿，创造视觉节奏

### DON'T (禁止做法)
- ❌ 使用紫色/蓝色渐变作为 Hero 背景（违背"自然"调性）
- ❌ 功能卡片使用图标 + 文字的水平排列（应使用图标在上、文字垂直布局，更易于扫描）
- ❌ 添加轮播自动播放（用户可能来不及阅读，手动控制或静态展示更佳）
- ❌ 使用纯黑色文字（使用深绿灰 hsl(150 30% 15%) 更柔和）
- ❌ 区块间距小于 py-16（留白是"清晰自然"风格的核心）