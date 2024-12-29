/* Basic Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background-color: #f4f4f4;
}

header {
  background: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

header h1 {
  font-size: 2.5rem;
}

/* Mobile menu toggle */
.menu-toggle {
  display: none; /* Hide the menu toggle by default */
  font-size: 2rem;
  color: white;
  cursor: pointer;
}

/* Navigation styles */
nav ul {
  list-style: none;
  margin-top: 20px;
}

nav ul li {
  display: inline;
  margin: 0 15px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
}

/* Section styles */
section {
  padding: 40px 20px;
  margin: 20px auto;
  width: 80%;
  max-width: 1200px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.gallery img {
  width: 30%;
  margin: 10px;
}

/* Mobile-specific styles for navigation */
@media (max-width: 768px) {
  nav ul {
    display: none; /* Hide the menu links by default on small screens */
    flex-direction: column; /* Stack the items vertically */
    text-align: center;
    margin-top: 10px;
  }

  nav ul.active {
    display: flex; /* Show the menu links when active */
  }

  .menu-toggle {
    display: block; /* Show the menu toggle on mobile */
  }

  nav ul li {
    margin: 10px 0; /* Add spacing between items on mobile */
  }
}

/* Footer styles */
footer {
  text-align: center;
  padding: 20px;
  background: #333;
  color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
}
