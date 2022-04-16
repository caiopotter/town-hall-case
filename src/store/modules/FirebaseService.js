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

classes.on('value', (schoolClass) => {
    schoolClass.forEach(singleClass => {if(singleClass.val().schoolId == 2) console.log(singleClass.val())})
})

classes.child('6').set({name: 'Turma dinamica 6', schoolId: 2})

schools.on('value', (q) => {
    console.log(q.val())
})

const state = {
    groupPreferences: {},
    listeners: {},
    challengeBattles: {}
}

const getters = {
    groupPreferences(state) {
        return state.groupPreferences
    },
    battleListeners(state) {
        return state.listeners
    },
    challengesBattles(state) {
        return state.challengeBattles
    }
}

const mutations = {

    setGroupPreferences(state, payload) {
        Vue.set(state.groupPreferences, payload.id, payload)
    },
    setListener(state, payload) {
        state.listeners[payload.battleId] = payload.listener
    },
    removeListener(state, payload) {
        delete state.listeners[payload.id]
    },
    setChallengeBattles(state, payload) {
        // state.challengeBattles[payload.challenge.id] = payload.battles
        Vue.set(state.challengeBattles, payload.challenge.id, payload.battles)
    }
}

const actions = {
    writeQuestionReportData(context, payload) {
        database.ref('LMS/questoes_denunciadas/' + payload[0]).set({
            id: payload[0],
            erro: payload[1],
            desc: payload[2],
            user: payload[3]
        });
    },

    setUserToken(context, token) {
        database.ref('user_preferences/' + context.getters.user.id)
            .child('token')
            .set(token);
    }

}

export default {
    state,
    getters,
    mutations,
    actions
}
