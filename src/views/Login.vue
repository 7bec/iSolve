<template>  
  <v-container class="pa-0 ma-0">
    <v-col  cols="12" align="center" >
      <v-row>
        <v-img contain :src="require('../../imagens/logo.png')" style="height:150px; width:150px;"></v-img>
      </v-row>
    <v-row class="mt-0 " justify="center">
        <v-btn class="mr-3"  v-if="registrar==true& entrar==false" @click="entrarComponent()" text>Entrar</v-btn> 
        <!-- <v-divider vertical dark inset></v-divider>      -->
        <v-btn v-if="entrar==true" text @click="registrarComponent()">Registrar-se</v-btn> 
        <login  v-if="entrar==true& registrar==false"></login>
        <cadastro v-if="registrar==true& entrar==false"></cadastro>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import login from '../components/Login'
import cadastro from '../components/Cadastro'
export default {
     data () {
      return {
        entrar:true,
        registrar:false
      }
    },
    components:{
      login: login,
      cadastro: cadastro
    },
    methods:{
        registrarComponent(){
          this.entrar=false
          this.registrar=true
        },
        entrarComponent(){
          this.entrar=true
          this.registrar=false
        }

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
