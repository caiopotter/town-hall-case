<template>
    <v-container>
        <v-card outlined>
            <v-card-title>
                {{school.name}}
            </v-card-title>
            <v-card-subtitle>
                {{school.address}}
            </v-card-subtitle>
            <v-card-text>
                Zona {{school.zone}}
            </v-card-text>
            <v-card-actions>
                    <v-col cols="12" class="mt-n6 text-right">
                        <v-btn outlined @click="selectSchool">
                            <v-icon>mdi-plus</v-icon>
                            Detalhes
                            </v-btn>
                    </v-col>
                </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>

export default {
  name: 'SchoolCard',
  props: ['index', 'school'],

  methods: {
        selectSchool(){
            this.$emit('selectedClass', {...this.school, ...{id: this.index}});
        }
    }
}
</script>
