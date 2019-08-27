<template>
  <div id="app">
    <Qrcode v-show="qrcode" :msg="'请在手机上扫描下方二维码访问'" :hasclose="false"></Qrcode>
    <router-view/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Qrcode from '@/components/Qrcode.vue';
@Component({
  components: {
    Qrcode
  }
})
export default class Index extends Vue {
  qrcode = false;
  private mounted(){
     console.log(!(/mobile|android|iphone|ipad|phone/i.test(navigator.userAgent.toLowerCase())));
     let ua = navigator.userAgent.toLowerCase();
      if (!(/mobile|android|iphone|ipad|phone/i.test(ua))) {
        this.qrcode = true;
        document.body.style.overflow = 'hidden';
      }
  }
}
</script>
<style lang="scss">
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font:14px "PingFang SC","Microsoft Yahei","Heiti SC","Helvetica";
  color:#000;
  vertical-align: baseline; }

/* HTML5 display-role reset for older browsers */

article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block; }

body {
  line-height: 1; }

ol, ul {
  list-style: none; }

blockquote, q {
  quotes: none; }

blockquote {
  &:before, &:after {
    content: '';
    content: none; } }

q {
  &:before, &:after {
    content: '';
    content: none; } }

table {
  border-collapse: collapse;
  border-spacing: 0; }
.toast-wrapper .toast-content{font-size: 12px}
</style>

