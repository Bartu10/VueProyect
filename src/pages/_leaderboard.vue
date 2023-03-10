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
</template>

<script>

export default {
  
    data: () => ({
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

    goBack() {
      this.$router.go(-1);
    },

    async allPilots(){
      var pilots = await fetch(`https://f1guideapi2.onrender.com/pilotos/api/pilots`)
    .then((res) => res.json())
    let ordered = pilots.sort((a, b) => a[this.selected] - b[this.selected]);
  ordered = ordered.reverse();
    this.pilots = ordered
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
      this.pilots = ordered
      console.log(this.pilots)
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