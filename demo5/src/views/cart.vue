<template>
  <div>
    You have choosen {{ count }} products.
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      count: this.$store.state.count
    }
  }
}
</script>
