<template>
  <div id="app">
    <Header />
    <NextReleases />
    <Movies typeMovie="s=avengers" typeDescription="Populares na Vueflix" />
    <Movies typeMovie="s=harry" typeDescription="Recomendados" />
    <Movies typeMovie="s=fast" typeDescription="Em alta" />
    <Movies typeMovie="s=super" typeDescription="Aventura" />
    <Movies typeMovie="s=game" typeDescription="Ficção" />
    <Movies typeMovie="s=brain" typeDescription="Para todas idades" />
    <Movies typeMovie="s=all" typeDescription="Família" />
    <h4>Vueflix - Ricardo Vasconcelos</h4>
  </div>
</template>

<script>
import Header from "../components/Header";
import NextReleases from "../components/NextReleases";
import Movies from "../components/Movies";
export default {
  name: "App",
  components: {
    Header,
    NextReleases,
    Movies
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body {
  background-color: #141414;
  height: 100vh;
}
#app h4 {
  color: #e9e9e9;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 30px;
  padding-bottom: 30px;
}
@media only screen and (max-width: 599px) {
  #app h4 {
    font-size: 14px;
  }
}
</style>
