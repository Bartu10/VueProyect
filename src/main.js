import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router/router.js'
import store from './store'
//import axios from 'axios'
loadFonts()

createApp(App).use(router)/*.use(axios)/*/.use(vuetify).use(store).mount('#app')
