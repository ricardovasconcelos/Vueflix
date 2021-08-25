<template>
  <div id="app">
    <NextReleases />
    <Movies :key="movie.id" :type="movie.type" v-for="movie in movies"/>
    <h4>Vueflix - Ricardo Vasconcelos</h4>
  </div>
</template>

<script>
import NextReleases from "../components/NextReleases";
import Movies from "../components/Movies";

export default {
  name: "App",
  components: {
    NextReleases,
    Movies,
  },
  computed: {
    movies() {
      return [
        {id: 1, type: "s=avengers", description: "Populares na Vueflix"},
        {id: 2, type: "s=harry", description: "Recomendados"},
        {id: 3, type: "s=fast", description: "Em alta"},
        {id: 4, type: "s=super", description: "Aventura"},
        {id: 5, type: "s=game", description: "Ficção"},
        {id: 6, type: "s=brain", description: "Para todas idades"},
        {id: 7, type: "s=all", description: "Família"}
      ]
    }
  }
};
</script>

<style>
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
