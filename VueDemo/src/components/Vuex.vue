<template>
    <div class="counter">
        {{counter}}
    </div>
    <div class="buttons">
        <button @click="decrementCounter">-</button>
        <button @click="incrementCounter">+</button>
    </div>
</template>

<style>
    div {
        margin-bottom: 10px;
    }

    .counter {
        font-size: 80px;
    }

    .buttons {
        font-size: 20px;
        width: 100px;
        margin: 0 10px;
    }
</style>

<script>
    export default {
        data() {
            return {
                counter: 0
            };
        },
        methods: {
            incrementCounter() {
                this.counter++;
            },
            decrementCounter() {
                this.counter--;
            }
        }
    };
</script>
