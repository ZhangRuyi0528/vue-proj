<template>
    <div>dd: {{useId}}</div>
</template>

<script>
import createStore from "../package/store";
import Vuex, { mapState } from "vuex";
import Vue from "vue";
Vue.use(Vuex);

export default {
    name: "temp",

    data() {
        return {};
    },

    props: {
        useId: {
            type: String,
            default: ""
        }
    },

    components: {},

    computed: {
        ...mapState(["trueOrFalse"])
    },

    store: createStore(Vuex),

    created() {
        console.log(this.$store.state.trueOrFalse);
    }
};
</script>

<style>
</style>
