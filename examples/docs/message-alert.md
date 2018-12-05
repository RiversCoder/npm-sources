# 消息弹窗

----

### 基础用法
该弹窗样式风格适用于巡查端、管理端

<div class="demo-block">
   <w-button @click="showMessageNormal">一般信息</w-button>
   <w-button @click="showMessageWarning">警告信息</w-button>
   <w-button @click="showMessageAnomalous">系统异常</w-button>
   <w-button @click="showMessageError">错误信息</w-button>
</div>

<script scoped>
  export default{
    methods:{
      showMessageNormal(){
        this.$wmessage.show({
          type: 'normal',
          info: '这是一条一般信息'
        }).then(res => {
          console.log(res);
        });
      },
      showMessageWarning(){
        this.$wmessage.show({
          type: 'warning',
          info: '这是一条警告信息'
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
   <w-button @click="showMessageNormal">一般信息</w-button>
   <w-button @click="showMessageWarning">警告信息</w-button>
   <w-button @click="showMessageAnomalous">系统异常</w-button>
   <w-button @click="showMessageError">错误信息</w-button>
</div>

<script scoped>
  export default{
    methods:{
      showMessageNormal(){
        this.$wmessage.show({
          type: 'normal',
          info: '这是一条一般信息'
        });
      },
      showMessageWarning(){
        this.$wmessage.show({
          type: 'warning',
          info: '这是一条警告信息'
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