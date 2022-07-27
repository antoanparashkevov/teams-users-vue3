<template>
  <section>
    <h2>{{teamName}}</h2>
    <ul>
      <user-item
          v-for="member in members"
          :key="member.id"
          :name="member.fullName"
          :role="member.role"
      ></user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from "@/components/users/UserItem";

export default {
  name: "TeamsMember",
  components: {
    UserItem
  },
  inject: ['users', 'teams'],
  data() {
    return {
      teamName: '',
      members: []
    }
  },
  // this is one of the lifecycle hooks that will be called when the component is created.
  //not already shown on the screen, but once all data was available.
  created() {
    console.log(this.$route)//object of configurations for a specific route
    // this.$route.path // /teams/t1 for team1 ...
    // this.$route.params//object that holds all route parameters
    const teamId = this.$route.params.teamsId
    const selectedTeam = this.teams.find(obj => obj.id === teamId);//now this is an object with our Team
    const members = selectedTeam.members//array of members
    let selectedMembers = [];
    for (let member of members) {
      const currUser = this.users.find(obj => obj.id === member)
      selectedMembers.push(currUser)
    }
    this.teamName = selectedTeam.name
    this.members = selectedMembers
  }
}
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
