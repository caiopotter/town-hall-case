<template>
    <v-container>
        <v-card outlined>
            <v-card-title>
                {{schoolClass.name}}
            </v-card-title>
            <v-card-subtitle>
                {{schoolClass.grade}}
            </v-card-subtitle>
            <v-card-text>
                {{schoolClass.shift}}
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
