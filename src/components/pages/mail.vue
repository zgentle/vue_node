<template>
  <div class="peipei">
    <div class="content">
      <span>师妹：</span>
      <p>gdfgdfg的风格撒大苏打撒旦看来设计的灵感枯竭的付款了的法国空军的浪费国家的离开法国撒发生发射点发射点发</p>
      <p>gdfgdfg的风格撒大苏打撒旦看来设计的灵感枯竭的付款了的法国空军的浪费国家的离开法国撒发生发射点发射点发</p>
      <p>gdfgdfg的风格撒大苏打撒旦看来设计的灵感枯竭的付款了的法国空军的浪费国家的离开法国撒发生发射点发射点发</p>
      <p>gdfgdfg的风格撒大苏打撒旦看来设计的灵感枯竭的付款了的法国空军的浪费国家的离开法国撒发生发射点发射点发</p>
      <p>gdfgdfg的风格撒大苏打撒旦看来设计的灵感枯竭的付款了的法国空军的浪费国家的离开法国撒发生发射点发射点发</p>
      <p>gdfgdfg的风格撒大苏打撒旦看来设计的灵感枯竭的付款了的法国空军的浪费国家的离开法国撒发生发射点发射点发</p>
      <p>gdfgdfg的风格撒大苏打撒旦看来设计的灵感枯竭的付款了的法国空军的浪费国家的离开法国撒发生发射点发射点发</p>
      <p>gdfgdfg的风格撒大苏打撒旦看来设计的灵感枯竭的付款了的法国空军的浪费国家的离开法国撒发生发射点发射点发</p>
      <p>gdfgdfg的风格撒大苏打撒旦看来设计的灵感枯竭的付款了的法国空军的浪费国家的离开法国撒发生发射点发射点发</p>
      <p>gdfgdfg的风格撒大苏打撒旦看来设计的灵感枯竭的付款了的法国空军的浪费国家的离开法国撒发生发射点发射点发</p>
      <p>gdfgdfg的风格撒大苏打撒旦看来设计的灵感枯竭的付款了的法国空军的浪费国家的离开法国撒发生发射点发射点发</p>
      <p>gdfgdfg的风格撒大苏打撒旦看来设计的灵感枯竭的付款了的法国空军的浪费国家的离开法国撒发生发射点发射点发</p>
      <div class="touch icon icon-pointclick" @click="opendialog"></div>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      center
      width="30%">
      <span>{{infotext}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button v-if="current !== 5" type="primary" @click="dialogVisible = false;setValue(1)">愿 意</el-button>
        <el-button v-if="current !== 5" @click="nowilling">不愿意</el-button>
        <el-button v-if="current == 5" type="primary" @click="dialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'mail',
  data() {
    return {
      inpContent: '11',
      dialogVisible: false,
      infotext: '你是否依然愿意是那个简单、快乐、随意的小师妹？',
      current: 1
    }
  },
  methods: {
    opendialog() {
      this.dialogVisible = true
      this.current = 1
    },
    nowilling() {
      if (this.current === 1) {
        this.infotext = '真的不愿意？'
        this.setValue(0)
      } else if (this.current === 2) {
        this.infotext = '不再考虑一下么？'
        this.setValue(0)
      } else if (this.current === 3) {
        this.infotext = '！！！！！'
        this.setValue(0)
      } if (this.current === 4) {
        this.infotext = '好吧，开个玩笑，我会尊重你的决定'
        this.setValue(0)
      }
    },
    setValue(flag) {
      this.$http.post('/api/setValueByMongodb', {
        flag: flag, current: this.current, time: new Date().toLocaleDateString() + new Date().toLocaleTimeString()
      }).then( (res) => {
        if (flag === 0) {
          this.current++
        }
        console.log('res', res);
      })
    },
  }
}
</script>

<style scoped>
.peipei{
  width: 100%;
  /* height: 100%; */
  background: url('../../assets/bg.png') no-repeat;
  background-size: 100% 100%;
  max-width: 720px;
  margin: 0 auto;
  text-align: left;
  font-family: "myfont";
  line-height: 20px;
  font-size: 14px;
}
.content {
  padding: 100px 40px;
  /* height: 100%; */
  box-sizing: border-box;
}
.content p {
  text-indent: 2rem;
}
.touch {
  width: 20px;
  height: 20px;
  cursor: pointer;
  color: #f57406;
  animation: changes 1s 0.2s linear infinite alternate;
}
@keyframes changes {
  from {
    font-size: 20px;
    text-shadow: 5px 5px 5px white;
  }
  to {

  }
}
</style>
