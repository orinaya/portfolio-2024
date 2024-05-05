import "./assets/main.css"

import {createApp} from "vue"
import App from "./App.vue"
import router from "./router"
import "./assets/main.css"
import PrimeVue from "primevue/config"
import Lara from "../src/presets/lara"

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
  unstyled: true,
  pt: Lara,
})
app.mount("#app")
