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
      activePage:'teams-list',
      teams: [
        { id: 't1', name: 'Frontend Engineers', members: ['u1', 'u2'] },
        { id: 't2', name: 'Backend Engineers', members: ['u1', 'u2', 'u3'] },
        { id: 't3', name: 'Client Consulting', members: ['u4', 'u5'] },
      ],
      users: [
        { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
        { id: 'u2', fullName: 'Svetoslav Ivanov', role: 'Engineer' },
        { id: 'u3', fullName: 'Nadezhda Dolashka', role: 'Engineer' },
        { id: 'u4', fullName: 'Alex Ionov', role: 'Consultant' },
        { id: 'u5', fullName: 'Marin Petrov', role: 'Consultant' },
      ],
    }
  },
  methods:{
    setActivePage(page){
      this.activePage = page;
    }
  },
  provide(){
    return {
      teams:this.teams,
      users:this.users
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
