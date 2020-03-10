<template>
  <div id="header">
    <img class="logoHeader" :src="image" v-on:click="NavigateMain" />
    <nav role="navigation">
      <ul>
        <li id="selections">
          <a id="navigate">
            Navegar
            <v-icon name="sort-down" scale="1" color="#e5e5e5" />
          </a>
          <ul class="dropdown">
            <li v-on:click="NavigateMain">
              <a>Início</a>
            </li>
            <li>
              <a>Filmes</a>
            </li>
            <li>
              <a>Séries</a>
            </li>
            <li>
              <a>Mais recentes</a>
            </li>
            <li v-on:click="NavigateMyList">
              <a>Minha lista</a>
            </li>
          </ul>
        </li>
        <li class="items" v-on:click="NavigateMain">Início</li>
        <li class="items">Séries</li>
        <li class="items">Filmes</li>
        <li class="items">Mais recentes</li>
        <li class="items" v-on:click="NavigateMyList">Minha lista</li>
        <li></li>
      </ul>
    </nav>
    <div id="textForm">
      <form>
        <input type="text" name="text" placeholder="Títulos, gente e gêneros" />
      </form>
    </div>
    <div id="icons">
      <v-icon name="bell" scale="1.3" color="#e5e5e5" />
      <v-icon name="user-circle" scale="2" color="#e5e5e5" />
    </div>
  </div>
</template>

<script>
import image from "../assets/logo-small.png";
import Icon from "vue-awesome/components/Icon";
export default {
  name: "Header",
  data() {
    return {
      image: image,
      inputSearch: ""
    };
  },
  components: {
    "v-icon": Icon
  },
  methods: {
    NavigateMain() {
      this.$router.push({ name: "Main" });
    },
    NavigateMyList() {
      this.$router.push({ name: "MyList" });
    }
  }
};
</script>

<style>
#header {
  width: 100%;
  height: 30%;
  background: #141414;
  display: flex;
  align-items: center;
}

.logoHeader {
  margin-left: 30px;
}
.logoHeader:hover {
  cursor: pointer;
}
nav {
  width: 70vw;
  color: white;
  display: flex;
  align-items: center;
}
ul {
  list-style: none;
  margin: 0;
  padding-left: 0;
}
li {
  color: #fff;
  display: block;
  float: left;
  padding: 1rem;
  position: relative;
  text-decoration: none;
  transition-duration: 0.5s;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 13.5px;
}
li a {
  color: #fff;
  cursor: default;
}
li:hover {
  cursor: pointer;
}
.items:hover {
  color: #ccc;
}
ul li ul {
  visibility: hidden;
  opacity: 0;
  min-width: 5rem;
  position: absolute;
  transition: all 0.5s ease;
  margin-top: 1rem;
  left: 0;
  display: none;
}
ul li ul li {
  clear: both;
  width: 100%;
}
.dropdown {
  background: #141414c7;
}
#navigate {
  opacity: 0;
  height: 0;
}
#options {
  font-size: 14px;
  color: #e5e5e5;
  cursor: pointer;
  width: 60%;
}
#eachOptions {
  list-style: none;
  display: flex;
  justify-content: space-around;
  width: 50%;
}
input[type="text"] {
  width: 1px;
  border: none;
  color: #e5e5e5;
  border-bottom: 2px solid #ccc;
  font-size: 13px;
  background-color: #141414;
  background-image: url("../assets/search.png");
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 12px 7px 12px 40px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}

input[type="text"]:focus {
  width: 100%;
}
#textForm {
  width: 15%;
}

#icons {
  width: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
@media only screen and (max-width: 906px) {
  nav {
    width: 80vw;
  }
}
@media only screen and (max-width: 900px) {
  ul li:hover > ul,
  ul li:focus-within > ul,
  ul li ul:hover {
    visibility: visible;
    opacity: 1;
    display: block;
    font-size: 15px;
    position: absolute;
    z-index: 9999;
  }
  li :hover {
    color: #ccc;
  }
  #navigate {
    color: white;
    opacity: 10;
    height: auto;
    margin-left: -10px;
  }
  .items {
    opacity: 0;
    height: 0;
    font-size: 0;
  }

  li a {
    cursor: pointer;
  }
  nav {
    width: 30%;
    height: 30px;
    padding-top: 3px;
  }
  #textForm {
    width: 30%;
  }
  #icons {
    width: 20%;
  }
}
@media only screen and (max-width: 626px) {
  #selections {
    padding-top: 30px;
  }
}
@media only screen and (max-width: 541px) {
  #selections {
    padding-top: 50px;
  }
}
@media only screen and (max-width: 500px) {
  .logoHeader {
    width: 80px;
  }
  nav {
    width: 30%;
    padding-top: 40px;
  }
  #selections {
    padding-top: 30px;
  }
}
@media only screen and (max-width: 320px) {
  .logoHeader {
    margin-left: 0px;
  }
  #selections {
    padding-top: 60px;
  }
}
</style>
