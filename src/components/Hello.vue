<template>
  <div id="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential</h2>
    <ul>
      <li><router-link to="/notes">Click Me and goto Notes</router-link></li>
      <br>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
