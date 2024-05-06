import "./assets/main.css"

import {createApp} from "vue"
import App from "./App.vue"
import router from "./router"
import "./assets/main.css"
import PrimeVue from "primevue/config"
import Lara from "../src/presets/lara"

import ToastService from "primevue/toastservice"
import Button from "primevue/button"
import Toast from "primevue/toast"

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
  unstyled: true,
  pt: Lara,
})
app.use(ToastService)
app.component("Button", Button)
app.component("Toast", Toast)

app.mount("#app")
