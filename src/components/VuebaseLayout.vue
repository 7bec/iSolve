<template>
<v-app v-if="this.$route.path!='/' && this.$route.path!='/signup'" class="change-font">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      right
      style="background:#03a7df; "
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          link
          @click="functions(item)"
        
        >
          <v-list-item-action >
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title style="font-size:17px;"
>
              {{ item.text }}
              
            </v-list-item-title>
          </v-list-item-content>
          </v-list-item>
          <v-list-item @click="signOut">
          <v-list-item-action >
            <v-icon>fas fa-sign-out-alt</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title style="font-size:17px;">
             Sair
            </v-list-item-title>
          </v-list-item-content>
          </v-list-item>
          
   
      </v-list>
      <v-footer fixed color=#03a7df>
        <strong style="font-size:10px;">Siga-nos em nossas redes sociais!</strong>
        <v-spacer></v-spacer>
        <div>&copy; {{ new Date().getFullYear() }}</div>
      </v-footer>
    </v-navigation-drawer>
  <v-toolbar color="#03a7df" flat app max-height="50px">

      <v-toolbar-title>
       <v-img contain :src="require('../../imagens/logo.png')"  max-height="100px " ></v-img>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-app-bar-nav-icon  @click.stop="drawer = !drawer" ></v-app-bar-nav-icon>
     
    </v-toolbar>
    <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>
  <v-app v-else>
    <v-content style="background:#03a7df;">
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      items: [
        { icon: 'fas fa-home',rota: '/home', text: 'Home'},
        { icon: 'watch_later',rota:'/orcamento', text: 'Solicitar orçamento' },
        { icon: 'history', rota:'/historico',text: 'Histórico' },
        { icon: 'fas fa-users',rota:'/contate', text: 'Equipe técnica' },
        { icon: 'contact_support', rota:'/suporte',text: 'Suporte' },
        { icon: 'person', rota:'/cadastro',text: 'Alterar dados' },
        { icon: 'info',rota:'/sobrenos', text: 'Sobre nós' },
        
      ]
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
    methods:{
         signOut(){
            return this.$store.dispatch('signUserOut')
        },
          functions(item){
            if (item.text === 'Sair'){
                this.$store.dispatch('signUserOut') 
            }
            this.$router.push( item.rota )
            
        },
    }
  }
</script>
<style >
.change-font {
    font-family: "Roboto", Helvetica, sans-serif;
}
</style>