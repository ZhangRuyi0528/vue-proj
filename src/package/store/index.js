export default (Vuex) => {
    const store = new Vuex.Store({
        state: {
            trueOrFalse: false,
            bgNum: parseInt(Math.random() * 5, 10)
        },

        mutations: {

        },

        actions: {

        },


    });

    return store;
}
