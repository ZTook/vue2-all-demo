<template>
  <div id="notes">
    <h1>This is a note book</h1>
    <el-row>
      <el-col span="3"><toolbar></toolbar></el-col>
      <el-col span="9"><notes-list></notes-list></el-col>
      <el-col span="12"><editor></editor></el-col>
    </el-row>
  </div>
</template>

<script>
import Toolbar from './Toolbar.vue'
import NotesList from './NotesList.vue'
import Editor from './Editor.vue'

export default {
  components: {
    Toolbar,
    NotesList,
    Editor
  }
}
</script>
