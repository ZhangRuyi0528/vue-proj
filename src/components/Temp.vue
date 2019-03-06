<template>
    <div>temp
        <component :is="base" :use-id="a"></component>
    </div>
</template>

<script>
import Bannner from "./Footer.vue";

export default {
    name: "temp",

    data() {
        return {
            a: "111"
        };
    },

    components: {
        Bannner
    },

    computed: {
        AA() {
            return this.a + 1234567;
        },

        base() {
            return "Bannner";
        }
    }
};
</script>

<style>
</style>
