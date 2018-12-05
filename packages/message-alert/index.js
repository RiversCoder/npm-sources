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

MessageAlertConstructor.prototype.show = function(attr){
 
  this.vm = this.$mount()
  let data = JSON.parse(JSON.stringify(this.vm.$data));
  this.vm.$data.showInfos = attr;
  this.vm.$data.showMessageBox = true;
  document.body.appendChild(this.vm.$el)
  //console.log(this.vm.$watch);
  return new Promise(() => {
    let unwatch = this.vm.$watch('showMessageBox',function(newValue,oldValue){
      console.log(newValue,oldvalue);
      if(newValue !== oldvalue && newValue){
        resolve('123');
        unwatch();
      }
    })
  })
};

MessageAlertConstructor.prototype.hide = function(){
    document.body.removeChild(this.vm.$el)
};

export default WMessageAlert();