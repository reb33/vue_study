<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{now}}</h2>
      <span>Открыто: <strong>{{ openRate }}</strong> | Прочитано: <strong>{{ readRate }}</strong></span>
    </div>

    <app-news
        v-for="item in news"
        :key="item.id"
        :title="item.title"
        :id="item.id"
        :was-read="item.wasRead"
        @open-news="openNews"
        @read-news=readNews
        @unread-news="unreadNews"
    ></app-news>

  </div>
</template>

<script>
import AppNews from '@/components/AppNews.vue'

export default {
  name: 'App',
  data () {
    return {
      now: new Date().toLocaleDateString(),
      openRate: 0,
      readRate: 0,
      news: [
        {
          title: 'Сегодня вербное воскресенье',
          id: 1,
          wasRead: false
        },
        {
          title: 'Vue 3 работает',
          id: 2,
          wasRead: false
        }
      ]
    }
  },
  provide () {
    return {
      title: 'Список новостей',
      news: this.news
    }
  },
  methods: {
    openNews (data, data2) {
      this.openRate++
    },
    readNews (id) {
      const idx = this.news.findIndex((item) => item.id === id)
      this.readRate++
      this.news[idx].wasRead = true
    },
    unreadNews (id) {
      this.news.find((item) => item.id === id).wasRead = false
      this.readRate--
    }
  },
  components: {
    'app-news': AppNews
  }
}
</script>

<style lang="scss" scoped>
  h2 {
    color: darkred;
  }
</style>
