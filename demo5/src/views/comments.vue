<template>
  <div>
    <h2>留言列表</h2>
    <p v-for="comment in comments" :key="comment.name">
      <span>{{comment.name}}:</span>
      <span>{{comment.comment}}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'comments',
  data () {
    return {
      comments: []
    }
  },
  mounted () {
    this.comments = this.$store.state.comments
  }
}
</script>
