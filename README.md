<h1>
<img src="asset/img/logo.svg" style="width: 1.5em; height: 1.5em" />
<span>MochaHub</span>
</h1>

![status](https://img.shields.io/badge/status-experimental-blue)
[预览](https://winterreisender.github.io/mochahub/)

追求简洁、美观和小巧的导航页生成器。该项目还在实验阶段。

## 帮助

### 快速开始

1. 下载本项目 `git clone https://github.com/Winterreisender/MochaHub`
2. 安装 Node.js, 打开项目文件夹, 运行 `npm install`
3. 修改 `src/site-info.mochahub.json`，添加站点
4. 预览页面 `npm run dev`
5. 构建页面 `npm run build`

### 配置

目前各个选项散落在项目各处，暂未整合。

| 配置         | 位置                          | 备注                                                                  |
| ------------ | ----------------------------- | --------------------------------------------------------------------- |
| `base`目录 | `vite.config.js`            | [Vite 相关文档](https://cn.vitejs.dev/guide/build.html#public-base-path) |
| 背景图片     | `asset/img/background.webp` |                                                                       |
| 图标         | `asset/img/logo.svg`        |                                                                       |
| 字体         | `asset/font/`               |                                                                       |
| 主题色       | `src/style.css`             |                                                                       |
| 粒子效果     | `src/particle.scss`         | 控制粒子数量                                                          |

## 特点

优点:

- 小巧: 不使用第三方框架，在经过 EJS 模板编译后仅有 HTML 和 CSS，在没有 JS 的情况下也能正常运行
- 美观: 在做到上一条的前提下，尽可能追求美观

缺点:

- 需要现代浏览器(Chromium 92+, Firefox 105+, Safari 16+)

UI 风格:

- 一种玻璃板和卡片的混合拟物风格
- 卡片用于活动的内容。玻璃板上的元素表示固定的内容
- 选用漫画风格的字体

## Credits

MochaHub 的诞生离不开开放源代码软件项目。

| 软件                                                                      | 许可                                                                                |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [vite](https://vitejs.dev/)                                                  | [MIT](https://github.com/vitejs/vite/blob/main/LICENSE)                                |
| [vite-plugin-html](https://github.com/vbenjs/vite-plugin-html)               | [MIT](https://github.com/vbenjs/vite-plugin-html/blob/main/LICENSE)                    |
| [ajv](https://github.com/ajv-validator/ajv)                                  | [MIT](https://github.com/ajv-validator/ajv/blob/master/LICENSE)                        |
| [typescript-json-schema](https://github.com/YousefED/typescript-json-schema) | [BSD-3-Clause](https://github.com/YousefED/typescript-json-schema/blob/master/LICENSE) |
| [LxgwMarkerGothic](https://github.com/lxgw/LxgwMarkerGothic)                 | [OFL-1.0](https://github.com/lxgw/LxgwMarkerGothic/blob/main/OFL.txt)                  |

## License

```text
Copyright (C) 2023 Winterreisender.
This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, version 3.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License along with this program. If not, see[https://www.gnu.org/licenses/](https://www.gnu.org/licenses/)
```
