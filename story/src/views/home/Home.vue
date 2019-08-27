<template>
  <div class="home">
    <Loading :progress="progress" v-show="progress!=100"></Loading>
    <Qrcodehome v-show="qrcode"></Qrcodehome>
    <div class="swiper-container" id="c1" v-if="resFlag">
      <div class="swiper-wrapper" ref="test">
        <div class="swiper-slide part1">
          <div class="envelope">
            <p>主题：2019邮箱使用足迹</p>
            <p>发件人：notice@qiye.163.com</p>
            <p>收件人：{{to}}</p>
            <p>时间：{{toDate}}</p>
          </div>
        </div>
        <div class="swiper-slide part part2 fade-in" :class="datetime">
          <div class="title">
            <p>今天，是我和网易企业邮箱相遇的</p>
            <p>第<span class="red"><Num :value="day"></Num></span>天</p>
          </div>
          <div class="footer">
            <p><i class="start"></i>慢慢我习惯了，</p>
            <p>迎接每一次打开邮箱后的轻声问候。<i class="end"></i></p>
          </div>
        </div>
        <div class="swiper-slide part part3 fade-in" :class="mailLength<=150?'mail-length-gt-15':'mail-length-lt-15'">
          <div class="title">
            <p>{{year}}年</p>
            <p>我发出了<span class="red"><Num :value="send"></Num></span>封邮件</p>
             <p>收到<span class="red"><Num :value="recive"></Num></span>封邮件</p>
          </div>
          <div class="footer" v-if="mailLength>150">
            <p><i class="start"></i>坚持无纸化办公，</p>
            <p>我永远是节能环保的先行者。<i class="end"></i></p>
          </div>
          <div class="footer" v-else>
            <p><i class="start"></i>先定个小目标，</p>
            <p>到{{year.substring(2,4)}}年底我的邮件量要超过99%的用户。<i class="end"></i></p>
          </div>
        </div>
        <div class="swiper-slide part part4 fade-in" v-if="mailYNshow" :class="mailYNshow || ''">
          <div class="title">
            <p>我给域内的小伙伴发信</p>
            <p><span class="red"><Num :value="mailYN"></Num></span>封</p>
            <p>同事间的亲密协作少不了我的高效配合。</p>
          </div>
          <div class="footer">
            <p><i class="start"></i>{{mailYN &lt; 20 ? '公司是我家，业绩靠大家。':'我是革命的一块砖，哪里需要哪里搬。'}}<i class="end"></i></p>
          </div>
        </div>
        <div class="swiper-slide part part5 fade-in" v-if="mailYWshow" :class="mailYWshow || ''">
          <div class="title">
            <p>我给域外的小伙伴发信</p>
            <p><span class="red"><Num :value="mailYW"></Num></span>封</p>
            <p>{{mailYW &lt; 150 ? '如果一封邮件解决不了的问题，那就来两封。':'商务订单、合同都不在话下。'}}</p>
          </div>
          <div class="footer">
            <p><i class="start"></i>{{mailYW &lt; 150 ? '千锤百炼，职场任我驰骋！':'嘻嘻，ta们说，商务精英的邮件量会更高'}}<i class="end"></i></p>
          </div>
        </div>
        <div class="swiper-slide part part6 fade-in" v-if="loginNum>0" :class="webMore?'web':'client'">
          <div class="title">
            <p>{{year}}年，我共登录邮箱<span class="red"><Num :value="loginNum"></Num></span>次，</p>
            <p>和<span class="red"><Num :value="usualLoginRatio"></Num></span>%的用户一样，</p>
            <p>{{webMore?'酷爱使用WebMail处理邮件。':'酷爱使用客户端来处理邮件。'}}</p>
          </div>
          <div class="footer" v-if="webMore">
            <p><i class="start"></i>熟练地穿梭在各项应用中，</p>
            <p>工作效率也总是快人一步！<i class="end"></i></p>
          </div>
           <div class="footer" v-else>
            <p><i class="start"></i>能快速根据自己的使用习惯， </p>
            <p>寻找到最合适的工作方式。<i class="end"></i></p>
          </div>
        </div>
        <div class="swiper-slide part part7 fade-in" v-if="mark.length>0" :class="marktime[mark[5]]">
          <div class="title">
            <p><span class="red"><Num :value="mark[0]"></Num></span>年<span class="red"><Num :value="mark[1]"></Num></span>月<span class="red"><Num :value="mark[2]"></Num></span>日</p>
            <p>这一天对我很特别，</p>
            <p v-if="mark[5]==0">深夜<span class="red"><Num :value="mark[3]"></Num></span>点<span class="red"><Num :value="mark[4]"></Num></span>分，我还在处理邮件</p>
            <p v-else-if="mark[5]==1">凌晨<span class="red"><Num :value="mark[3]"></Num></span>点<span class="red"><Num :value="mark[4]"></Num></span>分，我还在处理邮件</p>
            <p v-else-if="mark[5]==2">清晨<span class="red"><Num :value="mark[3]"></Num></span>点<span class="red"><Num :value="mark[4]"></Num></span>分，我就已经开始处理邮件</p>
          </div>
          <div class="img">
            <template v-if="mark[5]==1">
              <div class="person"></div>
              <div class="time hour-1" :class="'time-'+mark[3].split('')[0]"></div>
              <div class="time hour-2" :class="'time-'+mark[3].split('')[1]"></div>
              <div class="time min-1" :class="'time-'+mark[4].split('')[0]"></div>
              <div class="time min-2" :class="'time-'+mark[4].split('')[1]"></div>
            </template>
          </div>
          <div class="footer" v-if="mark[5]==0 || mark[5]==1">
            <p><i class="start"></i>梦想很近，为自己拼一把！<i class="end"></i></p>
          </div>
          <div class="footer" v-else-if="mark[5]==2">
            <p><i class="start"></i>活力满满，</p>
            <p>以最饱满的状态迎接每一天！<i class="end"></i></p>
          </div>
        </div>
        <div class="swiper-slide part part8 fade-in" :class="time">
          <div class="title">
            <p> 和<span class="red"><Num :value="usualTimeRatio"></Num></span>%的用户一样，</p>
            <p>我更喜欢集中在<span class="red">{{worktime[time]}}</span>处理工作</p>
          </div>
          <div class="footer">
            <p><i class="start"></i>奋斗的路上， </p>
            <p>有这么多人并肩同行，真好！<i class="end"></i></p>
          </div>
        </div>
        <div class="swiper-slide part part9 summary">
          <div class="title">
            <p><span class="red">总结下自己吧！</span></p>
            <p>邮件留下的足迹，</p>
            <p>也是我们渐行渐远的生活和工作轨迹。</p>
          </div>
          <div class="part-body">
            <div class="part-body-title">
              <p>{{tag==''?'我眼中的自己，点击选中':'我眼中的自己'}}</p>
              <div class="border"></div>
            </div>
            <div class="tag">
              <div class="swiper-container" id="c2" v-show="tag==''">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="item in tags">
                    <p v-for="swiper_item in item" >
                      <span v-for="value in swiper_item" v-show="value.text" @click="selectTag(value)">{{value.text}}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="tag-info" v-show="tag">
                <p>{{tag}}</p>
                <a class="btn" @click="tagSelect">重新定义自己</a>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide part part10 summary">
          <div class="title">
            <p><span class="red">{{year}}，我想</span></p>
            <p>2019还有哪些未达成的小目标呢？</p>
          </div>
          <div class="part-body">
            <div class="part-body-title">
              <p>{{goal==''?'点亮它，梦想并不遥远':year+'，梦想就在指尖'}}</p>
              <div class="border"></div>
            </div>
            <div class="tag">
              <div class="swiper-container" id="c3" v-show="goal==''">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="item in goals">
                    <p v-for="swiper_item in item">
                      <span v-for="value in swiper_item" v-show="value.text" @click="selectGoal(value)">{{value.text}}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="tag-info" v-show="goal">
                <p>{{goal}}</p>
                <a class="btn" @click="goalSelect">重新选择目标</a>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide part part11 endding">
          <div class="title">
            <p><span class="red">{{year}}</span></p>
            <p><span class="red font-size-75">也要给棒棒的自己点个赞哦！</span></p>
          </div>
          <div class="like">
            <p>已有<span class="red">{{addLike}}</span>用户为自己点赞</p>
            <a class="icon-like" @click="addLikenum"></a>
          </div>
          <div class="footer">
            <router-link to="/bigevent"  class="btn">企业邮大事记</router-link>
            <a class="btn back" @click="triggerQrcode">分享我的足迹</a>
          </div>
        </div>
      </div>
      <div class="swiper-wrapper-bg">
        <div class="text-info" v-show="c1.activeIndex==0"></div>
        <i class="next" v-show="c1.activeIndex>0&&c1.activeIndex<c1.slides.length-1"></i>
      </div>
      <div class="swiper-slide-to-1" @click="triggerQrcode" v-show="c1&&c1.activeIndex==c1.slides.length-1"></div>
    </div>
    <div class="result-is-empty" v-else></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Loading from '@/components/Loading.vue';
