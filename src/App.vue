<template>
    <nav-bar/>
    <profile/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Profile from "/@components/Profile.vue";
export default {
  name: 'App',
  components: {
      Profile,
      NavBar,
  }
}

</script>