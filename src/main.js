import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import vuetify from './plugins/vuetify';
import VuexPersistence from 'vuex-persist'
import FieryVue from 'fiery-vue'
Vue.use(FieryVue)
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery

Vue.config.productionTip = false
 
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created(){
    firebase.initializeApp({
      apiKey: "AIzaSyCLNj0W8i4hkH0SRcmFhuYK4LH6YD2H9sI",
      authDomain: "isolve-8d393.firebaseapp.com",
      databaseURL: "https://isolve-8d393.firebaseio.com",
      projectId: "isolve-8d393",
      storageBucket: "isolve-8d393.appspot.com",
      messagingSenderId: "388500831152",
      appId: "1:388500831152:web:23c672dfd3d43ae3157475",
      measurementId: "G-BCZ3HQBREQ"
   
   
    }),
    firebase.auth().onAuthStateChanged(function(user) {
      var user = firebase.auth().currentUser;
      if (user) {
        const newUser = {
          id: firebase.auth().currentUser.uid,
          photoUrl: firebase.auth().currentUser.photoURL,
          name: firebase.auth().currentUser.displayName,
          email: firebase.auth().currentUser.email
        }
        store.commit('setUser', newUser)
        router.push('/home')
      } else {
        // No user is signed in.
        console.log('Não tem conta')
        router.push('/')

      }

    })
  }
}).$mount('#app')
  new VuexPersistence({  
  storage: window.localStorage
})
