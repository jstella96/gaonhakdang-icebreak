<template>
  <el-dialog
  :visible.sync="dialogVisible"
  :close-on-click-modal="true"
  :close-on-press-escape ="true"
  width="25%"
  top="5%"
  id="cardDialog">
  <el-row>
    <div class="dialogBox">
    <img class="dialogImg" src='../assets/img/dialog.png' >
    </div>
  </el-row>
  <el-row>
    <div class="answer">
      <p >{{cardData.answer}}</p>
    </div>
  </el-row>
  </el-dialog>
</template>

<script>

export default {
  data() {
      return {
        dialogVisible : false
      };
  },
  props:{
    cardData: Object
  },
  methods: {
     showDialog(){
      this.dialogVisible = true
     },
  }
}
</script>

<style>

</style>