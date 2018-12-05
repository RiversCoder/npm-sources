/**
 * @author kedun
 * Date: 2018/12/05
 */
import Vue from 'vue'
import MessageAlert from './src/message-alert.vue'

let MessageAlertConstructor = Vue.extend(MessageAlert);

let WMessageAlert = () => {
    return new MessageAlertConstructor()
};

MessageAlertConstructor.prototype.show = function(attr,callback2){
 
  this.vm = this.$mount();
  this.vm.$data.showInfos = attr;
  this.vm.$data.showMessageBox = true;
  document.body.appendChild(this.vm.$el)


  let unwatch = this.vm.$watch(() => {
    return this.vm.$data.clickOk;
  },function(value){
    if(!this.vm.$data.showMessageBox && value){
      console.log(value);
      console.log(typeof callback2)
    }
  });

};

MessageAlertConstructor.prototype.hide = function(){
    document.body.removeChild(this.vm.$el)
};

export default WMessageAlert();