<template>
  <v-card-title v-if="this.$store.state.logged == true">
    <h1>Social Opinions</h1>
  </v-card-title>
  <button v-on:click="goBack()"><span class="mdi mdi-arrow-left"></span></button>
  <v-card v-if="this.$store.state.logged == true" 
    class="mx-auto"
    color="#26c6da"
    theme="dark"
    max-width="900"
    prepend-icon="mdi-twitter"
    title="Twitter"
  >

    <template v-slot:prepend>
      <v-icon size="x-large"></v-icon>
    </template>

    <v-card-text class="text-h5 py-2">
      {{this.tweets[Math.floor(Math.random()*20)]}}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="w-100">
        <template v-slot:prepend>
          <v-avatar
            color="grey-darken-3"
            image="https://picsum.photos/200?random=1"
          ></v-avatar>
        </template>

        <v-list-item-title>{{this.name[0]}}</v-list-item-title>


        <template v-slot:append>
          <div class="justify-self-end">
            <v-icon v-if="likes[0].liked == true" @click="likePost(0)" class="me-1" icon="mdi-heart red"></v-icon>
            <v-icon v-if="likes[0].liked == false" @click="likePost(0)" class="me-1" icon="mdi-heart"></v-icon>
            <span class="subheading me-2">{{likes[0].number}}</span>
          </div>
        </template>
      </v-list-item>
    </v-card-actions>
  </v-card>

  <v-card v-if="this.$store.state.logged == true" 
    class="mx-auto"
    color="#26c6da"
    theme="dark"
    max-width="900"
    prepend-icon="mdi-twitter"
    title="Twitter"
  >
    <template v-slot:prepend>
      <v-icon size="x-large"></v-icon>
    </template>

    <v-card-text class="text-h5 py-2">
      {{this.tweets[Math.floor(Math.random()*20)]}}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="w-100">
        <template v-slot:prepend>
          <v-avatar
            color="grey-darken-3"
            image="https://picsum.photos/200?random=2"
          ></v-avatar>
        </template>

        <v-list-item-title>{{this.name[1]}}</v-list-item-title>

        <template v-slot:append>
          <div class="justify-self-end">
            <v-icon v-if="likes[1].liked == true" @click="likePost(1)" class="me-1" icon="mdi-heart red"></v-icon>
            <v-icon v-if="likes[1].liked == false" @click="likePost(1)" class="me-1" icon="mdi-heart"></v-icon>
            <span class="subheading me-2">{{likes[1].number}}</span>
          </div>
        </template>
      </v-list-item>
    </v-card-actions>
  </v-card>

  <v-card v-if="this.$store.state.logged == true" 
    class="mx-auto"
    color="#26c6da"
    theme="dark"
    max-width="900"
    prepend-icon="mdi-twitter"
    title="Twitter"
  >
    <template v-slot:prepend>
      <v-icon size="x-large"></v-icon>
    </template>

    <v-card-text class="text-h5 py-2">
      {{this.tweets[Math.floor(Math.random()*20)]}}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="w-100">
        <template v-slot:prepend>
          <v-avatar
            color="grey-darken-3"
            image="https://picsum.photos/200?random=3"
          ></v-avatar>
        </template>

        <v-list-item-title>{{this.name[3]}}</v-list-item-title>

        <template v-slot:append>
          <div class="justify-self-end">
            <v-icon v-if="likes[2].liked == true" @click="likePost(2)" class="me-1" icon="mdi-heart red"></v-icon>
            <v-icon v-if="likes[2].liked == false" @click="likePost(2)" class="me-1" icon="mdi-heart"></v-icon>
            <span class="subheading me-2">{{likes[2].number}}</span>
          </div>
        </template>
      </v-list-item>
    </v-card-actions>
  </v-card>


