<template>
  <the-navigation @set-page="setActivePage"></the-navigation>
  <main>
  <component :is="activePage"></component>
  </main>
</template>

<script>
import TeamsList from "@/components/teams/TeamsList";
import UsersList from "@/components/users/UsersList";
import TheNavigation from "@/components/nav/TheNavigation";

export default {
  name: 'App',
  components: {
    TheNavigation,
    TeamsList,
    UsersList
  },
  data(){
    return {
      activePage:'teams-list'
    }
  },
  methods:{
    setActivePage(page){
      this.activePage = page;
    }
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
