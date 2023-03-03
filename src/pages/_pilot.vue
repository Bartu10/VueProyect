<template>
  <v-item-group mandatory>
    <v-container style="padding-top: 5%;">
      <v-row style="text-align: center;">
        <div class="equipos" v-on:click="handleClick(n.id)" v-for="n in players" :key="n" cols="5" md="2" width="100%">
          <v-item>
          <v-card>
            <div>
              <v-img height="500px"  :src=n.icon></v-img>
            <h2 class="name">{{n.name}}</h2>
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
  methods:{
    handleClick(n){
      console.log("eijhfue")
        this.$router.push(`/pilot/${n}`)
      }
  },


  async created(){
    const players = await fetch(`https://f1guideapi2.onrender.com/pilotos/api/pilot/team/${this.$route.params.id}`)
    .then((res) => res.json())
    this.players = players
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

</style>