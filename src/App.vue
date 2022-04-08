<template>
    <div id="app">
        <Header></Header>
        <router-link :to="'demo'">Demo</router-link>
        <router-link :to="'router'">Router</router-link>
        <router-link :to="'vuex'">Vuex</router-link>
        <router-view></router-view>

    </div>
</template>

<script>
    import Header from './layout/header';
    import Demo from './views/demo/demo';
    import Router from './views/demo/router';
    import Vuex from './views/demo/store';

    export default {
        name: 'app',
        components: {
            Header,
            Demo,
            Router,
            Vuex
        }
    };
</script>

<style lang="stylus" scoped>
    #app{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        text-align:center;
    }
</style>
