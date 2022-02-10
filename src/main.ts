import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'

library.add(faFolder)

createApp(App).component('fa-icon', FontAwesomeIcon).mount('#app')
