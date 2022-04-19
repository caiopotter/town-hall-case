<template>
    <v-container>
        <v-card outlined color="lightest_blue">
            <v-card-title>
                {{schoolClass.name}}
            </v-card-title>
            <v-card-subtitle>
                {{schoolClass.year}} ano
            </v-card-subtitle>
            <v-card-text>
                Turno: {{schoolClass.shift}}
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>

export default {
  name: 'ClassCard',
  props: ['index', 'schoolClass'],

  methods: {
        
    }
}
</script>
