<template>
  <v-app>
    <v-main>
      <Navbar/>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './shared/Nav-bar.vue';
export default {components: {Navbar}}

</script>
