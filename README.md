# 754 — 竖式乘法练习随机生成器 | Vertical multiplication timing practice page generator

> **7** 分钟 · **5** 道题 · **4** 位数 × **4** 位数
> **7** minutes · **5** problems · **4**-digit × **4**-digit multiplication

---

## 简介 | Overview

**754** 是一款专为小学中高年级学生家长设计的网页端数学联系页生成工具，旨在通过严格的计时训练强化竖式乘法的心算与笔算能力。每次练习固定为 7 分钟，包含 5 道四位数乘以四位数的竖式乘法题目，帮助学生在压力环境下建立运算速度与准确性。

**754** is a browser-based math drill tool designed for upper-primary students. Each session presents 5 randomly generated four-digit × four-digit multiplication problems within a strict 7-minute countdown, building both speed and accuracy under timed conditions.

---

## 命名含义 | Name

| 数字 / Digit | 含义 / Meaning |
|:---:|---|
| **7** | 每次练习时长 7 分钟 / 7-minute session |
| **5** | 共 5 道题目 / 5 problems per session |
| **4** | 四位数 × 四位数 / 4-digit × 4-digit |

---

## 功能特性 | Features

- **随机出题** — 每次自动生成不重复的四位数乘法题，避免死记硬背
  *Random generation* — unique four-digit problems every session, no rote repetition

- **倒计时计时器** — 7 分钟全程可视倒计时，营造真实考试氛围
  *Countdown timer* — visible 7-minute timer simulating exam conditions

- **竖式布局** — 题目以标准竖式格式展示，与课堂练习完全一致
  *Column format* — problems displayed in standard vertical layout matching classroom practice

- **即时批改** — 提交后立即显示正确答案与对错标记
  *Instant marking* — correct answers and result indicators shown on submission

- **成绩记录** — 本次练习得分与历史完成情况一览
  *Score tracking* — session score and historical completion overview

- **纯网页运行** — 无需安装，打开浏览器即可使用
  *Zero install* — runs entirely in the browser, no installation required

---

## 快速开始 | Quick Start

```bash
# 克隆仓库 / Clone the repository
git clone https://github.com/xiahuaxian666/754_calculate_practice.git

# 进入项目目录 / Enter the project directory
cd 754_calculate_practice
```

直接用浏览器打开 `index.html` 即可开始练习。

Simply open `index.html` in your browser to start a session.

> 无需服务器，无需依赖安装。/ No server or dependency installation required.

---

## 使用说明 | How to Use

1. 打开页面，点击 **「开始练习」** 按钮 / Open the page and click **"Start"**
2. 倒计时开始，依次完成 5 道竖式乘法题 / The timer begins — complete all 5 problems
3. 全部作答后点击 **「提交」** / Click **"Submit"** after answering all problems
4. 查看本次得分与答案解析 / Review your score and correct answers
5. 点击 **「再来一次」** 开始下一轮 / Click **"Try Again"** for a new session

> ⏱ 7 分钟到时自动提交，已答题目照常批改。
> ⏱ Time-up triggers automatic submission; answered problems are still marked.

---

## 项目结构 | Project Structure

```
754/
├── index.html          # 主页面 / Main page
├── styles.css          # 样式表 / Stylesheet
├── app.js              # 核心逻辑 / Core logic
└── README.md
```

---

## 技术栈 | Tech Stack

- HTML5 / CSS3 / Vanilla JavaScript
- 无框架依赖 / No framework dependencies

---

## 适用对象 | Target Users

| 对象 | 说明 |
|---|---|
| 小学 4–6 年级学生 | 巩固多位数乘法，备战数学考试 |
| 家长 | 居家辅导，替代传统练习册 |
| 教师 | 课前热身或课后巩固练习 |

| Audience | Description |
|---|---|
| Grades 4–6 students | Reinforce multi-digit multiplication, prepare for exams |
| Parents | Home practice, digital alternative to workbooks |
| Teachers | Warm-up or consolidation drill in class |

---

## 未来计划 | Roadmap

- [ ] 自定义题目数量与时长 / Configurable problem count and time limit
- [ ] 错题本：自动收录答错的题目 / Error notebook: save missed problems for review
- [ ] 班级排行榜 / Class leaderboard
- [ ] 移动端适配优化 / Mobile layout optimization
- [ ] 打印功能：生成可打印练习卷 / Print mode: generate printable worksheets

---

## 贡献 | Contributing

欢迎提交 Issue 或 Pull Request。
Issues and pull requests are welcome.

---

## 许可证 | License

[MIT License](LICENSE)

---

*754 — 让每一次练习都有仪式感。/ Making every drill session count.*
