# 志成コンサル
无依赖包 完整运行步骤

# 步骤 1：安装 Node.js（环境准备）
项目基于 Vite 构建，依赖 Node.js 环境： 下载地址：https://nodejs.org/（推荐安装 18.x/20.x LTS 版本，兼容性最好） 验证安装：打开终端 / 命令行，执行 node -v 和 npm -v，能输出版本号即安装成功（npm 是 Node.js 自带的包管理器）。

# 步骤 2：进入项目根目录
打开终端，切换到包含 package.json 和 components.json 的目录（即 web 目录）： bash 运行 示例：假设 web 目录在桌面，mac/Linux 命令 cd ~/Desktop/web

Windows 命令（PowerShell） cd C:\Users\你的用户名\Desktop\web

# 步骤 3：安装项目依赖
项目首次运行需安装所有依赖（Vite、Tailwind、shadcn/ui 等），执行： bash 运行 推荐使用 npm（Node.js 自带） npm install

或使用 pnpm（更高效，需先安装：npm install -g pnpm） pnpm install

或使用 yarn（需先安装：npm install -g yarn） yarn install ✅ 注意：如果安装失败，可尝试删除 node_modules 文件夹和 package-lock.json/pnpm-lock.yaml/yarn.lock，重新执行安装命令；国内用户可配置淘宝镜像加速：npm config set registry https://registry.npmmirror.com。

# 步骤 4：启动开发服务器
Vite 项目的核心启动脚本通常在 package.json 的 scripts 里，默认是 dev，执行： bash 运行

npm 方式
npm run dev

pnpm 方式
pnpm dev

yarn 方式
yarn dev

# 步骤 5：访问项目
执行启动命令后，终端会输出类似以下内容： plaintext VITE v5.0.0 ready in 300 ms

➜ Local: http://localhost:5173/ ➜ Network: use --host to expose 打开浏览器，访问 http://localhost:5173（端口可能是 3000/8080 等，以终端输出为准），即可看到项目运行效果。
