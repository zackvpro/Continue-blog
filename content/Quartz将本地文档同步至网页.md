--- 
title: 经验：Quartz将本地文档同步至网页
---
首先，按照Quartz的步骤进行本地部署，包括环境、配置，以及将本地文档全数复制至Quartz的content文件夹中，使用以下代码，实现同步。
```
npx quartz sync
```

> [!warning] 注意
> 使用该方式同步，意味着你每次同步时均需要运行一次quartz，且无法实时保存同步。

在实际部署时，我遇到的问题与解决方案：
1. Q:  Quartz在第一次复制全部文档后，在Obsidian中新建的笔记不会自动同步至Quartz中
   A:  将Quartz中的content文件夹转换为某种快捷方式，直接链接至Obsidian对应的本地文档库中，便于读取。同时，这意味着每次同步时需要给予Git Bash管理员权限。
2. 

