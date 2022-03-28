<template>
  <div class="home">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item><img src="@/assets/homeimg/swipe1.jpg" alt="" class="swipe"></van-swipe-item>
      <van-swipe-item><img src="@/assets/homeimg/swipe2.jpg" alt="" class="swipe"></van-swipe-item>
      <van-swipe-item><img src="@/assets/homeimg/swipe3.jpg" alt="" class="swipe"></van-swipe-item>
      <van-swipe-item><img src="@/assets/homeimg/swipe4.jpg" alt="" class="swipe"></van-swipe-item>
      <van-swipe-item><img src="@/assets/homeimg/swipe5.jpg" alt="" class="swipe"></van-swipe-item>
      <van-swipe-item><img src="@/assets/homeimg/swipe6.jpg" alt="" class="swipe"></van-swipe-item>
      <van-swipe-item><img src="@/assets/homeimg/swipe7.jpg" alt="" class="swipe"></van-swipe-item>
    </van-swipe>

     <div class="img">
      <img src="//ykimg.alicdn.com/develop/image/2020-12-17/c9d83e11cb40c71503c2d6033bca270a.jpg" />
    </div>

    <div class="jingcai">

      <ul class="zongyi">
        <li>
            <div></div>
            <p>狙击手💥张艺谋导演</p>
            <p>高手对决！中国狙神保家卫国</p>
        </li>

         <li>
            <div class="div1"></div>
            <p>哀悼！东航遇难同胞</p>
            <p>事故现场全场鸣笛致哀</p>
        </li>

         <li>
            <div class="div2"></div>
            <p>黑金风暴👊追凶查案</p>
            <p>生死时速！林峯高速追悍匪</p>
        </li>

         <li>
            <div class="div3"></div>
            <p>天赐3🤩太狂了！</p>
            <p>周深版算你狠大秀方言Rap</p>
        </li>

         <li>
            <div class="div4"></div>
            <p>相逢👋🏻嗷嗷大哭</p>
            <p>姐姐挨打 简宏成单挑救场</p>
        </li>

         <li>
            <div class="div5"></div>
            <p>追光哥哥🔥杀疯了</p>
            <p>王炸！符龙飞檀健次合体齐舞</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "HomeView",
  components: {
      
  },
};
</script>

<style>
    .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
  }
  .swipe{
    width: 375px;
    height: 189px;
  }
  .img img{
  width:375px;
  height:64px;
  margin-top:15px;
}

.zongyi li{
  width:49%;
  height:40%;
  margin-top:10px;
 
  
}
.zongyi li div{
  background:url("//liangcang-material.alicdn.com/prod/upload/afbad04e9f524c88b15e89b2d895024b.gif?x-oss-process=image/resize,w_375/format,webp/interlace,1") 0px 0px / cover no-repeat;
  background-size:100% 100%;
  width:185px;
  height:104px;
  margin-top:10px;
}

.zongyi li .div1{
  background:url("//liangcang-material.alicdn.com/prod/upload/4f25a5add8094ee49098322d69b0483f.jpg?x-oss-process=image/resize,w_375/format,webp/interlace,1") 0px 0px / cover no-repeat;
  background-size:100% 100%;
  width:185px;
  height:104px;
  margin-top:10px;
}

.zongyi li .div2{
  background:url("//liangcang-material.alicdn.com/prod/upload/2998ef03c4134a48bfb2fc7c7cb094e4.jpg?x-oss-process=image/resize,w_375/format,webp/interlace,1") 0px 0px / cover no-repeat;
  background-size:100% 100%;
  width:185px;
  height:104px;
  margin-top:10px;
}

.zongyi li .div3{
  background:url("https://liangcang-material.alicdn.com/prod/upload/68dd5238fe8142989fc136ee46e7d645.jpg?x-oss-process=image/resize,w_376/format,webp/interlace,1") no-repeat;
  background-size:100% 100%;
  width:185px;
  height:104px;
  margin-top:10px;
}

.zongyi li .div4{
  background:url("//liangcang-material.alicdn.com/prod/upload/99aac49bba0943cca0726b9292a78ae4.jpg?x-oss-process=image/resize,w_375/format,webp/interlace,1") 0px 0px / cover 0px 0px / cover no-repeat;
  background-size:100% 100%;
  width:185px;
  height:104px;
  margin-top:10px;
}

.zongyi li .div5{
  background:url("https://liangcang-material.alicdn.com/prod/upload/022cb003a9424b1c89bb4659c5802d32.jpg?x-oss-process=image/resize,w_376/format,webp/interlace,1") no-repeat;
  background-size:100% 100%;
  width:185px;
  height:104px;
  margin-top:10px;
}
.zongyi{
  display:flex;
  /* 换行 */
  flex-wrap: wrap;
  /*左右换行 */
  justify-content: space-between;
  
}


.zongyi li p{
  margin-top:3px;
  font-size:13px;
  margin-left:9px;
  margin-top:8px;
  
}
</style>
