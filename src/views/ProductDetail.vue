<template>
  <div class="S-goods">
      <Swipe :autoplay="5000" indicator-color="#fff" :duration="2000">
        <SwipeItem v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </SwipeItem>
      </Swipe>`
      <div class="back" @touchend="goback">
        <Icon name="arrow-left" size="25px" color="rgba(255,255,255,.5)"/>
      </div>
      <div class="back2" @touchend="goback" v-show="show">
        <Icon name="arrow-left" size="25px" color="#C1AB96"/>
      </div>
      <div class="top-detail">
        <ul>
          <li><i class="yuan">¥ {{data.yuan}}</i><span>品牌直采</span></li>
          <li><div class="shui">税</div><i class="shui2">{{data.shui}}</i></li> 
          <li><i class="text1">{{data.title}}</i></li>
          <li><i class="text2">·跨境商品·品牌授权·品牌直采</i></li>
        </ul>
      </div>
      <div class="mid-detail">
        <ul>
          <li>运费<i>{{data.yunfei}}</i></li>
          <li>说明<i>{{data.explain}}</i></li>
          <li>参数选择<i class="choose">淡金色  【10cm】</i></li>
        </ul>
      </div>
      <div class="btm-detail">
        <ul>
          <li>品牌信息<i></i></li>
          <li>品牌名<i>{{data.name}}</i></li>
          <li>原产地<i>{{data.from}}</i></li>
          <li>风格<i class="lasti">{{data.style}}</i></li>
        </ul>
      </div>
      <div class="evaluation">
        <div class="eheader">用户评价<router-link to="/evaluate" class="more">查看所有</router-link></div> 
        <eCard :data="msg"></eCard>
      </div>
      <div class="goods-detail">
        <div class="gheader">商品详情</div>
          <div v-for="(image, index) in lenimg" :key="index">
            <img v-bind:src="image" alt="">
            <!-- <img v-lazy="image" /> 可以这么写-->
          </div>
        
      </div>
      <div class="referee">

      </div>
    <GoodsHeader v-show="show" :scroll="gun"></GoodsHeader>
    <GoodsBar></GoodsBar>  
  </div>
</template>
<style lang="less" scoped>
  body{
    background-color:#EAE9E5;
    color:#333333;
  }
  
  .S-goods{
    position:relative;
    .van-swipe{
    height: 100%;
    .van-swipe__indicators{
      background-color: transparent;
      bottom: 20px;
      .van-swipe__indicator{
        width: 10px;
        height: 10px;
      }
    }
  }
    img{
    width: 100%;
    height:100%;
    }
    li{
      display: flex;
      flex:1;
      align-items: center;
    }
    .top-detail {
      background-color: #fff;
      padding-left:10px;
      ul{
      height:160px;
      display: flex;
      flex-direction:column;
      li{
        flex:1;
        .yuan{
          font-size:26px;
          font-weight:bold;
        }
        span{
          height:20px;
          border:1px solid#C1AB96;
          border-radius:5px;
          width: 80px;
          color:#C1AB96;
          display: flex;
          justify-content: center;
          align-items:center;
          margin-left:18px;
        }
        .shui{
          width: 18px;
          height:18px;
          display: flex;
          justify-content: center;
          align-items:center;
          background-color: #C1AB96;
          color:#fff;
          font-weight:bold;
        }
        .shui2{
          color:#C1AB96;
          font-weight:bold;
          margin-left: 5px;
        }
        .text1{
          font-weight:bold;
        }
        .text2{
          color:#C1AB96;
        }
      }
    }
    }
    .mid-detail{
      background-color: #fff;
      padding-left:10px;
      margin-top:10px;
      font-weight:bold;
      ul{
         height:100px;
         display: flex;
         flex-direction:column;
         li{
           i{
             margin-left:70px;
           }
           .choose{
              color:#C1AB96;
              margin-left:42px;
           }
         }
      }
    }
    .btm-detail{
      background-color: #fff;
      padding-left:10px;
      margin-top:10px;
      font-weight:bold;
      ul{
          height:150px;
          display: flex;
          flex-direction:column;
        li{
           i{
             margin-left:70px;
           }
           .lasti{
             margin-left:85px;
           }
         }
      }
    }
    .evaluation{
      background-color: #fff;
      padding:10px 10px 10px 10px;
      margin-top:10px;
      font-weight:bold;
      height:180px;
    
      .eheader{
        font-size:18px;
        display: flex;
        align-items:center;
        justify-content:space-between;
        margin-bottom: 10px;
        .more{
          color:#C1AB96;
          font-size:15px;
        }
      }
      .S-ecard{
        font-weight: none;
      }

    }
    .goods-detail{
      background-color: #fff;
      padding:10px 10px 10px 10px;
      margin-top:10px;
      font-weight:bold;
  
    }
    .back{
      position:absolute;
      top:1rem;
      left:0.5rem; 
    }
    .back2{
      position:fixed;
      top:43px;
      left:20px; 
      z-index:5;
    }
    .referee{
      margin-top:10px;
      height:1000px;
      background-color: #C1AB96;
    }
}
  

</style>

<script>

import { Swipe, SwipeItem } from 'vant';
import GoodsBar from '../components/GoodsBar';
import GoodsHeader from '../components/GoodsHeader';
import eCard from '../components/EvaluateCard';
import { Icon } from 'vant';
export default {
  name: 'goods',
  components :{
    GoodsBar,
    GoodsHeader,
    eCard,
    Swipe,
    SwipeItem,
    Icon
  },
  mounted(){
    document.addEventListener('scroll',this.Scroll);
    
  },
  data() {
    return{
      images:[],
      lenimg:[],
      show:false,
      data:[],
      msg:[],
      gun:0
    }
  },
  methods:{
    goback(){
      this.$router.back();
    },
    Scroll(){
      //获取scrooly
      this.scroll = window.scrollY;
      this.gun = this.scroll;
      this.scroll > 100 ? this.$data.show = true : this.$data.show = false;
    },
    //获取数据
    getData(){
      this.$http
        .get('/data/goodsDetail.json')
        .then(({data}) =>{
            this.data = data.goods[0];
            this.images = data.goods[0].images;
            this.lenimg = data.goods[0].lenimg;
            this.msg = data.evaluate[0];
            //向store中存入评论数据
            this.$store.commit('evaluate',data.evaluate);
        })
    },

  },
  created(){
    this.getData();
   
  }
}
</script>
