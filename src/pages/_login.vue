<template>
    <v-container style="margin-top: 80px;">
      <v-card>
        <v-card-title>
          <h1>Login</h1>
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="login" style="padding: 10px;">
            <v-text-field v-model="email" label="Email" required type="email"></v-text-field>
            <v-text-field v-model="password" label="Password" required type="password"></v-text-field>
            <v-btn type="submit" color="primary">Login</v-btn>
            You dont have account? Register <router-link class="link" to="/register" style="color: red; text-decoration: none;">here</router-link>
          </v-form>
        </v-card-text>
      </v-card>
      <div class="text-center">
    <v-snackbar
      v-model="snackbar"
      multi-line
    >
      {{ "Lo siento, parece que has introducido una información incorrecta al intentar iniciar sesión. Por favor, verifica que tus credenciales son correctas y vuelve a intentarlo." }}

      <template v-slot:actions>
        <v-btn
          color="red"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        snackbar: false,
        logged: false,
        error: false, 
        datoSend: "",
        email: '',
        password: ''
      }
    },
    methods: {      
      async takeId(email){
        await fetch('https://f1guideapi2.onrender.com/users/users')
        .then(res => res.json())
        .then(data => {
          console.log("datos",data)
          console.log("correo",email)
            for(let x in data){
              if (data[x]["email"] == email){
                console.log("uno",data[x])
                console.log("idbefore",data[x]["id"])
                console.log("idbefore2",data[x]["id"])
                this.datoSend = data[x]["id"]
                this.$store.commit('setUser', this.datoSend)
                console.log("dato actualizado",this.datoSend)
              }
            else console.log("No se ha encontrado")
            }
        })
      },
      login() {
        const credentials = {
          email: this.email,
          password: this.password
        };
        fetch('https://f1guideapi2.onrender.com/users/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentials)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
          if (data.message == 'successful') {
            this.$store.commit('setLogged', true)
            this.$store.commit('setEquipoFav', '')
            this.takeId(credentials.email)
            this.logged = true
            setTimeout(function(){
              console.log("eifheoufheorwfgheoruwfgh")
            }, 8000)
            this.logged = false
            this.$router.push('/pilots')
            // credenciales válidas, redirigir a la página principal
            
          } else {
            // credenciales inválidas, mostrar mensaje de error
            this.error = true
            this.snackbar = true

            console.error(data.message);

          }
        })
        .catch(err => console.error(err));
      }


    }
  }
  </script>