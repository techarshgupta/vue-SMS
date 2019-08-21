<template>
  <div>
    <comp-header />
    <router-view />
    <comp-footer />
  </div>
</template>

<script>
import CompHeader from './components/Header-footer/Header'
import CompFooter from './components/Header-footer/Footer'

export default {
  name: 'app',
  components: {
    CompHeader,
    CompFooter
  }
}
</script>

<style>
  @import "assets/style.css";
</style>