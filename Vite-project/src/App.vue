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
</template>

<style>

</style>
