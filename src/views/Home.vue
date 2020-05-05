
<template>
    <v-container fluid >
        <v-row dense>
            <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
            style="width:60%;"
            class="text-center "
            >
            <v-card  id="card" class="text-center mt-4" raised dark>
                
                <v-avatar circle style="margin-top:30px; position:relative; border-radius:60px;" size="62" color="white">
                    <v-icon color="blue" dark >{{card.icon}}</v-icon>
                </v-avatar>
                <v-card-title id="text" class="text--center" style="border:1px solid black;"  ><h5 style="color:white; ">{{card.title}}</h5></v-card-title>
            </v-card>
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
export default {
    data: () => ({
      cards: [
        { title: 'Orçamento', flex: 6, icon:'mdi-account-circle' },
        { title: 'Histórico', flex: 6, icon:'mdi-account-circle' },
        { title: 'Alterar dados', flex: 6, icon:'mdi-account-circle'},
        { title: 'Suporte', flex: 6 , icon:'mdi-account-circle'},
        { title: 'Alterar dados', flex: 6, icon:'mdi-account-circle'},
        { title: 'Suporte', flex: 6, icon:'mdi-account-circle' },
      ],
    }),
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

#text{
    z-index: 2;
}
#card{
    background-color: rgb(255, 255, 255);
    background-color: rgba(255, 255, 255, 0.35);
    z-index: 1;
    height:150px; 
    border-radius:20px; 
}
</style>