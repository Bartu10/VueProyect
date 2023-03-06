    <template>
      <v-container>
        <v-card>
          <v-card-title>
            <h1>Create User</h1>
          </v-card-title>
          <v-card-text>
            <v-form ref="form" @submit.prevent="createUser" v-model="valid">
              <v-text-field v-model="name" label="Name" :rules="nameRules" required></v-text-field>
              <v-text-field v-model="email" label="Email" type="email" :rules="emailRules" required ></v-text-field>
              <v-text-field v-model="age" label="Age" :rules="ageRules" required type="number"></v-text-field>
              <v-text-field
              v-model="password"
               type="password"
               label="Password"  
               :rules="passwordRules" 
               required></v-text-field>
              <v-btn type="submit" color="primary">Create User</v-btn> You have account? Login <router-link class="link" to="/" style="color: red; text-decoration: none;">here</router-link>
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
      password: '',
      valid: false,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 50) || 'Name must be less than 50 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'E-mail must be valid',
      ],
      ageRules: [
        v => !!v || 'Age is required',
        v => v >= 18 || 'You must be 18 or older',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v && v.length >= 8 || 'Password must be at least 8 characters',
      ],
    }
  },
  methods: {
    createUser() {

      this.$refs.form.validate().then(valid => {
        if(valid.valid){
          console.log(valid.valid)
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
        this.$router.push('/');
      })
      .catch(err => console.error(err));
    }
      })
    },
    
  }
}
</script>

