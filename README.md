# Nuxt 3 公司官网项目

这个项目是一个基于 **Nuxt 3** 和 **TailwindCSS** 开发的公司官网，旨在提供一个现代化、高性能的企业展示网站。

## 项目特性

- **Nuxt 3**：基于 Vue 3 和 Composition API，具有更好的性能和可维护性。
- **TailwindCSS**：用于快速构建响应式布局和漂亮的 UI 组件。
- **自动化部署**：通过 Vercel 自动部署，支持与 GitHub 仓库的集成。
- **响应式设计**：适应不同设备的显示，提供良好的用户体验。
- **SEO 友好**：支持服务端渲染 (SSR)，使网站更容易被搜索引擎抓取。

## 技术栈

- **Nuxt 3**：基于 Vue 3 的现代前端框架，提供更好的性能、开发体验和可维护性。
- **TailwindCSS**：实用主义的 CSS 框架，用于快速构建自定义的设计。
- **Vercel**：自动化的前端部署平台，支持与 GitHub 集成。
- **LESS**：用于编写可扩展的 CSS 样式文件。

## 项目安装与运行

### 前提条件

- Node.js >= 16.8
- npm >= 8

### 安装依赖

首先，克隆这个仓库到本地：

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```

然后安装依赖：

```bash
npm install
```

### 本地开发环境

在开发模式下运行项目：

```bash
npm run dev
```

默认情况下，项目将在 `http://localhost:3000` 上运行。

### 构建项目

如果你准备好了生产环境构建，可以运行以下命令：

```bash
npm run build
```

构建后，生成的文件将放在 `.nuxt` 目录下。

### 运行生产环境

构建完成后，你可以在本地模拟生产环境运行：

```bash
npm run start
```

默认情况下，生产环境将在 `http://localhost:3000` 上运行。

## 部署到 Vercel

1. 登录 [Vercel](https://vercel.com/) 账户。
2. 点击 **New Project**，选择 GitHub 并授权 Vercel 访问你的 GitHub 仓库。
3. 选择本项目的 GitHub 仓库并配置部署选项。
4. 点击 **Deploy** 按钮，Vercel 将自动构建并部署项目。
5. 部署完成后，你可以通过 Vercel 提供的 URL 访问你的官网。

## 环境变量

如果你需要设置环境变量（如 API 密钥等），可以在 Vercel 项目设置中添加。

## 项目结构

```bash
├── assets/                  # 静态资源，如图片和字体
├── components/              # 复用组件，如导航栏、按钮等
├── layouts/                 # 页面布局
├── pages/                   # 页面文件，Nuxt 会自动根据这里的文件生成路由
├── plugins/                 # 插件
├── public/                  # 公共资源，如 favicon.ico 等
├── styles/                  # 自定义样式（如 LESS 或 CSS 文件）
├── nuxt.config.ts           # Nuxt 配置文件
├── package.json             # 项目信息和依赖
└── README.md                # 项目的说明文件
```

## 贡献

欢迎提交 PR 或开 Issue 进行讨论，若有任何问题，欢迎反馈。

1. Fork 本仓库。
2. 创建一个新的分支（`git checkout -b feature-branch`）。
3. 提交你的更改（`git commit -am 'Add feature'`）。
4. 推送到你的分支（`git push origin feature-branch`）。
5. 创建一个新的 Pull Request。

## 许可证

MIT License - 详见 [LICENSE](./LICENSE) 文件。

---
