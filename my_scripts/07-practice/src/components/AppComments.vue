<template>
  <div class="container">
    <p>
      <button class="btn primary" @click="loadComments">Загрузить комментарии</button>
    </p>
    <div class="card">
      <h2>Комментарии</h2>
      <ul class="list" v-if="comments">
        <li class="list-item" v-for="comment in comments" :key="comment.id">
          <div>
            <p><strong>{{comment.email}}</strong></p>
            <small>{{comment.body}}</small>
          </div>
        </li>
      </ul>
    </div>
    <app-loader v-if="loading"></app-loader>
  </div>
</template>

<script>
import AppLoader  from "@/components/AppLoader.vue";
export default {
  data () {
    return {
      loading: false,
      comments: null
    }
  },
  methods: {
    async loadComments () {
      this.loading = true
      const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=42')

      this.comments = await response.json()
      this.loading = false
    }
  },
  components: {
    AppLoader
  }
}
</script>

<style lang="scss" scoped>

</style>