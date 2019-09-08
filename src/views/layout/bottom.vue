<template>
    <div class='l-bottom'>
        <router-link 
            v-for='(item, index) of links' 
            :key='item.id' 
            :class='["l-bottom-item", isActive===index ? "active" : ""]' 
            :to='item.link'
            @click.native="addActive(index)"
        >
            <i class="iconfont">{{getIconFont(item.icon)}}</i>
        </router-link>
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
        }
    },
}
</script>
<style lang='less' scoped>
    .l-bottom {
        height: 1.5rem;
        width: 100%;
        background: #eee;
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        .l-bottom-item {
            background-color: #fff;
            width: 20%;
            text-align: center;
            color: #ccc;
            cursor: pointer;
            i.iconfont {
                width: 100%;
                font-size: 30px;
                line-height: 50px;
            }
            &.active {
                color: #B9A490
            }
        }
    }
</style>

