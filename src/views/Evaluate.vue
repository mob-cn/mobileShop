<template>
    <div class="S-evaluate">
        <div class="top">
            <div class="header">
                <div @touchend="goback">
                    <Icon name="arrow-left" size="25px" color="#C1AB96" />
                </div>
                <span>评价</span>
                <Icon name="cart-o" size="25px" color="#C1AB96"/>
            </div>
        </div>
        <div class="choose">
            <span>全部</span>
            <span>最新</span>
            <span>好评(233)</span>
            <span>中评(0)</span>
            <span>差评(0)</span>
            <span>有图(12)</span>
        </div>
        <div class="bank">

        </div>
        <div class="inner" v-for="(item,index) in data" :key="index" >
            <Card :data="item"></Card> 
        </div>
    </div>
</template>
<style lang="less">
    .S-evaluate{
        height: 100%;
        .top{
            height: 65px;
            width: 100%;
            background-color:#EAE9E5;
            position:fixed;
            top:0px;
            display: flex;
            align-items:flex-end;
            z-index: 5;
            .header{
                width: 100%;
                padding:0px 10px 10px 10px;
                display: flex;
                justify-content:space-between;
                align-items:center;
                font-size:18px;
            }
        }
        .choose{
            position:fixed;
            padding:10px;
            top:65px;
            height:60px;
            width: 100%;
            background-color:#fff;
            display: flex;
            flex-direction:row;
            flex-wrap:wrap;
            z-index: 5;
            span{
                border:1px solid #EAE9E5;
                border-radius:20px;
                // width:80px;
                // height:25px;
                padding:5px 10px;
                display: flex;
                justify-content:center;
                align-items: center;
                font-size:14px;
                margin-right:10px;
                margin-bottom:10px;
                
            }
        }
        .bank{
            height:145px;
        }
        .inner{
            padding:10px;
            background-color: #fff;
        }
    }
</style>
<script>
import { Icon } from 'vant';
import Card from '../components/EvaluateCard'
export default {
    data(){
        return{
            data:[]
        }
    },
    components: {
        Icon,
        Card
    },
    methods:{
        goback(){
            this.$router.back();
        }
    },
    created(){
 
        this.data = this.$store.state.evaluate;
        //    console.log(this.data[1]);
    }
}
</script>
