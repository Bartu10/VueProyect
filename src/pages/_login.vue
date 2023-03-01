<template>
    <v-container>
      <v-card>
        <v-card-title>
          <h1>Login</h1>
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="login">
            <v-text-field v-model="email" label="Email" required type="email"></v-text-field>
            <v-text-field v-model="password" label="Password" required type="password"></v-text-field>
            <v-btn type="submit" color="primary">Login</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
      <v-alert
    v-if = "this.logged"
    type="success"
    title="Alert title"
    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
  ></v-alert>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
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
            console.error(data.message);

          }
        })
        .catch(err => console.error(err));
      }


    }
  }
  </script>