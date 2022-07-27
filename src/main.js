import {createApp} from 'vue'
import {createRouter, createWebHistory} from "vue-router";
import TeamsList from "@/components/teams/TeamsList";
import UsersList from "@/components/users/UsersList";
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/teams', component: TeamsList},//our-domain.com/teams TeamsList
        {path: '/users', component: UsersList}//our-domain.com/users UsersList
    ]
})

const app = createApp(App)

//built-in method that allows to connect our Vue app to third party packages.
app.use(router)

app.mount('#app')
