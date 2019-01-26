<template>
    <div>
        dd: {{useId}}
    </div>
</template>

<script>
import createStore from './store';
import Vuex,{ mapState } from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

import Bannner from '@/Base/banner';

export default {
    name: 'temp',

    data () {
        return {
        }
    },

    props: {
        useId: {
            type: String,
            default: ''
        }
    },

    components: {

    },

    computed: {
        ...mapState(['trueOrFalse']),
       
    },
    
    store: createStore(Vuex),

    created() {
        console.log(this.$store.state.trueOrFalse)
    }
}
</script>

<style>

</style>
