<template>
  <v-item-group mandatory>
    <v-container style="padding-top: 5%; margin-left: 150px; margin-right: 0; ">
      <v-row style="padding-left: 300px;text-align: center; display: grid; grid-template-columns: auto auto auto auto auto;">
        <div class="equipos" v-for="n in players" :key="n" cols="5" md="2" width="100%">
          <v-item>
          <v-card>
            <div>
              <v-img height="200px" :src=n.icon></v-img>
            <h2>{{n.name}}</h2>
        <v-rating v-model="n.puntuacion" color="red" active-color="red" half-increments size="60" readonly
      ></v-rating>
      <v-btn
          v-on:click="handleClick(n)"
          icon="mdi-heart"
          color="primary"

        ></v-btn>
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
        // Replace this with your own method for updating the user's profile data
          console.log(n)
          this.$store.commit('setPilotoFav', n)
          console.log(this.$store.state.pilotoFav)
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
</style>