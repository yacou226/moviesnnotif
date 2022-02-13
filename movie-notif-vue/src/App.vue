<template>

    
<nav class="bg-black flex justify-between p-4 items-center  ">
  <!-- logo -->
   <Label class=" ml-50 text-lime-300 uppercase font-bold" >MoviesNotif</Label>
  <!-- menue -->
  <div  class="text-white list-none flex items-center uppercase text-sm"  >
    <li class="mr-4"><router-link class="hover:text-lime-400" to="/">Home</router-link>  </li>
    <li class="mr-4">   <router-link class="hover:text-lime-400"  to="/about">About</router-link> </li>
    <li class="mr-4"><router-link class="hover:text-lime-400"  to="/Index">films</router-link> </li>
       <!-- recherche et  bouttom login -->
    
        <input class=" border border-none rounded-full p-1 text-center text-white mx-4 bg-gray-900"
          type="text" placeholder=" Search movie.."  />
         
        <button class="text-white hover:yellow-300 border-none">
          <i class="far fa-user"></i>Login
        </button>
  </div>

     
</nav>
    
 
   


  <router-view/>
</template>


<style scoped>

</style>
