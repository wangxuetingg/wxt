<template>
    <div class="Variety">
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
      <van-swipe-item><img src="//liangcang-material.alicdn.com/prod/upload/73c6b983150a43c9a991b0039f649b7e.webp.png?x-oss-process=image/resize,w_751/format,webp/interlace,1" /></van-swipe-item>
      <van-swipe-item><img src="//liangcang-material.alicdn.com/prod/upload/8a0fc6917d89457687ef164f508cf453.gif?x-oss-process=image/resize,w_751/format,webp/interlace,1" /></van-swipe-item>
      <van-swipe-item><img src="//liangcang-material.alicdn.com/prod/upload/c30e8f4f109249708e88764aaa69f030.jpg?x-oss-process=image/resize,w_751/format,webp/interlace,1" /></van-swipe-item>
      <van-swipe-item><img src="//liangcang-material.alicdn.com/prod/upload/a6ad357f351345259539efdd996fb32a.jpg?x-oss-process=image/resize,w_751/format,webp/interlace,1" /></van-swipe-item>
    </van-swipe>


    <div class="img">
      <img src="//ykimg.alicdn.com/develop/image/2020-12-17/c9d83e11cb40c71503c2d6033bca270a.jpg" />
    </div>
    

    <div class="jingcai">
      <h3>精彩热播</h3>

      <ul class="zongyi">
        <li>
            <div></div>
            <p>冰火魔厨,女神降临</p>
            <p class="p-s">无吟唱顺发魔法,威压全开</p>
        </li>

         <li>
            <div class="div1"></div>
            <p>少年歌行,青城山下？</p>
            <p class="p-s">小仙女,我来见你了</p>
        </li>

         <li>
            <div class="div2"></div>
            <p>真武巅峰,梦中练剑</p>
            <p class="p-s">新旅途,又遇古人</p>
        </li>

         <li>
            <div class="div3"></div>
            <p>诸天纪,重生开挂</p>
            <p class="p-s">地火异动,主角开挂</p>
        </li>

         <li>
            <div class="div4"></div>
            <p>王牌加更😨暗箭难防</p>
            <p class="p-s">沈腾小岳岳沉浸式表演暗算</p>
        </li>

         <li>
            <div class="div5"></div>
            <p>追光哥哥🔥杀疯了</p>
            <p class="p-s">王炸！符龙飞檀健次合体齐舞</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
    name:"AnimeView"
}
</script>
<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;

}

.my-swipe .van-swipe-item img{
  width:375px;
  height:188px;
}

.img img{
  width:375px;
  height:64px;
  margin-top:15px;
}

.jingcai h3{
    margin-top:10px;
    margin-left:10px;
}
.zongyi li{
  width:49%;
  height:40%;
  margin-top:10px;
 
  
}
.zongyi li div{
  background:url("//liangcang-material.alicdn.com/prod/upload/e4e9ee43f83f4645adde88be0fac1bc5.gif?x-oss-process=image/resize,w_376/format,webp/interlace,1") no-repeat;
  background-size:100% 100%;
  width:185px;
  height:104px;
  margin-top:10px;
}

.zongyi li .div1{
  background:url("//liangcang-material.alicdn.com/prod/upload/e4bd44d1ae8343748398391654147bdd.jpg?x-oss-process=image/resize,w_376/format,webp/interlace,1") no-repeat;
  background-size:100% 100%;
  width:185px;
  height:104px;
  margin-top:10px;
}

.zongyi li .div2{
  background:url("//liangcang-material.alicdn.com/prod/upload/0b09fec2743c4ebf892d32a09f4cdad6.webp.png?x-oss-process=image/resize,w_376/format,webp/interlace,1") no-repeat;
  background-size:100% 100%;
  width:185px;
  height:104px;
  margin-top:10px;
}

.zongyi li .div3{
  background:url("//liangcang-material.alicdn.com/prod/upload/eb9337c569b04af3b5a1823dbe81c42b.webp.png?x-oss-process=image/resize,w_376/format,webp/interlace,1") no-repeat;
  background-size:100% 100%;
  width:185px;
  height:104px;
  margin-top:10px;
}

.zongyi li .div4{
  background:url("https://liangcang-material.alicdn.com/prod/upload/275c2167beb94babac10411384a60fd0.gif?x-oss-process=image/resize,w_376/format,webp/interlace,1") no-repeat;
  background-size:100% 100%;
  width:185px;
  height:104px;
  margin-top:10px;
}

.zongyi li .div5{
  background:url("//liangcang-material.alicdn.com/prod/upload/1afb5ede2e7f446e99a8f993168b41cc.jpg?x-oss-process=image/resize,w_376/format,webp/interlace,1") no-repeat;
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
.p-s{
    font-size: 12px;
    color: #ccc;
}
</style>
