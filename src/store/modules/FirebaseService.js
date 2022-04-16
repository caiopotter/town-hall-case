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
const classes = database.ref('classes')

/* classes.on('value', (schoolClass) => {
    schoolClass.forEach(singleClass => {if(singleClass.val().schoolId == 2) console.log(singleClass.val())})
})

classes.child('6').set({name: 'Turma dinamica 6', schoolId: 2})

schools.on('value', (q) => {
    console.log(q.val())
}) */

const state = {
    schoolList: [],
}

const getters = {
    schoolList(state){
        return state.schoolList;
    },
}

const mutations = {
    setSchoolList(state, payload){
        state.schoolList = payload.schoolList;
    },
}

const actions = {
    getSchoolListFromServer(context){
        schools.on('value', (schools) => {
            context.commit('setSchoolList', {
                schoolList: {...schools.val()}
            });
        })
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}
