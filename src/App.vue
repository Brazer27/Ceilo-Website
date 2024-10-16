<template>
  <div id="app">
    <!-- Header -->
    <HeaderComponent />

    <!-- Main Content (Hero Section) -->
    <main class="hero">
      <h2>CEILO Psychology Support</h2>
      <p>
        Chatting and consultation website where you can confide to people anonymously.
      </p>
      <button class="chat-button">Start Chatting Now!</button>
    </main>

    <!-- Footer -->
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f1e0; /* Light beige */
  color: #333;
}

/* Hero Section (Main Content) */
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 100px 20px;
  background-color: #fff;
  min-height: calc(100vh - 160px); /* Adjust for header and footer height */
}

.hero h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #666;
  max-width: 600px;
}

.hero .chat-button {
  padding: 15px 30px;
  font-size: 1.2rem;
  background-color: #5c422b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.hero .chat-button:hover {
  background-color: #333;
}

/* Footer Styles */
footer {
  text-align: center;
  padding: 20px;
  background-color: #d0b999;
  color: white;
  margin-top: 50px;
}

footer p {
  font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero {
    padding: 50px 20px;
  }

  .hero h2 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1rem;
  }

  .hero .chat-button {
    padding: 10px 20px;
    font-size: 1rem;
  }
}
</style>
