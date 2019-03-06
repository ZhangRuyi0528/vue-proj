<template>
    <div id="app">
        <img src="./assets/logo.png">
        <div class="wrap-page-btn">
            <el-button
                :type="bg[parseInt(Math.random()*5)]"
                :span="8"
                v-for="page in pages"
                :key="page.path"
                @click="jump(page)"
            >{{page.name}}</el-button>
        </div>
        <hr>
        <router-view/>
    </div>
</template>

<script>
import ElementUI from "element-ui";
import Vue from "vue";
import "element-ui/lib/theme-chalk/index.css";
import { pages } from "@/page";
Vue.use(ElementUI);

export default {
    name: "App",
    data() {
        return {
            bg: ["primary", "success", "info", "warning", "danger"]
        };
    },

    computed: {
        pages() {
            return pages;
        }
    },

    methods: {
        jump(page) {
            window.location.href = 'http://localhost:8080/#' + page.path;
        }
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.wrap-page-btn {
    display: flex;
    flex-direction: row;

    .wrap-page-btn {
        width: auto;
    }
}
</style>
