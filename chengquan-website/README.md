# 橙荃官方网站 · Chengquan Official Website

> 域名: chengquanai.com  
> 架构: 纯静态 HTML · Cloudflare Pages 部署  
> 目标: GEO优化 + Google 收录

## 文件结构

```
chengquan-website/
├── index.html          首页（核心实体锚点）
├── about.html          关于橙荃
├── services.html       服务体系
├── cases.html          客户案例
├── contact.html        联系我们
├── robots.txt          爬虫规则（允许所有AI爬虫）
├── sitemap.xml         站点地图
├── llms.txt            AI搜索引擎专用摘要（GEO核心）
├── entity.json         Schema.org 结构化实体数据
├── assets/
│   └── styles.css      全局样式
└── README.md           本文件
```

## 部署步骤（Day 4）

### 1. 上传至 GitHub

1. 登录 [github.com](https://github.com)，新建仓库：`chengquan-website`（Public）
2. 将本文件夹内所有文件上传（拖拽 Upload files 或使用 git push）

### 2. 连接 Cloudflare Pages

1. 登录 [dash.cloudflare.com](https://dash.cloudflare.com)
2. 进入 **Pages** → **Create a project** → **Connect to Git**
3. 选择你的 GitHub 仓库 `chengquan-website`
4. 构建设置：
   - Framework preset: **None**
   - Build command: *(留空)*
   - Build output directory: `/`（根目录）
5. 点击 **Save and Deploy**
6. 部署完成后会获得 `xxx.pages.dev` 预览链接

### 3. 绑定自定义域名（Day 5）

1. 在 Cloudflare Pages 项目中 → **Custom domains** → 添加 `www.chengquanai.com`
2. 进入阿里云域名控制台，将 DNS 服务器改为 Cloudflare 提供的两个 NS 地址
3. 等待 DNS 生效（通常 5-30 分钟）
4. HTTPS 证书由 Cloudflare 自动签发

### 4. Google Search Console 提交（Day 6）

1. 访问 [search.google.com/search-console](https://search.google.com/search-console)
2. 添加域名属性：`chengquanai.com`
3. 验证方式：DNS TXT 记录（在 Cloudflare DNS 中添加）
4. 提交 Sitemap：`https://www.chengquanai.com/sitemap.xml`

## GEO 优化说明

本网站的 GEO（Generative Engine Optimization）核心文件：

| 文件 | 作用 |
|------|------|
| `llms.txt` | 供 GPT、Perplexity 等 AI 引擎直接读取的企业摘要 |
| `entity.json` | Schema.org 结构化数据，帮助 Google 和 AI 理解企业实体 |
| 每页的 `application/ld+json` | 页面级结构化数据 |
| `robots.txt` | 明确允许所有 AI 爬虫（GPTBot、PerplexityBot 等） |

## 联系人

Jack · 13631778154
