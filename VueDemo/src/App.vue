<script setup lang="ts">
//import HelloWorld from './components/HelloWorld.vue'
//import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
    <main class="main">
        <!--<RouterView  />-->
        <a href="/">Default</a> |
        <a href="/hello">Hello</a> |
        <a href="/about">About</a> |
        <a href="/refs">Refs</a> |
        <a href="/non-existent-path">Broken Link</a>
        <router-view></router-view>
    </main>
</template>

<style scoped>
header {
  line-height: 0.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.main {
    margin: 200px;
    margin-left: 250px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
