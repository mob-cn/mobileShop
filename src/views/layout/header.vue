<template>
    <div class='l-header'>
        <div class='l-back' @click='goBack'>
            <i class="iconfont">&#xe63b;</i>
        </div>
        <div class='l-header-center'>
            <slot name="center"></slot>
        </div>
        <div class='l-header-right'>
            <slot name='right'></slot>
        </div>
    </div>
</template>
<script>
import { getIconFont } from '@/assets/js/getIconfont'
export default {
    data() {
        return {
            isActive: 0,
            links: [
                {id: 0, link: '/home', icon: '&#xe658;'},
                {id: 1, link: '/classify', icon: '&#xe657;'},
                {id: 2, link: '/message', icon: '&#xe612;'},
                {id: 3, link: '/shopCar', icon: '&#xe63a;'},
                {id: 4, link: '/mine', icon: '&#xe67b;'}
            ]
        }
    },
    methods: {
        getIconFont(a) {
            return getIconFont(a)
        },
        addActive(index) {
            this.isActive = index
        },
        goBack() {
            this.$router.go(-1)
        }
    },
}
</script>
<style lang='less' scoped>
    .l-header {
        height: 1rem;
        width: 100%;
        line-height: 50px;
        position: relative;
        background-color: #EAE9E5;
        text-align: center;
        .l-back {
            position: absolute;
            width: 1rem;
            left: 0;
            i.iconfont {
                font-size: 20px;
                color: #C1AB96;
            }
        }
        .l-header-center {
            width: 100%;
            text-align: center;
            font-size: 20px;
            color: #333;
            font-weight: bold;
        }
        .l-header-right {
            position: absolute;
            right: 20px;
            line-height: 50px;
            top: 0;
        }
    }
</style>