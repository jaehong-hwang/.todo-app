import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFolder, faInbox, faClock, faCheck, faArchive, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'

library.add(faFolder, faInbox, faClock, faCheck, faArchive, faGear)

createApp(App).component('fa-icon', FontAwesomeIcon).mount('#app')
