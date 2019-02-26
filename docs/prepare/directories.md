# 目录结构

在了解项目的目录结构前，首先带领大家熟悉一下 PHP 的源码仓库。[PHP 源码](https://github.com/php/php-src)

```bash
php-src
├── TSRM        # 线程安全资源管理器
├── Zend            # 核心代码
├── appveyor       # CI系统，关系不大
├── build          # 构建
├── ext             # 扩展
├── main             # 主目录
├── pear             # PHP 扩展和应用库
├── sapi             # 接口
├── scripts             # 脚本
├── tests             # 测试
├── travis             # Travis，关系不大
├── win32           # 关系不大
```

## TSRM

Thread Safe Resource Manager，线程安全资源管理器。

参考文档 [揭秘TSRM](http://www.laruence.com/2008/08/03/201.html)

## Zend

## appveyor

## build

## ext

## main

## pear

PHP Extension and Application Repository

## sapi

Server abstraction API

参考文档 [深入理解Zend SAPIs](http://www.laruence.com/2008/08/12/180.html)

## scripts

## tests

## travis

## win32
