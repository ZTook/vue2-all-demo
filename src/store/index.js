import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

import * as actions from './actions'

const state = {
  username: "",
  notes: [],
  activeNote: {}

}

const getters = {
  activeNoteText: state => state.activeNote.text,
  notes: state => state.notes,
  activeNote: state => state.activeNote

}

const mutations = {

  SHOW_USERNAME(state){
    alert(state.username)
  },

  ADD_NOTE (state) {
    const newNote = {
      text: 'New note',
      favorite: false
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  },

  EDIT_NOTE (state, text) {
    state.activeNote.text = text
  },

  DELETE_NOTE (state) {
    state.notes.pop(state.activeNote)
    state.activeNote = state.notes[0]
  },

  TOGGLE_FAVORITE (state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },

  SET_ACTIVE_NOTE (state, note) {
    state.activeNote = note
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
