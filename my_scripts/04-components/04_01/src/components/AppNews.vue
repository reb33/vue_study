<template>
  <div class="card">
      <h3>{{title}}</h3>
      <app-button @action="openNews">{{isOpen ? 'Закрыть' : 'Открыть'}}</app-button>
      <app-button color="danger" v-if="wasRead" @action="$emit('unread-news', id)">Отметить непрочитанной</app-button>
      <div v-if="isOpen">
        <hr/>
        <p v-if="isOpen">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, distinctio harum perspiciatis quidem repellat voluptas.</p>
        <app-button v-if="!wasRead" color="primary" @action="readNews">Прочитано</app-button>

        <app-news-list></app-news-list>

      </div>
    </div>
</template>

<script>
import AppButton from './AppButton.vue'
import AppNewsList from './AppNewsList.vue'
export default {
  name: 'AppNews',
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    wasRead: {
      type: Boolean,
      required: true
    }
  },
  emits: {
    'open-news': null,
    'read-news' (id) {
      if (id) {
        return true
      }
      console.warn('Нет параметра id для emit read-news')
    }
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    openNews () {
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        this.$emit('open-news')
      }
    },
    readNews () {
      if (!this.isRead) {
        this.isOpen = false
        this.$emit('read-news', this.id)
      }
    }
  },
  components: {
    AppButton, // автоматически переведеться в app-button
    AppNewsList
  }
}
</script>