import Num from '@/components/Num.vue';
import Qrcodehome from '@/components/Qrcodehome.vue';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import './home.scss';


@Component({
  components: {
    Loading,
    Num,
    Qrcodehome
  }
})
export default class Home extends Vue {
  qrcode = false;
  resFlag = false;
  isDev = true;
  progress = 0;
  loading_flag = false;
  year :string = new Date().getFullYear().toString();
  addLike:any = 10835;
  addLikeFlag = false;
  to :string = 'lvyengyeng@corp.netease.com';
  toDate :string = '';
  day:string = '1';
  send:Number = 100;
  recive:Number = 112;
  mailYN:Number = 20;
  mailYW:Number = 150;
  loginNum:Number = 12485;
  webNum:Number = 3;
  clientNum:Number = 4;
  usualLoginRatio = 85;
  usualTimeRatio = 90;
  time = 'morning';
  tag = '';
  tagId = '';
  tags = [{
      "0":[{id:1,text:'工作狂魔'},{id:2,text:'加班达人'},{id:3,text:'女神'}],
      "1":[{id:4,text:'男神'},{id:5,text:'职场白骨精'},{id:6,text:'文化人'}],
      "2":[{id:7,text:'优秀员工'},{id:8,text:'霸道总裁'},{id:9,text:'商务精英'}]
    },{
      "0":[{id:10,text:'沉迷工作'},{id:11,text:'销售天才'},{id:'',text:''}],
    }];
  goal = '';
  goalId = '';
  goals = [{
      "0":[{id:1,text:'事业有成'},{id:2,text:'创业成功'},{id:3,text:'公司上市'}],
      "1":[{id:4,text:'升职加薪'},{id:5,text:'迎娶白富美'},{id:6,text:'涨工资'}],
      "2":[{id:7,text:'步步高升'},{id:8,text:'十全十美'},{id:9,text:'不再熬夜'}]
    },{
      "0":[{id:10,text:'先赚一个亿'},{id:11,text:'身体健康'},{id:'',text:''}],
      "1":[{id:13,text:'实现财务自由'},{id:'',text:''},{id:'',text:''}]
    }];
  worktime = {
    'morning':'上午',
    'afternoon':'下午',
    'evening':'晚上'
  }
  marktime = {
    0:'night',
    1:'early-morning',
    2:'morning'
  }
  mark = ['2019','06','12','56','79','1']
  c1:any = '';
  c2:any = '';
  c3:any = '';

