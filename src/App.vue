<template>
  <v-app>
    <v-app-bar
      app
      color="dark_blue"
      dark
    >
    <div v-if="$route.path.includes('/classList')">
      <v-row>
        <v-col cols="3">
        <div class="d-flex align-center">
          <v-btn @click="$router.push('/')" large icon color="white">
            <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
        </div>
        </v-col>
        <v-col class="d-flex align-center" cols="9">
          <div>Turmas - {{$store.getters.selectedSchool.name}}</div>
        </v-col>
      </v-row>
    </div>
    <span v-else>
      Lista de Escolas
    </span>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  mounted(){
    this.$store.dispatch('getSchoolListFromServer')
    this.$router.push('/').catch(() => {})
  },
};
</script>
