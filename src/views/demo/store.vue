<template>
    <div class="vuex">
        <p>vuex demo 演示,store用法演示，例如获取store的值{{counter}}</p>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';
    export default {
        name: 'store',
        created() {
            this.changeData();
        },
        computed: {
            /** mapState/mapGetter
             * // 同名写法
            * ...mapState(['count'])
            * // 不同名映射写法
            * ...mapState({
            *   counter: 'count'
            * })
            */
            ...mapState({
                counter: 'count'
            }),
            ...mapGetters(['count'])
        },
        methods: {
            /* action和Mutations写在method里面 */
            ...mapActions(['updateCountAsync']),
            ...mapMutations(['updateCount']),
            changeData() {
                // 声明mapMutations后可直接通过this调用该方法
                this.updateCount(23);
                this.updateCountAsync({num: 12});
            }
        }
    };
</script>

<style lang="stylus" scoped>
    .vuex {
        width: 100%;
        text-align: center;
        height 400px;
    }
</style>
