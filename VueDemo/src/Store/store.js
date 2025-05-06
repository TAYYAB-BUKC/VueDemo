import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        counter: 0
    },
    mutations: {
        incrementCounter(state, numberToIncrease) {
            state.counter += Number(numberToIncrease);
        },
        decrementCounter(state, numberToDecrease) {
            state.counter -= Number(numberToDecrease);
        }
    },
    actions: {
        incrementCounter({ commit }) {
            //axios('http://www.randomnumberapi.com/api/v1.0/random?min=1&max=10&count=1')
            axios('https://cors-anywhere.herokuapp.com/https://www.randomnumberapi.com/api/v1.0/random?min=1&max=10&count=1')
                .then(response => {
                    console.log(response);
                    commit('incrementCounter', response.data);
                });
        },
        decrementCounter({ commit }) {
            axios('https://cors-anywhere.herokuapp.com/https://www.randomnumberapi.com/api/v1.0/random?min=1&max=10&count=1')
                .then(response => {
                    console.log(response);
                    commit('decrementCounter', response.data);
                });
        }
    },
    getters: {

    },
    modules: {

    }
});