<template>
  <div class="login">
    <a @click.once="goLogin"></a>
  </div>
</template>

<script lang="ts">
import { Component,Vue } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
  private goLogin() {
    window.location.href = "https://m.qiye.163.com/login.html?product=persona";
  }

  private created(){
  }
}
</script>

<style lang="scss" scoped>
    .login{
      background: url('../../assets/login_bg.png') no-repeat top center;
      width: 100vw;
      height: 100vh;
      background-size: 100vw 100vh;
      position: relative;
      a{
        display: block;
        width: 804px;
        height: 154px;
        background: url('../../assets/login_btn.png') no-repeat top center;
        border-radius: 73px;
        background-size: 804px 154px;
        position: absolute;
        bottom: 210px;
        left:50vw;
        margin-left: -402px;
      }
    }
</style>

