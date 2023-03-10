<template>
  <v-item-group mandatory>
    <button v-on:click="goBack()"><span class="mdi mdi-arrow-left"></span></button>
    <v-container style="padding-top: 5%;">
      <v-row style="text-align: center;">
        <div class="equipos" v-for="n in players" :key="n" cols="5" md="2" width="100%">
          <v-item>
          <v-card>
            <div>
              <button v-on:click="handleFav(n)"><span class="mdi mdi-heart"></span></button>
              <v-img height="500px"  :src=n.icon></v-img>
            <h2 class="name">{{n.name}}</h2>
      <div class="stats">
      <span class="number">{{n.number}}</span>
      <span class="mdi mdi-earth">{{ n.continent }}</span>
      <span class="mdi mdi-medal">{{n.wins}}</span>
      <span class="mdi mdi-trophy">{{n.championships}}</span>
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
    
        <v-rating v-model="n.puntuacion" color="red" active-color="red" half-increments size="90" readonly
      ></v-rating>

                </div>
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
    nameTeam: "",
    players: [],
    snackbar: false,
    text: ''  
  }),
  async created(){
    const players = await fetch(`https://f1guideapi2.onrender.com/pilotos/api/pilot/team/${this.$route.params.id}`)
    .then((res) => res.json())
    this.players = players
},

methods:{

  handleFav(n){
    let listado = JSON.parse(localStorage.getItem('listado')) || [];
    let is = false
    for (let x in listado){
      if (listado[x].id == n.id){
        is = true
        listado.splice(listado[n],1)
        this.text = `${n.name} ha sido eliminado de favoritos`
      }
    }
    if(is == false){
      console.log(n)
      listado.push(n)
      this.text = `${n.name} ha sido añadido a favoritos`
      this.snackbar = true

    }
    
    localStorage.setItem('listado', JSON.stringify(listado))
  },

  goBack() {
      this.$router.go(-1);
    },
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

.v-card{
  width: 30vw;
  height: 80vh;
}

.v-img{
  margin-bottom:80px ;
}

.name{
  font-size: 2em;
}

.stats{
  display: flex;
  justify-content: space-evenly;
  height: 20px;
}
@font-face {
  font-family: 'number';
  src: url('../assets/62Dragz-vmAp9.otf'); /* Change the path and file name to match your font */
}
.number{
  font-family: 'number';
}


</style>