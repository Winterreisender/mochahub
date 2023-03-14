<h1>
<img src="public/logo.svg" style="width: 1em; height: 1em" />
<span>MochaHub</span>
</h1>

![status](https://img.shields.io/badge/status-experimental-blue)

追求简洁、美观和小巧的导航页生成器。该项目还在实验阶段。

[预览](https://winterreisender.github.io/MochaHub/)

## 使用方法

1. 修改 `sites.json`，添加站点
2. 下载本项目 `git clone https://github.com/Winterreisender/MochaHub`
3. 安装Node.js, 打开项目文件夹, 运行 `npm install`
4. 预览页面 `npm run dev`
5. 构建页面 `npm run build`

## 特点

优点:

- 小巧: 不使用第三方框架，在经过EJS模板编译后几乎仅有HTML和CSS，没有JS的情况下也能运行
- 美观: 在做到上一条的前提下，尽可能追求美观

缺点:

- 需要现代浏览器(Chromium 92+, Firefox 105+, Safari 16+)

## Credits

MochaHub的诞生离不开开放源代码软件项目。

| 软件                                                                                              | 许可                                                                              |
| ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [vite](https://vitejs.dev/)                                                                          | [MIT](https://github.com/vitejs/vite/blob/main/LICENSE)                              |
| [vite-plugin-html](https://github.com/vbenjs/vite-plugin-html)                                       | [MIT](https://github.com/vbenjs/vite-plugin-html/blob/main/LICENSE)                  |
| [ajv](https://github.com/ajv-validator/ajv)                                                          | [MIT](https://github.com/ajv-validator/ajv/blob/main/LICENSE)                        |
| [typescript-json-schema](https://github.com/YousefED/typescript-json-schema)                         | [BSD-3-Clause](https://github.com/YousefED/typescript-json-schema/blob/main/LICENSE) |
| [Photo](https://unsplash.com/photos/m-gqDRzbJLQ) by [Content Pixie](https://unsplash.com/@contentpixie) | [Unsplash License](https://unsplash.com/license)                                     |

## License

    Copyright (C) 2023 Winterreisender.
    This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, version 3.

    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License along with this program. If not, see[https://www.gnu.org/licenses/](https://www.gnu.org/licenses/)
