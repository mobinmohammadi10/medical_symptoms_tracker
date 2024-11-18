import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import Doctor from "../components/Doctor.vue";
import Patient from "../components/Patient.vue";


export default createRouter({
    history: createWebHistory("/"),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/doctor",
            name: "doctor",
            component: Doctor,
        },
        {
            path: "/patient",
            name: "patient",
            component: Patient,
        }
    ]}
);