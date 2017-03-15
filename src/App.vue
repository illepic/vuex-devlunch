<template>
  <div class="app">
    <counter></counter>
    <navbar></navbar>
  </div>
</template>

<script>
  import counter from './components/Counter.vue'
  import navbar from './components/NavBar.vue'

  export default {
    components: {
      counter,
      navbar,
    }
  }
</script>
