# 橙荃网站维护发布流程

这个文件夹是以后维护网站的固定工作目录：

`/Users/linsunjie/Desktop/chengquan-website`

## 目标流程

1. 我在这个文件夹里修改网站。
2. 我运行本地检查。
3. 你确认发布。
4. 我执行发布脚本，推送到 GitHub。
5. Cloudflare Pages 自动更新线上网站。

## 当前 GitHub 仓库

截图里的仓库是：

`https://github.com/linsunjie2016-dotcom/chengquan-website.git`

这个仓库当前的代码结构是：仓库根目录下面再放一个 `chengquan-website/` 文件夹。发布脚本会保持这个结构，把本机桌面里的最新版同步到远端的 `chengquan-website/` 子文件夹。

## 常用命令

本地检查：

```bash
./scripts/check-site.sh
```

打包备份：

```bash
./scripts/package-site.sh
```

确认后发布：

```bash
./scripts/deploy-site.sh "Update AI tools page"
```

如果以后仓库地址变了，可临时指定：

```bash
CHENGQUAN_DEPLOY_REMOTE="https://github.com/账号/仓库.git" ./scripts/deploy-site.sh "Update website"
```

## 当前检查内容

- 必要页面和资源是否存在
- JavaScript 文件语法是否正常
- 人工智能工具页是否保持智能体包懒加载
- 内部入口页是否保持数据看板懒加载
- 首页是否没有招聘信息
- 新手领航内容是否没有出现不需要的词

## 内部入口日报更新

以后你提供同类型 HTML 数据文件后，更新位置固定为：

`assets/internal-dashboard.js`

我会把新的 HTML 转成这个数据文件，页面仍然通过 `internal.html` 访问，密码保持为 `cqyy`。

## 注意

脚本不会保存 Cloudflare 或 GitHub 密码。第一次推送 GitHub 时，系统可能会要求你登录或授权。
