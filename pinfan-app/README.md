# 拼饭微信小程序

拼饭是一款基于微信小程序平台的社交拼餐应用，旨在帮助用户找到志同道合的伙伴一起用餐，分享美食体验。

## 项目结构

```
pinfan-app/
├── src/                    # 源代码目录
│   ├── api/                # API接口
│   ├── components/         # 公共组件
│   ├── pages/              # 页面
│   ├── static/             # 静态资源
│   ├── store/              # 状态管理
│   ├── styles/             # 全局样式
│   ├── utils/              # 工具函数
│   ├── App.vue             # 应用入口组件
│   ├── main.ts             # 应用入口文件
│   └── pages.json          # 页面配置
├── package.json            # 项目依赖
├── tsconfig.json           # TypeScript配置
└── vite.config.ts          # Vite配置
```

## 技术栈

- 框架：uni-app + Vue 3 + TypeScript
- 状态管理：Pinia
- 构建工具：Vite

## 功能特性

- 浏览附近拼饭活动
- 发起拼饭活动
- 加入拼饭活动
- 社交消息互动
- 个人中心管理

## 页面说明

- **首页**：展示附近拼饭活动列表
- **拼饭详情页**：显示特定拼饭活动的详细信息
- **发起拼饭页面**：用于创建新的拼饭活动
- **消息页面**：显示用户的消息和群聊
- **个人中心页面**：展示用户个人信息和相关功能

## 开发指南

### 环境准备

确保已安装以下工具：
- Node.js (>= 14.0.0)
- npm 或 yarn

### 安装依赖

```bash
npm install
# 或
yarn
```

### 开发模式

```bash
npm run dev
# 或
yarn dev
```

### 构建生产版本

```bash
npm run build
# 或
yarn build
```