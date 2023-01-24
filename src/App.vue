<template>
  <div id="app">
    <nav class="encabezado">
`      <h2>Naguikki-ya</h2>
`      <router-link to="/">Home</router-link>
    </nav>
    <div class="container">
      <router-view/>
    </div>
    <div class="footer">
      <footer v-show="conFooter" class="encabezado">
      <p>Copyright Naguikki-ya 2022</p>
    </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
data() {
  return {
    conFooter: true,
  }
},
}
</script>

<style>
#app {
  font-family: "Courier New", Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.encabezado {
  font-family: "Courier New", Courier, monospace;
  background-color: #C7D3BF;
  padding: 10px;
}

</style>