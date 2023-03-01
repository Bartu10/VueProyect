
<template>
    <v-card style="padding-top: 80px;">
      <v-card-title>My Profile</v-card-title>
  
      <v-card-text v-if="edit == true">
        <v-row>
          <v-col cols="12" sm="6" >
            <v-text-field label="Name" v-model="user.name"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field label="Email" v-model="user.email"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field label="Age" v-model="user.age"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field label="Password" v-model="user.password"></v-text-field>
          </v-col>
          
        </v-row>
        </v-card-text>


      <v-card-text v-if="edit == false">
        <v-row>
          <v-col cols="12" md="6" >
            <h2>{{user.name}}</h2>
          </v-col>
          <v-col cols="12" md="6">
            <h2>{{user.email}}</h2>
          </v-col>
          <v-col cols="12" md="6">
            <h2>{{user.age}}</h2>
          </v-col>
          <v-col cols="12" md="6">
            <h2>{{user.password}}</h2>
          </v-col>
        </v-row>
      </v-card-text>
      
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" v-if="edit == true" @click="updateProfile(), edit = false">Save Changes</v-btn>
        <v-btn color="primary" v-if="edit == false" @click="edit = true">Editar</v-btn>
      </v-card-actions>

      
    </v-card>
  </template>
  
  <script lang="js">
  export default {
    data() {
      return {
        edit: false,
        user: {
          name: '',
          email: '',
          age: '',
          password: '',

        }
      };
    },
    
    methods: {

      async updateProfile() {
        // Replace this with your own method for updating the user's profile data
        await fetch(`https://f1guideapi2.onrender.com/users/users/${this.$store.state.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.user)
        })
        .then(res => res.json())
        .then(data => {
            this.user = data
        })
      }
    },
  
    async created(){
    const user = await fetch(`https://f1guideapi2.onrender.com/users/users/${this.$store.state.id}`)
    .then((res) => res.json())
      console.log("usuarioPrueba",user)
      this.user.name = user.name
      this.user.email = user.email
      this.user.age = user.age
      this.user.password = user.password
    }
  };
  </script>

  
  
  