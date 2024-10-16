<template>
    <header>
      <div class="logo">
        <img src="@/assets/logo.png" alt="Ceilo Logo" />
        <h1>CEILO</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Our Services</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">Sign In/Sign Up</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "HeaderComponent",
  };
  </script>
  
  <style scoped>
  /* Header Styles */
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    background-color: #d0b999; /* Light brown */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .logo {
    display: flex;
    align-items: center;
  }
  
  .logo img {
    width: 50px;
    height: 50px;
  }
  
  .logo h1 {
    margin-left: 10px;
    font-size: 1.5rem;
    color: #333;
  }
  
  nav ul {
    display: flex;
    list-style: none;
  }
  
  nav ul li {
    margin-left: 20px;
  }
  
  nav ul li a {
    font-size: 1rem;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  nav ul li a:hover {
    background-color: #5c422b;
    color: white;
  }
  </style>  