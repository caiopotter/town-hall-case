/* eslint-disable */
import Vue from 'vue'

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/database'

const firebaseConfig = {
    apiKey: "AIzaSyCgcoC9y_46glOuwfVe7aLBdwVZc3tWYA4",
    authDomain: "town-hall-framework.firebaseapp.com",
    databaseURL: "https://town-hall-framework-default-rtdb.firebaseio.com",
    projectId: "town-hall-framework",
    storageBucket: "town-hall-framework.appspot.com",
    messagingSenderId: "683032567428",
    appId: "1:683032567428:web:3c20ef7ec60d759065ecd1",
    measurementId: "G-5D8CQBFJBX"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database()

const schools = database.ref('schools')
const schoolClasses = database.ref('classes')

const state = {
    schoolList: [],
    schoolClasses: [],
    selectedSchool: {}
}

const getters = {
    schoolList(state){
        return state.schoolList;
    },
    schoolClasses(state){
        return state.schoolClasses;
    },
    selectedSchool(state){
        return state.selectedSchool;
    }
}

const mutations = {
    setSchoolList(state, payload){
        state.schoolList = payload.schoolList;
    },
    setSchoolClasses(state, payload){
        state.schoolClasses = payload.schoolClasses;
    },
    setSelectedSchool(state, payload){
        state.selectedSchool = payload.selectedSchool;
    },
}

const actions = {
    async createSchool(context, payload){
        try{
            const response = await schools.push(payload);
            return ({success: true})
        }catch(e){
            console.log(e)
            return ({success: false})
        }
    },
    async createClass(context, payload){
        try{
            const response = await schoolClasses.push(payload);
            return ({success: true})
        }catch(e){
            console.log(e)
            return ({success: false})
        }
    },
    getSchoolListFromServer(context){
        schools.on('value', (schools) => {
            context.commit('setSchoolList', {
                schoolList: {...schools.val()}
            });
        })
    },
    getSchoolClassesFromServer(context, payload){
        try{
            schoolClasses.on('value', (schoolClasses) => {
                let schoolClassesList = [];
                schoolClasses.forEach(schoolClass =>{
                    if(schoolClass.val().schoolId == payload.id){
                        schoolClassesList.push(schoolClass.val());
                    }
                })
                context.commit('setSchoolClasses', {
                    schoolClasses: schoolClassesList
                });
                context.commit('setSelectedSchool', {
                    selectedSchool: payload
                });
            })
            return true
        }catch(e){
            console.log(e)
            return false
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
