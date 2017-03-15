<template>
  <div class="navbar navbar-toggleable-lg navbar-light bg-faded demo-nav">

    <button @click="toggleMenu" class="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Navbar</a>

    <div class="navbar-collapse collapse" :class="collapseClasses" id="navbarTogglerDemo02" aria-expanded="false">
      <ul class="navbar-nav mr-auto mt-2 mt-md-0">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>

    <div class="alert alert-info demo-nav__debug">
      <span>menuOpen state: <strong>{{ menuOpen }}</strong> | </span>
      <button @click="toggleMenu" type="button" class="btn btn-primary">Toggle menu here</button>
    </div>
  </div>

</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      collapseClasses() {
        return {
          show: this.menuOpen
        }
      },
      ...mapGetters([
        'menuOpen'
      ]),
    },
    methods: {
      ...mapActions([
        'toggleMenu'
      ])
    }
  }
</script>

<style lang="scss">
  .demo-nav {
    margin-top: 45px;
  }
  .demo-nav__debug {
    margin-top: 15px;
  }
</style>
