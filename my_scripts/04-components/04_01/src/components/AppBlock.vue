<template>
  <div class="card">
    <h3>Title</h3>
    <slot name="header"></slot>
    <slot>No text</slot>
    <slot v-if="$slots.footer" name="footer"></slot>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log(this.$slots) // просмотр переданных слотов
  }
}
</script>

<style lang="scss" scoped>

</style>
