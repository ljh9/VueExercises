// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'


// createApp(App).use(router).mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ComponentA from './views/Exercise09/ComponentA.vue'
import ComponentB from './views/Exercise09/ComponentB.vue'
import ComponentC from './views/Exercise09/ComponentC.vue'

const app = createApp(App)
.component('ComponentA', ComponentA)
.component('ComponentB', ComponentB)
.component('ComponentC', ComponentC);
app.use(router);
app.mount('#app');