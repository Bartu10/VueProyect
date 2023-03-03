<template>
        <v-card>
          <div>
            <v-img height="500px"  :src=this.pilot.icon></v-img>
          <h2 class="name">{{this.pilot.name}}</h2>
      <v-rating v-model="this.pilot.puntuacion" color="red" active-color="red" half-increments size="90" readonly
    ></v-rating>
              </div>
          </v-card>

</template>

<script>
export default {
 
    data: () => ({
        pilot : ''
  }),

    async created(){
    const pilot = await fetch(`https://f1guideapi2.onrender.com/pilotos/api/pilot/${this.$route.params.id}`)
    .then((res) => res.json())
    this.pilot = pilot
},
}
</script>

<style lang="scss" scoped>

.v-card{
    display: grid;
}

</style>