import {createWebHistory, createRouter} from "vue-router";
import Login from "@/views/login.vue";
import Register from "@/views/register.vue";
import Home from "@/views/home.vue";

const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
