<template>
  <span>
    <v-container class="img">
      <v-flex sm="6" md="5" offset-md="2" lg="6" offset-lg="0" >
          <v-img  contain :src="require('../../imagens/logo.png')"></v-img>
      </v-flex>
    </v-container>
    <v-container>  
      <form v-on:submit.prevent="entrar">
        <v-row  no-gutters>
          <v-col cols="12" sm="6" class="col"  >
              <v-text-field
                  label="Email"
                  solo                
                  name="email"
                  id="email"
                  light
                  background-color="white"
                  type="email"
                  required
                  persistent-hint
                  v-model="email"
                  color="white"
                  style="color:white;"
                  rounded
              ></v-text-field>
              
              <v-text-field
                  label="Senha"
                  light
                  background-color="white "
                  solo 
                  v-model="password"
                  id="password"
                  name="password"
                  type="password"
                  required
                  rounded
              ></v-text-field>
              <v-btn style="width:100%;" color="#4169E1" rounded dark type="submit" @click="entrar" :disabled="loading" :loading="loading">
                Entrar 
              <span slot="loader" class="custom-loader">
                  <v-icon light>cached</v-icon>
              </span>  
              </v-btn>
                  <v-btn rounded text color="#4169E1" style="font-size:10px; width:100%; color:white;">
                  Esqueci minha senha
              </v-btn>
              <v-btn  rounded text   @click="signUp()" style="font-size:15px; width:100%; color:white; margin-top:10%;">
                  <p >CRIAR CONTA</p>
              </v-btn>
              <p class="text-center">ou </p>
              <v-btn rounded text style="font-size:15px; width:100%;" dark background-color="#4169E1"  @click.stop="dialog = true">
                  <p>Entrar com minha<br> rede social</p>
              </v-btn>
          </v-col>
        </v-row>
      </form>
    </v-container>
    <v-row justify="center">
      <v-dialog v-model="dialog"   max-width="600px">
        <v-card color="white" class="text-center">
          <v-card-title>
          <span class="text-center" style="color: #03a7df;">Redes sociais</span>
          </v-card-title>
          <v-col
              sm="6"
              md="5"
              offset-md="2"
              lg="6"
              offset-lg="0">
                  <v-btn rounded color="error" @click="google">
                      <v-icon color="white" left>fab fa-google</v-icon>
                      <span>Login com o Google</span>
                  </v-btn>
          </v-col>
          <v-col
              sm="6"
              md="5"
              offset-md="2"
              lg="6"
              offset-lg="0">
                  <v-btn rounded color="primary" @click="facebook">
                      <v-icon color="white" left>fab fa-facebook</v-icon>
                  <span>Login com o Facebook</span>
                  </v-btn>
          </v-col>         
        </v-card>
      </v-dialog>
    </v-row>
  </span>
</template>

<script>
export default {
     data () {
      return {
        dialog: false,
        email: '',
        password: ''
      }
    },
    methods:{
        entrar(){
              this.$store.dispatch('emailLogin', {email: this.email, password: this.password})
        },
        google() {
            this.$store.dispatch('signUserGoogle')
        },
        facebook() {
            this.$store.dispatch('signUserFacebook')
        },
    },
      watch: {
        user(value){
            if (value !== null && value !== undefined){
                this.$router.push('/home')
            }
        },
        verify(value){
            if (value == null || value == undefined){
                this.$router.push('/cadastro')
            }
            
        }
            
        
    },
     computed: {
        user (){
           return this.$store.getters.user
        },
        error (){
            return this.$store.getters.error
        },
         loading (){
            return this.$store.getters.loading
        },
        verify(){
            return this.$store.getters.cpf
        }
   
        
    }

}
</script>

<style>

.img{
  width:200px;
  position: relative;
  display: flex;
  align-items: center; 
}


</style>
