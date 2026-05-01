# 旧 GitBook 迁移规则

## 事实源顺序

1. 本仓 `AGENTS.md`
2. `bpmt-lite/AGENTS.md`
3. `bpmt-lite/README.md`、`docs/v1.3.0/*`、`docs/v1.2.0/*`、`docs/maintenance.md`
4. `bpmt-lite` 实现代码、配置、脚本和数据库文件
5. 旧 GitBook 文档目录

旧 GitBook 是历史参考，不是当前事实来源。

## 状态

| 状态 | 含义 |
| --- | --- |
| `未迁移` | 已列入矩阵，还没有进入新文档 |
| `待校准` | 已迁移正文或图片，但尚未对照 `bpmt-lite v1.3.0` 校准 |
| `已校准` | 已对照当前代码、配置、脚本、数据库或运行结果确认 |
| `历史参考` | 保留历史价值，但不作为当前能力说明 |

## Front Matter

迁移文档必须包含：

```markdown
---
source: 旧 GitBook
source_path: 7.控件开发/7.1.内置控件/text.md
status: 待校准
bpmt_lite_version: v1.3.0
last_verified: 未验证
---
```

校准完成后必须记录依据：

```markdown
---
source: 旧 GitBook
source_path: 7.控件开发/7.1.内置控件/text.md
status: 已校准
bpmt_lite_version: v1.3.0
last_verified: 2026-05-01
verified_against:
  - /Users/wenzhewang/workspace/bpmt_project/bpmt-lite/platform/src/main/webapp
---
```

## 图片

旧图片复制到 `docs/assets/legacy-gitbook/<旧章节目录>/`。正文图片链接使用相对路径。

## 当前运行类文档

快速开始、安装部署、数据库初始化、默认账号、Docker、配置覆盖、日志目录和维护者构建不能直接搬旧 GitBook，必须按 `bpmt-lite v1.3.0` 重写。
