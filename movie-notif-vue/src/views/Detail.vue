<template>
  <main>
  
    <!-- tout le header -->
    <header>
      <div
        class="
          h-screen
          w-screen
          bg-[url(/img/movi2.jpg)] bg-cover bg-center
          absolute
        "
      >
        <!-- bloc des liens  -->
        <div class="absolute p-2 m-4 ml-10">
          <ul class="flex text-white">
            <li class="mr-2">
              <a class="text-white hover:text-lime-200" href="">Home</a> /
            </li>
            <li class="mr-2">
              <a class="text-white hover:text-lime-300" href="">Movies</a> /
            </li>
            <li class="mr-2">hotel transisvania: transformania</li>
          </ul>
        </div>
        <!-- button play -->
        <div
          class="
            relative
            bg-lime-300
            w-20
            h-20
            border-none
            rounded-full
            text-center
            mx-auto
            my-64
            flex
            justify-center
          "
        >
          <button class="">
            <a class="" href=""
              ><span style="font-size: 40px; color: rgb(2, 0, 0)">
                <i class="fas fa-play mx-auto"></i> </span
            ></a>
          </button>
        </div>
        <!-- bloc sombre -->
        <div
          class="
            absolute
            inset-x-0
            bottom-0
            m-4
            overflow-hidden
            bg-transparent
            w-scree
            h-96
            flex
          "
        >
          <!-- premier bloc -->

          <div class="w-64 h-80 mb-2 ml-4  ">
            <!-- image  -->
            <div class="w-full h-64 border rounded">
             
          <img class="h-full w-full"  :src="'http://image.tmdb.org/t/p/w500' + film.poster_path"
            alt="image">
            </div>
          
            <div class="mt-4 flex justify-center  items-center w-full ">
              <button class="border-none rounded bg-lime-400  mr-2 p-1"> <i class="fas fa-vote-yea t"></i> vote</button>
              <button class="border-none rounded bg-gray-300  p-1 ">  J'aime pas <i class="fas fa-thumbs-down text-blue-600"></i></button>
            </div>

          
        
          </div>

          <!-- deuxieme bloc -->
          <div class="relative w-full h-80 ml-2 bg">
            <!-- bouton watch and add favorite -->
            <div class="flex justify-between items-center m-2">
              <button
                class="border-none rounded-full p-1 bg-lime-300 font-bold"
              >
                <i class="fas fa-play"></i> watch now
              </button>
              <button class="bg-white rounded-full p-1 mr-4">
                <i class="fas fa-plus"></i> add favorite
              </button>
            </div>
            <!-- titre du film -->
            <h3 class="text-white m-2 fond-bold uppercase m-2 text-2xl">
              {{film.title}}
            </h3>
            <!-- trailer hd -->
            <div class="w-64 h-12 text-white rounded flex items-center">
              <!-- trailer -->
              <button class="w-24 ml-2 p-1 border rounded">
                <i class="fas fa-video"></i> Trailer
              </button>
              <!-- hd -->
              <button class="ml-6 border rounded p-1">HD</button>
              <h3 class="ml-4 text-orange-400 font-bold">IMBD.</h3>
            </div>

            <!-- description fims -->
            <div class="ml-2 text-white text-justify mr-4 mb-4">
              <p>
                {{film.overview}}
              </p>
            </div>
            <!-- les text cote à cote -->
            <div class="flex text-white">
              <div class="mr-6 ml-2">
                <p>
                  Released: 2022-01-14 <br />
                  Genre: Fantasy, Family, Adventure, Comedy, Animation
                </p>
              </div>
              <div class="ml-6">
                <p>
                  Duration: 98 min <br />
                  Country: United States of America
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </main>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
     id : null,
     film :{},
  };

  },
   mounted() {
             this.id= this.$route.query.film_id;
             console.log(this.id);
             this.fetchMovie(this.id);
                
            },
  methods:{
      async fetchMovie(id_film) {
                    // applelle l'api et récupperent les films 
                    fetch(
                        `https://api.themoviedb.org/3/movie/${id_film}?api_key=833c4822773bba014b004669626be8c8&language=en-US`)
                        .then(async (response) => {
                            var body = await response.text()
                            var data = JSON.parse(body);
                            console.log(data);
                            this.film=data;
                        });
                },
  },
};
</script>