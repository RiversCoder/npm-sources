<template>
    <!-- 状态： 一般 normal | 警告 warning | 系统异常 anomalous | 错误信息： error -->
    <section class="w-message-mask" v-if="showMessageBox">
        <div class="w-message-alert" :class="'w-message-alert-'+showInfos.type">
            <span  class="wma-close" @click="closeMessageBox('close')">×</span>
            <div class="wma-info">
                <span class="wmai-icon" v-show="showInfos.type !== 'normal'">{{icons[showInfos.type]}}</span>
                <span class="wmai-content">{{showInfos.info}}</span>
            </div>
            <div class="wmai-menus">
                <!-- <div class="wmai-menus-box">
                    <span class="wmai-menus-btn wmai-menus-btn-ok">确定</span>
                </div> -->
                <div class="wmai-menus-box">
                    <span class="wmai-menus-btn wmai-menus-btn-ok" @click="closeMessageBox('sure')">确定</span>
                    <span class="wmai-menus-btn wmai-menus-btn-cancel" v-if="showInfos.type==='warning'" @click="closeMessageBox('cancel')">取消</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script scoped>
    export default{
        name:'WMessageAlert',
        data(){
            return {
                showInfos:{
                    type: '',
                    info: ''
                },
                icons:{
                    normal: '',
                    warning: '!',
                    anomalous: '☹',
                    error: '×'
                },
                showMessageBox: false,
                clickOk: false
            }
        },
        props:{
            showInfo:{
                type: Object,
                default: ()=>({
                    type:'normal',
                    info: '请输入完整信息'
                })
            }
        },
        methods:{
            closeMessageBox(status){
                if(status == 'sure'){
                    this.clickOk = true;
                    console.log('点击确定');
                }else{
                    this.clickOk = false;
                }
                this.showMessageBox = false;
                this.clickOk
            },
            confirmMessage(){
                console.log('confirmMessage');
            }
        }
    }
</script>