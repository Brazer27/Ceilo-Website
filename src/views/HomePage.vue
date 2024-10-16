<template>
    <div class="home-page">
      <h1>Welcome to CEILO Psychology Support</h1>
      <p>
        Your go-to platform for psychological support, peer chatting, and expert consultations. 
        Connect anonymously with others and take the first step towards a healthier mind.
      </p>
      
      <div class="button-container">
        <router-link to="/forum" class="action-button">Join the Forum</router-link>
        <router-link to="/stress-test" class="action-button">Take the Stress Level Test</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
  };
  </script>
  
  <style scoped>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 160px); /* Adjust for header and footer height */
    text-align: center;
    padding: 20px;
    background-color: #f4f1e0; /* Light beige */
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #5c422b; /* Dark brown */
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    color: #666;
    max-width: 600px;
  }
  
  .button-container {
    display: flex;
    gap: 20px; /* Space between buttons */
  }
  
  .action-button {
    padding: 15px 25px;
    font-size: 1.2rem;
    background-color: #5c422b; /* Dark brown */
    color: white;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }
  
  .action-button:hover {
    background-color: #333; /* Darker shade on hover */
  }
  </style>
  