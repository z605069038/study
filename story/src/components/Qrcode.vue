<template>
    <div class="qrcode-container">
      <div class="qrcode-container-wrapper">
        <div class="close" @click="close" v-show="hasclose">×</div>
        <div class="title">{{msg}}</div>
        <div class="qrcode" :id="qrcodeId"></div>
      </div>
    </div>
</template>

<script>
import QRCode from 'qrcodejs2'
export default {
  name: 'qrcode',
  props: {
    closeQrcode: {
      type: Function,
      default: function () {
        return {}
      }
    },
    msg:{
        type:String,
        default:''
    },
    hasclose:{
        type:Boolean,
        default:true  
    }
  },
  data () {
    return {
      qrcodeId: 'qrcode'+(new Date().getTime()),
    }
  },
  methods: {
    close(){
        console.log(1);
        this.$emit('closeQrcode');
    }      
  },
  mounted(){
    this.$nextTick(()=>{
        let id = this.qrcodeId;
        let qrcode = new QRCode(document.getElementById(id), {
            text: window.location.origin + '/rdmailquery/story',
            width: 200,
            height: 200,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    })
  }
}
</script>
<style lang="scss">
    .qrcode-container{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1000;
      background: rgba(0,0,0,0.6);
      .qrcode-container-wrapper{
        width: 280px;
        height: 280px;
        background: #fff;
        border-radius: 10px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -140px;
        margin-left: -140px;
        .close{
          position: absolute;
          width: 20px;
          height: 20px;
          top: 10px;
          right: 10px;
          background: rgba(0,0,0,0.5);
          color: #fff;
          border-radius: 10px;
          text-align: center;
          line-height: 18px;
          font-size: 20px;
        }
        .title{
            padding:0 40px;
            line-height: 40px;
            text-align: center;
            font-size: 12px;
            height: 40px;
        }
        .qrcode{
          width: 200px;
          height: 200px;
          margin-top: 10px;
          margin-left: 40px;
        }
      }
    }
</style> 