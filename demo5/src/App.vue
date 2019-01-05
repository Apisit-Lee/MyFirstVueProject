<template>
  <div id="app">
    <header id="header">
      <router-link to="/">HOME</router-link>
      <router-link to="/about">ABOUT</router-link>
      <router-link to="/ticket">TICKET</router-link>
      <router-link to="/cart">CART</router-link>
      <router-link to="/comments">COMMENTS</router-link>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#header{
  width: 100%;
  height: 50px;
  background: #333;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  line-height: 50px;
}
a{
  text-decoration: none;
  color: inherit;
}
a.router-link-exact-active{
  color: #42b983;
}
#header a{
  display: inline-block;
  height: 50px;
  padding: 0 15px;
  font-size: 14px;
}
#header a:hover::after{
  content: '';
  display: block;
  width: 100%;
  height: 3px;
  background: #42b983;
  margin-top: -3px;
}
</style>
