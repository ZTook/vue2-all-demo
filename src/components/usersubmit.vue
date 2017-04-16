<template>
    <div class="form-group">
        <div class="col-sm-10 col-sm-offset-2">
            <el-button type="button" @click="showUserName" class="btn btn-default">提交</el-button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

  export default{
    /*
    methods: {
      showUserName () {
        this.$store.commit('SHOW_USERNAME')
      }
    }
    */
    methods: {
      ...mapActions([
        'showUserName' // 映射 this.increment() 为 this.$store.dispatch('increment')
      ])
    }
  }
</script>
