<template>
    <span>
    <v-container class="img">
      <v-flex sm="6" md="5" offset-md="2" lg="6" offset-lg="0" >
          <v-img  contain :src="require('../../imagens/logo.png')"></v-img>
      </v-flex>
    </v-container>
    <v-container>
        <form @submit.prevent="entrar">     
            <v-row  no-gutters>
                    <v-col cols="12" sm="6"   >
                        <v-text-field
                            label="Email"
                            class="v-text-field-input"
                            persistent-hint
                            solo
                            v-model="email"
                            rounded
                            required
                             light
                            background-color="white"
                        ></v-text-field>
                        <v-text-field
                            label="Senha"
                            v-model="password"
                            rounded
                            solo
                            type="password"
                             light
                            background-color="white"
                            required
                        ></v-text-field>
                         <v-text-field
                            solo
                            label=" Confirmar senha"
                            type="password"
                            light
                            background-color="white"
                            v-model="confirmPassword"
                            :rules="[comparePassword]"
                            rounded
                            required
                        ></v-text-field>
                        <v-layout row class="text-center">
                        <v-flex>
                        <v-btn style="width:80%;"
                            color="#4169E1"
                            rounded
                            dark
                            type="submit"  
                            @click="resgistrar"          
                        >
                        Registrar  
                        </v-btn>
                        </v-flex>
                        <v-flex >
                        <v-btn style="width:80%;"
                            color="#4169E1"
                            rounded
                            dark
                            to='/'          
                        >
                        voltar 
                        </v-btn>
                        </v-flex>
                        </v-layout>
                    </v-col>
            
            </v-row>
        </form>
    </v-container>    
    </span>
</template>

<script>
export default {
     data () {
      return {
        dialog: false,
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    methods:{
        resgistrar(){
              this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
        },
        google() {
            this.$store.dispatch('signUserGoogle')
        },
        facebook() {
            this.$store.dispatch('signUserFacebook')
        },
        onDismissed () {
            //console.log('dismiss alert')
            this.$store.dispatch('clearError')
        },
        signUp(){
            this.$router.push('/signup')
        },
        //  comparePassword () {
        //     return this.password !== this.confirmPassword ? 'As senhas devem ser iguais' : true
        // },
    },
      watch: {
        user(value){
            if (value !== null && value !== undefined){
                this.$router.push('/home')
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
         comparePassword () {
            return this.password !== this.confirmPassword ? 'As senhas devem ser iguais' : true
        },
   
        
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