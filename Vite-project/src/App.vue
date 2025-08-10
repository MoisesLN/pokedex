<script>
// import HelloWorld from './components/HelloWorld.vue'
  import Header from './components/Header.vue'
  import pokecontainer from './components/pokecontainer.vue'

  export default {
    components: {
      Header,
      pokecontainer
    },
    data() {
      return {
        search: '',
        type: 'all'
      }
    },
  }
</script>

<template>
  <Header
    :search="search"
    :type="type"
    @update:search="search = $event"
    @update:type="type = $event"></Header>
  <pokecontainer
    :search="search"
    :type="type"></pokecontainer>
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
