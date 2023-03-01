<template>
    <v-item-group mandatory>
      <v-container style="padding-top: 5%; margin-left: 150px; margin-right: 0; ">
        <h1>Escoge a tu equipo favorito</h1>
        <v-row style="display: grid; grid-template-columns: auto auto auto auto auto;">
            <div class="equipos" v-on:click="handleClick(n.logo)" v-for="n in teams.teams" :key="n" cols="5" md="2" width="100%">
            <v-item v-slot="{ isSelected, toggle }">
              <v-card :color="isSelected ? 'primary' : ''"  @click="toggle">
              <v-scroll-y-transition>
              <div>
              <h2>{{n.name}}</h2>
          <v-img :src=n.logo height="200px"></v-img>
          <v-rating v-model="n.puntuacion" color="red" active-color="red" half-increments size="60" readonly></v-rating>
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
      teams: []
    }),
  
    methods: {
        handleClick(n){
        // Replace this with your own method for updating the user's profile data
          this.$store.commit('setEquipoFav', n)
          console.log(this.$store.state.equipoFav)
          this.$router.push('/user');
      }
        },
  
    async created(){
      const teams = await fetch(`https://f1guideapi2.onrender.com/equipos/api/teams`)
      .then((res) => res.json())
      this.teams = teams 
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