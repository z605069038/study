<template>
    <div class="bigevent">
        <div class="title">
            <p>网易—中国第一大电子邮件服务商</p>
            <p class="weight">网易企业邮箱大事记</p>
        </div>
        <ul>
            <li v-for="(item,index) in ulList" :class="{on:index<curIndex}" ref="li">
                <div>
                    <em>{{item.year}}年</em>
                    <i></i>
                    <p v-for="text in item.texts">{{text}}</p>
                </div>
            </li>
        </ul>
        <router-link to="/home?backfrom=bigevent"  class="btn">返回我的足迹</router-link>
    </div>
</template>

<script lang="ts">
    import { Component,Vue } from 'vue-property-decorator';
    @Component
    export default class Bigevent extends Vue {
        curIndex = 0;
        ulList = [
            {year:'1997',texts:['网易成立','成功研发第一个中文邮件系统']},
            {year:'2003',texts:['网易邮箱市场占有率跃居全国第一']},
            {year:'2009',texts:['网易推出企业邮箱业务','成为国内最大最全面的邮件服务商']},
            {year:'2010',texts:['成为第16届亚运会官方邮箱提供商']},
            {year:'2011',texts:['率先推出证券邮、高校邮、法院邮','行业定制邮箱产品']},
            {year:'2012',texts:['15万家企业进驻','市场占有率实现突破性发展']},
            {year:'2013',texts:['全新版5.0“简 · 爱”问世','邮箱整体性能提升35%','首家支持DMARC协议的邮件服务商']},
            {year:'2014',texts:['新版网易企业邮箱6.0引爆市场','上百个功能更新和专利服务震撼登场']},
            {year:'2015',texts:['国内首个获得EAL3+安全证书的','企业邮箱']},
            {year:'2016',texts:['57万家企业入驻','成为恒大地产、第一财经等领军企业','的首选品牌']},
            {year:'2017',texts:['荣获“最佳企业信息化服务品牌”等','多项服务类大奖']},
            {year:'2018',texts:['斩获“2018杰出品牌形象“等多项','重量级大奖']},
            {year:'2019',texts:['网易企业邮箱十周年，','步履不停，与您共同创造下个十年']},
        ]
        private touch(){
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            let documentHeight = document.documentElement.clientHeight;
            let items = this.$refs.li;
            for(var i in items){
                let offsetTop = (<any>items)[i].offsetTop;
                if(offsetTop-scrollTop<documentHeight){
                    let number = (<any>items).length-1;
                    this.curIndex = Number(i==number.valueOf().toString()?i+1:i);
                }
            }
        }

        private created(){
        }

        private mounted(){
            this.touch();
            window.addEventListener('scroll', this.touch)
        }
    }
</script>

<style lang="scss" scoped>
    .bigevent{
        .btn{
            width: 714px;
            height: 160px;
            line-height: 160px;
            font-size: 66px;
            border-radius: 10px;
            color: #fff;
            background: #534efb;
            display: block;
            font-weight: lighter;
            letter-spacing: 5px;
            margin:0 auto;
            text-align: center;
            text-decoration: none;
        }
        .title{
            margin:190px 0 130px;
            p{
                font-size: 44px;
                text-align: center;
                letter-spacing: 3px;
                &.weight{
                    font-size: 77px;
                    color: #fe3559;
                }
            }
        }
        ul{
            margin-left: 300px;
            border-left:1px solid #d4d4d4;
            margin-bottom: 165px;
            li{
                padding-top:180px;
                margin-left: -1px;
                div{
                    position: relative;
                    em{
                        position: absolute;
                        font-size: 44px;
                        color: #fe3559;
                        transform: translate(-100%,-50%);
                        left: -70px;
                        top: 50%;
                    }
                    i{
                        position: absolute;
                        width: 48px;
                        height: 40px;
                        background-image: url('../../assets/icon_leaf.png');
                        background-repeat: no-repeat;
                        background-size: 48px 40px;
                        top: 50%;
                        transform: translate(-100%,-50%);
                    }
                    p{
                        font-size: 37px;
                        margin-left: 75px;
                        line-height: 37px;
                        height: 37px;
                        margin-bottom: 30px;
                        &:last-child{
                            margin-bottom: 0;
                        }
                    }
                }
                &:first-child{
                    padding-top: 0;
                }
                &:nth-child(odd){
                    i{
                        transform: translate(0%,-50%) rotate(120deg);
                    }
                }
                &.on{
                    border-left:1px solid #3935bd;
                    i{
                        background-image: url('../../assets/icon_leaf_on.png');
                    }
                }
            }
        }
        a.btn{
            margin-bottom: 214px;
        }
    }
</style>


