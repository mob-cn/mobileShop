<template>
    <div class="S-ecard">
        <div class="e-top"> 
            <div class="e-user">
                <img :src="data.uimg" alt="">
            </div>
            <span class="e-username">{{data.name}}</span>
            <span class="e-time">{{data.time}}</span>
        </div>
        <div class="e-text">
            <span>{{data.text}}</span>
        </div>
        <ul class="e-img">
                <li v-for="(img,index) in data.img" :key="index">
                    <img :src="img" alt="">
                </li>
        </ul>
    </div>
</template>
<style lang="less">
    .S-ecard{
        height:145px;
        width: 100%;
        background-color:#fff;
        border:1px solid #EAE9E5;
        border-radius:10px;
        box-shadow:1px 1px 10px #EAE9E5;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .e-top{
            margin-left:10px;
            position:relative;
            .e-user{
                width: 25px;
                height: 25px;
                border-radius:50%;
                overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .e-username{
                position:absolute;
                top:0px;
                left:38px;
            }
            .e-time{
                position:absolute;
                top:15px;
                left:38px;
                color:#EAE9E5;
            }
        }
        .e-text{
            margin-left:10px;
        }
        .e-img{
            display: flex;
            flex-direction: row;
             li {
                width: 50px;
                height: 50px;
                margin-left:10px;
                border-radius:6px;
                overflow: hidden;
                flex:none;
                img{
                    width: 100%;
                    height: 100%;
                }
           }
        }
    }
</style>
<script>
export default {
    props:["data"],
    data(){
        return{
            uimg:"/img/euser.jpg",
            msg:{}
        }
    },
    created(){

    }
}
</script>
