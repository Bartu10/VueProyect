<template>

<button v-on:click="goBack()"><span class="mdi mdi-arrow-left"></span></button>
<div style="display: flex; justify-content: space-evenly; ">
<v-select class="filter"  label="Select Continent" :items="selectContinent" v-model="selectedContinent"></v-select>
<v-select class="filter"  label="Select Team" :items="selectTeam" v-model="selectedTeam"></v-select>
<v-select class="filter"  label="Select" :items="select" v-model="selected"></v-select>
</div>
  <v-table style="padding: 2px;" >
      <thead>
        <tr>
          <th style="background-color: red; color: white;" class="text-left">
            Number
          </th>
          <th style="background-color: red; color: white;" class="text-left">
            Name
          </th>
          <th style="background-color: red; color: white;" class="text-left">
            Team
          </th>
          <th style="background-color: red; color: white;" class="text-left">
            {{ selected }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="x in pilots"
          :key="x">
          <td style="font-size: small;">{{ x.number }}</td>
          <td style="font-size: small; background-color: beige;">{{ x.name }}</td>
          <td style="font-size: small;">{{ x.team }}</td>
          <td style="font-size: small; background-color: beige;">{{ x[selected] }}</td>
        </tr>
      </tbody>
    </v-table>
    <div style="display: flex; justify-content: space-evenly;">
    <v-btn :v-if="page2.length > 1" v-on:click="changePage(1)">1</v-btn>
    <v-btn :v-if="page2.length > 1" v-on:click="changePage(2)" :disabled="page2.length == 0" >2</v-btn>
    </div>
</template>

<script>

export default {
  
    data: () => ({
      page : 1,
      page1: [],
      page2:[],
      pilots : [],
      selected : 'wins',
      select : ['championships', 'wins'],
      selectedContinent: '',
      selectContinent: ['','Europe', 'Asia', 'America'],
      selectedTeam: '',
      selectTeam: ['',"Alfa Romeo","Alpine","Aston Martin","Ferrari","Haas","Mclaren","Mercedes","Red Bull Racing","Alpha Tauri","Williams"],

  }),
  async created(){
this.allPilots()
  },

  
  methods:{
    changePage(n){
    if (n == 1){
      console.log(this.page1)
      this.pilots = this.page1
    }
    else if(n == 2){
      console.log(this.page2)
      this.pilots = this.page2
    }
  },
    goBack() {
      this.$router.go(-1);
    },

    async allPilots(){
      var pilots = await fetch(`https://f1guideapi2.onrender.com/pilotos/api/pilots`)
    .then((res) => res.json())
    let ordered = pilots.sort((a, b) => a[this.selected] - b[this.selected]);
  ordered = ordered.reverse();
  this.page1 = []
  this.page2 = []

  for(let x in ordered){
      if (this.page1.length < 10){
      this.page1.push(ordered[x])
    }
    else{
      this.page2.push(ordered[x])
    }}
  console.log(this.page1)
  this.pilots = this.page1
  }
  },
  
    
  watch: {
    async selectedTeam(newValue){
      console.log("heroina")
      if (newValue == ''){
        this.allPilots()
      }
      else{
      let pilots = await fetch(`https://f1guideapi2.onrender.com/pilotos/api/pilot/team/${newValue}`)
      .then((res) => res.json())
      let ordered = pilots.sort((a, b) => a[this.selected] - b[this.selected]);
      ordered = ordered.reverse();
console.log(ordered)
      this.page1 = ordered
      this.page2 = []
      
      this.pilots = ordered
      console.log(this.pilots) 
      }
  },
    async selectedContinent(newValue) {
      if (newValue == ''){
        this.allPilots()
      }
      else{
      let pilots = await fetch(`https://f1guideapi2.onrender.com/pilotos/api/pilot/country/${newValue}`)
      .then((res) => res.json())
      let ordered = pilots.sort((a, b) => a[this.selected] - b[this.selected]);
      ordered = ordered.reverse();
      console.log(ordered)
      if(newValue == "Europe"){
        this.page1 = []
        this.page2 = []
        for (let x in ordered){
        if (this.page1.length < 10){
          this.page1.push(ordered[x])    
        }
        if (this.page1.length == 10){
          this.page2.push(ordered[x])
        }
      }
      this.pilots = this.page1
      }
      else{
        this.page1 = ordered
        this.page2 = []
        this.pilots = this.page1
      }

      }  
    }
    },
  }



</script>

<style scoped>
.filter{
  width: 20px;
  margin: 20px;
  
}
</style>