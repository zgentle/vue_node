<template>
  <div class="peipei">
    <div class="content">
      <span>师妹：</span>
      <p>首先跟你说声抱歉，很抱歉因为我的表达给你所带来的困扰。原本我只是想表达下对你的欣赏与喜爱，不希望你会因此感受到压力，然后我们便慢慢彼此疏远了。</p>
      <p>然而一切始料未及，但我不会后悔去表达，我说出了我想说的话我觉得已经很圆满了。你知道我喜欢你就好，我知道你快乐就好。我所期待的感情是不慌不忙；是心之所向；是我喜欢你，刚刚好你也是；如果不是，顺其自然便好。</p>
      <p>我一直觉得沟通是解决问题最直接的办法，所以上次本想约你好好聊一聊，听一听你内心真实的想法，很多问题说开了便也不再是问题。可惜你拒绝了，所以我冷静了几天，一是不想你感受到压力，二是可以好好反思下自己。但我觉得还是有必要解释一下，不是所有故事都有美好结局，但至少不能残缺。</p>
      <p>我没有你想象的那么激进，也没有你想象的那么脆弱，所以不用刻意的保持距离，我依然是我，希望你仍旧是你。</p>
      <p>我依然会是一个乐观的人，会去好好努力，好好提升自己，努力成为一个更好的自己。</p>
      <p>当头发花白，步履蹒跚时还能唤你一声师妹多好。</p>
      <p>当波涛翻涌之后，一切仍会归于平静，我仍愿是那个你可以倾诉的师兄，你是否依然愿意做回那个简单、快乐、随意的师妹<span class="touch icon icon-pointclick" @click="opendialog"></span></p>
      <p>最后哈哈一笑让这所有的尴尬随云般飘走。</p>
      <p>能遇见你真好!</p>
      <p>能认识你真好!</p>
      <p style="text-align: right;">你的师兄</p>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      center
      width="80%">
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
  mounted() {
    this.setValue('打开')
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
