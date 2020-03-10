import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let list = window.localStorage.getItem("list");
let movieWatched = window.localStorage.getItem("movieWatched");

export default new Vuex.Store({
  state: {
    list: list ? JSON.parse(list) : [],
    movieWatched: movieWatched ? JSON.parse(movieWatched) : []
  },

  mutations: {
    addToMyList(state, movie) {
      let existMovie = state.list.find(
        current => current.imdbID == movie.imdbID
      );
      if (!existMovie) {
        state.list.push(movie);
      }
      this.commit("saveData");
    },

    saveData(state) {
      window.localStorage.setItem("list", JSON.stringify(state.list));
    },

    removeData(state, movie) {
      let index = state.list.indexOf(movie);
      state.list.splice(index, 1);
      this.commit("saveData");
    },

    markAsWatched(state, movieID) {
      let movieMarked = state.movieWatched.find(
        current => current.imdbID == movieID.imdbID
      );

      if (!movieMarked) {
        state.movieWatched.push(movieID);
      }

      this.commit("markMovie");
    },
    markMovie(state) {
      window.localStorage.setItem(
        "movieWatched",
        JSON.stringify(state.movieWatched)
      );
    },
    removeWatched(state, movie) {
      let WatchedRemove = state.movieWatched.indexOf(movie);
      state.movieWatched.splice(WatchedRemove, 1);
      this.commit("markMovie");
    }
  }
});
