<template>
    <div>
        dd: {{useId}}
        <svg class="my-svg">
            <circle class="my-circle" cx="200" cy="100" r="30">

            </circle>
            <line x1="0" y1="10" x2="200" y2="100" style="stroke:rgb(0,0,0);stroke-width:5" />
        </svg>
    </div>
</template>

<script>
import createStore from './store';
import Vuex,{ mapState } from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

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
    .my-svg {

    }

    .my-circle {
        fill: red;
        stroke: red;
        stroke-width: 3pt;
    }
</style>