<v-card v-if="this.$store.state.logged == true" 
    class="mx-auto"
    color="#26c6da"
    theme="dark"
    max-width="900"
    prepend-icon="mdi-twitter"
    title="Twitter"
  >
    <template v-slot:prepend>
      <v-icon size="x-large"></v-icon>
    </template>

    <v-card-text class="text-h5 py-2">
      {{this.tweets[Math.floor(Math.random()*20)]}}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="w-100">
        <template v-slot:prepend>
          <v-avatar
            color="grey-darken-3"
            image="https://picsum.photos/200?random=4"
          ></v-avatar>
        </template>

        <v-list-item-title>{{this.name[4]}}</v-list-item-title>


        <template v-slot:append>
          <div class="justify-self-end">
            <v-icon v-if="likes[3].liked == true" @click="likePost(3)" class="me-1" icon="mdi-heart red"></v-icon>
            <v-icon v-if="likes[3].liked == false" @click="likePost(3)" class="me-1" icon="mdi-heart"></v-icon>
            <span class="subheading me-2">{{likes[3].number}}</span>
          </div>
        </template>
      </v-list-item>
    </v-card-actions>
  </v-card>
<v-card v-if="this.$store.state.logged == true" 
    class="mx-auto"
    color="#26c6da"
    theme="dark"
    max-width="900"
    prepend-icon="mdi-twitter"
    title="Twitter"
  >
    <template v-slot:prepend>
      <v-icon size="x-large"></v-icon>
    </template>

    <v-card-text class="text-h5 py-2">
      {{this.tweets[Math.floor(Math.random()*20)]}}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="w-100">
        <template v-slot:prepend>
          <v-avatar
            color="grey-darken-3"
            image="https://picsum.photos/200?random=5"
          ></v-avatar>
        </template>

        <v-list-item-title>{{this.name[2]}}</v-list-item-title>


        <template v-slot:append>
          <div class="justify-self-end">
            <v-icon v-if="likes[4].liked == true" @click="likePost(4)" class="me-1" icon="mdi-heart red"></v-icon>
            <v-icon v-if="likes[4].liked == false" @click="likePost(4)" class="me-1" icon="mdi-heart"></v-icon>
            <span class="subheading me-2">{{likes[4].number}}</span>
          </div>
        </template>
      </v-list-item>
    </v-card-actions>
  </v-card>
<v-card v-if="this.$store.state.logged == true" 
    class="mx-auto"
    color="#26c6da"
    theme="dark"
    max-width="900"
    prepend-icon="mdi-twitter"
    title="Twitter"
  >
    <template v-slot:prepend>
      <v-icon size="x-large"></v-icon>
    </template>

    <v-card-text class="text-h5 py-2">
      {{this.tweets[Math.floor(Math.random()*20)]}}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="w-100">
        <template v-slot:prepend>
          <v-avatar
            color="grey-darken-3"
            image="https://picsum.photos/200?random=6"
          ></v-avatar>
        </template>

        <v-list-item-title>{{this.name[5]}}</v-list-item-title>
        <template v-slot:append>
          <div class="justify-self-end">
            <v-icon v-if="likes[5].liked == true" @click="likePost(5)" class="me-1" icon="mdi-heart red"></v-icon>
            <v-icon v-if="likes[5].liked == false" @click="likePost(5)" class="me-1" icon="mdi-heart"></v-icon>
            <span class="subheading me-2">{{likes[5].number}}</span>

          </div>
        </template>
      </v-list-item>
    </v-card-actions>
  </v-card>
  <v-card v-if="this.$store.state.logged == false">

  </v-card>

  </template>

