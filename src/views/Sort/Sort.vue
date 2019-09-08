<template>
    <section class="xzw-sort">
        <Header title="商品分类"></Header>
        <div class="xzw-sort-content">
            <div class="xzw-sort-left" ref="left">
                <ul>
                    <li v-for="(item, index) in left" :class="{choose: navIndex == index}" @click="selectItem(index)" :key="index">
                        <router-link :to=' "/sort/" + index '>
                             <span class="left-item">{{item}}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="xzw-sort-right">
                <div class="xzw-sort-right-content" ref="right">
                    <router-view :msg="msg"></router-view>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import BScroll from 'better-scroll';
    import './Sort.less'
    export default {
        data() {
            return{
                left: ['配饰', '女装', '美妆','彩妆', '洗护','运动','箱包','内衣','百货', '家电', '家居', '成人', '数码','护肤', '男装','萌宠','配饰','男鞋'],
                navIndex: 0,
                msg: []
            }
        },
        methods:{
            _initScroll() {
                this.lefts = new BScroll(this.$refs.left, {
                    click: true,
                })
                this.rights = new BScroll(this.$refs.right, {
                    click: true,
                })
            },
            selectItem(index) {
                this.navIndex = index;
                // console.log(this.$route)
            }
        },
        created() {
            let num = this.$route.path.slice(-1);
            this.navIndex = num;
            this.$http
                .get('/api/SortMsg' + num + '.json')
                .then(({data}) => {
                    this.msg = data.data;
                })
        },
        mounted() {
            this.$nextTick(() => {
                this._initScroll()            
            })
        },
        watch: {
            $route() {
                let num = this.$route.path.slice(-1)
                this.$http
                    .get('/api/SortMsg' + num + '.json')
                    .then(({data}) => {
                        this.msg = data.data;
                    })
            }
        }
    }
</script>