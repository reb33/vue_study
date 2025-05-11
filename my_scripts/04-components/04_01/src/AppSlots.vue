<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Slots</h2>
    </div>

    <app-list>
      <template #default="{idx, iter}">
        <span style="color: darkorange">
          <strong>{{idx + 1 }}</strong>
          Item: {{iter}}
        </span>
      </template>
    </app-list>

    <app-block>
      <p>Это текст, это текст!!!!!</p>

      <template #header>
        <h3>Это заголовок</h3>
      </template>

      <template v-slot:footer>
        <hr/>
        <small>Это footer</small>
      </template>
    </app-block>
  </div>
</template>

<script>
import AppBlock from '@/components/AppBlock.vue'
import AppList from '@/components/AppList.vue'
export default {

  components: {
    AppBlock,
    AppList
  }
}
</script>

<style lang="scss" scoped>
</style>
