
<template>
    <v-container style="width:100%; height:100%; background:#03a7df;" class="change-font alinhamento">
        <v-row class="mb-0 mt-0">
            <v-col
                sm="6"
                md="5"
                offset-md="2"
                lg="6"
                offset-lg="0"
            >       
                <v-card
                    class="card"
                    style="border:1px solid white;"
                    color="#03a7df"
                    outlined
                    hover
                    tile
                    to='/orcamento'
                >
                <v-icon x-large  style="width:100%;"> fas fa-sticky-note</v-icon>
                <h3 style="color:white;" class="text-center alinhar-texto">Solicitar meu orçamento</h3>
                </v-card>
            </v-col>
            <v-col
                sm="6"
                md="5"
                offset-md="2"
                lg="6"
                offset-lg="0"
              
            >
                <v-card
                    color="#03a7df"
                    class="card"
                    style="border:1px solid white;"
                    outlined
                    hover
                    to='/historico'
                    tile
                >
                    <v-icon x-large  style="width:100%;">watch_later</v-icon>
                    <h3 style="color:white;" class="text-center">Histórico de consultas</h3>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="mb-0 mt-0">
            <v-col
                sm="6"
                md="5"
                offset-md="2"
                lg="6"
                offset-lg="0"
                style="width:50%;"
            >
                <v-card
                    color="#03a7df"
                    class="card"
                    style="border:1px solid white;"
                    outlined
                    hover
                    tile
                >
                <v-icon x-large  style="width:100%;">fas fa-users</v-icon>
                <h3 style="color:white;">Equipe Técnica</h3>
                </v-card>
            </v-col>
            <v-col
                sm="6"
                md="5"
                offset-md="2"
                lg="6"
                style="width:50%;"
                offset-lg="0"
            >
                <v-card
                    color="#03a7df"
                    class="card"
                    style="border:1px solid white;"      
                    outlined
                    hover
                    tile
                    to='/contate'
                >
                    <v-icon x-large  style="width:100%;">fas fa-phone</v-icon>
                    <h3 style="color:white" class="text-center"> Contate nosso suporte</h3>     
                </v-card>
            </v-col>
        
        </v-row>
        <v-row>
            <v-col
                sm="6"
                md="5"
                offset-md="2"
                lg="6"
                offset-lg="0"
                style="width:50%;"
            >
                <v-card
                color="#03a7df"
                class="card"
                style="border:1px solid white;"
                outlined
                hover
                tile
                to='/cadastro'
                >
                <!-- <v-img contain :src="require('../../imagens/Tela home/alterar dados icon2.png')" style="width:60%; height:100%; "></v-img> -->
                <v-icon x-large  style="width:100%;">account_box</v-icon>
                <h3 style="color:white; " class="text-center">Alterar dados pessoais</h3>
                </v-card>
            </v-col>
            <v-col
                sm="6"
                md="5"
                offset-md="2"
                lg="6"
                offset-lg="0"
                style="width:50%;"
            >
                <v-card
                color="#03a7df"
                class="card"
                style="border:1px solid white;"
                outlined
                hover
                tile
                >
                <v-icon x-large  style="width:100%;">info</v-icon>
                <h3 style="color: white;" class="text-center">Sobre nós </h3>
                </v-card>
            </v-col>
        </v-row>
          <!-- <v-footer fixed color=#03a7df>
        <v-spacer></v-spacer>
        <div>&copy; {{ new Date().getFullYear() }}</div>
      </v-footer> -->
    </v-container>
</template>

<script>
export default {
    methods:{
        signOut(){
            return this.$store.dispatch('signUserOut')
        },
    },
    computed: {
        user (){
        console.log('Home'+this.$store.getters.user)
           return this.$store.getters.user
        }  
    }
}
</script>

<style>
.card{
    display: block;
    align-content: center;
    text-align: center;
    height: 130px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    padding: 15px;
    margin-top: 20px;

}
.alinhar-texto{
    justify-content: end;
}
.alinhamento{
    display:flex;
    flex-wrap: wrap;
    height: 80%;
    justify-content: center;
    
}
</style>