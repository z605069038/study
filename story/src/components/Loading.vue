<template>
    <div class="loading">
        <div class="plane"></div>
        <div class="progress-bar">
            <div class="cur-progress" :style="{width:progress+'%'}">
                <div class="text">{{progress}}<span>%</span></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop,Vue } from 'vue-property-decorator';

@Component
export default class Loading extends Vue {
    @Prop() private progress! :Number;
}
</script>
<style lang="scss" scoped>
    .loading{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 998;
        background: url('../assets/loading_bg.png') no-repeat top center;
        background-size: 100vw 100vh;
        .plane{
            background: url('../assets/plane.png') no-repeat top center;
            width: 333px;
            height: 215px;
            background-size: 333px 215px;
            margin: 600px auto 0;
        }
        .progress-bar{
            width: 865px;
            margin: 188px auto 0;
            background: #b0cee7;
            border-radius: 13px;
            height: 26px;
            .cur-progress{
                transition: all 0.1s ease-in-out;
                width: 0%;
                position: relative;
                background: #fff;
                height: inherit;
                border-radius: 13px;
                .text{
                    position: absolute;
                    top: 50px;
                    color: #fff;
                    font-size: 38px;
                    letter-spacing: 3px;
                    right: 0;
                    span{
                        color: inherit;
                        font-size: 24px;
                    }
                }
            }
        }
    }
</style>

