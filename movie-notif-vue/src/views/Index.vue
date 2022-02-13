<template>
  <main id="app">
    <h1 class="text-center py-4 text-xl font-bold">Listes des films</h1>
    <!-- films -->

    <div
      class="
        my-10
        mx-auto
        p2
        md:p-0
        xl:w9/12
        md:w-10/12
        lg-w-11/12
        grid grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        gap-4
      "
    >
      <div v-for="(film, i) in films" :key="i" class="relative">
        <router-link :to="'/detail?film_id=' + film.id">
          <div class="relative">
            <div class="absolute w-full h-full bg-black bg-opacity-20"></div>
            <!-- rating  -->
            <span class="absolute text-white px-2">{{
              film.vote_average
            }}</span>
            <!-- image -->
            <img
              :src="'http://image.tmdb.org/t/p/w500' + film.poster_path"
              alt="image"
            />
          </div>

          <!-- informations -->
          <div class="px-2">
            <!-- title -->
            <h3 class="text-xl font-bold">{{ film.title }}</h3>
            <span>{{ film.release_date }}</span>
            <br />
            <p class="font-bold">
              Popularité:
              <span class="text-blue-800 font-bold">{{ film.popularity }}</span>
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </main>
</template>


<script>
import mongoose from "mongoose";

export default {
  name: "Index",

  data() {
    return {
      films: [],
    };
  },
  //mounted cest la fonction qui se lance dès l'ouverture de la page web
  async mounted() {
    this.fetchMovies();
    // console.log("=> mongose",mongoose);
     this.dbconnect();
    
  },

  methods: {
     dbconnect(){
      mongoose
      .connect("mongodb://127.0.0.1:27017/moviesnotif", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(
        () => {
          /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
          console.log("connecter");
        },
        (err) => {
          /** handle initial connection error */
          console.log(err);
          console.log("connexion échoué");
        }
      );

    },
    async fetchMovies() {
      fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=833c4822773bba014b004669626be8c8&language=en-US&page=1"
      ).then(async (responses) => {
        var body = await responses.text();
        var data = JSON.parse(body);
        this.films = data.results;
        console.log(">> api", this.films);
      });
    },
  },
};
</script>


