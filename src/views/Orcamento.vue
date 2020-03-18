<template>      
    <v-container  style="width:100%; height:100%; background:#03a7df;">
        <v-layout class="text-center" row >        
            <v-row no-gutters class="pa-4">
                <v-col cols="12" sm="6">
                    <h4>NOME DO EMPREENDIMENTO</h4>
                    <v-text-field
                        solo
                        class="text-field"
                        v-model="nomeEmp"
                        light
                        background-color="white"
                        required
                    ></v-text-field>
                </v-col>
                
                <v-col cols="12" sm="6">
                    <h4>ENDEREÇO</h4>
                    <v-text-field
                         solo
                        light
                        background-color="white"
                        required
                        class="text-field"
                        v-model="endereco"
                    ></v-text-field>
                </v-col>
                <v-col class="pa-0" cols="6" sm="3">
                    <h4>BAIRRO</h4>
                    <v-text-field
                         solo
                        light
                        background-color="white"
                        required
                        v-model="bairro"
                        class="text-field"
                    ></v-text-field>
                </v-col>
                <v-col class="pa-0" cols="6" sm="3">
                    <h4>CEP</h4>
                    <v-text-field
                         solo
                        light
                        background-color="white"
                        required
                        class="text-field"
                        v-model="CEP"
                    ></v-text-field>
                </v-col>
                  <v-col class="pa-0" cols="6" sm="3">
                    <h4>CIDADE</h4>
                    <v-text-field
                         solo
                         class="text-field"
                        light
                        background-color="white"
                        required
                        v-model="cidade"
                    ></v-text-field>
                </v-col>
                <v-col class="pa-0" cols="6" sm="3">
                    <h4>ESTADO</h4>
                    <v-text-field
                        solo
                        light
                        background-color="white"
                        class="text-field"
                        required
                        v-model="estado"
                    ></v-text-field>
                </v-col>
                
                <v-col cols="12" sm="6">
                    <h4>NOME DO ENGENHEIRO RESPONSÁVEL</h4>
                    <v-text-field
                       
                         solo
                        light
                        background-color="white"
                        class="text-field"
                        required
                        v-model="nomeEng"
                    ></v-text-field>
                </v-col> 
                
                <v-col cols="12" sm="6">
                    <h4>CREA</h4>
                    <v-text-field
                         solo
                        light
                        background-color="white"
                        required
                        v-model="crea"
                        class="text-field"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-flex>
                <v-btn class="text-center" @click="finish()" dark color="#03a7df" >Prosseguir</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
import firebase from 'firebase'
export default {
    fiery: true,
    data () {
        return {
            crea:'',
            nomeEng: '',
            nomeEmp: '',
            cidade: '',
            orcamento: this.$fiery(firebase.firestore().collection('orcamento')),
            CEP: '',
            bairro:'',
            estado:'',
            endereco:'',
            // aberto: this.$fiery(firebase.firestore().collection('orcamento'), {
            //     query: q => q.where( this.$store.getters.getUser,'==', true)
            // })
        }
    },
    methods:{
        goHome(){
            this.$router.push('/home');
        },
        finish () {
            this.$fires.orcamento.add({
                nomeEmp: this.nomeEmp,
                endereço:this.endereco,
                bairro:this.bairro,
                cidade:this.cidade,
                estado:this.estado,
                CEP: this.CEP,
                CREA:this.crea,
                status:'aberto',
        
            })
            this.nomeEmp=''
            this.endereco=''
            this.bairro=''
            this.cidade=''
            this.estado=''
            this.CEP=''
            this.crea=''
            this.$router.push('/servico')

        },
        computed:{
                    user (){
        console.log('Home'+this.$store.getters.user)
           return this.$store.getters.user
        },
        }
    }
}
</script>

<style>
.text-field{
    border-radius: 15px;
}
</style>