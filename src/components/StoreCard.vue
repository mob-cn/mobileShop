<template>
    <div class="y-store-component">
       
        <img src="img/show3.jpg" alt="">
        <p class="title">OMINI宽松针织长袖毛衣</p>
        <div class="box">
            <p class="num">2</p>
            <p class="status">上新</p>
        </div>
       
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.y-store-component {
    width: 95%;
    margin: 0 auto;
    height: 80px;
    display: flex;
    margin: 10px;
    box-sizing: border-box;
    padding: 10px;
    align-items: center;
    font-size: 14px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, .2);
    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 10px;
    }
    .title {
        height: 100%;
        line-height: 60px;
        margin-right: 10px;
    }
    .box {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        text-align: center;
        flex: 1;
        height: 100%;
        font-size: 16px;
        font-weight: bold;
    }
}
</style>
