<template>
  <v-item-group mandatory>
    <button v-on:click="goBack()"><span class="mdi mdi-arrow-left"></span></button>
    <v-container style="padding-top: 5%;">
      <v-row style="text-align: center;">
        <div class="equipos" v-for="n in players" :key="n" cols="5" md="2" width="100%">
          <v-item>
          <v-card>
            <div>
              <v-img height="500px"  :src=n.icon></v-img>
            <h2 class="name">{{n.name}}</h2>
      <div class="stats">
      <span class="number">{{n.number}}</span>
      <span class="mdi mdi-earth">{{ n.continent }}</span>
      <span class="mdi mdi-medal">{{n.wins}}</span>
      <span class="mdi mdi-trophy">{{n.championships}}</span>
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
    players: []  
  }),
  async created(){
    const players = await fetch(`https://f1guideapi2.onrender.com/pilotos/api/pilot/team/${this.$route.params.id}`)
    .then((res) => res.json())
    this.players = players
},

goBack() {
      this.$router.go(-1);
    },
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