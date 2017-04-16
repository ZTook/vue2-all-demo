<template>
  <div id="toolbar">
    <el-row>
      <el-col span="24"><i @click="addNote" class="el-icon-plus"></i></el-col>
    </el-row>
    <el-row>
      <el-col span="24"><i @click="toggleFavorite" class="el-icon-star-on"></i></el-col>
    </el-row>
    <el-row>
      <el-col span="24"><i @click="deleteNote" class="el-icon-close"></i></el-col>
    </el-row>
    <el-row>
      <p>{{activeNoteText}}</p>
    </el-row>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'activeNote',
      'activeNoteText'
    ])
  },
  methods: {
    ...mapActions([
      'addNote',
      'deleteNote',
      'toggleFavorite'
    ])
  }
}
</script>
