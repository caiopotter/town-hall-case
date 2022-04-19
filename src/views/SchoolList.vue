<template>
    <v-container>
        <v-card flat>
          <v-toolbar
            dense
            elevation="0"
          >
          </v-toolbar>
          <v-row>
            <v-col cols="12">
              <v-btn outlined color="navy_blue" @click="newSchoolDialog = true"><v-icon class="mr-2">mdi-plus</v-icon>Adicionar Escola</v-btn>
            </v-col>
            <v-col cols="12">
              <v-text-field
                hide-details
                prepend-icon="mdi-magnify"
                single-line
                :clearable="true"
                placeholder="Pesquisar escola"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card>
      <v-row>
          <v-col class="mb-n6" cols="12" sm="12" md="6" lg="4" v-for="(school, index) in schoolList" :key="index">
                  <school-card :index="index" :school="school" @selectedClass="selectClass"></school-card>
          </v-col>
      </v-row>

      <v-dialog v-model="newSchoolDialog" max-width="500px">
        <v-card>
          <v-card-title class="mt-n1" :style="{'background-color': 'var(--v-' + 'blue' + '-base)'}">
            <span :style="{'color': 'var(--v-' + 'grey' + '-base)'}">
                Nova Escola
            </span>
            <v-spacer></v-spacer>
            <v-icon @click="closeDialog" style="color:white">mdi-close</v-icon>
          </v-card-title>
        <v-card-text class="mt-4">
            Preencha todos os campos para cadastrar uma nova escola:
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
              label="Nome da escola"
              outlined
              :rules="[rules.required, rules.min]"
            ></v-text-field>
          </div>
          <div>
            <v-text-field
              dense
              v-model="addressValue"
              label="Endereço"
              :rules="[rules.required, rules.min]"
              outlined
            ></v-text-field>
          </div>
          <div>
            <v-select
              :items="zoneOptions"
              v-model="zoneValue"
              label="Zona"
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
import SchoolCard from '../components/Cards/SchoolCard.vue';

export default {
  name: 'SchoolList',
  components: {
    SchoolCard,
  },
  computed:{
    schoolList(){
          return this.$store.getters.schoolList;
      },
  },
  data: () => ({
    newSchoolDialog: false,
    addressValue: '',
    nameValue: '',
    zoneValue: '',
    zoneOptions: ['Norte', 'Sul', 'Leste', 'Oeste'],
    isValidForm: false,
    userNotification: false,
    loading: false,
    text: 'oi?',
    statusColor: '',
    rules: {
      required: value => !!value || 'Campo obrigatório.',
      min: v => v.length >= 3 || 'Ao menos 3 caracteres',
    }
  }),
  methods: {
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
        this.$store.dispatch('createSchool', 
        {
          address: this.addressValue, 
          name: this.nameValue, 
          zone: this.zoneValue, 
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
      this.newSchoolDialog = false;
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
  },
}
</script>
