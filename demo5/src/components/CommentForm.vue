<template>
  <form>
    <h3>留言</h3>
    <input type="text" v-model="name" placeholder="请输入姓名">
    <textarea name="comment" v-model="comment" id="comment" cols="30" rows="10" placeholder="请输入留言内容..."></textarea>
    <button @click.prevent="handleSubmit" id="submit">Submit</button>
    <span v-show="showTip" id="tip">留言成功！</span>
  </form>
</template>

<script>
export default {
  name: 'CommentForm',
  data () {
    return {
      name: '',
      comment: '',
      showTip: false
    }
  },
  methods: {
    handleSubmit () {
      let name = this.name
      let comment = this.comment
      if (!name.length || !comment.length) {
        alert('请填写信息')
        return
      }
      this.showTip = true
      let _this = this
      this.$store.commit('addComment', {name, comment})
      var timer = setTimeout(function () {
        _this.showTip = false
        clearTimeout(timer)
        timer = null
        _this.$router.push('/comments')
      }, 1000)
    }
  }
}
</script>

<style scoped>
input{
  width: 500px;
  height: 50px;
  display: block;
  margin: 10px auto;
  outline: none;
  border-radius: 10px;
  border: 1px solid #eee;
  box-shadow: 1px 1px 3px 1px #bbb;
  padding: 0 10px;
  box-sizing: border-box;
  letter-spacing: 1px;
}
textarea{
  width: 500px;
  height: 250px;
  display: block;
  margin: 10px auto;
  outline: none;
  border-radius: 10px;
  border: 1px solid #eee;
  box-shadow: 1px 1px 3px 1px #bbb;
  padding: 10px;
  box-sizing: border-box;
  letter-spacing: 1px;
  resize: none;
}
#submit{
  width: 500px;
  height: 50px;
  border: none;
  outline: none;
  background: #42b983;
  color: #fff;
  font-size: 18px;
  border-radius: 10px;
  position: relative;
  letter-spacing: 1px;
  padding-left: -1px;
  box-shadow: 1px 1px 3px 1px #bbb;
}
#submit:active{
  left: 1px;
  top: 1px;
  box-shadow: 1px 1px 3px 1px #999;
}
#tip{
  display: block;
  width: 100px;
  height: 40px;
  line-height: 40px;
  background: #fff;
  text-align: center;
  box-shadow: 1px 1px 3px 1px #aaa;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -20px;
}
</style>
