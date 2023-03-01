<template>
    <v-app-bar :elevation="2">
<v-img
  max-height="143"
  max-width="250"
  src="https://logodownload.org/wp-content/uploads/2016/11/formula-1-logo-0.png">
  
</v-img>
<v-toolbar-title><router-link class="link" to="/">Inicio</router-link></v-toolbar-title>
    <v-toolbar-title v-if="this.$store.state.logged == false"><router-link class="link" to="/register">Register</router-link></v-toolbar-title>
    <v-toolbar-title v-if="this.$store.state.logged == false"><router-link class="link" to="/login">Login</router-link></v-toolbar-title>
    <v-toolbar-title v-if="this.$store.state.logged == true"><router-link class="link" to="/pilots">Pilotos</router-link></v-toolbar-title>
    <v-toolbar-title v-if="this.$store.state.logged == true"><router-link class="link" to="/leaderboard">Leaderboard</router-link></v-toolbar-title>
    <v-toolbar-title v-if="this.$store.state.logged == true"><router-link class="link" to="/user">User</router-link></v-toolbar-title>
    <v-toolbar-title v-if="this.$store.state.logged == true"><router-link class="link" to="/"><v-btn @click="closeSession">Cerrar Sesion</v-btn></router-link></v-toolbar-title>
    <v-toolbar-title v-if="this.$store.state.logged == true">{{this.$store.state.id}}</v-toolbar-title>
    
    
    </v-app-bar>
</template>
<script>
export default {
    methods:{
        closeSession(){
            this.$store.commit('setLogged', false)
        },  

        searchName(){
            this.store
        }
    }
    
}
</script>



<style scoped>
.link{
    color:red;
    text-decoration: none;



}



</style>