## TODO

- [x] 搭建主应用和子应用
- [x] 实现通信
- [x] 规范代码提交格式、规范代码风格（ESlint 、 格式化代码）
- [ ] css 单位进行统一处理（Vite 插件之类的）
- [x] 完善路由以及状态管理
- [ ] 实现快速添加一个微应用
- [ ] 公共组件使用
- [ ] pnpm workSpace 有时会访问不到依赖，更换 node 版本可以解决
- [ ] antd 按需加载
- [ ] 全局换肤
- [ ] 国际化

## 启动：

通过`pnpm`管理所有的依赖, 首先全局安装 pnpm: `npm install pnpm -g`
​ 安装项目依赖： `pnpm i`
​ 为所有项目安装依赖： `pnpm -w -D add <package_selector>` -D 为开发环境依赖
​ 为单个项目安装依赖：` pnpm add <package_selector> --filter=xxx`

## 提交规范

1. 全局安装`npm install -g commitizen`
2. 将`git commit` 替换成`git cz`
3. 根据相应的提示操作

可使用`pnpm run commit`简化提交步骤

## 代码格式校验

vsCode 安装`ESLint` 和 `Prettier ESlint`，保存代码的时候可以自动格式化

## Scripts 简介

`dev`: 运行`packages`里面的全部项目

`dev:xxx`: 运行`packages`里面的某个项目

`build`: 打包全部项目

`build:xxx`: 打包单个项目

`prettier`: 格式化全部代码

`eslint`: 代码风格检查

`commit`: 快速提交代码

## 命名规范

1. 公共组件使用大驼峰，如 `Lv-Table`
2. 路由使用，全小写横杠，如 `/subpage/user-info/detail`

## FQ:

- 为单个项目添加依赖时（pnpm add lodash -filter=sub1）：No projects matched the filters in xxx
  项目在创建的时候就需要用 pnpm init 初始化

## 全局通信

### 主应用

需要全局同步的对象存储位置：` packages\main\src\store\shared.ts`

### 子应用

需要全局同步的对象存储位置：`packages\subApp\src\store\shared.ts`

`packages\subApp\src\shared\index.ts`需要实现对应方法

## FQ:

- 为单个项目添加依赖时（`pnpm add lodash -filter=sub1`）：`No projects matched the filters in xxx`
  - 项目在创建的时候就需要用 pnpm init 初始化
