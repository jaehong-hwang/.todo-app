import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFolder, faClock } from '@fortawesome/free-regular-svg-icons'
import { faInbox, faCheck, faArchive, faGear, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'

library.add(faFolder, faInbox, faClock, faCheck, faArchive, faGear, faAngleDoubleLeft, faAngleDoubleRight)

createApp(App).component('fa-icon', FontAwesomeIcon).mount('#app')
