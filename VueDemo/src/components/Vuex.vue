<template>
    <div class="counter" :style="{color: colorCode}">
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
    <div>
        <!-- wrong way only mutations can update the state-->
        <!--<input type="text" name="colorCode" v-model="$store.state.colorCode" />-->
        <input type="text" name="colorCode" v-model="colorCode" />

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

<script>
    export default {
        computed: {
            colorCode: {
                get(){
                    return this.$store.state.colorCode
                },
                set(newColorCode){
                    console.log('newColorCode: ' + newColorCode);
                    this.$store.dispatch('SetColorCode', newColorCode);
                }
            }
        }
    }
</script>
