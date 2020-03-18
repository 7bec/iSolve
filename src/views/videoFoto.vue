<template>
    <v-container style="background: #03a7df; height:100%;">
        <h4 class="text-center" style="margin-top:50px;">ADICIONE FOTOS E VÍDEOS DA PATOLOGIA PARA QUE POSSAMOS IDENTIFICAR O PROLEMA E OBTER MAIS DETALHES DO OCORRIDO</h4>
        
        <v-layout row wrap>
            <v-flex xs12 md6 class="text-center pa-5">
                <v-btn 
                style="width:80%;" 
                color="#4169E1"
                to='/camera'
                dark>
                <v-flex><v-icon>camera_alt</v-icon></v-flex>
                <v-flex class="text-center">ADICIONAR FOTO</v-flex>
                </v-btn>
            </v-flex>
            <v-flex xs12 md6 class="text-center pa-5">
                <v-btn 
                style="width:80%;" 
                color="#4169E1"
                dark>
                    <v-flex><v-icon>videocam</v-icon></v-flex>
                <v-flex class="text-center">ADICIONAR VÍDEO</v-flex>
                </v-btn>
            </v-flex>
            <v-flex xs12 md6 class="text-center pa-10">
                <v-btn 
                style="width:100%;" 
                color="#4169E1"
                dark
                to='/home'>
                    SOLICITAR ORÇAMENTO
                </v-btn>
                <p style="font-size:13px;" class="text-center">*SEU ORÇAMENTO SERÁ ENVIADO PARA SEU EMAIL CADASTRADO EM ATÉ 24 HORAS.</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>