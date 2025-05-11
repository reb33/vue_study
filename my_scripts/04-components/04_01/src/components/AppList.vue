<template>
  <div class="card">
    <ul>
      <li v-for="(item, i) in ['mon', 'tue', 'wed', 'thu', 'fri']" :key="item">
        <slot :iter="item" :idx="i"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

</style>
