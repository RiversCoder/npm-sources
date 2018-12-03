# 消息弹窗

----

### 基础用法
该弹窗样式风格适用于巡查端、管理端


<div class="demo-block">
  <w-showmore :len='10' text='文本超出显示长度，折叠起来，通过len属性显示从何处开始折叠。'>
  </w-showmore>
</div>

::: demo
```html

 <w-showmore 
   :len='10' 
   text='文本超出显示长度，折叠起来，通过len属性显示从何处开始折叠'>
 </w-showmore>

```
:::