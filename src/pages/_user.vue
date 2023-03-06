
<template>
  <button v-on:click="goBack()"><span class="mdi mdi-arrow-left"></span></button>
    <v-card>
      
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
            <v-text-field label="Password" type="password" v-model="user.password"></v-text-field>
          </v-col>
          
        </v-row>
        </v-card-text>


      <v-card-text v-if="edit == false">
        <v-row>
          <v-col cols="12" md="6" >
            <h4>name</h4>
            <h2>{{user.name}}</h2>
          </v-col>
          <v-col cols="12" md="6">
            <h4>email</h4>
            <h2>{{user.email}}</h2>
          </v-col>
          <v-col cols="12" md="6">
            <h4>age</h4>
            <h2>{{user.age}}</h2>
          </v-col>
          <v-col cols="12" md="6">
            <h4>password</h4>
            <h2>{{passwordEnc}}</h2>
          </v-col>
        </v-row>
      </v-card-text>
      
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" v-if="edit == false" @click="makeDelete()">Delete User</v-btn>
        <v-btn color="primary" v-if="edit == true" @click="updateProfile(), edit = false">Save Changes</v-btn>
        <v-btn color="primary" v-if="edit == false" @click="edit = true">Editar</v-btn>
      </v-card-actions>

      
    </v-card>
  </template>
  
  <script lang="js">
  export default {
    data() {
      return {
        passwordEnc: '',
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
      goBack() {
      this.$router.go(-1);
    },
      changetoEncrypt(){
        this.passwordEnc = '*'.repeat(this.user.password.length); 
      },

      makeDelete(){
        this.$router.push('/login');
        this.deleteUser()
        this.$store.commit('setLogged', false)
        

      }
      ,


      async deleteUser(){
        await fetch(`https://f1guideapi2.onrender.com/users/users/${this.$store.state.id}`,
        {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
      }
,
      async updateProfile() {
        // Replace this with your own method for updating the user's profile data
        await fetch(`https://f1guideapi2.onrender.com/users/users/${this.$store.state.id}`,
         {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.user)
        })
        .then(res => res.json())
        .then(data => {
            this.user = data
            this.changetoEncrypt()
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
      this.changetoEncrypt()
    }
  };
  </script>

<style lang="scss" >
.v-row{
align-items: center;
text-align: center;
flex-direction: column;
justify-content: space-around;
}

.v-card{
  
  margin: 90px;
}


</style>

  
  
  