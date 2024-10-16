import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importing Vue Router if you're using it
import './assets/styles.css'; // Import global CSS styles

const app = createApp(App);

// Use router if you have set it up
app.use(router);

app.mount('#app');
