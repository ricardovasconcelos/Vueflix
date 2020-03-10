<template>
  <div>
    <Header />
    <div id="myListContainer">
      <div id="myListContent">
        <div v-bind:key="movie.imdbID" v-for="movie in this.$store.state.list" id="moviesSaved">
          <div id="changeColorImage" v-if="movies.includes(movie.imdbID)">
            <img :src="movie.Poster" id="movieSaveImage" />
          </div>
          <div id="normalColorImage" v-else>
            <img :src="movie.Poster" id="movieSaveImage" />
          </div>

          <div id="buttonsMyList">
            <button
              id="checkedButton"
              title="Já assistido"
              v-if="movies.includes(movie.imdbID)"
              @click="$store.commit('removeWatched', movie), updateValues()"
            >
              <v-icon name="check" scale="1.2" color="#010" />
            </button>
            <button
              id="checkAsWatched"
              v-on:click="markAsWatched(movie), checkIfWatched()"
              @click="markAsWatchedToast"
              title="Marcar como assistido"
              v-else
            >
              <v-icon name="check" scale="1.2" color="#00e500" />
            </button>
            <button
              id="markToRemove"
              title="Remover da minha lista"
              v-on:click="$store.commit('removeData', movie), removeToast()"
            >
              <v-icon name="trash" scale="1.2" color="#e50931" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "vue-awesome/components/Icon";
import Header from "../components/Header";
export default {
  name: "MyList",
  data() {
    return {
      booleanMovie: true,
      movies: []
    };
  },
  components: {
    Header,
    "v-icon": Icon
  },
  mounted() {
    this.checkIfWatched();
  },
  methods: {
    markAsWatched(movie) {
      this.$store.commit("markAsWatched", movie);
    },
    removeToast() {
      this.$toast.open({
        message: "Removido de minha lista",
        type: "error",
        duration: 3000,
        dismissible: true,
        queue: true,
        position: "top-right"
      });
    },
    markAsWatchedToast() {
      this.$toast.open({
        message: "Marcado como assistido",
        type: "success",
        duration: 3000,
        dismissible: true,
        queue: true,
        position: "top-right"
      });
    },
    checkIfWatched() {
      this.$store.state.movieWatched.map(current => {
        this.movies.push(current.imdbID);
      });
    },
    updateValues() {
      window.location.reload();
    }
  }
};
</script>

<style>
#myListContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
#myListContent {
  width: 90%;
  height: 100%;
  margin-top: 20px;
  margin-left: 2%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
}
#moviesSaved {
  display: flex;
  flex-direction: column;
  width: 90%;
  transition: 0.5s;
  cursor: pointer;
}
#normalColorImage {
  width: 100%;
  height: 300px;
  position: relative;
}
#changeColorImage {
  width: 100%;
  height: 300px;
  position: relative;
  background: #414040be;
}
#movieSaveImage {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
}

#moviesSaved:hover {
  transform: scale(1.05);
}
#buttonsMyList {
  display: flex;
  margin-top: 10px;
}
#buttonsMyList button {
  border: none;
  background: rgba(78, 78, 78, 0.562);
  font-size: 15px;
  text-align: center;
  transition: transform 0.5s;
  height: 30px;
}
#buttonsMyList button:hover {
  border: none;
  background: rgba(250, 250, 250, 0.26);
  color: #141414;
  transform: scale(1.1);
  cursor: pointer;
}
#checkedButton {
  width: 50%;
  margin-right: 2px;
}
#checkedButton:hover {
  width: 50%;
  margin-right: 2px;
}
#checkAsWatched {
  width: 50%;
  margin-right: 2px;
}
#markToRemove {
  width: 50%;
  margin-left: 2px;
}
@media only screen and (max-width: 999px) {
  #myListContent {
    width: 50%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }
}
@media only screen and (max-width: 730px) {
  #myListContent {
    width: 60%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 30px;
  }
}
</style>
