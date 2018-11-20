<p align="center"><img width="60" src="docs/images/logo.png" alt="Vue logo" /></p>

# BUI 2.0

* 1.框架采用单页面形式，通过Hash(锚点)进行路由跳转，页面进行局部刷新及卸载。
* 2.框架采用MVC开发模式，进入页面或者页面地址改变时，通过路由监听HashChange来进行模块间跳转， 并触发匹配到的Action，在Action中通过视图组件进行页面模型渲染等其他业务操作。
* 3.框架提供牵引线Marionette，来规范页面流转及视图组件的开发规范。
* 4.框架提供观察者模式，提供各个组件的全局事件通讯，降低组件之间的耦合性，并合理进行监听事件的卸载。
* 5.框架本身是一个轻量级框架，减少页面加载时间，减少对第三方的依赖，减少开发人员的上手时间， 框架本身必须遵循实用性、可扩展性、可维护性。
* 6.支持单项绑定，由于本框架对控件集成封装，无需支持双向绑定。

## 帮助文档

[帮助文档](https://zhangchuanhui.github.io/BUI/docs/index.html)

## BraveOS专用UI

[BraveOS](https://github.com/ZhangChuanHui/BraveOS)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018 张传辉