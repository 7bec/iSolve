import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    loading: false,
    error: null,
    isWithEmail: false,
  },
  mutations: {
    setUser(state,payload){
      state.user=payload
    },
    setLoading(state, payload) {
      state.loading = payload
    },
    setError(state, payload){
      state.error = payload
    },
    clearError(state){
      state.error = null
    },
    isWithEmail(state,payload){
      state.isWithEmail = payload
    }
  },
  getters:{
    user (state){
      return state.user
    },
    loading(state){
      return state.loading
    }
  },
  actions: {
    signUserUp ({commit}, payload){
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          commit('setLoading', false)
          const newUser = {
            id: firebase.auth().currentUser.uid,
            photoUrl: firebase.auth().currentUser.photoURL,
            name: firebase.auth().currentUser.displayName,
            email: firebase.auth().currentUser.email
          }
          firebase.firestore().collection("usuarios").doc(newUser.id).set({
            name: newUser.name,
            isEmployee: false
          
          })
          .then(function() {
            console.log("Document successfully written!");
          })
          .catch(function(error) {
            console.error("Error writing document: ", error);
          });
          
          commit('setUser', newUser )

        } 
      )
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        }
      )
    },
    signUserIn({commit}, payload){
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {

          const newUser = {
            id: firebase.auth().currentUser.uid,
            photoUrl: firebase.auth().currentUser.photoURL,
            name: firebase.auth().currentUser.displayName,
            email: firebase.auth().currentUser.email
          }
          commit('setLoading', false)
          commit('isWithEmail', true)
          
          firebase.firestore().collection("usuarios").doc(newUser.id).update({
            name: newUser.name
          })
          .then(function() {
            console.log("Document successfully written!");
          })
          .catch(function(error) {
            console.error("Error writing document: ", error);
          });
          commit('setUser', newUser )
          
          
        } 
      )
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        }
      )

      
    },
     signUserOut({commit}){
      commit('setLoading', false)
      commit('clearError')
      firebase.auth().signOut()
    },
    clearError({commit}){
      commit('clearError')
    },
    signUserGoogle({commit}){
      const googleProvider = new firebase.auth.GoogleAuthProvider()
      googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly')
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithRedirect(googleProvider)
    },
    
    signUserFacebook({commit}){
      const facebookProvider = new firebase.auth.FacebookAuthProvider();
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithRedirect(facebookProvider)
      
    }

   
  },
  modules: {
  }
})
