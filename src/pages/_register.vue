    <template>
      <v-container>
        <v-card>
          <v-card-title>
            <h1>Create User</h1>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="createUser">
              <v-text-field v-model="name" label="Name" required></v-text-field>
              <v-text-field v-model="email" label="Email" required type="email"></v-text-field>
              <v-text-field v-model.number="age" label="Age" required type="number"></v-text-field>
              <v-text-field type="password" v-model.number="password" label="Password" required></v-text-field>
              <v-btn type="submit" color="primary">Create User</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-container>
    </template>


<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      age: '',
      password: ''
    }
  },
  methods: {
    createUser() {
      const user = {
        name: this.name,
        email: this.email,
        age: this.age,
        password: this.password,
        
      };
      fetch('https://f1guideapi2.onrender.com/users/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.$router.push('/login');
      })
      .catch(err => console.error(err));
    }
  }
}
</script>