<script>
import faker from 'faker';
export default {
  data() {
      return {
        name: [faker.name.findName(),faker.name.findName(),faker.name.findName(),faker.name.findName(),faker.name.findName(),faker.name.findName()],
        tweets: [
  "El Gran Premio de Mónaco es uno de los eventos más esperados del año en la F1. ¿Quién crees que ganará? #F1Guide",
  "¡Ferrari acaba de anunciar que Charles Leclerc conducirá para ellos en el Campeonato Mundial de la F1! ¿Qué opinas? #F1Guide",
  "¿Viste la carrera de ayer? ¡Fue una locura! Max Verstappen logró su primer Gran Premio de la temporada en el Circuito de Paul Ricard. #F1Guide",
  "La temporada de la F1 acaba de comenzar y ya hay mucha emoción. ¿Estás siguiendo el campeonato? #F1Guide",
  "Lewis Hamilton acaba de ganar su séptimo campeonato mundial de la F1. ¡Una verdadera leyenda de nuestro deporte! #F1Guide",
  "¿Has visto el nuevo diseño del McLaren? ¡Se ve impresionante! ¡Será interesante ver cómo les va en la pista esta temporada! #F1Guide",
  "La carrera en Bélgica fue un espectáculo emocionante. ¿Qué opinas de la estrategia de Red Bull en la carrera? #F1Guide",
  "¡Buenas noticias para los fans de la F1! La FIA ha anunciado que la temporada 2021 comenzará en marzo. #F1Guide",
  "¿Has oído hablar de George Russell? Es un joven talento que ha impresionado a muchos en su debut en la F1. #F1Guide",
  "¡La carrera en Silverstone estuvo llena de emociones! Lewis Hamilton tuvo una increíble remontada y se llevó la victoria en su tierra natal. #F1Guide",
  "El Gran Premio de México es uno de mis favoritos de la temporada de F1. ¡La atmósfera es increíble! #F1Guide",
  "¿Alguien más está emocionado por ver a Fernando Alonso de regreso en la F1 con Alpine? #F1Guide",
  "¡La carrera de Austria fue una locura! Max Verstappen y Lewis Hamilton se enfrascaron en una emocionante batalla por la victoria. #F1Guide",
  "¿Crees que Mercedes podrá mantener su dominio en la F1 esta temporada? #F1Guide",
  "El Circuito de Spa-Francorchamps es uno de los más icónicos de la F1. ¿Cuál es tu circuito favorito? #F1Guide",
  "¡La carrera en Imola fue emocionante hasta el final! Max Verstappen se llevó la victoria después de una intensa batalla con Lewis Hamilton. #F1Guide",
  "La temporada de la F1 acaba de comenzar y ya estamos viendo grandes actuaciones de algunos de los pilotos más jóvenes, como Lando Norris y Charles Leclerc. #F1Guide",
  "¿Qué opinas de la nueva regla de 'punto extra' que se implementará esta temporada en la F1? #F1Guide",
  "La carrera en Singapur es una de las más desafiantes de la temporada de F1 debido al calor y la humedad. ¡Los pilotos tienen que estar en su mejor forma! #F1Guide",
  "¿Has oído hablar del joven piloto de Red Bull, Yuki Tsunoda? ¡Ha demostrado ser un talento impresionante en su primera temporada en la F1! #F1Guide",
  "La carrera en Monza es una de las más rápidas de la temporada de F1. ¡Es emocionante ver a los pilotos alcanzar velocidades tan altas en la pista! #F1Guide",
],
        randomNumber:"",
        likes:[
        { number : Math.floor(Math.random()*1000), liked : false },
        { number : Math.floor(Math.random()*1000), liked : false },
        { number : Math.floor(Math.random()*1000), liked : false },
        { number : Math.floor(Math.random()*1000), liked : false },
        { number : Math.floor(Math.random()*1000), liked : false },
        { number : Math.floor(Math.random()*1000), liked : false },
      ],
  };
},


methods:{

  goBack() {
      this.$router.go(-1);
    },
likePost(index) {
      // incrementa la cantidad de likes para el sitio seleccionado
      if(this.likes[index].liked == false){
        console.log("mas")
        console.log(this.likes[index].liked)
      this.likes[index].number++;
      this.likes[index].liked = true
      }
      else{
        this.likes[index].number--;
        this.likes[index].liked = false
      }
    }
}


}

</script>

<style scoped lang="scss">


h1{
  text-align: center;
}
.tweets{
  display: flex;
  flex-direction: column;
  margin:1%;


  div{
    height: fit-content;
    margin: 10%;
    
  }
}

h2{
  padding-top: 80px;
}

.red{
  color: red;
}

.mx-auto{
  margin:50px
}
</style>




