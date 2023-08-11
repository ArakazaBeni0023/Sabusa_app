<template>
  <nav>
    <router-link to="/">Produits</router-link>
    <router-link to="/ventes">Ventes</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #869bb1;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #08121d;
}

nav {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #2c3e50;
  gap: 2rem;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
  border-bottom: 2px solid #42b98300;
  transition: all .5s ease;
}

nav a.router-link-exact-active {
  color: #42b983;
  border-bottom: 2px solid #42b983;
}
</style>
