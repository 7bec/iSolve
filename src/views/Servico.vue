<template>
    <div style="height:100%; background: #03a7df;">
    <v-container style="padding-bottom: 0; padding-top: 64px: ">
        <v-layout wrap>
            <p class="text-center">TIPO DE SERVIÇO</p>
            <v-select  
            
                background-color="#03a7df" 
                v-model="selectedStatus" 
                :items="tipos" 
                return-object 
                solo
                item-color="black"
                label="SELECIONE O TIPO DE ATENDIMENTO" 
                outlined >
            </v-select>
        </v-layout>
    </v-container>
    <v-container mt-6 >
        <p >DESCREVA EM DETALHES A PATOLOGIA OCORRIDA OU O SERVIÇO DESEJADO</p>
        <v-flex style="heigth:50%;">
                    <v-textarea outlined background-color="white" light v-model="patologia">
                        
                    </v-textarea>
        </v-flex>
        <v-flex class="text-center">
            <v-btn
                color="#03a7df"
                @click="trueToFirebase()"
                to='/videofoto'
                style="border-radius:15px;"
            >
                Prosseguir
            </v-btn>
        </v-flex>
    </v-container>
    </div>
</template>
<script>
import firebase from 'firebase'
export default {
    fiery: true,
    data() {
        return {
            tipos: [ 
                {text: 'CONSULTORIA', value: 'aberto'},
                {text: 'OTIMIZAÇÃO DO PROJETO', value: 'andamento'}, 
                {text: 'PROJETO', value: 'finalizado'}
            ],
            selectedTipo: "",
            patologia:'',
            selectedStatus:'',
            orcamento: this.$fiery(firebase.firestore().collection('orcamento')),
    
        }
    },
    methods:{
        goHome(){
            this.$router.push('/home');
        },
        finish () {
            this.$fires.orcamento.add({
                tipoAtendimento: this.selectedStatus,
                serviço:this.patologia
            })
            this.selectedStatus='',
            this.patologia='',

            this.$router.push('/servico')

        }

    }
}
</script>