# 消息弹窗

----

### 基础用法
该弹窗样式风格适用于巡查端、管理端

<div class="demo-block">
   <w-button @click="showMessageDefault">默认信息</w-button>
   <w-button @click="showMessageNormal">一般信息</w-button>
   <w-button @click="showMessageWarning">警告信息</w-button>
   <w-button @click="showMessageAnomalous">系统异常</w-button>
   <w-button @click="showMessageError">错误信息</w-button>
</div>

<script scoped>
  export default{
    methods:{
      showMessageDefault(){
        this.$wmessage.show();
      },
      showMessageNormal(){
        this.$wmessage.show({
          type: 'normal',
          info: '这是一条一般信息',
          sure: function(){
            console.log('我点击了确定按钮!');
          }
        });
      },
      showMessageWarning(){
        this.$wmessage.show({
          type: 'warning',
          info: '这是一条警告信息',
          sure: function(){
            console.log('我点击了确定按钮!');
          },
          cancel: function(){
            console.log('我点击了取消按钮！');
          }
        });
      },
      showMessageAnomalous(){
        this.$wmessage.show({
          type: 'anomalous',
          info: '这是一条异常信息'
        });
      },
      showMessageError(){
        this.$wmessage.show({
          type: 'error',
          info: '这是一条错误信息'
        });
      }
    }
  }
</script>

::: demo
```html

<div class="demo-block">
   <w-button @click="showMessageDefault">默认信息</w-button>
   <w-button @click="showMessageNormal">一般信息</w-button>
   <w-button @click="showMessageWarning">警告信息</w-button>
   <w-button @click="showMessageAnomalous">系统异常</w-button>
   <w-button @click="showMessageError">错误信息</w-button>
</div>

<script scoped>
  export default{
    methods:{
      showMessageDefault(){
        this.$wmessage.show();
      },
      showMessageNormal(){
        this.$wmessage.show({
          type: 'normal',
          info: '这是一条一般信息',
          sure: function(){
            console.log('我点击了确定按钮!');
          }
        });
      },
      showMessageWarning(){
        this.$wmessage.show({
          type: 'warning',
          info: '这是一条警告信息',
          sure: function(){
            console.log('我点击了确定按钮!');
          },
          cancel: function(){
            console.log('我点击了取消按钮！');
          }
        });
      },
      showMessageAnomalous(){
        this.$wmessage.show({
          type: 'anomalous',
          info: '这是一条异常信息'
        });
      },
      showMessageError(){
        this.$wmessage.show({
          type: 'error',
          info: '这是一条错误信息'
        });
      }
    }
  }
</script>

```
:::



### Api config参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 信息弹窗类型 | String | normal, warning, anomalous, error  | normal |
| info | 弹出信息 | String | 所有字符类型文字 | 这是一条弹窗信息！ |
| sure | 点击确定按钮触发的回调函数 | Function | Null | Null |
| cancel | 点击取消按钮触发的回调函数 | Function | Null | Null |