  private padLeftZero(str:any) {
    str = str.toString();
      return ('00' + str).substr(str.length);
  }
  
  private dateFormat(date:Date,fmt:string){
    var o :any = { 
        "M+" : date.getMonth()+1,                 //月份 
        "d+" : date.getDate(),                    //日 
        "h+" : date.getHours(),                   //小时 
        "m+" : date.getMinutes(),                 //分 
        "s+" : date.getSeconds(),                 //秒 
        "q+" : Math.floor((date.getMonth()+3)/3), //季度 
        "S"  : date.getMilliseconds()             //毫秒 
    }; 
    if(/(y+)/.test(fmt)) {
            fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length)); 
    }
     for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
         }
     }
    return fmt;
  }

  private created(){
    let date : any= new Date().getTime();
    let compareDate :any = new Date('2019-07-31').getTime();
    this.addLike = this.addLike + Math.round((date-compareDate)/80000);
    this.toDate = this.dateFormat((new Date),'yyyy.MM.dd');
  }

  //判断特殊发信事件处于哪个时间段
  private dateCompare(num:any){
    if(num<5){
      return 1;
    }else if(num<7){
      return 2;
    }else{
      return 0;
    }
  }

  private mounted(){
    let params = this.$route.fullPath.split('?');
    if(params.length>1&&params[1].split('=')[0]=='backfrom'){
      this.progress = 100;
      this.resFlag = true;
    }
    if(this.isDev){
      // 便于本地调试
      this.progress = 100;
      let date = new Date(1564693140000)
      this.mark = [date.getFullYear().toString(),this.padLeftZero(date.getMonth()+1),this.padLeftZero(date.getDate()),this.padLeftZero(date.getHours()),this.padLeftZero(date.getMinutes()),this.dateCompare(date.getHours()).toString()];
      this.$nextTick(()=>{
        this.c1 = new Swiper('#c1', {
          direction: 'vertical',
          mousewheel:true,
          on:{
            transitionEnd: ()=>{
              if(this.c1.activeIndex == this.c1.slides.length-2 && this.goal==''){
                this.c3.setTranslate(0);
              }
              if(this.c1.activeIndex == this.c1.slides.length-3 && this.tag==''){
                this.c2.setTranslate(0);
              }
            },
          },
        });
        this.day = '12345';
        if(this.tag==''){
          this.c2 = new Swiper('#c2',{
            autoplay:{
              disableOnInteraction:false
            }
          })
        }
        if(this.goal==''){
          this.c3 = new Swiper('#c3',{
            autoplay:{
              disableOnInteraction:false
            }
          })
        }
      });

      return ;
    }
    this.axios.defaults.withCredentials = true;
    this.getData();
  }

  getData(){
    let Tongji = (<any>window).Tongji;
    this.axios.get('/rdmailquery/api/call.do?op=queryAccountUsageStat').then((res)=>{
      let time = setInterval(()=>{
        if(this.progress == 100){
          clearInterval(time);
          return ;
        }
        let random = Math.round(Math.random()*10);
        this.progress = (this.progress + random)>99?this.progress+1 : this.progress + random;
      },100);
      if(res.status==200 && res.data.code==200){
        Tongji.pv('home',{
          p_account:res.data.result.data.uid
        });
        if(res.data.result.data.usageStat){
          this.resFlag = true;
        }else{
          this.resFlag = false;
          this.progress = 100;
          clearInterval(time);
          this.$ftoast({
            text: '3秒后返回原界面'
          });
          setTimeout(()=>{
            window.location.href = 'https://m.qiye.163.com/login.html?product=persona';
          },3000);
          return ;
        }
        console.log(res.data);
        let result = res.data.result.data.usageStat;
        this.to = res.data.result.data.uid;
        this.day = Math.ceil((new Date().getTime() - res.data.result.data.createTime)/(24*3600*1000)).toString();
        this.year = result.year.toString();
        this.send = result.outDomainSendCount.num + result.inDomainSendCount.num;
        this.recive = result.allRecvCount.num;
        this.mailYN = result.inDomainSendCount.num;
        this.mailYW = result.outDomainSendCount.num;
        this.loginNum = result.webLoginCount.num + result.clientLoginCount.num;
        this.webNum = result.webLoginCount.num ;
        this.clientNum = result.clientLoginCount.num ;
        this.usualLoginRatio = result.usualLoginRatio;
        if(result.markDate){
          let date = new Date(result.markDate)
          this.mark = [date.getFullYear().toString(),this.padLeftZero(date.getMonth()+1),this.padLeftZero(date.getDate()),this.padLeftZero(date.getHours()),this.padLeftZero(date.getMinutes()),this.dateCompare(date.getHours()).toString()];
        }else{
          this.mark = []
        }
        if(result.tag){
          this.tags.forEach((item)=>{
            Object.values(item).forEach((valueItem:any) => {
                valueItem.forEach((value:any) => {
                  if(value&&value.id==result.tag){
                    this.tag = value.text;
                }
              });
            });
          })
        }
        if(result.tar){
          this.goals.forEach((item)=>{
            Object.values(item).forEach((valueItem:any) => {
              valueItem.forEach((value:any) => {
                if(value&&value.id==result.tar){
                  this.goal = value.text;
                }
              });
            });
          })
        }
        this.usualTimeRatio = result.usualTimeRatio;
        this.time = Object.keys(this.worktime)[result.usualTimeType];

        this.addLikeFlag = result.like;
        this.$nextTick(()=>{
            this.c1 = new Swiper('#c1', {
              direction: 'vertical',
              mousewheel:true,
              on:{
                slideChange: ()=>{
                  if(this.c1.activeIndex == this.c1.slides.length-2 && this.goal==''){
                    this.c3.setTranslate(0);
                  }
                  if(this.c1.activeIndex == this.c1.slides.length-3 && this.tag==''){
                    this.c2.setTranslate(0);
                  }
                },
              }
            });
          if(this.tag==''){
            this.c2 = new Swiper('#c2',{
              autoplay:{
                disableOnInteraction:false
              }
            })
          }
          if(this.goal==''){
            this.c3 = new Swiper('#c3',{
              autoplay:{
                disableOnInteraction:false
              }
            })
          }
        })
      }else{
        this.$router.replace('/');
      }
    })
  }

  //保存足迹
  private triggerQrcode(){
    console.log(this.qrcode);
    this.qrcode = !this.qrcode;
  }

  private likeOrTagUsageStat(){
    let url =  "/rdmailquery/api/call.do?op=likeOrTagUsageStat&like=" + this.addLikeFlag;
    if(this.tagId){
      url += "&tag="+this.tagId;
    }
    if(this.goalId){
      url += "&tar="+this.goalId;
    }
    this.axios.get(url);
  }

  //点赞
  private addLikenum(){
    if(this.addLikeFlag){
      this.$ftoast({
        text: '您已为自己点赞'
      })
      return;
    }
    this.addLike = this.addLike + 1;
    this.addLikeFlag = true;
    this.likeOrTagUsageStat();
  }

  //重新定义标签
  private tagSelect(){
    this.tag = '';
    if(this.c2==''){
      setTimeout(()=>{
        this.c2 = new Swiper('#c2',{
            autoplay:{
              disableOnInteraction:false
            }
          })
      });
    }else{
      setTimeout(()=>{
        this.c2.autoplay.start();
      })
    }
  }

  private selectGoal(value : any){
    this.goal = value.text;
    this.goalId = value.id;
    this.likeOrTagUsageStat();
  }

  private selectTag(value:any){
    this.tag = value.text;
    this.tagId = value.id;
    this.likeOrTagUsageStat();
  }

  private goalSelect(){
    this.goal = '';
    if(this.c3==''){
      setTimeout(()=>{
        this.c3 = new Swiper('#c3',{
          autoplay:{
            disableOnInteraction:false
          }
        })
      });
    }else{
      setTimeout(()=>{
        this.c3.autoplay.start();
      })
    }
  }

  //计算时间段
  private get datetime() : string {
      const nowtime = new Date().getTime();
      const morningBegin = new Date();
      morningBegin.setHours(5,0,0)
      const morningEnd= new Date();
      morningEnd.setHours(11,59,59);
      const afternoonBegin = new Date();
      afternoonBegin.setHours(12,0,0)
      const afternoonEnd= new Date();
      afternoonEnd.setHours(19,59,59);
      let datetime = '';
      if(nowtime>morningBegin.getTime()&&nowtime<morningEnd.getTime()){
        datetime = 'time-5-11';
      }else if(nowtime>afternoonBegin.getTime()&&nowtime<afternoonEnd.getTime()){
        datetime = 'time-12-19';
      }else{
        datetime = 'time-20-4';
      }
      return datetime;
  }

  //邮件数
  private get mailLength(){
    let mailLength = this.send.valueOf() + this.recive.valueOf();
    return mailLength;
  }

  //域内邮件数
  private get mailYNshow(){
    if(this.mailYN == 0) return false;
    else if(this.mailYN >=20) return 'mailYN-gt-20';
    else return 'mailYN-lt-20';
  }

  //域外邮件数
  private get mailYWshow(){
    if(this.mailYW == 0) return false;
    else if(this.mailYW >=150) return 'mailYW-gt-150';
    else return 'mailYW-lt-150';
  }

  //webmail和客户端登录次数比较
  private get webMore(){
    return this.webNum > this.clientNum;
  }
}
</script>



