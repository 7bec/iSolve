<template>
   <v-container style="width:100%; height:100%; " fluid>
    <form v-on:submit.prevent="entrar">
      <v-row   >
        <v-col  cols="12" align="center">

          <v-row sm="6" md="3" style="width:90%;">
            <v-text-field
              label="Email"  
              name="email"
              id="email"
              type="email"
              required
              v-model="email"
              prepend-icon="person"
              color="white"
              style="color:white; border-radius:7px;"
            ></v-text-field>
            <v-text-field
              label="Senha"
              v-model="password"
              id="password"                    
              prepend-icon="lock"
              type="password"
              required
              color="white"
            ></v-text-field>
            <v-text-field
              label="Confirmar senha"
              v-model="password"
              id="password"                    
              prepend-icon="lock"
              type="password"
              required
              color="white"
            ></v-text-field>
            <v-text-field
              label="Data de nascimento"
              v-model="data"
              prepend-icon="date_range"
              type="date"
              required
              color="white"
            ></v-text-field>
          </v-row>
          <v-row justify="center" class="mt-2" style="width:90%;">
            <v-btn color="white" style="width:60%; border-radius:10px;" outlined  type="submit" :disabled="loading" :loading="loading" @click="onsignUp()" >Criar conta</v-btn>
          </v-row>
       
        </v-col>
      </v-row>
    </form>
  </v-container>
</template>

<script>
export default {
   methods: {
        onsignUp () {
            this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
        },
        onDismissed () {
            console.log('dismiss alert')
            this.$store.dispatch('clearError')
        }

    }
}
</script>

<style>

</style>