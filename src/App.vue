<template>
  <the-navigation @set-page="setActivePage"></the-navigation>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import TheNavigation from "@/components/nav/TheNavigation";

export default {
  name: 'App',
  components: {
    TheNavigation,
  },
  data() {
    return {
      teams: [
        {id: 't1', name: 'Frontend Engineers', members: ['u1', 'u2']},
        {id: 't2', name: 'Backend Engineers', members: ['u1', 'u2', 'u3']},
        {id: 't3', name: 'Client Consulting', members: ['u4', 'u5']},
      ],
      users: [
        {id: 'u1', fullName: 'Max Schwarz', role: 'Engineer'},
        {id: 'u2', fullName: 'Svetoslav Ivanov', role: 'Engineer'},
        {id: 'u3', fullName: 'Nadezhda Dolashka', role: 'Engineer'},
        {id: 'u4', fullName: 'Alex Ionov', role: 'Consultant'},
        {id: 'u5', fullName: 'Marin Petrov', role: 'Consultant'},
      ],
    }
  },
  //'provide()' for providing data and 'inject' for taking from outside.
  provide() {
    return {
      teams: this.teams,
      users: this.users
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
