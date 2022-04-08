<template>
<div id="hello">
    <p>这是一个组件单元测试demo，测试用例在test/unit/spec里面</p>
    <h1>{{msg}}</h1>
</div>
</template>

<script>
    export default {
        name: 'hello-word',
        data() {
            return {
                msg: 'Hello Jest'
            };
        },
        methods: {
            sum(a, b) {
                return a + b;
            }
        }
    };
</script>

<style scoped>

</style>
