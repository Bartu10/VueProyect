<template>

    <v-item-group mandatory>
      <h2 style="margin: 20px;">Pilotos Favoritos</h2>
      <v-container style="padding-top: 5%; margin-left: 150px; margin-right: 0; ">
        <v-row style="display: grid; grid-template-columns: auto auto auto auto auto;">
          <div class="equipos" v-for="n in pilots" :key="n" cols="5" md="2" width="100%">
            
            <v-item v-slot="{ isSelected}">

              <v-card :color="isSelected ? 'primary' : ''"  >
              <v-scroll-y-transition>
              <div>
                <button v-on:click="handleFav(n)"><span class="mdi mdi-heart"></span></button>
              <h2>{{n.name}}</h2>
          <v-img :src=n.icon height="200px"></v-img>
          <v-rating v-model="n.puntuacion" color="red" active-color="red" half-increments size="60" readonly
        ></v-rating>
        <v-snackbar
      v-model="snackbar"
    >
      {{ this.text }}

      <template v-slot:actions>
        <v-btn
          color="red"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
                  </div>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </div>
        </v-row>
      </v-container>
        <div class="text-center">
    </div>
    </v-item-group>
  </template>
  
  
  <script>
  export default {
    data: () => ({
      rating: "2.5",
      page:"1",
      pilots: [],
      snackbar: false,
      text: ''   
    }),
  
    async created(){
      let pilots = JSON.parse(localStorage.getItem('listado')) || [];
      this.pilots = pilots},
    
methods : {
    handleFav(n){
    let listado = JSON.parse(localStorage.getItem('listado')) || [];
    for (let x in listado){
      if (listado[x].id == n.id){
        listado.splice(listado[n],1)
        this.text = `${n.name} ha sido eliminado de favoritos`
        this.snackbar = true
      }
    }
    localStorage.setItem('listado', JSON.stringify(listado))
    location.reload()
  }
}


  }

  
  </script>
  
  <style scoped>
  .col{
    width: 50%; 
    display: flex;
    flex-wrap: wrap;
  }
  
  .equipos{
    padding: 10px;
    margin-left: 0; 
  }
  
  .v-row{
    margin-left: 0;
  }
  
  v-container{
    margin-left: 0;
    margin-right: 0;
  }
  
  </style>
  