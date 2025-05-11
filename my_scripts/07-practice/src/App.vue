<template>
  <div class="container column">

    <app-form @add-block="addBlock"></app-form>

    <div class="card card-w70">
      <h3 v-if="blocks.length === 0">Добавьте первый блок, чтобы увидеть результат</h3>
      <app-block-list v-else :blocks="blocks"></app-block-list>
    </div>
  </div>

  <app-comments></app-comments>

</template>

<script>
import AppBlockList from '@/components/AppBlockList.vue'
import AppForm from '@/components/AppForm.vue'
import AppComments from "@/components/AppComments.vue";
export default {
  data () {
    return {
      blocks: []
    }
  },
  methods: {
    addBlock (block) {
      console.log(block)
      this.blocks.push(block)
    }
  },
  components: {
    AppBlockList, AppForm, AppComments
  }
}
</script>

<style>

</style>
