<template>
   <v-container style="width:100%; height:100%; " fluid>
    <form v-on:submit.prevent="entrar">
      <v-row   >
        <v-col  cols="12" align="center">

          <v-row sm="6" md="3" style="width:90%;">
            <v-text-field
              label="Email"  
              name="email"
              id="email"
              type="email"
              required
              v-model="email"
              prepend-icon="person"
              color="white"
              style="color:white; border-radius:7px;"
            ></v-text-field>
            <v-text-field
              label="Senha"
              v-model="password"
              prepend-icon="lock"
              type="password"
              required
              color="white"
            ></v-text-field>
          </v-row>
          <v-row justify="end" style="width:90%;">
            <v-btn text md="3" x-small="3"  ><p style="font-size:11px;"> Esqueceu a senha?</p></v-btn>
          </v-row>
          <v-row justify="center" class="mt-2" style="width:90%;">
            <v-btn color="white" style="width:50%; border-radius:10px;" type="submit" :disabled="loading" :loading="loading" @click="Login()" outlined >Entrar</v-btn>
          </v-row>
          <v-row class="mt-6" justify="center" >
            <p style="font-size:18px;">Ou logue com</p>
          </v-row>
          <v-row justify="center" style="width:100%;">
            <v-btn  color="white" style="width:40%; border-radius:10px;" class="mr-6" @click="facebook()" outlined>  
              <v-icon color="#000080	" left>fab fa-facebook-f</v-icon>
            </v-btn>
            <v-btn color="white" style="width:40%; border-radius:10px;" @click="google()" outlined>
                <v-icon color="red" left>fab fa-google</v-icon>
            </v-btn>
          </v-row>    
        </v-col>
      </v-row>
    </form>
  </v-container>
</template>

<script>
export default {
  data(){
    return {
      email: '',
      password: '',
    }
  },
  methods:{
    Login(){
      this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
    },
    google() {
        this.$store.dispatch('signUserGoogle')
    },
    facebook() {
        this.$store.dispatch('signUserFacebook')
    }
  },
  computed: {
    comparePassword () {
        return this.password !== this.confirmPassword ? 'As senhas devem ser iguais' : true
    },
    user (){
        return this.$store.getters.user
    },
    error (){
        return this.$store.getters.error
    },
    loading (){
        return this.$store.getters.loading
    }
  },

}
</script>

<style>

</style>