<template>
  <form class="card card-w30" ref="form">
      <div class="form-control">
        <label for="type">Тип блока</label>
        <select id="type" v-model="type">
          <option value="title">Заголовок</option>
          <option value="subtitle">Подзаголовок</option>
          <option value="avatar">Аватар</option>
          <option value="text">Текст</option>
        </select>
      </div>

      <div class="form-control">
        <label for="value">Значение</label>
        <textarea id="value" rows="3" v-model="value"></textarea>
      </div>

      <button
          class="btn primary"
          @click.prevent="$emit('addBlock', block); cleanForm();"
          :disabled="!isValid"
      >Добавить</button>
    </form>
</template>

<script>
export default {
  emits: ['addBlock'],
  computed: {
    block () {
      return {
        type: this.type,
        value: this.value
      }
    },
    isValid () {
      return this.value.length > 3 && this.type !== ''
    }
  },
  data () {
    return {
      type: '',
      value: '',
    }
  },
  methods: {
    cleanForm () {
      this.type = ''
      this.value = ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>