<script>
// import HelloWorld from './components/HelloWorld.vue'
  import Header from './components/Header.vue'
  import pokecontainer from './components/pokecontainer.vue'

  export default {
    components: {
      Header,
      pokecontainer
    }
  }
</script>

<template>
  <Header></Header>
  <pokecontainer></pokecontainer>
  <!-- <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
</template>

<style>

</style>
