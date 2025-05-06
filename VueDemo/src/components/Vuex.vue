<template>
    <div class="counter">
        {{$store.state.counter}}
    </div>
    <div class="counterSquared">
        {{$store.state.counter}} *
        <sup>2</sup> =
        {{$store.getters.counterSquared}}
    </div>
    <div class="buttons">
        <button @click="$store.dispatch('decrementCounter')">-</button>
        <button @click="$store.dispatch('incrementCounter')">+</button>
    </div>
</template>

<style>
    div {
        margin-bottom: 10px;
    }

    .counter {
        font-size: 80px;
    }

    .buttons button {
        font-size: 20px;
        width: 100px;
        margin: 0 10px;
    }
</style>
