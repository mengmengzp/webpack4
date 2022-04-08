<template>
    <div class="demo">
        <p>demo页面测试</p>
    </div>
</template>

<script>
    import {API} from './api';

    export default {
        name: 'demo',
        created() {
            this.fetch();
        },
        methods: {
            async fetch() {
                try {
                    const res = await this.post(API.getList, {password: 888});
                    console.log(res);
                } catch (e) {
                    console.log('异常处理');
                }
            }
        }
    };
</script>

<style lang="stylus" scoped>
    .demo {
        width: 100%;
        height 400px;
        text-align: center;
    }
</style>
