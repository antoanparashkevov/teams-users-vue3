import {createApp} from 'vue'
import {createRouter, createWebHistory} from "vue-router";
import TeamsList from "@/components/teams/TeamsList";
import UsersList from "@/components/users/UsersList";
import TeamMembers from "@/components/teams/TeamMembers";
import NotFound from "@/components/NotFound";

import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/teams'},
        {path: '/teams', component: TeamsList},//our-domain.com/teams TeamsList
        {path: '/users', component: UsersList},//our-domain.com/users UsersList

        {path: '/teams/:teamsId', component: TeamMembers},//our-domain.com/teams/anything
        //using a dynamic route parameter for individual team

        {path: '/:notFound(.*)', component:NotFound}

    ],
    //overwrite the active class for router-link tag
    linkActiveClass: 'active'
})

const app = createApp(App)

//built-in method that allows to connect our Vue app to third party packages.
app.use(router)

app.mount('#app')
