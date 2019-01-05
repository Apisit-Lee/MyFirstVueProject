<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>{{ loc }}</p>
    <button @click="handleClick">Add to Cart</button>
    <comment-form></comment-form>
  </div>
</template>

<script>
import CommentForm from './CommentForm'
export default {
  name: 'AboutUs',
  components: {CommentForm},
  data () {
    return {
      msg: 'About Us',
      loc: this.$store.state.another.loc
    }
  },
  methods: {
    handleClick () {
      this.$store.state.count++
      this.$router.push('/cart')
    }
  }
}
</script>
