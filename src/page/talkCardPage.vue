<template>
  <div id="talkCardPage">
    <el-row class="top">
    <span>남은 질문 : {{totalCardDatas.length}}  </span><el-button @click="shuffleCard">카드섞기</el-button><el-button @click="init">초기화</el-button>
    </el-row>
    <el-row>
      <el-col span="6" v-for="(cardData, index) in nowCardDatas" :key={cardData}>
        <div class="card" >
          <div  v-show="cardData.show" @click="cardData.show=false; cardOpen(cardData)">
            <div class="index">{{index+1}}</div>
            <img class="cardImg" src='../assets/img/card3.png'  >
          </div>
        </div>  
      </el-col>
    </el-row>
    <form-card-dialog ref="cardDialog" :cardData="cardData"/>
  </div>
</template>

<script>
import formCardDialog from '../form/formCardDialog.vue'
import cardDatas from '../assets/cardDatas.json'
import { shuffle ,cloneDeep } from 'lodash'
export default {
  components: {
    'form-card-dialog' : formCardDialog

  },
  data() {
    return {
      nowCardDatas:[],
      totalCardDatas:[],
      cardData:{

      }
    }
  },
  created() {
    this.init();
  },
  methods: {
    init(){
      this.totalCardDatas =  cloneDeep(shuffle(cardDatas))
      this.shuffleCard();
    },
    shuffleCard() {
      this.nowCardDatas = [];
      if(this.totalCardDatas.length <= 8){
        for(let i = 0 ; i < this.totalCardDatas.length ; i++){
          this.nowCardDatas.push(this.totalCardDatas[i])
        }
      }
      else{
        for(let i = 0 ; i < 8 ; i++){
          this.nowCardDatas.push(this.totalCardDatas[i])
        }
      }
    },
    cardOpen(cardData) {
     
      this.totalCardDatas = this.totalCardDatas.filter((element) => element.id !== cardData.id);
      this.cardData = cardData;
      this.$refs.cardDialog.showDialog()
    },
  }
}
</script>

<style scoped>

</style>
