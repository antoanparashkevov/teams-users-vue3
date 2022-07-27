<template>
<h1>Teams List</h1>
  <teams-item></teams-item>
</template>

<script>
import TeamsItem from "@/components/teams/TeamsItem";
export default {
  name: "TeamsList",
  components:{
    TeamsItem
  },
  inject:['teams']
}
</script>

<style scoped>

</style>
