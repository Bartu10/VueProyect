<template>
    <v-app-bar :elevation="2">
<v-img
  max-height="143"
  max-width="250"
  src="https://logodownload.org/wp-content/uploads/2016/11/formula-1-logo-0.png">
  
</v-img>
    <v-toolbar-title v-if="this.$store.state.logged == true"><router-link class="link" to="/pilots"><v-list-item prepend-icon="mdi mdi-racing-helmet">Pilotos</v-list-item></router-link></v-toolbar-title>
    <v-toolbar-title v-if="this.$store.state.logged == true"><router-link class="link" to="/leaderboard"><v-list-item prepend-icon="mdi mdi-table">Leaderboard</v-list-item></router-link></v-toolbar-title>
    <v-toolbar-title v-if="this.$store.state.logged == true"><router-link class="link" to="/user"><v-list-item prepend-icon="mdi mdi-account">User</v-list-item></router-link></v-toolbar-title>
    <v-toolbar-title v-if="this.$store.state.logged == true"><router-link class="link" to="/comunity"><v-list-item prepend-icon="mdi mdi-account-group">Comunity</v-list-item></router-link></v-toolbar-title>
    <v-toolbar-title  v-if="this.$store.state.logged == true"><router-link class="link" to="/"><v-btn class="close" @click="closeSession"><v-list-item prepend-icon="mdi mdi-close-circle-outline">Cerrar Sesion</v-list-item></v-btn></router-link></v-toolbar-title>
    
    
    
    </v-app-bar>
</template>
<script>
export default {
    methods:{
        closeSession(){
            this.$store.commit('setLogged', false)
        },  
    }
    
}
</script>



<style scoped>
.link{
    color:red;
    text-decoration: none;
}

.close{
    color: white;
    border-radius:20px ;
    background: red;
}



</style>