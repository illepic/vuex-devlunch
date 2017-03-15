<template>
  <div class="counter">
    <p>Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}, total is {{ $store.state.total }}.</p>

    <div class="btn-group" role="group" aria-label="Counter buttons">
      <button @click="increment" type="button" class="btn btn-primary">+</button>
      <button @click="decrement" type="button" class="btn btn-primary">-</button>
      <button @click="incrementIfOdd" type="button" class="btn btn-primary">Increment if odd</button>
      <button @click="incrementAsync" type="button" class="btn btn-primary">Increment async</button>
      <button @click="resetToZero" type="button" class="btn btn-primary">Wipe</button>
    </div>

    <div class="input-group counter__input">
      <span class="input-group-btn">
        <button @click="counterFormSubmit" class="btn btn-primary" type="button">Manual add</button>
      </span>
      <input v-model="localNum" type="text" class="form-control" placeholder="Add a number...">
    </div>

  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {
        localNum: 0
      }
    },
    computed: mapGetters([
      'evenOrOdd'
    ]),
    methods: {
      counterFormSubmit() {
        this.$store.dispatch('incrementManual', this.localNum)
        this.localNum = 0
      },
      ...mapActions([
       'increment',
       'decrement',
       'incrementIfOdd',
       'incrementAsync',
//       'incrementManual', // If we don't include here, why does it work above? (hint: see template)
       'resetToZero'
     ])

    }
  }
</script>

<style lang="scss">
  .counter {
    margin-top: 60px;
    text-align: center;
  }
  .counter__input {
    margin-top: 15px;
  }

</style>
