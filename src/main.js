import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";

import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

// Prime-Vue components registration
import "primeicons/primeicons.css";
import Button from "primevue/button";

const pinia = createPinia();

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.component("Button", Button);
app.use(router);
app.use(pinia);
app.mount("#app");

export default app;
