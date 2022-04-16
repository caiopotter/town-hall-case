<template>
    <v-container>
        <v-card flat>
    <v-toolbar
      dense
      elevation="0"
    >
      <v-text-field
        hide-details
        prepend-icon="mdi-magnify"
        single-line
        :clearable="true"
        placeholder="Pesquisar escola"
      ></v-text-field>
    </v-toolbar>
  </v-card>
        <v-row>
            <v-col class="mb-n6" cols="12" sm="12" md="6" lg="4" v-for="(n, index) in 10" :key="index">
                    <school-card :index="n" @selectedClass="log"></school-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import SchoolCard from '../components/SchoolCard.vue';

export default {
  name: 'SchoolList',
  components: {
    SchoolCard
  },

  methods: {
        log(){
            console.log('click');
        }
    }
}
</script>
