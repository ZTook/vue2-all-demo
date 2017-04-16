<template>
  <div id="notes-list">

    <div id="list-header">
      <h2>Notes | coligo</h2>
      <el-button-group>
        <!-- All Notes button -->
          <el-button type="primary" @click="show = 'all'" :class="{active: show === 'all'}">All Notes</el-button>
        <!-- Favorites Button -->
          <el-button type="primary" @click="show = 'favorites'" :class="{active: show === 'favorites'}">Favorites</el-button>
      </el-button-group>
    </div>
    <!-- render notes in a list -->
    <div class="container">
      <div class="list-group">
        <a v-for="note in filteredNotes" class="list-group-item" href="#" :class="{active: activeNote === note}" @click="updateActiveNote(note)">
          <h4 class="list-group-item-heading">
            {{note.text.trim().substring(0, 30)}}
          </h4>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'

export default {
  data () {
    return {
      show: 'all'
    }
  },
  computed: {
    ...mapGetters([
      'notes',
      'activeNote',
    ]),

    filteredNotes () {
      if (this.show === 'all'){
        return this.notes
      } else if (this.show === 'favorites') {
        return this.notes.filter(note => note.favorite)
      }
    }
  },
  methods: {
    ...mapActions([
      'updateActiveNote'
    ])
  }
}
</script>
