<template>
  <div id="note-editor">
    <!--textarea value="activeNoteText" @input="editNote" class="form-control"></textarea-->
    <el-input type="textarea" value="activeNoteText" @blur="editNote" class="form-control" rows="5" placeholder="请输入内容" v-model="activeNoteText"></el-input>
  </div>
</template>

<script>

import { mapGetters,mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'activeNoteText',
    ])
  },
  methods: {
    ...mapActions([
      'editNote' // 映射 this.increment() 为 this.$store.dispatch('increment')
    ])
  }
}
</script>
