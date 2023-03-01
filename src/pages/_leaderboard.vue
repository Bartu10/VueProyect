<template>



    
  <v-table style="padding: 10px;" >
      <thead>
        <tr>
          <th class="text-left">
            Number
          </th>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Team
          </th>
          <th class="text-left">
            {{ selected }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="x in pilots"
          :key="x">
          <td>{{ x.number }}</td>
          <td>{{ x.name }}</td>
          <td>{{ x.team }}</td>
          <td>{{ x[selected] }}</td>
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