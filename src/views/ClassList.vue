<template>
    <v-container>
        <v-card>
            <v-card-title>
                {{selectedSchool.name}}
            </v-card-title>
            <v-card-subtitle>
                {{selectedSchool.address}}
            </v-card-subtitle>
            <v-card-text>
                Zona {{selectedSchool.zone}}
            </v-card-text>
        </v-card>
        <v-row>
            <v-col class="mt-4" cols="12">
                <v-btn outlined color="forest"><v-icon class="mr-2">mdi-plus</v-icon>Adicionar turma</v-btn>
            </v-col>
            <v-col class="mb-n6" cols="12" sm="12" md="6" lg="4" v-for="(schoolClass, index) in selectedSchoolClasses" :key="index">
                    <class-card :index="index" :schoolClass="schoolClass"></class-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ClassCard from '../components/ClassCard.vue';

export default { 
    name: 'ClassList',
    components: {
        ClassCard
    },
    props: ['index'],
    computed: {
        selectedSchool(){
            return this.$store.getters.selectedSchool;
        },
        selectedSchoolClasses(){
            return this.$store.getters.schoolClasses;
        }
    },
    data: () => ({
        
    }),
}
</script>

<style>

</style>