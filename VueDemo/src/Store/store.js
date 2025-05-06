import { createStore } from 'vuex'

export default createStore({
    state: {
        counter: 0
    },
    mutations: {
        incrementCounter(state) {
            state.counter++;
        },
        decrementCounter(state) {
            state.counter--;
        }
    },
    actions: {

    },
    getters: {

    },
    modules: {

    }
});