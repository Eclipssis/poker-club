import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";

import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

// Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCyEZyE854Upr-uU3UAlhQVXE4pr-zdCkA",
  authDomain: "poker-club-7cd8a.firebaseapp.com",
  projectId: "poker-club-7cd8a",
  storageBucket: "poker-club-7cd8a.firebasestorage.app",
  messagingSenderId: "856681032803",
  appId: "1:856681032803:web:60464427a40d93fab99c56",
  measurementId: "G-GW6YRDZWRK",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
console.log("firebaseApp", firebaseApp);
const analytics = getAnalytics(firebaseApp);
console.log("analytics", analytics);

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.use(router);
app.mount("#app");
