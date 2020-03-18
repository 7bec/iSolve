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
    }
  },
  actions: {
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
      
    },
    signUserOut({commit}){
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signOut()
      
    },
    clearError({commit}){
      commit('clearError')
    },
    emailLogin({commit},payload){
      firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
      .then(function() {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem('emailForSignIn', email);
      })
      .catch(function(error) {
        // Some error occurred, you can inspect the code: error.code
      });

    } 
  },
  modules: {
  }
})
