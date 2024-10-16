import { createRouter, createWebHistory } from 'vue-router'; // Import the required functions

import HomePage from '../views/HomePage.vue'; // Ensure these paths match your views
import ServicesPage from '../views/ServicesPage.vue'; 
import ContactPage from '../views/ContactPage.vue'; 
import ForumPage from '../views/ForumPage.vue'; 
import SignIn from '../views/SignIn.vue'; 
import SignUp from '../views/SignUp.vue'; 
import StressTest from '../views/StressTest.vue'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesPage,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
  },
  {
    path: '/forum',
    name: 'Forum',
    component: ForumPage,
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/stress-test',
    name: 'StressTest',
    component: StressTest,
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

