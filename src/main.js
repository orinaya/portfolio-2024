import "./assets/main.css"

import {createApp} from "vue"
import App from "./App.vue"
import router from "./router"
import "./assets/main.css"

import ToastService from "primevue/toastservice"
import Button from "primevue/button"
import Toast from "primevue/toast"

const app = createApp(App)

app.use(router)
app.mount("#app")
