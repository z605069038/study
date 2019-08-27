<template>
    <div class="qrcode-area">
      <img src="../assets/logo.png">
      <div class="text">
        <p>2019已过大半，你工作中留下了哪些痕迹呢？</p>
        <p>扫描二维码一起测试分享吧！</p>
        <i></i>
      </div>
      <div id="qrcode-home" class="qrcodeforhome"></div>
    </div>
</template>

<script>
import QRCode from 'qrcodejs2'
export default {
  name: 'qrcodehome',
  mounted(){
    this.$nextTick(()=>{
        let id = this.qrcodeId;
        let qrcode = new QRCode(document.getElementById('qrcode-home'), {
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
    .qrcode-area{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 998;
      background: url('../assets/loading_bg.png') no-repeat top center;
      background-size: 100vw 100vh;
      >img{
        width: 290px;
        margin: 100px auto;
        display: block;
      }
      .text {
        position: relative;
        margin-top: 300px;
        margin-bottom: 100px;
        p{
          font-size: 42px;
          color: #fff;
          line-height: 70px;
          text-align: center;
          letter-spacing: 3px;
        }
        i{
          border-top: 31px solid #e6564f;
          border-right: 18px solid transparent;
          border-left: 18px solid transparent;
          position: absolute;
          left: 50%;
          margin-left: -18px;
          bottom: -60px;
        }
      }
      .qrcodeforhome{
        width: 200px;
        margin: 0 auto;
        padding:10px;
        background: #fff;
      }
    }
</style> 