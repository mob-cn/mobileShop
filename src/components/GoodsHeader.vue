<template>
    <div class="S-header">
        <ul >
            <li v-for="(item,index) in data" 
            :key="index" :class="addChoose === index ? 'choose': '' " 
            @touchend="goChoose(index)">{{item}}</li>   
        </ul>    
    </div>
</template>
<style lang="less">
    .S-header{
        height: 75px;
        width: 100%;
        background-color:#EAE9E5;
        position:fixed;
        top:0px;
        display: flex;
        align-items:flex-end;
        justify-content:center;
        ul{
            display: flex;
            justify-content:center;
            width: 250px;
            height: 40px;
            li{
                display: flex;
                justify-content:center;
                font-size:16px;
            }
            .choose{
                border-bottom:2px solid #C1AB96;
                color:#C1AB96;
            }

        }
    }
</style>
<script>
export default {
    props:['scroll'],
    data(){
        return{
            data:["商品","评价","详情","推荐"],
            addChoose:0
            // isChoose:[true,false,false,false]
        }
    },
    watch:{
        //根据
        scroll(value){
            switch(true)
            {   
                case value<800:
                    this.addChoose = 0;
                    break;
                case value>=800 && value<1000:
                    this.addChoose = 1;
                    break;
                case value>=1000 && value<4000:
                    this.addChoose = 2;
                    break;
                case value>=4000:
                    this.addChoose = 3;
                    break;
            }
        }
    },
    methods:{
        //点击导航栏改变跳转位置
       goChoose(index){
           switch(index)
           {
                case 0:
                    //兼容性判断
                    if (document.body && document.body.scrollTop) {
                        document.body.scrollTop=0;   
                    }
                    if (document.documentElement){
                        document.documentElement.scrollTop=0;
                    }
                   
                   break;
                case 1:
                   if (document.body && document.body.scrollTop) {
                        document.body.scrollTop=800;   
                    }
                    if (document.documentElement){
                        document.documentElement.scrollTop=800;
                    }
                   break;  
                case 2:
                   if (document.body && document.body.scrollTop) {
                        document.body.scrollTop=1000;   
                    }
                    if (document.documentElement){
                        document.documentElement.scrollTop=1000;
                    }
                   break;
                case 3:
                   if (document.body && document.body.scrollTop) {
                        document.body.scrollTop=4000;   
                    }
                    if (document.documentElement){
                        document.documentElement.scrollTop=4000;
                    }
                   break;  
           }         
           this.addChoose = index;
           console.log(index);
       } 
    },
    created(){
        
    }
}   
</script>
