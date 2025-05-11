import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import TheHeader from '@/components/TheHeader.vue'
import '../../../theme.css'

// App -> AppNews -> AppNewsList

const app = createApp(App)

app.component('the-header', TheHeader)
app.component('async-component', defineAsyncComponent(
  () => import('@/components/AppAsyncComponent.vue'))
)

app.mount('#app')
