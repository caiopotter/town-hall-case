<template>
    <v-container>
        <v-card color='light_blue'>
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
                <v-btn @click="newClassDialog = true" outlined color="navy_blue"><v-icon class="mr-2">mdi-plus</v-icon>Adicionar turma</v-btn>
            </v-col>
            <v-col class="mb-n6" cols="12" sm="12" md="6" lg="4" v-for="(schoolClass, index) in selectedSchoolClasses" :key="index">
                    <class-card :index="index" :schoolClass="schoolClass"></class-card>
            </v-col>
        </v-row>

        <v-dialog v-model="newClassDialog" max-width="500px">
        <v-card>
          <v-card-title class="mt-n1" :style="{'background-color': 'var(--v-' + 'blue' + '-base)'}">
            <span :style="{'color': 'var(--v-' + 'grey' + '-base)'}">
                Nova Turma
            </span>
            <v-spacer></v-spacer>
            <v-icon @click="closeDialog" style="color:white">mdi-close</v-icon>
          </v-card-title>
        <v-card-text class="mt-4">
            Preencha todos os campos para cadastrar uma nova turma:
        </v-card-text>
        <v-card-actions>

          <v-col
            class="mx-5"
            lg="10"
            md="10"
            sm="10"
            xs="12"
          >
        <v-form v-model="isValidForm">
          <div>
            <v-text-field
              dense
              v-model="nameValue"
              label="Nome da turma"
              outlined
              :rules="[rules.required, rules.min]"
            ></v-text-field>
          </div>
          <div>
              <v-select
              :items="yearOptions"
              v-model="yearValue"
              label="Ano"
              dense
              outlined
              :rules="[rules.required]"
            ></v-select>
          </div>
          <div>
              <v-select
              :items="shiftOptions"
              v-model="shiftValue"
              label="Turno"
              dense
              outlined
              :rules="[rules.required]"
            ></v-select>
          </div>
     
          <div>
            <v-spacer></v-spacer>
            <v-btn :loading='loading' :disabled="!isValidForm" color="blue" class="white--text"
            @click="saveFields">Cadastro
            </v-btn>
          </div>
        </v-form>
      </v-col>
        </v-card-actions>
    </v-card>
    </v-dialog>
    
    <v-snackbar
      top
      v-model="userNotification"
      timeout="5000"
      :color="statusColor"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="userNotification = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    </v-container>
</template>

<script>
import ClassCard from '../components/Cards/ClassCard.vue';

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
        newClassDialog: false,
        yearValue: '',
        nameValue: '',
        shiftValue: '',
        isValidForm: false,
        userNotification: false,
        loading: false,
        yearOptions: ['6º', '7º', '8º', '9º'],
        shiftOptions: ['Manhã', 'Tarde', 'Noite', 'Integral'],
        text: '',
        statusColor: '',
        rules: {
        required: value => !!value || 'Campo obrigatório.',
        min: v => v.length >= 3 || 'Ao menos 3 caracteres',
        }
    }),
    methods:{
        selectClass(selectedSchool){
            this.$store.dispatch('getSchoolClassesFromServer', selectedSchool).then(isOk => {
            if(isOk){
                this.$router.push('/classList')
            }
            })
        },
        async saveFields(){
            if(this.isValidForm){
                this.loading = true;
                this.$store.dispatch('createClass', 
                {
                    year: this.yearValue, 
                    name: this.nameValue, 
                    shift: this.shiftValue,
                    schoolId: this.selectedSchool.id
                }).then(response => {this.reportResultToUser(response)})
            }
        },
        clearSignUpForm(){
            this.emailValue = '';
            this.nameValue = '';
            this.addressValue = '';
            this.statusMessage = '';
        },
        closeDialog(){
            this.clearSignUpForm();
            this.newClassDialog = false;
        },
        reportResultToUser(response){
            if(response.success){
                this.text = "Sucesso ao criar Escola";
                this.statusColor = "green"
            }else{
                this.text = "Ocorreu algum erro ao criar Escola";
                this.statusColor = "red"
            }
            this.userNotification = true;
            this.loading = false;  
            this.closeDialog();    
        },
        
    }
}
</script>

<style>

</style>