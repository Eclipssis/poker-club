import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";

import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

// Prime-Vue components registration
import "primeicons/primeicons.css";
import Button from "primevue/button";

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.component("Button", Button);
app.use(router);
app.mount("#app");
