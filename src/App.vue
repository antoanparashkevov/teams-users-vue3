<template>
  <the-navigation></the-navigation>
</template>

<script>
import TheNavigation from "@/components/nav/TheNavigation";

export default {
  name: 'App',
  components: {
    TheNavigation
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0
}

html {
  font-family: sans-serif;
}
</style>
