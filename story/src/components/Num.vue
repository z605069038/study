<template>
    <div ref="number" class="wrap-container"/>
</template>

<script>
export default {
  name: 'num',
  props: {
    value: {
      type: Number | String,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      oldValue: 0,
      newValue: 0,
      html: ''
    }
  },
  methods: {
    // 全部从零开始
    move (t) {
      t.toString().split('').forEach(v => {
        this.html += '<div class="wrap"><ul class="list pos' + v + ' scroll0-' + v + '">'
        for (let i = 0; i <= 9; i++) {
          this.html += '<li>' + i + '</li>'
        }
        this.html += '</ul></div>'
      })
      this.$refs.number.innerHTML = this.html
    },
    comDigitsScroll (startArr, endArr) {
      startArr.forEach((v, k) => {
        this.html += '<div class="wrap"><ul class="list pos' + endArr[parseInt(k)] + ' scroll' + v + '-' + endArr[parseInt(k)] + '">'
        for (let i = 0; i <= 9; i++) {
          this.html += '<li>' + i + '</li>'
        }
        this.html += '</ul></div>'
      })
    },
    changeMove (t, tt) {
      let startArr = t.toString().split('')
      let endArr = tt.toString().split('')
      if (startArr.length === endArr.length) {
        this.comDigitsScroll(startArr, endArr)
      } else if (startArr.length < endArr.length) {
        let tmpArr = []
        for (let i = 0; i < (endArr.length - startArr.length); i++) {
          tmpArr.push('0')
        }
        startArr = tmpArr.concat(startArr)
        this.comDigitsScroll(startArr, endArr)
      } else {
        startArr = startArr.slice((startArr.length - endArr.length), startArr.length)
        this.comDigitsScroll(startArr, endArr)
      }
    }
  },
  watch: {
    value (cur, old) {
      this.newValue = cur || 0
      this.oldValue = old || 0
      this.html = ''
      this.changeMove(this.oldValue, this.newValue)
      this.$refs.number.innerHTML = this.html
    }
    // this.move(this.value)
    // this.changeMove(this.oldValue, this.newValue)
  },
  mounted(){
      this.move(this.value);
  }
}
</script>
<style lang="scss">
@for $i from 0 through 9 {
  @for $j from 0 through 9 {
    @keyframes move#{$i}-#{$j}{0%{top:-100% * $i;}100%{top:-100% * $j;}}
  }
}
@for $i from 0 through 9 {
  @for $j from 0 through 9 {
    .swiper-slide-active .scroll#{$i}-#{$j}{animation:.5s move#{$i}-#{$j} ease-in-out;}
  }
}
.wrap-container {
  display:flex;
  justify-content: flex-start;
  .wrap{
    width:50px;height:88px; position:relative; overflow:hidden;box-sizing: border-box;font-size: 88px;
    .list {
      position:absolute;left:0;top:0;margin:0;padding:0; height:100%;box-sizing: border-box;
      li{ list-style:none;width:50px;height:88px;line-height:88px;color:#fe3559; text-align:center; float:left;box-sizing: border-box;font-size: 88px;}
    }
    @for $i from 0 through 19 {
      .pos#{$i}{
        top:-100% * $i;
      }
    }
  }
}
</style> 