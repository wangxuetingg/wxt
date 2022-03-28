<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <button class="btn">{{btn}}</button>
    <div class="main">
        <h3>{{title}}</h3>
        <ul>
            <li v-for="(item,index) in arr" :key="index">
                <img :src="item.img" alt="">
                <div>
                    <p>{{item.title}}</p>
                    <p>{{item.text}}</p>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from "axios"
import { Lazyload } from 'vant';

Vue.use(Lazyload);

export default {
  name:"TvView",
  data() {
    return {
      arr:null,
      images: [
        '//liangcang-material.alicdn.com/prod/upload/93058459f0f8413bb67a1600bea451f2.jpg?x-oss-process=image/resize,w_750/format,webp/interlace,1',
        '//liangcang-material.alicdn.com/prod/upload/80eb9691963b4cd48d02f584e85994c5.jpg?x-oss-process=image/resize,w_750/format,webp/interlace,1',
        "//liangcang-material.alicdn.com/prod/upload/272a8b996fb4457aa50c4aa036272a7e.jpg?x-oss-process=image/resize,w_750/format,webp/interlace,1",
        '//liangcang-material.alicdn.com/prod/upload/e70df8c2c04d49c38be7c3344f8ad82c.jpg?x-oss-process=image/resize,w_750/format,webp/interlace,1',
        "//liangcang-material.alicdn.com/prod/upload/87ccacc30488448396995a17e88472af.jpg?x-oss-process=image/resize,w_750/format,webp/interlace,1"
      ],
      btn:"打开优酷APP,流畅到起飞",
      title:"今日推荐"
    };
  },
  created(){
      this.getData()
  },
  methods:{
      async getData(){
          let {data} = await axios.get("/api/Movie")
          this.arr=data
      }
  }
};
</script>
<style scoped>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    text-align: center;
    background-color: #39a9ed;
  }
  .van-swipe-item img{
      height: 188px;
  }
  .btn{
      background: #39a9ed;
      color:white;
      border:none;
      height: 44px;
      width:360px;
      display: block;  
      margin:20px auto;
      border-radius:5px;
      font-size: 14px;
  }
  h3{
      margin:30px 0 10px 10px;
  }
  .main{
      margin-bottom:80px;
  }
  .main ul{
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
  }
  .main ul li{
      width:120px;
  }
  .main ul li img{
      width: 100%;
  }
  .main ul li div{
      box-sizing: border-box;
      padding: 10px 5px 15px;
  }
  div p:nth-child(1){
      font-size: 15px;
  }
  div p:nth-child(2){
      font-size: 13px;
      color:#999;
  }

</style>