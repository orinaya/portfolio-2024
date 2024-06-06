import "./assets/main.css"

import {createApp} from "vue"
import App from "./App.vue"
import router from "./router"
import "./assets/main.css"
import VueEasyLightbox from "vue-easy-lightbox"

const app = createApp(App)

app.use(VueEasyLightbox)
app.use(router)
app.mount("#app")
